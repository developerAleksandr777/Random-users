import {Navigate, Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetails from "./pages/UsersPage/UserDetails/UserDetails";
import Layout from "./Layout/Layout";
import {useAppSelector} from "./hooks/redux-hooks";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";


const View = () => {

    const {auth} = useAppSelector(state => state.auth)

    return (
        <Routes>
            <Route path="/" element={auth ? <Layout/> : <Navigate to="/register"/>}>
                <Route index element={<UsersPage/>}/>
                <Route path={'/user-details/:id'} element={<UserDetails/>}/>
            </Route>

            <Route
                path="/register"
                element={auth ? <Navigate to="/"/> : <Register/>}
            />
            <Route
                path="/login"
                element={auth ? <Navigate to="/"/> : <Login/>}
            />
        </Routes>
    );
};

export default View;
