import React from "react";
import { css } from "glamor";
import classes from "../css/styles.css";
//const NewsItem=(props)=>{
const NewsItem=({item})=>{
    console.log(item);
    
    let news_item=css({
        padding:'20px',
        boxsizing:'border-box',
        borderBottom:'1px solid grey',
        ':hover':{
            color:'red'
        }
    });
    let news_grey=css({
       background:'lightgrey'
    });
// ... means grab all the elements of news_item and put them there ... this is ES 6
    return(
        <div {...news_item}{...news_grey}>
                {/* <h2>{props.item.title}</h2>
                <h4>{props.item.feed}</h4> */}
                <h2>{item.title}</h2>
                <div className={classes.fontstyle}>{item.feed}</div>
               
            </div>
    )
}

export default NewsItem