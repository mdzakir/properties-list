import _ from 'lodash';
import { FETCH_PRODUCTS, CARD_VIEW } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {

    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload.data.properties, 'id');

    case CARD_VIEW:
      return !action.payload;
    default:
      return state;
  }
}

