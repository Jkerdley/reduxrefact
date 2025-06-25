import { useEffect } from "react";
import { ThunkAction } from "redux-thunk";
import { useAppDispatch } from "src/store/store";
import { AppActionTypes, RootState } from "src/store/types/actionTypes";

type ThunkActionType = () => ThunkAction<void, RootState, void, AppActionTypes>

export const useFetchData = (
  actions: ThunkActionType | ThunkActionType[]
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(Array.isArray(actions)) {
      actions.forEach(action => dispatch(action()))
    } else {dispatch(actions())}
  }, [dispatch]);
};
