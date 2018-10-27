import axios from 'axios';

import { FETCH_PROPERTIES, FETCH_PROPERTY_DETAILS } from "./types";

export const fetchProperties = () => {
  const request = axios.get('properties.json');
  return {
    type: FETCH_PROPERTIES,
    payload: request
  };
};

export function fetchPropertyDetails(id) {
  // console.log('ID', id);
  return {
    type: FETCH_PROPERTY_DETAILS,
    payload: id
  }
}
