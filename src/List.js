import React, { Component } from 'react';
const link = (props)=> <li><a href="index.html">{props.list.value}</a></li>

const links = (props) => props.linkslist.map((el,i)=>
   <ul key={i}>
    <link list={el} />
   </ul>)
   export default links;