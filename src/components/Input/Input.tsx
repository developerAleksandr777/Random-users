import cls from './Input.module.scss';
import React from 'react';
import {useAppSelector} from "../../hooks/redux-hooks";

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

const Input: React.FC<IProps> = ({ values, placeholder, type, name, func }) => {
    const {regErr} = useAppSelector(state => state.auth)
    const isError = values.pass !== values.repPass;

    return (
        <input
            style={{
                border: isError || regErr ? '1px solid red' : ''
            }}
            onChange={func}
            value={values[name] || ''}
            className={cls.input}
            name={name}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default Input;
