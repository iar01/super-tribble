import React, { Component } from "react";

export default class Mixed_Widget_16 extends Component {
  render() {
    return (
      <>
        <div className="card card-custom gutter-b">
          {/*begin::Header*/}
          <div className="card-header border-0 pt-5">
            <div className="card-title">
              <div className="card-label">
                <div className="font-weight-bolder">Weekly Stats</div>
                <div className="font-size-sm text-muted mt-2">
                  890,344
                </div>
              </div>
            </div>
            <div className="card-toolbar">
              <div className="dropdown dropdown-inline">
                <a
                  href="#"
                  className="btn btn-clean btn-sm btn-icon"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ki ki-bold-more-hor" />
                </a>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                  {/*begin::Navigation*/}
                  <ul className="navi navi-hover">
                    <li className="navi-header font-weight-bold py-4">
                      <span className="font-size-lg">Choose Label:</span>
                      <i
                        className="flaticon2-information icon-md text-muted"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Click to learn more..."
                      />
                    </li>
                    <li className="navi-separator mb-3 opacity-70" />
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-success">
                            Customer
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-danger">
                            Partner
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-warning">
                            Suplier
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-primary">
                            Member
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-text">
                          <span className="label label-xl label-inline label-light-dark">
                            Staff
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-separator mt-3 opacity-70" />
                    <li className="navi-footer py-4">
                      <a
                        className="btn btn-clean font-weight-bold btn-sm"
                        href="#"
                      >
                        <i className="ki ki-plus icon-sm" />
                        Add new
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
          <div className="card-body d-flex flex-column">
            {/*begin::Chart*/}
            <div className="flex-grow-1">
              <div id="kt_mixed_widget_16_chart" style={{ height: "200px" }} />
            </div>
            {/*end::Chart*/}
            {/*begin::Items*/}
            <div className="mt-10 mb-5">
              <div className="row row-paddingless mb-10">
                {/*begin::Item*/}
                <div className="col">
                  <div className="d-flex align-items-center mr-2">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-45 symbol-light-info mr-4 flex-shrink-0">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-lg svg-icon-info">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Cart3.svg*/}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"
                              />
                              <path
                                d="M3.5,9 L20.5,9 C21.0522847,9 21.5,9.44771525 21.5,10 C21.5,10.132026 21.4738562,10.2627452 21.4230769,10.3846154 L17.7692308,19.1538462 C17.3034221,20.271787 16.2111026,21 15,21 L9,21 C7.78889745,21 6.6965779,20.271787 6.23076923,19.1538462 L2.57692308,10.3846154 C2.36450587,9.87481408 2.60558331,9.28934029 3.11538462,9.07692308 C3.23725479,9.02614384 3.36797398,9 3.5,9 Z M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z"
                                fill="#000000"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Title*/}
                    <div>
                      <div className="font-size-h4 text-dark-75 font-weight-bolder">
                        $2,034
                      </div>
                      <div className="font-size-sm text-muted font-weight-bold mt-1">
                        Author Sales
                      </div>
                    </div>
                    {/*end::Title*/}
                  </div>
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="col">
                  <div className="d-flex align-items-center mr-2">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-45 symbol-light-danger mr-4 flex-shrink-0">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-lg svg-icon-danger">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg*/}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                fill="#000000"
                              />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                                x="16.3255682"
                                y="2.94551858"
                                width={3}
                                height={18}
                                rx={1}
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Title*/}
                    <div>
                      <div className="font-size-h4 text-dark-75 font-weight-bolder">
                        $706
                      </div>
                      <div className="font-size-sm text-muted font-weight-bold mt-1">
                        Commission
                      </div>
                    </div>
                    {/*end::Title*/}
                  </div>
                </div>
                {/*end::Item*/}
              </div>
              <div className="row row-paddingless">
                {/*begin::Item*/}
                <div className="col">
                  <div className="d-flex align-items-center mr-2">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-45 symbol-light-success mr-4 flex-shrink-0">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-lg svg-icon-success">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Cart3.svg*/}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"
                              />
                              <path
                                d="M3.5,9 L20.5,9 C21.0522847,9 21.5,9.44771525 21.5,10 C21.5,10.132026 21.4738562,10.2627452 21.4230769,10.3846154 L17.7692308,19.1538462 C17.3034221,20.271787 16.2111026,21 15,21 L9,21 C7.78889745,21 6.6965779,20.271787 6.23076923,19.1538462 L2.57692308,10.3846154 C2.36450587,9.87481408 2.60558331,9.28934029 3.11538462,9.07692308 C3.23725479,9.02614384 3.36797398,9 3.5,9 Z M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z"
                                fill="#000000"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Title*/}
                    <div>
                      <div className="font-size-h4 text-dark-75 font-weight-bolder">
                        $49
                      </div>
                      <div className="font-size-sm text-muted font-weight-bold mt-1">
                        Average Bid
                      </div>
                    </div>
                    {/*end::Title*/}
                  </div>
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="col">
                  <div className="d-flex align-items-center mr-2">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-45 symbol-light-primary mr-4 flex-shrink-0">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-lg svg-icon-primary">
                          {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Barcode-read.svg*/}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <rect
                                fill="#000000"
                                opacity="0.3"
                                x={4}
                                y={4}
                                width={8}
                                height={16}
                              />
                              <path
                                d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z"
                                fill="#000000"
                                fillRule="nonzero"
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Title*/}
                    <div>
                      <div className="font-size-h4 text-dark-75 font-weight-bolder">
                        $5.8M
                      </div>
                      <div className="font-size-sm text-muted font-weight-bold mt-1">
                        All Time Sales
                      </div>
                    </div>
                    {/*end::Title*/}
                  </div>
                </div>
                {/*end::Item*/}
              </div>
            </div>
            {/*end::Items*/}
          </div>
          {/*end::Body*/}
        </div>
      </>
    );
  }
}
