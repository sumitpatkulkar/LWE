import React from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Print from './Print';

//For API Requests
import axios from 'axios';

class GenerateChallan extends React.Component {

  // State array variable to save and show data
  constructor(props) {
    super(props)
      this.state = {
        data: [],
       
      }}
  componentDidMount() {
       //Get all users details in bootstrap table
        axios.get('https://www.testjsonapi.com/users/').then(res => 
        {
          //Storing users detail in state array object
          this.setState({data: res.data});
        
        }); 
    //initialize datatable
    $(document).ready(function () {
        setTimeout(function(){
        $('#example').DataTable(
            {
                pagingType: 'full_numbers',
                  pageLength: 5,
                  processing: true,
                  dom: 'Bfrtip',
                      buttons: ['copy', 'csv', 'print'
                      ]
            }
        );
        } ,
        1000
        );
    });
 }
  render(){
    //Datatable HTML
  return (
    <>
    <div  id='printablediv'>
    <div className="MainDiv">
    
        
      
      <div className="container p-5">
          
          <table id="example" class="table table-hover table-bordered">
          <tr>
    <td align={'center'} colspan={4}>
        <h2>LeaseWithEase</h2><br></br>
        <i>F-702,Gandharv Excellence,</i>
        <i>Dehu Alandi Road,</i>
        <i>Borhadewadi,Moshi,Pune-412105</i>
        <h2><b><u>Delivery Challan</u></b></h2>
    </td>
</tr>
<tr>
    <td colspan={2}>
        <b>To,</b>
        <pre>Pratiksha Chavhan<br></br>


         Sadashiv Peth,Tilak Road,Pune-411030<br></br>
         
         Contact : 9011691768</pre>
    </td>
    <td colspan={2}>
        <h6>Order Id :1</h6>
        <h6>Delivery Date : 07/03/2023</h6>
        
    </td>
</tr>
<tr>
    <th>Sr.No.</th>
    <th>Item Name</th>
    <th>Description</th>
    <th>Qty</th>
    </tr>
    
    <tr>
    <td>1</td>
    <td>Fridge</td>
    <td>Branch :Bosch Double Door Refrigerator</td>
    <td>1</td>
   </tr>
   <tr>
    <td>2</td>
    <td>TV</td>
    <td>81.3 cm (32") M5 FHD Smart Monitor with Smart TV Experience (Black)</td>
    <td>1</td>
   </tr> 
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
<tr>
<td colspan={2}><b>Customer Signature</b></td>
<td colspan={2}><b>Authorised Signature</b></td>
</tr>
<br>
</br>
<tr>
    <td>
    
    </td>
    <td>
   {/*<td colspan={4} align={'center'}>  <button type="submit"> Print</button>*/}
   
    </td>
</tr>
<tr>
    <td colspan={4} align={'center'}>
    <div>  <button type="button" onClick={Print} > Print Challan</button></div>
    </td>
</tr>
        </table>
          
        </div>
        </div>
        </div>
 </>
  );
}
}
export default GenerateChallan;
