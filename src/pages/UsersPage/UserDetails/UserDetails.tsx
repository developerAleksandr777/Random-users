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
                dispatch(CLEAR_DETAILS_ACTION())
            }
        }
    }, [dispatch, id])

    return (
        <div>
            <HeaderDetails/>
            <div className="container">
                <div className={cls.details__wrap}>
                    <div className="row gy-4 row-cols-lg-2 row-cols-1">
                        <div className="col">
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
                        <div className="col">
                            <div className={cls.box}>
                                <p>Clients see him as an expert in developing complex financial solutions
                                    products,
                                    including aspects such as organizational structure, processes, analytics and
                                    IT components. He
                                    helps clients better understand the risk structure of their business, improve
                                    processes for
                                    check
                                    application of the latest technologies and increase sales using the most modern
                                    analytical
                                    tools.</p>
                                <br/>
                                <p>When working with clients, it is not enough just to solve a specific problem or help
                                    cope with
                                    difficulties. It is equally important to pay attention to knowledge sharing: “One of
                                    the most
                                    positive points
                                    - this is the realization that you have helped the client move to a completely new
                                    level
                                    competence,
                                    confidence that after the completion of the project the client has everything
                                    necessary to
                                    further
                                    develop independently."</p>

                                <br/>
                                <p>
                                    In addition to various projects for clients in the financial sector, Sorin is active
                                    entrepreneurial activity. He is a co-owner of a network of aesthetic clinics
                                    medicine in
                                    Switzerland, which offers an innovative approach to beauty, and is also an investor
                                    in others
                                    business projects.</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserDetails;
