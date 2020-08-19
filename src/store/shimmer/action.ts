import * as types from "../actionTypes";

export function HideShimmer(payload: boolean) {
  return {
    type: types.HIDE_SHIMMER,
    payload,
  };
}
