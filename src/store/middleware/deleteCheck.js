import { changeTitleAction, productActions } from "../actions/actions";

export const deleteCheck = (store) => (dispatch) => (action) => {
  let result;
  if (action.type === productActions.deleteProduct) {
    // confirm logic
    const dialogRes = window.confirm("Silmek istediğinizden emin misiniz?");
    if (dialogRes === true) {
      result = dispatch(action);

      const title = store.getState().general.title;

      dispatch(changeTitleAction("Ürün silindi"));
      setTimeout(() => {
        dispatch(changeTitleAction(title));
      }, 3000);
    }
    // else {
    // hiçbir şey
    // }
  } else {
    // normal akış devam etmeli
    result = dispatch(action);
  }

  return result;
};
