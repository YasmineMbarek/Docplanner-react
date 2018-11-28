import React, { Component } from 'react';

const theBoxes1 = [
  { image:'https://www.docplanner.com/images/warsaw.png',
   title: "Warsaw",
   button: "SEE OPENING",
   },
   
   {
    image:'https://www.docplanner.com/images/barcelona.png',
    title: "Barcelona",
    button: "SEE OPENING",
   },
   {
    image:'https://www.docplanner.com/images/istanbul.png',
    title: "Istanbul",
    button: "SEE OPENING",
   },
   
]
const theBoxes2 = [
  
   {
    image:'https://www.docplanner.com/images/rome.png',
    title: "Rome",
    button: "SEE OPENING",
   },
   {
    image:'https://www.docplanner.com/images/mexico-city.png',
    title: "Mexico City",
    button: "SEE OPENING",
   },
   {
    image:'https://www.docplanner.com/images/curitiba.png',
    title: "Curitiba",
    button: "SEE OPENING",
   },
   
]
 let GridBox1 = (props) => 
<div  className="grid-box">                              
<img  src={props.gridbox1.image} class="imgradious"/>
<div class="info"> 
<div class="grid-info">
  <p>{props.gridbox1.title}</p>
</div>
<div class="grid-info" > <a href="#" class="abutton">{props.gridbox1.button}</a>
</div></div>
</div>
                 
               
const GridBoxes1 = (props) =>

            props.gridboxesList.map((currentBox, i) =>
            <div key={i}>
              <GridBox1 gridbox1={currentBox}  />
            </div>
            )
let GridBox2 = (props) => 
<div  className="grid-box">                              
<img  src={props.gridbox2.image} class="imgradious"/>
<div class="info"> 
<div class="grid-info">
  <p>{props.gridbox2.title}</p>
</div>
<div class="grid-info" > <a href="#" class="abutton">{props.gridbox2.button}</a>
</div></div>
</div>                
                           
            const GridBoxes2 = (props) =>
            
                        props.gridboxesList.map((currentBox, i) =>
                        <div key={i}>
                          <GridBox2 gridbox2={currentBox}  />
                        </div>
                        )
class DocPresentationImg extends Component {

                render() {
                  return (
                   <div className="grid-div">
                   
                   <div class="grid-container-one"> <GridBoxes1 gridboxesList={theBoxes1} /></div>
                   <div class="grid-container-one">  <GridBoxes2 gridboxesList={theBoxes2} /></div>
                            
                        </div>   
                        
                    
                    );
                  }
    
 
}

export default DocPresentationImg;