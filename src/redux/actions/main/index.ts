import * as types from './types';

const googlePlaceApikey = '***';
const options = {
  timeout: 10000,
};

/* Fetch Google */
export const fetchGoogle = () => {
  return (dispatch) => {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?language=pt-br&location=-25.4238294,-49.275898&radius=4000&query=cafe&pagetoken=&type=cafe&key=${googlePlaceApikey}`, options)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        dispatch({ type: types.GET_DATA, payload: { responseJson } });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};