export async function getData(url) {
  let dataToWork = [];

  await axios
    .get(url)
    .then((response) => {
      dataToWork = response.data.events;
    })
    .catch((err) => {
      console.log("Error:" + err.message);
    });
  return dataToWork;
}

export function showAndHidden() {
  let links = document.getElementById("links");
  links.classList.toggle("show");
}

//HEADER STICKY

export function changeHeader() {
  let header = document.getElementById("header");
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
export function parseDate(date) {
  const [year, month, day] = date.split("-");
  return new Date(year, month - 1, day);
}
export function renderData(dataToWork) {
  // AQUI EXTRAEREMOS LOS ELEMENTOS HTML NECESARIOS PARA TRABAJAR
  const divCards = document.getElementById("cards");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const searchInput = document.getElementById("input").value;
  const select = document.getElementById("select").value;
  /*
  
    LUEGO DE EXTRER, VAMOS A VERIFICAR CON UN FILTER SI CADA CHECKBOX
    ESTA CHECKEADO, SI ES ASI, TOMAMOS SU VALOR

  */
  const selectedCategories = Array.from(checkboxes)
    .filter((ch) => ch.checked)
    .map((checks) => checks.value);

  // AQUI CLONAMOS EL ARRAY DE OBJETOS AUNQUE TAMBIEN PODRIAMOS USAR [...dataToWork];
  let filteredData = dataToWork;

  /*

    SI AL FILTRAR Y MAPEAR NUESTROS CHECKBOXES TENEMOS DATOS
    ENTONCES LO USAREMOS PARA FILTRAR LOS EVENTOS SEGUN SU CATEGORIA

  */
  if (selectedCategories.length > 0) {
    filteredData = dataToWork.filter((element) =>
      selectedCategories.includes(element.category)
    );
  }

  /*
    
    DE LOS RESULTADOS FILTRADOS, AHORA VAMOS A FILTRAR 
    SEGUN EL VALOR DEL INPUT

  */
  if (select) {
    filteredData = filteredData.filter(
      (element) => element.category === select
    );
  } else {
    filteredData = dataToWork;
  }

  if (searchInput) {
    filteredData = filteredData.filter((element) =>
      element.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  if (filteredData.length > 0) {
    // SI NUESTROS FILTERED DATA AUN HAY DATOS, ENTONCES LO RENDERIZAREMOS USANDO UN MAP
    divCards.innerHTML = "";
    filteredData.forEach((element) => {
      const id = element._id;
      const params = new URLSearchParams();
      params.append("id", id);

      divCards.innerHTML += `<div class="card">
        <div class="img-card">
            <img src=${element.image} >
        </div>
        <div class="card-summary-content">
          <div class="card-summary">
            <div class="card-title"><h2>${element.name}</h2></div>
            <div class="card-description"><p>${element.description}</p></div>
            <div class="link-to-detail"><a href="./html/detail.html?${params.toString()}">Detalles</a></div>
          </div>
        </div>
  
      </div>`;
    });
  } else {
    // DE LO CONTRARIO LANZAREMOS ESTE ELEMENTO HTML
    divCards.innerHTML = `<h1>No hay nada wey</h1>`;
  }
}
export function filterDate(array, pastTime) {
  let newDataToWork = [];
  array.forEach((elem) => {
    let elemmDate = parseDate(elem.date);
    let thisDate = new Date();
    if (pastTime) {
      if (elemmDate < thisDate) {
        newDataToWork.push(elem);
      }
    } else {
      if (elemmDate > thisDate) {
        newDataToWork.push(elem);
      }
    }
  });
  return newDataToWork;
}
