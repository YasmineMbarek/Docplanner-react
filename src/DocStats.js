import React, { Component } from 'react';
 const imgl ='https://lamignat.pl/wp-content/uploads/2018/01/logo-mktpl-docplanner-color.jpg'
const theBoxes = [
    { icon:'https://www.docplanner.com/img/flag.png',
     title: "Leader in 8 countries",
     paragraph: "Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile",
     },
     
     {
        icon:'https://www.docplanner.com/img/visits.png',
        title: "600 000 appointments",
     paragraph: "booked last month",
     },
  ]
 let Box = (props) => 
<div>
<img src={props.box.icon} />
<p className="txt-green-title">{props.box.title}</p> 
<p>{props.box.paragraph}</p>  
</div>                 
               
const Boxes = (props) =>

            props.boxesList.map((currentBox, i) =>
            <div className="Whitebox" key={i}>
              <Box box={currentBox}  />
            </div>
            )

            const theBoxes2 = [
               {
                  icon:'https://www.docplanner.com/img/patients.png',
                  title: "20 million unique patients",
               paragraph: "visit us every month",
               },
               {
                  icon:'https://www.docplanner.com/img/doctors.png',
                  title: "35 000 active doctors",
               paragraph: "trust in our solutions",
               },
            ]
           let Box2 = (props) => 
          <div>
          <img src={props.box.icon} />
          <p className="txt-green">{props.box.title}</p> 
          <p>{props.box.paragraph}</p>  
          </div>                 
                         
          const Boxes2 = (props) =>
          
                      props.boxesList.map((currentBox, i) =>
                      <div className="Whitebox" key={i}>
                        <Box box={currentBox}  />
                      </div>
                      )
class DocStats extends Component {

                render() {
                    return (
                   <div className="background-green-div">
                     <div className="textdisplay" >
                        <p className="txt-green">The world's<br/> biggest healthcare platform</p> 
                        <p className="txt-gray">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>            
                        <img className="imagedisplay" src={imgl} />
                        </div> 
                 <div className="boxescol" >
                        <div  className="boxesdisplay" >
                       <Boxes boxesList={theBoxes} />
                       
                        </div>     
                        <div  className="boxesdisplay" >
                       
                       <Boxes2 boxesList={theBoxes2} />
                        </div> </div>
                        </div>   
                        
                    
                    );
                  }
    
 
}

export default DocStats;