import cls from './Loader.module.scss'
const Loader = () => {
    return (
        <div className={cls.loader__wrap}>
            <span className={cls.loader}></span>
        </div>
    );
};

export default Loader;
