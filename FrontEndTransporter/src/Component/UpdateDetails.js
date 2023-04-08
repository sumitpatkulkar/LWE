import React from "react";
//import { Col, Row, Card} from "react-bootstrap";
import "./Login.css";
export default function UpdateDetails() {
  return (
    <div>
      <table align="center">
        <div className="mb-3 mt-md-4">
          <div className="vh-100 d-flex justify-content-center align-items-center"></div>
          <div md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary">
              <div className="login">
                <form >
                  <div align='center'className="mb-3 mt-md-4">
                    <tr>
                      <td>
                        {" "}
                        <h3 className="fw-bold mb-2 text-center text-uppercase ">
                          Update Information
                        </h3>
                      </td>
                    </tr>
                    <br />
                    <div className="mb-3">
                      <div>
                        <div className="mb-3" controlId="Name">
                          <tr>
                            <td>
                              {" "}
                              <label className="text-center">Name :</label>
                            </td>
                            <td>
                              <input type="text" placeholder="Enter Name" />
                            </td>
                          </tr>
                          <br />
                        </div>
                        <div className="mb-3" controlId="ContactNo">
                          <tr>
                            <td>
                              <label className="text-center">ContactNo :</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                placeholder="Enter Phone nmber"
                              />
                            </td>
                          </tr>
                          <br />
                        </div>
                        <div className="mb-3" controlId="divBasicEmail">
                          <tr>
                            <td>
                              <label className="text-center">
                                Email address :
                              </label>
                            </td>
                            <td>
                              {" "}
                              <input type="email" placeholder="Enter email" />
                            </td>
                          </tr>
                          <br />
                        </div>

                        <div className="mb-3" controlId="Address">
                          <tr>
                            <td>
                              <label className="text-center">Address :</label>
                            </td>
                            <td>
                              <input type="text" placeholder="Enter Name" />
                            </td>
                          </tr>
                          <br />
                        </div>
                        <div
                          className="mb-3"
                          controlId="divBasicCheckbox"
                        ></div>
                        <div className="d-grid">
                          <tr>
                            <td>
                              <br/>
                              <button variant="primary" type="submit">
                                Update_Details
                              </button>
                            </td>
                          </tr>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </table>
    </div>
  );
}
