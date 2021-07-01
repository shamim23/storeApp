import { ActionTypes } from "..constants/action-types.js";
export default setProducts = products => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};


export default selectProduct = product => {
    return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product
    };
  };
