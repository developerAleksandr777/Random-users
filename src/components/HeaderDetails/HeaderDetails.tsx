import cls from './HeaderDetails.module.scss'
import HeaderButton from "../HeaderButton/HeaderButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {useNavigate} from "react-router-dom";
import {REMOVE_TOKEN_ACTION} from "../../redux/slicers/authSlicer";
const HeaderDetails = () => {
    const {userDetails} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const backFunc = () => {
        navigate('/')
    }
    const handleLogout = () => {
        dispatch(REMOVE_TOKEN_ACTION(''))
        navigate('/auth')
    }

    return (
        <header>
            <button onClick={backFunc} className={cls.detailsHeaderButton}>Назад</button>
            <HeaderButton func={handleLogout} text={'Выход'} type={'button'}/>
            <div className="container">
                <div className={cls.header__wrap}>
                    <img className={cls.avaHeader} src={'avatar' in userDetails ? userDetails.avatar : 'not avatar'} alt=""/>
                    <div className={cls.infoName}>
                        <h1 className={cls.fullNameHeader}>{'first_name' in userDetails && 'last_name' in userDetails ? `${userDetails.first_name} ${userDetails.last_name}` : 'not name'}</h1>
                        <p>Partner</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDetails;
