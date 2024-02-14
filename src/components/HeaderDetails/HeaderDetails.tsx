import cls from './HeaderDetails.module.scss'
import HeaderButton from "../HeaderButton/HeaderButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {useNavigate} from "react-router-dom";
import {REMOVE_TOKEN_ACTION} from "../../redux/slicers/authSlicer";
import backIcon from '../../assets/icons/backICon.svg'

const HeaderDetails = () => {
    const {userDetails} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const backFunc = () => {
        navigate('/')
    }
    const handleLogout = () => {
        dispatch(REMOVE_TOKEN_ACTION())
        navigate('/register')
    }

    return (
        <header>
            <img onClick={backFunc} className={cls.image} src={backIcon} alt=""/>
            <button onClick={backFunc} className={cls.detailsHeaderButton}>Back</button>
            <HeaderButton func={handleLogout} text={'Logout'} type={'button'}/>
            <div className="container">
                <div className={cls.header__wrap}>
                    <h1 className={cls.fullNameHeaderMedia}>{'first_name' in userDetails && 'last_name' in userDetails ? `${userDetails.first_name} ${userDetails.last_name}` : 'not name'}</h1>
                    <p className={cls.partnerMedia} >Partner</p>
                    <img className={cls.avaHeader} src={'avatar' in userDetails ? userDetails.avatar : 'not avatar'} alt=""/>
                    <div className={cls.infoName}>
                        <h1 className={cls.fullNameHeader}>{'first_name' in userDetails && 'last_name' in userDetails ? `${userDetails.first_name} ${userDetails.last_name}` : 'not name'}</h1>
                        <p className={cls.partner}>Partner</p>
                        <img className={cls.avaHeaderMedia} src={'avatar' in userDetails ? userDetails.avatar : 'not avatar'} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDetails;
