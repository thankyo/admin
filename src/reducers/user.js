import { combineReducers } from "redux";
import { handleAction, createActions } from "redux-actions";
import produce from "immer";

export const actions = createActions({
  "USER": {
    "GET": async () => {
      const fUsers = fetch("/api/v1/user/admin/user").then(res => res.json());
      const users = await fUsers;
      return users;
    }
  }
});

export const byIdReducer = handleAction(
  actions.user.get,
  produce((draft, { type, payload, error }) => {
    if (error) {
      return
    }
    payload.forEach((usr) => draft[usr.id] = usr)
  }),
  {}
);

export const allReducer = handleAction(
  actions.user.get,
  produce((draft, { type, payload, error }) => {
    if (error) {
      return;
    }
    payload.filter(usrPrj => draft.indexOf(usrPrj.id) === -1).forEach(({ id }) => draft.push(id));
  }),
  []
);

export const userReducer = combineReducers({
  byId: byIdReducer,
  all: allReducer
});