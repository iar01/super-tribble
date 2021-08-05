import React, {Component} from "react";
import userimg from '../../../../assets/media/svg/misc/008-infography.svg'
import boy1 from '../../../../assets/media/svg/avatars/001-boy.svg'
import girl15 from '../../../../assets/media/svg/avatars/028-girl-16.svg'
import girl005 from '../../../../assets/media/svg/avatars/005-girl-2.svg'
import boy2 from '../../../../assets/media/svg/avatars/007-boy-2.svg'

export default class Mixed_Widget_7 extends Component {
    render() {
        return (
            <>
                <div className="card card-custom gutter-b">
                    {/*begin::Body*/}
                    <div className="card-body">
                        <div
                            className="d-flex flex-wrap align-items-center py-1">
                            {/*begin:Pic*/}
                            <div
                                className="symbol symbol-80 symbol-light-danger mr-5">
                                                                            <span className="symbol-label">
                                                                                <img
                                                                                    src={userimg}
                                                                                    className="h-50 align-self-center"
                                                                                    alt=""/>
                                                                            </span>
                            </div>
                            {/*end:Pic*/}
                            {/*begin:Title*/}
                            <div
                                className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                                <a href="#"
                                   className="text-dark font-weight-bolder text-hover-primary font-size-h5">Monthly
                                    Subscription
                                    <br/>Based System</a>
                                <span
                                    className="text-muted font-weight-bold font-size-lg">Due: 1 Sept 2021</span>
                            </div>
                            {/*end:Title*/}
                            {/*begin:Stats*/}
                            <div className="d-flex flex-column w-100 mt-12">
                                                                            <span
                                                                                className="text-dark mr-2 font-size-lg font-weight-bolder pb-3">Progress</span>
                                <div className="progress progress-xs w-100">
                                    <div className="progress-bar bg-danger"
                                         role="progressbar"
                                         style={{width: '65%'}}
                                         aria-valuenow={50}
                                         aria-valuemin={0}
                                         aria-valuemax={100}/>
                                </div>
                            </div>
                            {/*end:Stats*/}
                            {/*begin:Team*/}
                            <div className="d-flex flex-column mt-10">
                                <div
                                    className="text-dark mr-2 font-size-lg font-weight-bolder pb-4">Team
                                </div>
                                <div className="d-flex">
                                    <a href="#"
                                       className="symbol symbol-50 symbol-light-danger mr-3">
                                        <div className="symbol-label">
                                            <img
                                                src={boy1}
                                                className="h-75 align-self-end"
                                                alt=""/>
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="symbol symbol-50 symbol-light-danger mr-3">
                                        <div className="symbol-label">
                                            <img
                                                src={boy2}
                                                className="h-75 align-self-end"
                                                alt=""/>
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="symbol symbol-50 symbol-light-danger mr-3">
                                        <div className="symbol-label">
                                            <img
                                                src={girl15}
                                                className="h-75 align-self-end"
                                                alt=""/>
                                        </div>
                                    </a>
                                    <a href="#"
                                       className="symbol symbol-50 symbol-light-danger">
                                        <div className="symbol-label">
                                            <img
                                                src={girl005}
                                                className="h-75 align-self-end"
                                                alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/*end:Team*/}
                        </div>
                    </div>
                    {/*end::Body*/}
                </div>
            </>
        );
    }
}