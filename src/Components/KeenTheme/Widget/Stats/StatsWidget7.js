import React, {Component} from "react";

export default class StatsWidget7 extends Component {
    render() {
        return (
            <>
                <div className="card card-custom gutter-b">
                    {/*begin::Body*/}
                    <div className="card-body d-flex flex-column p-0">
                        <div
                            className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
                            <div className="d-flex flex-column mr-2">
                                <a href="#"
                                   className="text-dark-75 text-hover-primary font-weight-bolder font-size-h5">Weekly
                                    Sales</a>
                                <span
                                    className="text-muted font-weight-bold mt-2">Your Weekly Sales Chart</span>
                            </div>
                            <span
                                className="symbol symbol-light-success symbol-45">
                                                                            <span
                                                                                className="symbol-label font-weight-bolder font-size-h6">+57</span>
                                                                        </span>
                        </div>
                        <div id="kt_stats_widget_7_chart"
                             className="card-rounded-bottom"
                             style={{height: '150px'}}/>
                    </div>
                    {/*end::Body*/}
                </div>
            </>
        );
    }
}