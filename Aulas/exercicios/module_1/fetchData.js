const axios = require("axios");

const fetchData = async (url) => {
  const data = await fetch(url, {
    method: "GET",
  });

  return data.json();
};

const axiosData = async (url) => {
  const result = await axios.get(url);

  if (!result.data) throw new Error("Data is null");

  return result.data;
};

module.exports = { fetchData, axiosData };
