const processResponse = (res) => {
  if (res.ok) {
    return Promise.resolve(res.json());
  } else {
    return Promise.reject({
      status: res.status,
      message: res.text
    });
  }
};

const api = {
  auth: (token) => fetch("/api/v1/auth/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }), credentials: "same-origin"}).then(processResponse),
  getProjects: () => fetch("/api/v1/thank/admin/project", { credentials: "same-origin" }).then(processResponse),
  getUsers: () => fetch("/api/v1/user/admin/user", { credentials: "same-origin" }).then(processResponse),
};

export default api;