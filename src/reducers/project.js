import { handleAction, createActions } from "redux-actions";

export const actions = createActions({
  "PROJECT": {
    "GET": async () => {
      const fProjects = fetch("/api/v1/thank/admin/project").then(res => res.json());
      const projects = await fProjects;
      return projects;
    }
  }
});

export const projectReducer = handleAction(
  actions.project.get,
  (state, { type, payload }) => payload,
  []
);