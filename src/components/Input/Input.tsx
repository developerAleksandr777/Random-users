import cls from './Input.module.scss';
import React from 'react';

interface IValues {
    name: string;
    email: string;
    pass: string;
    repPass: string;
    [key: string]: string; // Сигнатура индекса, позволяющая использовать любые строки для индексации
}

interface IProps {
    placeholder: string;
    type: string;
    name: string;
    func: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: IValues;
}

const Input: React.FC<IProps> = ({ values, placeholder, type, name, func }) => {
    console.log(values)
    return (
        <input
            style={{
                border: values.pass !== values.repPass ? '1px solid red' : ''
            }}
            onChange={func}
            value={values[name]}
            className={cls.input}
            name={name}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default Input;
