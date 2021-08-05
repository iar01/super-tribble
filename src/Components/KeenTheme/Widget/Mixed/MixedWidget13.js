import React, { Component } from "react";

export default class Mixed_Widget_13 extends Component {
  render() {
    return (
      <>
        <div className="card card-custom gutter-b">
          {/*begin::Beader*/}
          <div className="card-header border-0 py-5">
            <h3 className="card-title font-weight-bolder">More Stats Here</h3>
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
                  <ul className="navi navi-hover py-5">
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-icon">
                          <i className="flaticon2-drop" />
                        </span>
                        <span className="navi-text">New Group</span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-icon">
                          <i className="flaticon2-list-3" />
                        </span>
                        <span className="navi-text">Contacts</span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-icon">
                          <i className="flaticon2-rocket-1" />
                        </span>
                        <span className="navi-text">Groups</span>
                        <span className="navi-link-badge">
                          <span className="label label-light-primary label-inline font-weight-bold">
                            new
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-icon">
                          <i className="flaticon2-bell-2" />
                        </span>
                        <span className="navi-text">Calls</span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-icon">
                          <i className="flaticon2-gear" />
                        </span>
                        <span className="navi-text">Settings</span>
                      </a>
                    </li>
                    <li className="navi-separator my-3" />
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-icon">
                          <i className="flaticon2-magnifier-tool" />
                        </span>
                        <span className="navi-text">Help</span>
                      </a>
                    </li>
                    <li className="navi-item">
                      <a href="#" className="navi-link">
                        <span className="navi-icon">
                          <i className="flaticon2-bell-2" />
                        </span>
                        <span className="navi-text">Privacy</span>
                        <span className="navi-link-badge">
                          <span className="label label-light-danger label-rounded font-weight-bold">
                            5
                          </span>
                        </span>
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
          <div className="card-body p-0 d-flex flex-column">
            {/*begin::Stats*/}
            <div className="card-spacer pt-5 bg-white flex-grow-1">
              {/*begin::Row*/}
              <div className="row row-paddingless">
                <div className="col mr-8">
                  <div className="font-size-sm text-muted font-weight-bold">
                    Average Sale
                  </div>
                  <div className="font-size-h4 font-weight-bolder">$650</div>
                </div>
                <div className="col">
                  <div className="font-size-sm text-muted font-weight-bold">
                    Commission
                  </div>
                  <div className="font-size-h4 font-weight-bolder">
                    $233,600
                  </div>
                </div>
              </div>
              {/*end::Row*/}
              {/*begin::Row*/}
              <div className="row row-paddingless mt-8">
                <div className="col mr-8">
                  <div className="font-size-sm text-muted font-weight-bold">
                    Annual Taxes 2019
                  </div>
                  <div className="font-size-h4 font-weight-bolder">$29,004</div>
                </div>
                <div className="col">
                  <div className="font-size-sm text-muted font-weight-bold">
                    Annual Income
                  </div>
                  <div className="font-size-h4 font-weight-bolder">
                    $1,480,00
                  </div>
                </div>
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Stats*/}
            {/*begin::Chart*/}
            <div
              id="kt_mixed_widget_13_chart"
              className="card-rounded-bottom"
              style={{ height: "200px" }}
            />
            {/*end::Chart*/}
          </div>
          {/*end::Body*/}
        </div>
      </>
    );
  }
}
