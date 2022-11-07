import React, { Component } from 'react'
// const data=[
//   {
//       "id": 1,
//       "price": 30,
//       "name": "GUCCI G8850U",
//       "url": "./glassesImage/v1.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   },
//   {
//       "id": 2,
//       "price": 50,
//       "name": "GUCCI G8759H",
//       "url": "./glassesImage/v2.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   },
//   {
//       "id": 3,
//       "price": 30,
//       "name": "DIOR D6700HQ",
//       "url": "./glassesImage/v3.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   },
//   {
//       "id": 4,
//       "price": 70,
//       "name": "DIOR D6005U",
//       "url": "./glassesImage/v4.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   },
//   {
//       "id": 5,
//       "price": 40,
//       "name": "PRADA P8750",
//       "url": "./glassesImage/v5.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   },
//   {
//       "id": 6,
//       "price": 60,
//       "name": "PRADA P9700",
//       "url": "./glassesImage/v6.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   },
//   {
//       "id": 7,
//       "price": 80,
//       "name": "FENDI F8750",
//       "url": "./glassesImage/v7.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   },
//   {
//       "id": 8,
//       "price": 100,
//       "name": "FENDI F8500",
//       "url": "./glassesImage/v8.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   },
//   {
//       "id": 9,
//       "price": 60,
//       "name": "FENDI F4300",
//       "url": "./glassesImage/v9.png",
//       "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   }
// ];
export default class Content extends Component {
  state ={
    spChiTiet:{
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
  }
  glassesClick=()=>{
    
  }
  render() {
    const contentCss ={
      backgroundColor:'rgba(63,63,63,0.5)'
    }
    const glass={
      top:'25%',
      left: '35%',
      width:'200px',
      filter:'opacity(0.7)'
    }
    return (
      <div style={contentCss}>
        <div className='container'>
          <div className="row justify-content-around">
            <div className="col-lg-6 position-relative text-center">
              <img className='w-50 change' src="./glassesImage/model.jpg" alt="" />
              <img className='position-absolute' style={glass} src="./glassesImage/v1.png" alt="" />

            </div>
            <div className="col-lg-6 text-center">
              <img className='w-50' src="./glassesImage/model.jpg" alt="" />
            </div>
          </div>
          <div className="bg-white imgGlasses">
            <div className="row align-items-center">
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g1.jpg" alt="" />
                </div>
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g2.jpg" alt="" />
                </div>
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g3.jpg" alt="" />
                </div>
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g4.jpg" alt="" />
                </div>
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g5.jpg" alt="" />
                </div>
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g6.jpg" alt="" />
                </div>
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g7.jpg" alt="" />
                </div>
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g8.jpg" alt="" />
                </div>
                <div className="col-2">
                  <img className='w-100 IMGglasses' src="./glassesImage/g9.jpg" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
