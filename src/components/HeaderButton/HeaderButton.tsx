import cls from './HeaderButton.module.scss'


type IType = "submit" | "reset" | "button" | undefined

interface IProps {
    text:string,
    type:IType,
    func?:()=>void,
}

const HeaderButton = ({func,text, type}:IProps) => {
    return (
        <button onClick={func} className={cls.button} type={type}>{text}</button>
    );
};

export default HeaderButton;
