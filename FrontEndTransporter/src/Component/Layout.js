import { Component } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./Layout";
class MainSlider extends Component {
render() {
  return (
    <nav className="NavbarItems">
      
        {MainLayout.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.label} to={item.url}>
                <i className={item.icon} ></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </nav>
  );
      }
    }
    export default MainSlider