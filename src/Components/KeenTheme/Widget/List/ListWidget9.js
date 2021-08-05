import React, { Component } from "react";

export default class ListWidget9 extends Component {
  render() {
    return (
      <>
        <div className="card card-custom gutter-b">
          {/*begin::Header*/}
          <div className="card-header align-items-center border-0 mt-4">
            <h3 className="card-title align-items-start flex-column">
              <span className="font-weight-bolder text-dark">My Activity</span>
              <span className="text-muted mt-3 font-weight-bold font-size-sm">
                120 Times Login (week)
              </span>
            </h3>
            <div className="card-toolbar">
              <div className="dropdown dropdown-inline">
                <a
                  href="#"
                  className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
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
          <div className="card-body pt-4">
            {/*begin::Timeline*/}
            <div className="timeline timeline-6 mt-3">
              {/*begin::Item*/}
              <div className="timeline-item align-items-start">
                {/*begin::Label*/}
                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                  08:42
                </div>
                {/*end::Label*/}
                {/*begin::Badge*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-warning icon-xl" />
                </div>
                {/*end::Badge*/}
                {/*begin::Text*/}
                <div className="font-weight-mormal font-size-lg timeline-content text-muted pl-3">
                  Outlines keep you honest. And keep structure
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="timeline-item align-items-start">
                {/*begin::Label*/}
                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                  10:00
                </div>
                {/*end::Label*/}
                {/*begin::Badge*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-success icon-xl" />
                </div>
                {/*end::Badge*/}
                {/*begin::Content*/}
                <div className="timeline-content d-flex">
                  <span className="font-weight-bolder text-dark-75 pl-3 font-size-lg">
                    AEOL meeting
                  </span>
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="timeline-item align-items-start">
                {/*begin::Label*/}
                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                  14:37
                </div>
                {/*end::Label*/}
                {/*begin::Badge*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-danger icon-xl" />
                </div>
                {/*end::Badge*/}
                {/*begin::Desc*/}
                <div className="timeline-content font-weight-bolder font-size-lg text-dark-75 pl-3">
                  Make deposit
                  <a href="#" className="text-primary">
                    USD 700
                  </a>
                  . to ESL
                </div>
                {/*end::Desc*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="timeline-item align-items-start">
                {/*begin::Label*/}
                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                  16:50
                </div>
                {/*end::Label*/}
                {/*begin::Badge*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-primary icon-xl" />
                </div>
                {/*end::Badge*/}
                {/*begin::Text*/}
                <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">
                  Indulging in poorly driving and keep structure keep great
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="timeline-item align-items-start">
                {/*begin::Label*/}
                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                  21:03
                </div>
                {/*end::Label*/}
                {/*begin::Badge*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-danger icon-xl" />
                </div>
                {/*end::Badge*/}
                {/*begin::Desc*/}
                <div className="timeline-content font-weight-bolder text-dark-75 pl-3 font-size-lg">
                  New order placed
                  <a href="#" className="text-primary">
                    #XF-2356
                  </a>
                  &nbsp;for exam English.
                </div>
                {/*end::Desc*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="timeline-item align-items-start">
                {/*begin::Label*/}
                <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                  23:07
                </div>
                {/*end::Label*/}
                {/*begin::Badge*/}
                <div className="timeline-badge">
                  <i className="fa fa-genderless text-info icon-xl" />
                </div>
                {/*end::Badge*/}
                {/*begin::Text*/}
                <div className="timeline-content font-weight-mormal font-size-lg text-muted pl-3">
                  Outlines keep and you honest. Indulging in poorly driving
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Timeline*/}
          </div>
          {/*end: Card Body*/}
        </div>
      </>
    );
  }
}
