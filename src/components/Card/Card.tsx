import cls from './Card.module.scss'
import {IUser} from "../../types";

interface IProps {
    user:IUser,
    func: ()=>void
}

const Card = ({user,func}:IProps) => {
    const name = user.first_name
    const surname = user.last_name
    return (
        <div className='col'>
            <div className={cls.box} onDoubleClick={func}>
                <div className={cls.box__wrap}>
                    <img src={user.avatar} alt=""/>
                    <h2>{name} {surname}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
