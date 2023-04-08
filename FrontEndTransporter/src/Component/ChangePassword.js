import React from "react";
//import Button from "react-bootstrap/Button";

import "./Login.css";
function ChangePassword() {
  return (
    <div>
      <table align="center">
        <div className="mb-3 mt-md-4">
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <div md={8} lg={6} xs={12}>
              <div className="border border-2 border-primary">
              <div className="login">
                <form>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Change_Password
                    </h2>
                    <br/>
                  </div>

                  <div className="mb-3" controlId="formBasicEmail">
                    <label>Old Password :</label>
                    <input type="password" placeholder="Enter old password" />
                    <br />
                    <text className="text-muted">
                      We'll never share your password with anyone else.
                    </text><br/>
                    <br />
                  </div>

                  <div className="mb-3" controlId="formBasicPassword">
                    <label>New Password :</label>
                    <input
                      type="password"
                      placeholder="Enter the new password"
                    /><br/><br/>
                  </div>
                  <div className="mb-3" controlId="formBasicPassword">
                    <label>Re-Enter Password :</label>
                    <input
                      type="password"
                      placeholder="Re-Enter new password"
                    /><br/>
                  </div>
                  <div className="mb-3" controlId="formBasicCheckbox">
                    <input type="checkbox" label="Check me out" />
                  </div>
                  <button variant="primary" type="submit">
                    Save
                  </button>
                  <p>
                    <a href="/update-details" className="small text-muted me-1">
                      UpdateDetails.
                    </a>
                  </p>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </table>
    </div>
  );
}

export default ChangePassword;
