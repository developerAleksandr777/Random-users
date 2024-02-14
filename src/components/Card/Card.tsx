import cls from './Card.module.scss';
import { IUser } from '../../types';
import likeIcon from '../../assets/icons/likeIcon.svg';
import unlikeIcon from '../../assets/icons/unlikeIcon.svg';
import { useState } from 'react';

interface IProps {
    user: IUser;
    func: (id: number) => void;
}

const Card = ({ user, func }: IProps) => {
    const [likeState, setLikeState] = useState(false);

    const { id, first_name, last_name, avatar } = user;

    const handleLike = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        setLikeState((prev) => !prev);
    };

    return (
        <div className="col">
            <div className={cls.box} onClick={() => func(id)}>
                <div className={cls.box__wrap}>
                    <img src={avatar} alt="" />
                    <h2>
                        {first_name} {last_name}
                    </h2>
                </div>
                <div onClick={handleLike} className={cls.like}>
                    <img src={likeState ? likeIcon : unlikeIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Card;
