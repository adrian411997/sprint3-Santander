import axios from "axios";

const getData = async (url, setData) => {
  try {
    const response = await axios.get(url);
    setData(response.data.events);
  } catch (error) {
    setData([]);
  }
};

export default getData;
