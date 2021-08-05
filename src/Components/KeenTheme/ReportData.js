import React, { Component } from "react";
import { Button } from "react-bootstrap";
import downloadSvg from "../../assets/media/svg/icons/Files/Download.svg";
import data from "../DummyData/Result.json";

export default class ReportData extends Component {
  render() {
    return (
      <>
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
                    <th className="pl-0" style={{ minWidth: "10px" }}>
                      #
                    </th>
                    <th style={{ minWidth: "120px" }}>Name</th>
                    <th style={{ minWidth: "100px" }}>Subject(s)</th>
                    <th style={{ minWidth: "120px" }}>Paper Code</th>
                    <th style={{ minWidth: "120px" }}>Date</th>
                    <th style={{ minWidth: "120px" }}>Exam Board</th>
                    <th style={{ minWidth: "120px" }}>Exam</th>
                    <th style={{ minWidth: "10px" }}>Total Marks</th>
                    <th style={{ minWidth: "10px" }}>Status</th>
                    <th style={{ minWidth: "120px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data !== undefined
                    ? data.map((arr, key) => (
                        <tr key={key}>
                          <td className="pl-0 py-6">
                            <label className="checkbox checkbox-lg checkbox-inline">
                              <input type="checkbox" defaultValue={1} />
                              <span />
                            </label>
                          </td>
                          <td className="pl-0">
                            <a
                              href="#"
                              className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                            >
                              {key + 1}
                            </a>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.Name}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.Subjects}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.id}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.Date}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.Exam_Board}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.Exam}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.TotalMarks}
                            </span>
                          </td>
                          <td>
                            <span className="label label-lg label-light-success label-inline">
                              {arr.Status}
                            </span>
                          </td>
                          <td>
                            <Button
                              variant="outline-primary"
                              href="https://docs.google.com/document/d/1tgvcKb2IwdZQomle9BAgy4Uahtad515K0_YeQjRv7RA/edit#heading=h.vpmhmrz1y2kc"
                            >
                              <img
                                src={downloadSvg}
                                style={{ height: "20px", width: "50px" }}
                                alt="download Svg"
                              />
                            </Button>
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
            {/*end::Table*/}
          </div>
          {/*end::Body*/}
        </div>
      </>
    );
  }
}
