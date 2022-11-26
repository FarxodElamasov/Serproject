import React from 'react'
import "./Navbartool.css"
import Navbar from 'react-bootstrap/Navbar';
import navTools from "../Img/Group 22.png"
import navMap from "../Img/map pin.png"
import navMail from "../Img/mail.png"
import navLogo from "../Img/WhatsApp Image 2021-07-04 at 11.45 1.png"
import navBox from "../Img/Vector.png"
import navSearch from "../Img/search.png"

export default function Navbartool() {
  return (
    <>
      <Navbar className='Navbar_back'>
        <div className='container'>
          <div className='row d-flex nav123 '>
            <div className="col-2">
              <img src={navTools} alt="png" />
            </div>
            <div className="col-2">
              <img src={navMap} alt="png" />
            </div>
            <div className="col-8">
              <p className="Navbar_text_color">8 981 120-11-17</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-12 sal_chap">
            <img src={navLogo} alt="png" />
            </div>
          </div>
          <div className='row'>
            <div className="col-3">
              <img src={navBox} alt="png" />
            </div>
            <div className="col-3">
              <img src={navMail} alt="png" />
            </div>
            <div className="col-4">
            <img src={navSearch} alt="png" />
            </div>
          </div>
        </div>
      </Navbar>
    </>
  )
}

