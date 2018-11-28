import React, { Component } from 'react';
const pStyle = {
    
    color: 'rgb(8, 185, 162)',
    fontSize: '30px'
  };
  
const theParas = [
    { p1: "Improve the lives of millions. Change yours forever",
      p2: "More than 500 team mates share our same vision, goals and passion.With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba,our search for great talent never stops.",
     },
  ]
  let Para = (props) => 
  <div>
   <p className="para"   style={pStyle}>
 {props.para.p1}
   </p>
   <p className="para2" >
   {props.para.p2}
   </p>
 </div>
 const Paras = (props) =>
 props.parasList.map((currentPara, i) =>
 <div key={i}>
   <Para para={currentPara} />
 </div>
 )
    class Paradiv extends Component {

  render() {
    return (
        <div className="Secondparagraphs">
          
        <Paras parasList={theParas} />

           
        
    </div>   
 
      
    );
  }
}

export default Paradiv;