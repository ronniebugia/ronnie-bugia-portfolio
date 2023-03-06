import amazon from './amazon_logo.png'
import publicisSapient from './publicis_sapient_logo.png';
import acoutera from './acoutera.png';
import grubgrab from './grubgrab.png';
import plotly from './plotly.png'


const images = {
  'Amazon': amazon,
  'Publicis Sapient': publicisSapient,
  'Acoutera': acoutera,
  'Grubgrab': grubgrab,
  'Plotly':plotly,
};

function getImageByKey(key) {
  return images[key]
}

export default getImageByKey;