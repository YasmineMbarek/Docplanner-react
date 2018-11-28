import React, { Component } from 'react';

const theBoxes = [
    { for:"For patients",
      paragraph:"Find a doctor, book a visit and solve any health-related doubt",
      select:true,
     image: 'https://www.docplanner.com/img/screen-marketplace@2x.png',
     },
     
     {
        for:"For doctors",
        paragraph:"Save time managing visits and cut no-shows by half",
        image: 'https://www.docplanner.com/img/screen-saas@2x.png',
     },
  ]
  const sel = '<select  name="country" class="form-control" id="selectoption"><option value="0">CHOOSE COUNTRY</option><option value="1">ARGENTINA</option><option value="2">AUSTRALIA</option><option value="3">BRAZIL</option><option value="4">CHILE</option><option value="5">COLOMBIA</option><option value="6">CZECH</option><option value="7">FRANCE</option><option value="8">ITALY</option><option value="9">MEXICO</option><option value="10">PERU</option><option value="11">POLAND</option><option value="12">PORTUGAL</option><option value="13"> SPAIN</option><option value="14">TURKEY</option><option value="15">UK</option></select>';
let Box = (props) => 
<div >
<p>{props.box.for}</p> 
<h3>{props.box.paragraph}</h3>  
<div>{props.box.select ?  <select  name="country" class="form-control" id="selectoption"><option value="0">CHOOSE COUNTRY</option><option value="1">ARGENTINA</option><option value="2">AUSTRALIA</option><option value="3">BRAZIL</option><option value="4">CHILE</option><option value="5">COLOMBIA</option><option value="6">CZECH</option><option value="7">FRANCE</option><option value="8">ITALY</option><option value="9">MEXICO</option><option value="10">PERU</option><option value="11">POLAND</option><option value="12">PORTUGAL</option><option value="13"> SPAIN</option><option value="14">TURKEY</option><option value="15">UK</option></select> : ' '}</div>
<img  className="DocPreImg" src={props.box.image} />
</div>                 
               
const Boxes = (props) =>

            props.boxesList.map((currentBox, i) =>
            <div className="box" key={i}>
              <Box box={currentBox}  />
            </div>
            )
class DocPreImg extends Component {

                render() {
                    return (
                      <div className="BoxesDiv_style">
<Boxes  boxesList={theBoxes} />
                             
                            
                        </div>   
                        
                    
                    );
                  }
    
 
}

export default DocPreImg;