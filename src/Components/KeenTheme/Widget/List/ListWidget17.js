import React, { Component } from "react";
import ECA from "../../../../assets/BoardImages/t3t8rZuO.jpg";
import Edexcel from "../../../../assets/BoardImages/Edexcel.svg";
import OCR from "../../../../assets/BoardImages/ocr.jpg";

export default class ListWidget17 extends Component {
  render() {
    return (
      <>
        <div className="card card-custom gutter-b">
          {/*begin::Header*/}
          <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Recent Exams
              </span>
              <span className="text-muted mt-3 font-weight-bold font-size-sm">
                3 Exam
              </span>
            </h3>
            <div className="card-toolbar">
              <div
                className="dropdown dropdown-inline"
                data-toggle="tooltip"
                title="Quick actions"
                data-placement="left"
              >
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
          <div className="card-body pt-4">
            {/*begin::Container*/}
            <div>
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-8">
                {/*begin::Symbol*/}
                <div className="symbol mr-5 pt-1">
                  <div
                    className="symbol-label min-w-65px min-h-100px"
                    style={{
                      backgroundSize: "50px",
                      backgroundImage: `url(${ECA})`,
                    }}
                  />
                </div>
                {/*end::Symbol*/}
                {/*begin::Info*/}
                <div className="d-flex flex-column">
                  {/*begin::Title*/}
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                  >
                    English
                  </a>
                  {/*end::Title*/}
                  {/*begin::Text*/}
                  <span className="text-muted font-weight-bold font-size-sm pb-4">
                    CCEA
                    <br />
                    England
                  </span>
                  {/*end::Text*/}
                  {/*begin::Action*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-light font-weight-bolder font-size-sm py-2"
                    >
                      <a href="https://docs.google.com/document/d/1tgvcKb2IwdZQomle9BAgy4Uahtad515K0_YeQjRv7RA/edit#">
                        View Now
                      </a>
                    </button>
                  </div>
                  {/*end::Action*/}
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-8">
                {/*begin::Symbol*/}
                <div className="symbol mr-5 pt-1">
                  <div
                    className="symbol-label min-w-65px min-h-100px"
                    style={{
                      backgroundSize: "50px",
                      backgroundImage: `url(${OCR})`,
                    }}
                  />
                </div>
                {/*end::Symbol*/}
                {/*begin::Info*/}
                <div className="d-flex flex-column">
                  {/*begin::Title*/}
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                  >
                    Physical
                  </a>
                  {/*end::Title*/}
                  {/*begin::Text*/}
                  <span className="text-muted font-weight-bold font-size-sm pb-4">
                    OCR
                    <br />
                    Oxford, Cambridge and RSA Examinations
                  </span>
                  {/*end::Text*/}
                  {/*begin::Action*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-light font-weight-bolder font-size-sm py-2"
                    >
                      <a href="https://docs.google.com/document/d/1tgvcKb2IwdZQomle9BAgy4Uahtad515K0_YeQjRv7RA/edit#">
                        View Now
                      </a>
                    </button>
                  </div>
                  {/*end::Action*/}
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center">
                {/*begin::Symbol*/}
                <div className="symbol mr-5 pt-1">
                  <div
                    className="symbol-label min-w-65px min-h-100px"
                    style={{
                      backgroundSize: "50px",
                      backgroundImage: `url(${Edexcel})`,
                    }}
                  />
                </div>
                {/*end::Symbol*/}
                {/*begin::Info*/}
                <div className="d-flex flex-column">
                  {/*begin::Title*/}
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                  >
                    Computer Science
                  </a>
                  {/*end::Title*/}
                  {/*begin::Text*/}
                  <span className="text-muted font-weight-bold font-size-sm pb-4">
                    Pearson
                    <br />
                    Edexcel
                  </span>
                  {/*end::Text*/}
                  {/*begin::Action*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-light font-weight-bolder font-size-sm py-2"
                    >
                      <a href="https://docs.google.com/document/d/1tgvcKb2IwdZQomle9BAgy4Uahtad515K0_YeQjRv7RA/edit#">
                        View Now
                      </a>
                    </button>
                  </div>
                  {/*end::Action*/}
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Container*/}
          </div>
          {/*end::Body*/}
        </div>
      </>
    );
  }
}
