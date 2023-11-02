import filterDate from "./FilterDate";
function orderPerc(array) {
  return array.sort((a, b) => a.porcentaje - b.porcentaje);
}
function capOrder(array) {
  return array.sort((a, b) => b.capacidad - a.capacidad);
}

function percAndCap(array) {
  let arrayAsistant = [];
  array.forEach((element) => {
    let objetToArray = new Object();
    objetToArray.porcentaje = element.assistance
      ? (element.assistance * 100) / element.capacity
      : (element.estimate * 100) / element.capacity;
    objetToArray.nombre = element.name;
    objetToArray.capacidad = element.capacity;
    arrayAsistant.push(objetToArray);
  });
  return orderPerc(arrayAsistant);
}

function filterCategories(array) {
  return [...new Set(array.map((a) => a.category))];
}

function calcRevenueUpcoming(array, category) {
  let upcomings = filterDate(array, false);
  let initialValue = 0;

  const revenue = upcomings
    .filter((el) => el.category === category)
    .reduce((acc, current) => {
      let salida = current.price * current.estimate;
      return acc + salida;
    }, initialValue);

  return revenue;
}

function calcRevenuePast(array, category) {
  let past = filterDate(array, true);
  let initialValue = 0;

  const revenue = past
    .filter((el) => el.category === category)
    .reduce((acc, current) => {
      let salida = current.assistance
        ? current.price * current.assistance
        : current.price * current.estimate;
      return acc + salida;
    }, initialValue);

  return revenue;
}

function assistPerCategoriesUpcoming(array, category) {
  let evUpcomings = filterDate(array, false);
  let initialValue = 0;

  const assist = evUpcomings
    .filter((el) => el.category === category)
    .reduce((acc, current) => acc + current.estimate, initialValue);

  const capac = evUpcomings
    .filter((el) => el.category === category)
    .reduce((acc, current) => acc + current.capacity, initialValue);

  return (assist * 100) / capac;
}

function assistPerCategoriesPast(array, category) {
  let evPast = filterDate(array, true);
  let initialValue = 0;

  const assist = evPast
    .filter((el) => el.category === category)
    .reduce(
      (acc, current) =>
        acc + current.estimate ? current.estimate : current.assistance,
      initialValue
    );

  const capac = evPast
    .filter((el) => el.category === category)
    .reduce((acc, current) => acc + current.capacity, initialValue);

  return (assist * 100) / capac;
}

function dataToTables(array) {
  //PRIMERA TABLA
  let arrayPerc = percAndCap(array);
  let arrayCap = capOrder(array);

  // TERCERA TABLA

  let objectsUpcoming = [];
  let objectsPast = [];
  let categories = filterCategories(array);

  categories.forEach((el) => {
    //CREACION DE OBJETOS PARA EL ARRAY
    let thisObjectUpcoming = new Object();
    let thisObjectPast = new Object();

    // CALCULOS
    let calcUp = calcRevenueUpcoming(array, el);
    let calcPast = calcRevenuePast(array, el);
    let attUp = assistPerCategoriesUpcoming(array, el);
    let attPast = assistPerCategoriesPast(array, el);

    // ASIGNACION DE PROPIEDADES

    thisObjectUpcoming.categoria = el;
    thisObjectUpcoming.ganancias = calcUp;
    thisObjectUpcoming.asistencia = !isNaN(attUp) ? attUp : 0;

    thisObjectPast.categoria = el;
    thisObjectPast.ganancias = calcPast;
    thisObjectPast.asistencia = !isNaN(attPast) ? attPast : 0;

    // AGREGAMOS AL ARRAY CORRESPONDIENTE

    objectsUpcoming.push(thisObjectUpcoming);
    objectsPast.push(thisObjectPast);
  });
  return { arrayCap, arrayPerc, objectsPast, objectsUpcoming };
}

export default dataToTables;
