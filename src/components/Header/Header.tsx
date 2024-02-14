import cls from './Header.module.scss'
import HeaderButton from "../HeaderButton/HeaderButton";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {useNavigate} from "react-router-dom";
import {REMOVE_TOKEN_ACTION} from "../../redux/slicers/authSlicer";

const Header = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(REMOVE_TOKEN_ACTION())
        navigate('/register')
    }
    return (
        <header>
            <HeaderButton func={handleLogout} text={'Logout'} type={'button'}/>
            <div className="container">
                <div className={cls.header__wrap}>
                    <h1>Our team</h1>
                    <h2>These are experienced specialists who are well versed in all the tasks that fall upon
                        <br/>
                        on their shoulders, and able to find a way out of any, even the most difficult situations.
                    </h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
