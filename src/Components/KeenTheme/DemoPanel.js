import React, {Component} from "react";

export default class DemoPanel extends Component {
    render() {
        return (
            <>
                <div id="kt_demo_panel" className="offcanvas offcanvas-right p-10">
                    {/*begin::Header*/}
                    <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7">
                        <h4 className="font-weight-bold m-0">Select A Demo</h4>
                        <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary"
                           id="kt_demo_panel_close">
                            <i className="ki ki-close icon-xs text-muted"/>
                        </a>
                    </div>
                    {/*end::Header*/}
                    {/*begin::Content*/}
                    <div className="offcanvas-content">
                        {/*begin::Wrapper*/}
                        <div className="offcanvas-wrapper mb-5 scroll-pull">
                            <h5 className="font-weight-bold mb-4 text-center">Demo 1</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo offcanvas-demo-active">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo1.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo1/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo1/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 2</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo2.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo2/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo2/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 3</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo3.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo3/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo3/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 4</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo4.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo4/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo4/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 5</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo5.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo5/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo5/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 6</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo6.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo6/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo6/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 7</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo7.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo7/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo7/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 8</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo8.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo8/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo8/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 9</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo9.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo9/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo9/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 10</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo10.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo10/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo10/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 11</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo11.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo11/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo11/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 12</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo12.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo12/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo12/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 13</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo13.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="../../../../../../demo13/dist"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">Default</a>
                                    <a href="https://preview.keenthemes.com/metronic/demo13/rtl/index.html"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                                       target="_blank">RTL Version</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 14</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo14.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 15</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo15.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 16</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo16.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 17</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo17.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 18</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo18.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 19</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo19.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 20</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo20.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 21</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo21.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 22</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo22.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 23</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo23.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 24</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo24.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 25</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo25.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 26</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo26.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 27</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo27.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 28</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo28.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 29</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo29.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                            <h5 className="font-weight-bold mb-4 text-center">Demo 30</h5>
                            <div className="overlay rounded-lg mb-8 offcanvas-demo">
                                <div className="overlay-wrapper rounded-lg">
                                    <img src="assets/media/demos/demo30.png" alt="" className="w-100"/>
                                </div>
                                <div className="overlay-layer">
                                    <a href="#"
                                       className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90">Coming
                                        soon</a>
                                </div>
                            </div>
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Purchase*/}
                        <div className="offcanvas-footer">
                            <a href="https://1.envato.market/EA4JP" target="_blank"
                               className="btn btn-block btn-danger btn-shadow font-weight-bolder text-uppercase">Buy
                                Metronic Now!</a>
                        </div>
                        {/*end::Purchase*/}
                    </div>
                    {/*end::Content*/}
                </div>

            </>
        );
    }
}