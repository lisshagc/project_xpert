import React from "react";
import { Link } from "react-router-dom";
import '../Light.css';
import { ShowDepartmentDataById } from './Department.js'; // Importing the hide function from a separate JS file

function DepartmentContent() {

  return (
    <div>
      <div className="container-fluid p-0" id="DepartmentContent">
        <h1 className="h3 mb-3">
          <strong>DepartmentList</strong>
        </h1>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    onClick={() => ShowDepartmentDataById("DepartmentCreate")}
                    className="btn btn-primary me-md-2"
                  >
                    Add Department
                  </button>
                </div>
              </div>
              <div className="card-body">
                <table
                  id="datatables-reponsive"
                  className="table table-striped"
                  style={{ width: '100%' }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Active</th>
                      <th>CreatedDate</th>
                      <th>ModifiedDate</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> Information Technology </td>
                      <td>
                        <span>True</span>
                      </td>
                      <td> 10-09-2024</td>
                      <td> 10-09-2024</td>
                      <td>
                        <Link onClick={() => ShowDepartmentDataById("DepartmentEdit")}>Edit</Link> |{" "}
                        <Link onClick={() => ShowDepartmentDataById("DepartmentContent")}>View</Link> |{" "}
                        <Link onClick={() => ShowDepartmentDataById("DepartmentDelete")}>Delete</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="sizedModalSm"
        tabIndex="-1"
        style={{ display: 'none' }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <strong>Delete admin</strong>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body m-3">
              <p className="mb-0"></p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentContent;
