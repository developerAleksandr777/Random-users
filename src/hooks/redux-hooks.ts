import {useDispatch,useSelector,TypedUseSelectorHook} from "react-redux";
import {RootState,AppDispatch} from "../redux/app/store";

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()