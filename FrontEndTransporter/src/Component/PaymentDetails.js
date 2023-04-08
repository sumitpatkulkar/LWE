import React from "react";
import "./Login.css";

class PaymentDetails extends React.Component {
  render() {
    //Datatable HTML
    return (
      <div className="background">
        <div className="container p-5">
          <table id="example" class="table table-hover table-bordered">
            <tr>
              <td align={"center"} colspan={4}>
                <h2>
                  <b>
                    <u>Payment Outstanding</u>
                  </b>
                </h2>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <th align="right">Order_Id :-</th>
              <th align="right">Delivery_Date :-</th>
              <th align="right">Payment_Amount :-</th>
            </tr>

            <tr>
              <td>1</td>
              <td>01/12/2022</td>
              <td>250</td>
            </tr>
            <tr>
              <td>2</td>
              <td>01/04/2023</td>
              <td>250</td>
            </tr>
            <tr>
              <td>3</td>
              <td>20/03/2023</td>
              <td>250</td>
            </tr>
            <tr>
              <td>4</td>
              <td>12/04/2023</td>
              <td>250</td>
            </tr>
            <tr>
              <td>5</td>
              <td>09/04/2023</td>
              <td>250</td>
            </tr>
            <br />
            <tr>
              <td colspan={3} align="left">
                <b>Total_Receiveable:-</b>
              </td>
              <td align="left">1250</td>
            </tr>
            <br></br>
          </table>
        </div>
      </div>
    );
  }
}
export default PaymentDetails;
