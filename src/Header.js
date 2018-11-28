import React, { Component } from 'react';
const imglogo='https://lamignat.pl/wp-content/uploads/2018/01/logo-mktpl-docplanner-color.jpg'
const theItems = [
    {
      title:'Making the healthcare experience more human',
     },
  ]
  let Item = (props) => 
  <div>
   <div> <img className="header-logo" src={imglogo}/></div>
   <div> <h2>{props.item.title} </h2></div>
 </div>
 const Items = (props) =>
 props.itemsList.map((currentItem, i) =>
 <div  className="main-container" key={i}>
   <Item item={currentItem} />
 </div>
 )
    class Header extends Component {

  render() {
    return (
        <div className="SecondDiv">
          
        <Items itemsList={theItems} />

           
        
    </div>   
 
      
    );
  }
}

export default Header;