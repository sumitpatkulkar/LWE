import { Table } from 'antd';
import './Login.css';
//import { DownOutlined } from '@ant-design/icons';
//import {  Dropdown, Space ,Badge} from 'antd';
//import DeliveryStatus from './DeliveryStatus';
const columns = [
  
   {
    title: 'OrderId',
    width: 100,
    dataIndex: 'key',
    fixed: 'left',
  },
  {
    title: 'CustomerName',
    width: 100,
    dataIndex: 'customername',
    key: '0',
    fixed: 'left',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'OrderDate',
    dataIndex: 'orderdate',
    key: '3',
    width: 150,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: '4',
    width: 150,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: '5',
    width: 150,
  },

  {
    title: 'Status',
    dataIndex: 'status',
     key: '6',
    width: 150,
    //render: () => <a  href="/delivery-status" >UpdateStatus</a>,
   },
   
 {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
    render: () =>
    <>
    <div> 
    <select>
    <option >Dispatched </option>
    <option >Delivered </option>
    </select>
    <button>Update</button>
    </div>
  
    <a href="/generate-challan" >Generate Challan</a> 
    
     </>          
  },
];
const data = [];
for (let i = 1; i < 100; i++) {
  data.push(
    {
      status: 'Delivered',
      key: '1',
      customername: 'Pratiksha',
      address: 'Sadashvpeth',
      orderdate: '03/03/2023',
      product:'Dining Table',
      quantity:'2'
      
    },
  );
  data.push(
   {
    status: 'Delivered',
      key: '2',
      customername: 'Reva',
      address: 'Transflower colony,Moshi',
      orderdate: '03/03/2023',
      product:'King Size Bed',
      quantity:'1'
      
   },
  );
  data.push(
   {
    status: 'Delivered',
      key: '3',
      customername: 'Rohini',
      address: 'Aanand Nagar,Vimannagar',
       orderdate: '03/03/2023',
       product:'Cupboard',
       quantity:'3',
    },
  );
  data.push(
   {
      key: '4',
      customername: 'Nilima',
      address: 'SB Road,goghleNagar',
      orderdate: '03/03/2023',
      product:'L-Shape Sofa',
      quantity:'1',
      status:'Pending' ,
    },
  );
}
const OrderDetails = () => (
  <Table 
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
);
export default OrderDetails;