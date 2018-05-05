import { combineReducers } from "redux";
import { handleAction, createActions } from "redux-actions";
import produce from "immer";

export const actions = createActions({
  "PROJECT": {
    "GET": async () => {
      const fProjects = fetch("/api/v1/thank/admin/project").then(res => res.json());
      const projects = await fProjects;
      return projects;
    }
  }
});

export const byIdReducer = handleAction(
  actions.project.get,
  produce((draft, { type, payload, error }) => {
    if (error) {
      return
    }
    payload.forEach((usrPrj) => draft[usrPrj.user] = usrPrj)
  }),
  {}
);

export const allReducer = handleAction(
  actions.project.get,
  produce((draft, { type, payload, error }) => {
    if (error) {
      return;
    }
    payload.
      filter(usrPrj => draft.indexOf(usrPrj.user) === -1).
      forEach(({ user }) => draft.push(user));
  }),
  []
);

const hasProjects = (usrPrj) => usrPrj.installed.length || usrPrj.google.length || usrPrj.dibs.length || usrPrj.tumblr.length

export const withProjectReducer = handleAction(
  actions.project.get,
  produce((draft, { type, payload, error }) => {
    if (error) {
      return;
    }
    payload.
    filter(usrPrj => draft.indexOf(usrPrj.user) === -1 && hasProjects(usrPrj)).
    forEach(({ user }) => draft.push(user));
  }),
  []
);

export const projectReducer = combineReducers({
  byId: byIdReducer,
  all: allReducer,
  withProject: withProjectReducer
});