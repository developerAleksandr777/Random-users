import cls from './Login.module.scss'
import {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";
import {LOGIN_ASYNC} from "../../redux/actions/actions";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import Loader from "../../components/Loader/Loader";

interface IValues {
    email: string;
    pass: string;
    name?: string;
    repPass?: string;

    [key: string]: string | undefined;
}


const Login = () => {
    const {logErr,loader} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const [values, setValues] = useState<IValues>({
        email: '',
        pass: '',
    })

    const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    const handleLog = () => {
        dispatch(LOGIN_ASYNC({
            email: values.email,
            password: values.pass
        }))
    }


    return (
        <div className={cls.login}>
            {loader && <Loader/>}
            <div className="container">
                <div className={cls.login__wrap}>
                    <div className={cls.box}>
                        <h2>Login</h2>
                        <span className={cls.error}>{logErr}</span>

                        <div className={cls.wrap__inputs}>
                            <div className={cls.render__inputs}>
                                <p>Email</p>
                                <input value={values.email} onChange={handleValue} name='email'
                                       placeholder='example@mail.ru' type='text'/>
                            </div>
                            <div className={cls.render__inputs}>
                                <p>Password</p>
                                <input value={values.pass} onChange={handleValue} name='pass'
                                       placeholder='Enter your password' type='password'/>
                            </div>
                        </div>
                        <button onClick={handleLog}>Log in</button>
                        <Link className={cls.linkLogin} to={'/register'}>No account yet?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
