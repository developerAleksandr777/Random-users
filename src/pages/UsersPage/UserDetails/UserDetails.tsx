import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {GET_USER_DETAILS} from "../../../redux/actions/actions";
import cls from './UserDetails.module.scss'
import {CLEAR_DETAILS_ACTION} from "../../../redux/slicers/usersSlicer";
import HeaderDetails from "../../../components/HeaderDetails/HeaderDetails";
import phoneIcon from '../../../assets/icons/phoneIcon.svg'
import emailIcon from '../../../assets/icons/emailIcon.svg'

const UserDetails = () => {
    const {userDetails} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    const {id} = useParams()

    useEffect(() => {
        if (typeof id === 'string') {
            dispatch(GET_USER_DETAILS(id));
            return () => {
                dispatch(CLEAR_DETAILS_ACTION({}))
            }
        }
    }, [dispatch, id])

    return (
        <div>
            <HeaderDetails/>
            <div className="container">
                <div className={cls.details__wrap}>
                    <div className="row">
                        <div className="col-7">
                            <div className={cls.box}>
                                <p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых
                                    продуктов,
                                    включая такие аспекты, как организационная структура, процессы, аналитика и
                                    ИТ-компоненты. Он
                                    помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за
                                    счет
                                    применения новейших технологий и увеличивать продажи, используя самые современные
                                    аналитические
                                    инструменты.</p>
                                <br/>
                                <p>В работе с клиентами недостаточно просто решить конкретную проблему или помочь
                                    справиться с
                                    трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых
                                    позитивных моментов
                                    — это осознание того, что ты помог клиенту перейти на совершенно новый уровень
                                    компетентности,
                                    уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы
                                    дальше
                                    развиваться самостоятельно".</p>

                                <br/>
                                <p>
                                    Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
                                    предпринимательскую деятельность. Он является совладельцем сети клиник эстетической
                                    медицины в
                                    Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других
                                    бизнес-проектов.</p>
                            </div>

                        </div>
                        <div className="col-5">
                            <div className={cls.box}>
                                <div className={cls.box__wrap}>
                                    <img src={phoneIcon} alt=""/>
                                    <p>+7 (954) 333-44-55</p>
                                </div>

                                <div className={cls.box__wrap}>
                                    <img src={emailIcon} alt=""/>
                                    <p>{'email' in userDetails ? userDetails.email : 'not email'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserDetails;
