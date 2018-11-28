import React, { Component } from 'react';
const theParagraphs = [
    {
      para: "We want patients to find the perfect doctor and book an appointment in the most easy way.The patient journey should be enjoyable and thats why we are always next to them: to help them find the best possible care. Anytime anywhere."
,},
{
      para:'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.',
     },
  ]
  let Paragraph = (props) => 
 
   <div className="paraone">  <p> {props.Paragraph.para}</p> </div> 


 const Paragraphs = (props) => 
 props.ParagraphsList.map((currentParagraph, i) =>
 <div key={i}>
   <Paragraph Paragraph={currentParagraph} />
 </div>
 )
    class DocPresebtation extends Component {

  render() {
    return (
        <div className="paragraph">
          
        <Paragraphs ParagraphsList={theParagraphs} />
       </div>   
 
      
    );
  }
}

export default DocPresebtation;