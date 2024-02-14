import cls from './HeaderButton.module.scss'
import logoutIcon from '../../assets/icons/logoutIcon.svg'


type IType = "submit" | "reset" | "button" | undefined

interface IProps {
    text: string,
    type: IType,
    func?: () => void,
}

const HeaderButton = ({func, text, type}: IProps) => {
    return (
        <>
            <button onClick={func} className={cls.button} type={type}>{text}</button>
            <img onClick={func} className={cls.image} src={logoutIcon} alt=""/>
        </>
    );
};

export default HeaderButton;
