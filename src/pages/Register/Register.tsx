import cls from './Register.module.scss'
import {INPUTS} from "../../constants";
import Input from "../../components/Input/Input";
import {useState, ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {REGISTER_ASYNC} from "../../redux/actions/actions";
import {Link} from "react-router-dom";
import Loader from "../../components/Loader/Loader";

interface IValues {
    name: string;
    email: string;
    pass: string;
    repPass: string;

    [key: string]: string;
}

const Register = () => {

    const {regErr,loader} = useAppSelector(state => state.auth)

    const dispatch = useAppDispatch()

    const [values, setValues] = useState<IValues>({
        name: '',
        email: '',
        pass: '',
        repPass: ''
    })

    const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    const handleReg = () => {
        dispatch(REGISTER_ASYNC({
            email: values.email,
            password: values.pass
        }))
    }

    const render = INPUTS.map(el => (
        <div key={el.inputName} className={cls.render__inputs}>
            <p>{el.name}</p>
            <Input values={values} func={handleValue} name={el.inputName} placeholder={el.placeholder} type={el.type}/>
        </div>
    ));

    return (
        <div className={cls.register}>
            {loader && <Loader/>}
            <div className="container">
                <div className={cls.registerWrap}>
                    <div className={cls.box}>
                        <h2>Registration</h2>
                        <span className={cls.error}>{regErr}</span>
                        <div className={cls.wrap__inputs}>
                            {render}
                        </div>
                        <button onClick={handleReg} disabled={values.pass !== values.repPass}>Register</button>
                        <Link className={cls.linkLogin} to={'/login'}>Already have account?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
