import React, {Component, Fragment} from "react";
import Image_404 from '../assets/svg/illustrations/404.svg'

class Page_404 extends Component {
    render() {
        return (
            <Fragment>
                <main id="content" style={{marginTop: 150}}>
                    <div className="border-bottom border-color-8 mb-8">
                        <div className="container">
                            <div className="row mb-5 mb-md-7 mb-lg-0">
                                <div className="col-lg-5 col-xl-3dot5">
                                    <div className="space-lg-1 space-xl-3 mt-xl-2 mb-5 mb-md-7 mb-lg-0">
                                        <div
                                            className="font-weight-bold font-size-xs-160 font-size-lg-120 font-size-200 text-gray-3 text-md-center text-lg-left">404
                                        </div>
                                        <h6 className="font-size-21 font-weight-bold text-gray-3 mb-3 mt-n3 mt-xl-n5 text-center text-lg-left">Looks
                                            like you're lost</h6>
                                        <p className="text-gray-1 mb-3 mb-lg-5 pb-lg-1 text-center text-lg-left">We
                                            can’t seem to find the page you’re looking for</p>
                                        <a href="/"
                                           className="btn btn-primary rounded-xs transition-3d-hover font-weight-bold min-width-190 min-height-60 d-inline-flex flex-content-center">Back
                                            to Home</a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-xl-8dot5">
                                    <div className="space-lg-2 space-xl-3 mt-lg-5 mt-xl-7 mb-xl-4">
                                        <img className="js-svg-injector" src={Image_404}
                                             alt="Not found"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Page_404