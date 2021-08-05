import React from "react";
// import facebook from '../media/SocialMedia/facebook.svg'
// import twitter from '../media/SocialMedia/twitter.svg'
// import instagram from '../media/SocialMedia/instagram.svg'
// import linkedin from '../media/SocialMedia/linkedin.svg'

export function Footer() {
    const today = new Date().getFullYear()
    return (
        <div>
            {/*begin::Footer*/}
            <div className="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
                {/*begin::Container*/}
                <div
                    className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                    {/*begin::Copyright*/}
                    <div className="text-dark order-2 order-md-1">
                      <span className="text-muted font-weight-bold mr-2">
                        {today}©
                      </span>
                        <a
                            href="#"
                            target="_blank"
                            className="text-dark-75 text-hover-primary"
                        >
                            A Website by AR
                        </a>
                    </div>
                    {/*end::Copyright*/}
                    {/*begin::Nav*/}
                    <div className="nav nav-dark">
                        <a
                            href="#"
                            target="_blank"
                            className="nav-link pl-0 pr-5"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="nav-link pl-0 pr-5"
                        >
                            Team
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="nav-link pl-0 pr-0"
                        >
                            Contact
                        </a>
                    </div>
                    {/*end::Nav*/}
                </div>
                {/*end::Container*/}
            </div>
            {/*end::Footer*/}
        </div>
    )
}
