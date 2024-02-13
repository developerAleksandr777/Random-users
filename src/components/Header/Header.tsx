import cls from './Header.module.scss'
import HeaderButton from "../HeaderButton/HeaderButton";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {useNavigate} from "react-router-dom";
import {REMOVE_TOKEN_ACTION} from "../../redux/slicers/authSlicer";
const Header = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(REMOVE_TOKEN_ACTION(''))
        navigate('/auth')
    }
    return (
        <header>
            <HeaderButton func={handleLogout} text={'Выход'} type={'button'}/>
            <div className="container">
                <div className={cls.header__wrap}>
                    <h1>Наша команда</h1>
                    <h2>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся
                        <br/>
                        на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
                    </h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
