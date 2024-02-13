import cls from './UsersPage.module.scss'
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {GET_USERS_LIST} from "../../redux/actions/actions";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../types";



const UsersPage = () => {
    const {users} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(GET_USERS_LIST())
    },[dispatch])

    const renderUsers = users.map((user:IUser) => (
        <Card user={user} func={()=> navigate("/user-details/" + user.id)}/>
    ))
    return (
        <div id={cls.users}>
            <Header/>
            <div className="container">
                <div className={cls.users__wrap}>
                    <div className="row gy-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {renderUsers}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
