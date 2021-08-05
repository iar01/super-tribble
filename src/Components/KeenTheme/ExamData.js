import React, { Component } from "react";
import { Button } from "react-bootstrap";
import downloadSvg from "../../assets/media/svg/icons/Files/Download.svg";

export default class ExamData extends Component {
  render() {
    console.log(this.props.data,"hello")
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
                    <th style={{ minWidth: "120px" }}>Name</th>
                    <th style={{ minWidth: "100px" }}>Exam Board</th>
                    <th style={{ minWidth: "120px" }}>Subject</th>
                    <th style={{ minWidth: "120px" }}>Level</th>
                    <th style={{ minWidth: "10px" }}>Exam Date</th>
                    <th style={{ minWidth: "120px" }}>Exam Year</th>
                    <th style={{ minWidth: "120px" }}>Total Marks</th>
                    <th style={{ minWidth: "120px" }}>Reference</th>
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
                              {arr.name}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.exam_board.name}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.subject.name}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.level.name}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.exam_date}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.exam_year}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.total_marks}
                            </span>
                          </td>
                          <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {arr.reference}
                            </span>
                          </td>
                          <td>
                            <Button variant="outline-primary" href={arr.PaperFile}>
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
