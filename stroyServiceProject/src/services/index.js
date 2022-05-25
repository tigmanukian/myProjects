import axios from "axios";

async function getContactInfo() {
  const baseUrl = process.env.PUBLIC_URL;
  var result = await axios.get(`${baseUrl}/configuration/main.json`);

  return result.data;
}

async function getHomeConfiguration() {
  const baseUrl = process.env.PUBLIC_URL;
  var result = await axios.get(`${baseUrl}/configuration/home.json`);

  return result.data;
}

async function getHtmlContent(folder, file) {
  const baseUrl = process.env.PUBLIC_URL;
  var result = await axios.get(`${baseUrl}/content/${folder}/${file}.html`);

  return result.data;
}

export { getContactInfo, getHomeConfiguration, getHtmlContent };
