import cls from './Input.module.scss';
import React, {useState} from 'react';
import {useAppSelector} from "../../hooks/redux-hooks";
import eyeIcon from '../../assets/icons/eyeIcon.svg'

interface IValues {
    email: string;
    pass: string;
    name?: string;
    repPass?: string;

    [key: string]: string | undefined;
}

interface IProps {
    placeholder: string;
    type: string;
    name: string;
    func: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: IValues;
}

const Input: React.FC<IProps> = ({values, placeholder, type, name, func}) => {
    const {regErr} = useAppSelector(state => state.auth)
    const isError = values.pass !== values.repPass;

    const [show, setShow] = useState(false)

    return (
        <div style={
            name === 'pass' || name === 'repPass'
                ? {
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                }
                : {}
        }>
            <input
                style={{
                    border: isError || regErr ? '1px solid red' : '',
                }}
                onChange={func}
                value={values[name] || ''}
                className={cls.input}
                name={name}
                placeholder={placeholder}
                type={
                    (name === 'pass' || name === 'repPass') && show
                        ? 'text'
                        : type
                }
            />
            <img
                onClick={
                    name === 'pass' || name === 'repPass'
                        ? () => setShow(prev=>!prev)
                        : undefined
                }
                style={
                    name === 'pass' || name === 'repPass'
                        ? {
                            display: 'block',
                            position: 'absolute',
                            left: '90%'
                        }
                        : {
                            display: 'none'
                        }
                }
                src={eyeIcon}
                alt=""/>
        </div>

    );
};

export default Input;
