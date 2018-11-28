import React, { Component } from 'react';
const theLinks = [
    {
      val: 'Poland',
     },
     {
     val: 'Turkey',
     },
     {
        val: 'Spain',
     },
     {
        val: 'Italy',
        },
        {
            val: 'Mexico',
            },
            {
                val: 'Brazil',
                },
                {
                    val: 'Argentina',
                   },
                   {
                    val: 'Chile',
                       },
  ]
 
let Link = (props) => 
<div>
<a href="#" class="afooter">{props.link.val}</a>,
</div>                    
                
const Links = (props) =>
            props.linksList.map((currentLink, i) =>
            <ul   key={i}>
              <Link  link={currentLink} />
            </ul>
            )
class Footer extends Component {

                render() {
                    return (
                        <div className="footer-links">
                        <hr/>
                         <div className="alldisplay">
                         
                        <p>We are leaders in 8 countries: </p>
                        <div className="linksdisplay">
                         <Links linksList={theLinks}/></div>
                         </div >
                         <p className="Privacy">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
                            <br/>  www.docplanner.com © 2018</p>
                         </div>
                    );
                  }
    
 
}

export default Footer;