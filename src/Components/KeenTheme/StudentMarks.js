import React, { Component } from "react";
import { Form } from "react-bootstrap";
import data from "../DummyData/StudentData.json";

export default class StudentMarks extends Component {
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
                    <th className="pl-0" style={{ minWidth: "120px" }}>
                      Student id
                    </th>
                    <th style={{ minWidth: "120px" }}>Firstname</th>
                    <th style={{ minWidth: "120px" }}>Surname</th>
                    <th style={{ minWidth: "120px" }}>Marks</th>
                    <th style={{ minWidth: "120px" }}>Total Marks</th>
                    <th style={{ minWidth: "120px" }}>Comments</th>

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
                        <a
                          href="#"
                          className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                        >
                          {arr.id}
                        </a>
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
                        <Form.Control type="number" placeholder="Enter Marks" />
                      </td>
                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          10
                        </span>
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="Comments (if any)"
                        />
                      </td>
                    </tr>
                  ))}
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
