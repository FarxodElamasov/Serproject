import React from 'react'
import "./Header.css"
import Navbartool from '../Navbartool/Navbartool'
import headImg from "../Img/Rectangle 47.png"


export default function Header() {
  return (
    <>
      <div className='asosiy_rasm_back' sx={{ background: headImg }}>
        <Navbartool />
        <div className="container">
          <div className="row">
            <div className="col-7 d-flex justify-content-center marshl">
              <div className="col-9">
                <h1 className='title_h1'>Исключительное качество без компромиссов</h1>
                <div className="col-10">
                  <p className='title_p1'>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</p>
                </div>
                <button className='btn_1'>ПОДРОБНЕЕ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
