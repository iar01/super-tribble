import React, { Component } from "react";
import data from "../DummyData/data2.json";
import { OverlayTrigger, Tooltip, Button, Modal } from "react-bootstrap";
import generate from "../../media/svg/generate.svg";
import user from "../../assets/media/users/300_1.jpg";

class TableData extends Component {
  state = {
    show: false,
    data_array: [],
  };

  render() {
    const { show, data_array } = this.state;
    console.log(data_array);
    return (
      <div className="card card-custom">
        <div className="card-body py-0">
          {/*begin::Table*/}
          <div className="table-responsive">
            <table
              className="table table-head-custom table-vertical-center"
              id="kt_advance_table_widget_4"
            >
              <thead>
                <tr className="text-left">
                  <th className="pl-0" style={{ width: "30px" }}>
                    <label className="checkbox checkbox-lg checkbox-inline mr-2">
                      <input type="checkbox" defaultValue={1} />
                      <span />
                    </label>
                  </th>
                  <th className="pl-0" style={{ minWidth: "120px" }}>
                    Student id
                  </th>
                  <th style={{ minWidth: "110px" }}>Class</th>
                  <th style={{ minWidth: "120px" }}>Firstname</th>
                  <th style={{ minWidth: "120px" }}>Surname</th>
                  <th style={{ minWidth: "120px" }}>Date of Birth</th>
                  <th style={{ minWidth: "120px" }}>School</th>
                  <th style={{ minWidth: "120px" }}>Status</th>
                  <th className="pr-0 text-right" style={{ minWidth: "160px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((arr, key) => (
                  <tr key={key}>
                    <td className="pl-0 py-6">
                      <label className="checkbox checkbox-lg checkbox-inline">
                        <input type="checkbox" defaultValue={1} />
                        <span />
                      </label>
                    </td>
                    <td className="pl-0">
                      <span className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">
                        {arr.id}
                      </span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {arr.class}
                      </span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {arr.firstname}
                      </span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {arr.lastname}
                      </span>
                    </td>
                    <td>
                      <span className="text-primary font-weight-bolder d-block font-size-lg">
                        {arr.dob}
                      </span>
                      <span className="text-muted font-weight-bold">
                        {arr.age}
                      </span>
                    </td>
                    <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {arr.school}
                      </span>
                      <span className="text-muted font-weight-bold">
                        {arr.campus}
                      </span>
                    </td>
                    <td>
                      <span className="label label-lg label-light-primary label-inline">
                        Approved
                      </span>
                    </td>
                    <td className="pr-0 text-right">
                      <OverlayTrigger
                        overlay={
                          <Tooltip>Generate Paper for {arr.firstname}</Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <a
                            href="https://docs.google.com/document/d/1tgvcKb2IwdZQomle9BAgy4Uahtad515K0_YeQjRv7RA/edit#heading=h.vpmhmrz1y2kc"
                            className="btn btn-icon btn-light btn-hover-warning btn-sm"
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                              <img src={generate} alt="..." height="20px" />
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </span>
                      </OverlayTrigger>

                      <OverlayTrigger
                        overlay={
                          <Tooltip>View {arr.firstname}'s Progress</Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <a
                            onClick={() =>
                              this.setState({ show: !show, data_array: arr })
                            }
                            className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                          >
                            <span className="svg-icon svg-icon-primary svg-icon-2x">
                              {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo1\dist/../src/media/svg/icons\Design\ZoomMinus.svg*/}
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
                                    d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                    opacity="0.3"
                                  />
                                  <path
                                    d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                    fill="#000000"
                                    fillRule="nonzero"
                                  />
                                  <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    x={9}
                                    y="10.5"
                                    width={4}
                                    height={1}
                                    rx="0.5"
                                  />
                                </g>
                              </svg>
                              {/*end::Svg Icon*/}
                            </span>
                          </a>
                        </span>
                      </OverlayTrigger>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/*end::Table*/}
        </div>
        {/*end::Body*/}
        <>
          <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="xl"
            show={show}
            onHide={() => this.setState({ show: !this.state.show })}
          >
            <Modal.Header closeButton>
              <Modal.Title>{data_array.firstname}'s Progress</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/*begin::Card*/}
              <div className="card card-custom gutter-b">
                <div className="card-body">
                  {/*begin::Top*/}
                  <div className="d-flex">
                    {/*begin::Pic*/}
                    <div className="flex-shrink-0 mr-7">
                      <div className="symbol symbol-50 symbol-lg-120">
                        <img alt="Pic" src={user} />
                      </div>
                    </div>
                    {/*end::Pic*/}
                    {/*begin: Info*/}
                    <div className="flex-grow-1">
                      {/*begin::Title*/}
                      <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                        {/*begin::User*/}
                        <div className="mr-3">
                          {/*begin::Name*/}
                          <span className="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">
                            {data_array.firstname}&nbsp;{data_array.lastname}
                            {/*<i className="flaticon2-correct text-success icon-md ml-2" />*/}
                          </span>
                          {/*end::Name*/}
                          {/*begin::Contacts*/}
                          <div className="d-flex flex-wrap my-2">
                            <span className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                              <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-notification.svg*/}
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
                                      d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                      fill="#000000"
                                    />
                                    <circle
                                      fill="#000000"
                                      opacity="0.3"
                                      cx="19.5"
                                      cy="17.5"
                                      r="2.5"
                                    />
                                  </g>
                                </svg>
                                {/*end::Svg Icon*/}
                              </span>
                              {data_array.email}
                            </span>
                            <span className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                              <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Lock.svg*/}
                                <span className="svg-icon svg-icon-primary svg-icon-2x">
                                  {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo1\dist/../src/media/svg/icons\Code\Commit.svg*/}
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
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <path
                                        d="M20.5,11 L22.5,11 C23.3284271,11 24,11.6715729 24,12.5 C24,13.3284271 23.3284271,14 22.5,14 L20.5,14 C19.6715729,14 19,13.3284271 19,12.5 C19,11.6715729 19.6715729,11 20.5,11 Z M1.5,11 L3.5,11 C4.32842712,11 5,11.6715729 5,12.5 C5,13.3284271 4.32842712,14 3.5,14 L1.5,14 C0.671572875,14 1.01453063e-16,13.3284271 0,12.5 C-1.01453063e-16,11.6715729 0.671572875,11 1.5,11 Z"
                                        fill="#000000"
                                        opacity="0.3"
                                      />
                                      <path
                                        d="M12,16 C13.6568542,16 15,14.6568542 15,13 C15,11.3431458 13.6568542,10 12,10 C10.3431458,10 9,11.3431458 9,13 C9,14.6568542 10.3431458,16 12,16 Z M12,18 C9.23857625,18 7,15.7614237 7,13 C7,10.2385763 9.23857625,8 12,8 C14.7614237,8 17,10.2385763 17,13 C17,15.7614237 14.7614237,18 12,18 Z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                      />
                                    </g>
                                  </svg>
                                  {/*end::Svg Icon*/}
                                </span>

                                {/*end::Svg Icon*/}
                              </span>
                              {data_array.class}
                            </span>
                            <span className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                              <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Lock.svg*/}
                                <span className="svg-icon svg-icon-primary svg-icon-2x">
                                  {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo1\dist/../src/media/svg/icons\Code\Commit.svg*/}
                                  <span className="svg-icon svg-icon-primary svg-icon-2x">
                                    {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo1\dist/../src/media/svg/icons\Communication\Delete-user.svg*/}
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
                                        <polygon points="0 0 24 0 24 24 0 24" />
                                        <path
                                          d="M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z M21,8 L17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 L21,6 C21.5522847,6 22,6.44771525 22,7 C22,7.55228475 21.5522847,8 21,8 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                          opacity="0.3"
                                        />
                                        <path
                                          d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                          fill="#000000"
                                          fillRule="nonzero"
                                        />
                                      </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                  </span>

                                  {/*end::Svg Icon*/}
                                </span>

                                {/*end::Svg Icon*/}
                              </span>
                              {data_array.dob} &nbsp;&nbsp;&nbsp;
                              {data_array.age}
                            </span>
                            <span className="text-muted text-hover-primary font-weight-bold">
                              <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/Map/Marker2.svg*/}
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
                                      d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z"
                                      fill="#000000"
                                    />
                                  </g>
                                </svg>
                                {/*end::Svg Icon*/}
                              </span>
                              {data_array.campus}
                            </span>
                          </div>
                          {/*end::Contacts*/}
                        </div>
                        {/*begin::User*/}
                        {/*begin::Actions*/}
                        {/*<div className="my-lg-0 my-1">*/}
                        {/*  <span className="btn btn-sm btn-light-primary font-weight-bolder text-uppercase mr-2">*/}
                        {/*    Ask*/}
                        {/*  </span>*/}
                        {/*  <span className="btn btn-sm btn-primary font-weight-bolder text-uppercase">*/}
                        {/*    Hire*/}
                        {/*  </span>*/}
                        {/*</div>*/}
                        {/*end::Actions*/}
                      </div>
                      {/*end::Title*/}
                      {/*begin::Content*/}
                      <div className="d-flex align-items-center flex-wrap justify-content-between">
                        {/*begin::Description*/}
                        <div className="flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5">
                          {data_array.About}
                        </div>
                        {/*end::Description*/}
                        {/*begin::Progress*/}
                        <div className="d-flex mt-4 mt-sm-0">
                          <span className="font-weight-bold mr-4">
                            Progress
                          </span>
                          <div className="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "63%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="font-weight-bolder text-dark ml-4">
                            78%
                          </span>
                        </div>
                        {/*end::Progress*/}
                      </div>
                      {/*end::Content*/}
                    </div>
                    {/*end::Info*/}
                  </div>
                  {/*end::Top*/}
                  {/*begin::Separator*/}
                  <div className="separator separator-solid my-7" />
                  {/*end::Separator*/}
                  {/*begin::Bottom*/}
                  {/*<div className="d-flex align-items-center flex-wrap">*/}
                  {/*  /!*begin: Item*!/*/}
                  {/*  <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">*/}
                  {/*    <span className="mr-4">*/}
                  {/*      <i className="flaticon-piggy-bank icon-2x text-muted font-weight-bold" />*/}
                  {/*    </span>*/}
                  {/*    <div className="d-flex flex-column text-dark-75">*/}
                  {/*      <span className="font-weight-bolder font-size-sm">*/}
                  {/*        Earnings*/}
                  {/*      </span>*/}
                  {/*      <span className="font-weight-bolder font-size-h5">*/}
                  {/*        <span className="text-dark-50 font-weight-bold">*/}
                  {/*          $*/}
                  {/*        </span>*/}
                  {/*        249,500*/}
                  {/*      </span>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  /!*end: Item*!/*/}
                  {/*  /!*begin: Item*!/*/}
                  {/*  <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">*/}
                  {/*    <span className="mr-4">*/}
                  {/*      <i className="flaticon-confetti icon-2x text-muted font-weight-bold" />*/}
                  {/*    </span>*/}
                  {/*    <div className="d-flex flex-column text-dark-75">*/}
                  {/*      <span className="font-weight-bolder font-size-sm">*/}
                  {/*        Expenses*/}
                  {/*      </span>*/}
                  {/*      <span className="font-weight-bolder font-size-h5">*/}
                  {/*        <span className="text-dark-50 font-weight-bold">*/}
                  {/*          $*/}
                  {/*        </span>*/}
                  {/*        164,700*/}
                  {/*      </span>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  /!*end: Item*!/*/}
                  {/*  /!*begin: Item*!/*/}
                  {/*  <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">*/}
                  {/*    <span className="mr-4">*/}
                  {/*      <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold" />*/}
                  {/*    </span>*/}
                  {/*    <div className="d-flex flex-column text-dark-75">*/}
                  {/*      <span className="font-weight-bolder font-size-sm">*/}
                  {/*        Net*/}
                  {/*      </span>*/}
                  {/*      <span className="font-weight-bolder font-size-h5">*/}
                  {/*        <span className="text-dark-50 font-weight-bold">*/}
                  {/*          $*/}
                  {/*        </span>*/}
                  {/*        782,300*/}
                  {/*      </span>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  /!*end: Item*!/*/}
                  {/*  /!*begin: Item*!/*/}
                  {/*  <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">*/}
                  {/*    <span className="mr-4">*/}
                  {/*      <i className="flaticon-file-2 icon-2x text-muted font-weight-bold" />*/}
                  {/*    </span>*/}
                  {/*    <div className="d-flex flex-column flex-lg-fill">*/}
                  {/*      <span className="text-dark-75 font-weight-bolder font-size-sm">*/}
                  {/*        73 Tasks*/}
                  {/*      </span>*/}
                  {/*      /!*<span className="text-primary font-weight-bolder">*!/*/}
                  {/*      /!*  View*!/*/}
                  {/*      /!*</span>*!/*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  /!*end: Item*!/*/}
                  {/*  /!*begin: Item*!/*/}
                  {/*  <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">*/}
                  {/*    <span className="mr-4">*/}
                  {/*      <i className="flaticon-chat-1 icon-2x text-muted font-weight-bold" />*/}
                  {/*    </span>*/}
                  {/*    <div className="d-flex flex-column">*/}
                  {/*      <span className="text-dark-75 font-weight-bolder font-size-sm">*/}
                  {/*        648 Comments*/}
                  {/*      </span>*/}
                  {/*      /!*<span className="text-primary font-weight-bolder">*!/*/}
                  {/*      /!*  View*!/*/}
                  {/*      /!*</span>*!/*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  /!*end: Item*!/*/}
                  {/*</div>*/}
                  {/*end::Bottom*/}
                </div>
              </div>
              {/*end::Card*/}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.setState({ show: !this.state.show })}
              >
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

export default TableData;
