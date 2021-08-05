import React, { Component } from "react";
import { Button } from "react-bootstrap";
import downloadSvg from "../../assets/media/svg/icons/Files/Download.svg";

export default class QuestionPaperData extends Component {
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
                      id
                    </th>
                    <th style={{ minWidth: "100px" }}>Subject</th>
                    <th style={{ minWidth: "120px" }}>Name</th>
                    <th style={{ minWidth: "120px" }}>Paper Reference</th>
                    <th style={{ minWidth: "120px" }}>Paper Code</th>
                    <th style={{ minWidth: "10px" }}>Length</th>
                    <th style={{ minWidth: "120px" }}>Date</th>
                    <th style={{ minWidth: "120px" }}>Exam Board</th>
                    <th style={{ minWidth: "120px" }}>Exam</th>
                    <th style={{ minWidth: "10px" }}>Total Marks</th>
                    <th style={{ minWidth: "10px" }}>Total Question</th>
                    <th style={{ minWidth: "120px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data !== undefined
                    ? this.props.data.map((arr, key) => (
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
                              {arr.id}
                            </a>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.subject.name}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.name}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.paper_reference}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.paper_code}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.length}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.date}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.exam_board.fullname}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.exam.name}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.total_marks}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.total_questions}
                            </span>
                          </td>
                          <td>
                            <Button variant="outline-primary" href={arr.pdf}>
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
