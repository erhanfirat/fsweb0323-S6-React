export const myLogger = (store) => (dispatch) => (action) => {
  console.log("[Middleware] Şimdiki state:", store.getState());
  console.log("[Middleware] Şu aksiyon dispatch edilecek:", action);
  const result = dispatch(action);
  console.log("[Middleware] Sonraki state:", store.getState());
  console.log("[Middleware] result: ", result);
  return result;
};
