import axios from 'axios';

import { FETCH_PRODUCTS, CARD_VIEW } from "./types";

export const fetchProducts = () => {
  const request = axios.get('properties.json');
  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
};

export const cardView = (bool) => {
  return {
    type: CARD_VIEW,
    payload: {bool}
  };
};
