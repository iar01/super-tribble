import React, {Component} from "react";

export default class Mixed_Widget_4 extends Component {
    render() {
        return (
            <>
                <div className="card card-custom bg-radial-gradient-danger gutter-b">
                    {/*begin::Header*/}
                    <div className="card-header border-0 py-5">
                        <h3 className="card-title font-weight-bolder text-white">Salesx
                            Progress</h3>
                        <div className="card-toolbar">
                            <div className="dropdown dropdown-inline">
                                <a href="#"
                                   className="btn btn-text-white btn-hover-white btn-sm btn-icon border-0"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    <i className="ki ki-bold-more-hor"/>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                    {/*begin::Navigation*/}
                                    <ul className="navi navi-hover">
                                        <li className="navi-header pb-1">
                                                                                        <span
                                                                                            className="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#"
                                               className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="flaticon2-shopping-cart-1"/>
                                                                                            </span>
                                                <span
                                                    className="navi-text">Order</span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#"
                                               className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="flaticon2-calendar-8"/>
                                                                                            </span>
                                                <span
                                                    className="navi-text">Event</span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#"
                                               className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="flaticon2-graph-1"/>
                                                                                            </span>
                                                <span
                                                    className="navi-text">Report</span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#"
                                               className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="flaticon2-rocket-1"/>
                                                                                            </span>
                                                <span
                                                    className="navi-text">Post</span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a href="#"
                                               className="navi-link">
                                                                                            <span className="navi-icon">
                                                                                                <i className="flaticon2-writing"/>
                                                                                            </span>
                                                <span
                                                    className="navi-text">File</span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end::Navigation*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Body*/}
                    <div className="card-body d-flex flex-column p-0">
                        {/*begin::Chart*/}
                        <div id="kt_mixed_widget_6_chart"
                             style={{height: '200px'}}/>
                        {/*end::Chart*/}
                        {/*begin::Stats*/}
                        <div
                            className="card-spacer bg-white card-rounded flex-grow-1">
                            {/*begin::Row*/}
                            <div className="row m-0">
                                <div className="col px-8 py-6 mr-8">
                                    <div
                                        className="font-size-sm text-muted font-weight-bold">Average
                                        Sale
                                    </div>
                                    <div
                                        className="font-size-h4 font-weight-bolder">$650
                                    </div>
                                </div>
                                <div className="col px-8 py-6">
                                    <div
                                        className="font-size-sm text-muted font-weight-bold">Commission
                                    </div>
                                    <div
                                        className="font-size-h4 font-weight-bolder">$233,600
                                    </div>
                                </div>
                            </div>
                            {/*end::Row*/}
                            {/*begin::Row*/}
                            <div className="row m-0">
                                <div className="col px-8 py-6 mr-8">
                                    <div
                                        className="font-size-sm text-muted font-weight-bold">Annual
                                        Taxes
                                    </div>
                                    <div
                                        className="font-size-h4 font-weight-bolder">$29,004
                                    </div>
                                </div>
                                <div className="col px-8 py-6">
                                    <div
                                        className="font-size-sm text-muted font-weight-bold">Annual
                                        Income
                                    </div>
                                    <div
                                        className="font-size-h4 font-weight-bolder">$1,480,00
                                    </div>
                                </div>
                            </div>
                            {/*end::Row*/}
                        </div>
                        {/*end::Stats*/}
                    </div>
                    {/*end::Body*/}
                </div>
            </>
        );
    }
}