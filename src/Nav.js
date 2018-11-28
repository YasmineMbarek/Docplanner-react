import React, { Component } from 'react';
const theButtons = [{value: 'About us'},{value: 'Career'},{value: 'Department'}]
const logo = 'https://www.docplanner.com/img/logo-default-group-en.svg?v=1'
let Button = (props) => <li> <a href="#"  className="titlelist">{props.button.value}</a> </li>              
const Buttons = (props) =>

            props.buttonsList.map((currentButton, i) =>
            <ul  className="header" key={i}>
              <Button button={currentButton} />
            </ul>
            )
class Nav extends Component {
                render() {
                    return (
                      <div className="Nav_bar">
                            <div className="header-container">
                            <img className="nav-logo"src={logo}/>
                            <div className="Nav-list">
                            <Buttons buttonsList={theButtons} />
                            </div>   
                        </div>    
                      </div>
                    );
                  }
    
 
}

export default Nav;