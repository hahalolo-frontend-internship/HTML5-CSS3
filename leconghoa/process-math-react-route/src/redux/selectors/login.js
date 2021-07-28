import { createSelector } from "reselect";
import { initialState } from "../reducers/login";

/**
 * Direct selector to the app state domain
 */

const selectLoginDomain = (state) => state.user || initialState;

const makeSelectLogin = () =>
  createSelector(selectLoginDomain, (substate) => substate.user);

const makeSelectStatusLoginFlags = () =>
  createSelector(selectLoginDomain, (substate) => substate.statusLoginFlags);

const makeSelectError = () =>
  createSelector(selectLoginDomain, (substate) => substate.log);

export { makeSelectLogin, makeSelectStatusLoginFlags, makeSelectError };
