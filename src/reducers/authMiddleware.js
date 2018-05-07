const authChecker = store => next => action => {
  if (action.error && action.payload.status === 401) {
    console.log('dispatching', action.payload.status);
    window.location = "/admin/auth"
  }
  return next(action);
};

export default authChecker;