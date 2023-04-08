import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainSlider from './Component/MainSlider'
import UpdateDetails from './Component/UpdateDetails'
import OrderDetails from './Component/OrderDetails'
import ChangePassword from './Component/ChangePassword'
import GenerateChallan from './Component/GenerateChallan'
import PaymentDetails from './Component/PaymentDetails'

function App() {
  return (
    <Router>
      <div className="App">
       {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              </Link>
               <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                   <Link className="nav-link" to={'/sign-in'}>
                    Login 
                  </Link>
                 </li>
              </ul>
            </div>
          </div>
  </nav>*/}
        <div className="auth-wrapper">
          <div className="auth-inner">
           <Routes>
             <Route exact path="/" element={<MainSlider/>} >
              
                 <Route path="/order-details" element={<OrderDetails/>} />
                 <Route path="/update-details" element={<UpdateDetails/>} />
                 <Route path="/generate-challan" element={<GenerateChallan/>} />
                 <Route path="/payment-details" element={<PaymentDetails/>} />
                 <Route path="/change-password" element={<ChangePassword/>} />
                 </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App