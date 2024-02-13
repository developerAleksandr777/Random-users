import {Navigate, Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetails from "./pages/UsersPage/UserDetails/UserDetails";
import Layout from "./Layout/Layout";
import {useAppSelector} from "./hooks/redux-hooks";
import Register from "./pages/Register/Register";


const View = () => {

    const {auth} = useAppSelector(state => state.auth)

    return (
        <Routes>
            <Route path="/" element={auth ? <Layout/> : <Navigate to="/auth"/>}>
                <Route index element={<UsersPage/>}/>
                <Route path={'/user-details/:id'} element={<UserDetails/>}/>
            </Route>

            <Route
                path="/auth"
                element={auth ? <Navigate to="/"/> : <Register/>}
            />
        </Routes>
    );
};

export default View;
