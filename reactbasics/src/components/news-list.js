import React from "react";
import NewsItem from "./news-list-item";
const NewsList=(props)=>{
    console.log(props);
    const items=props.news.map((item)=>{
        // for all lists we should pass a key parameter which should be unique!
        // so do not forget to pass them... 
        return(
            <NewsItem  key={item.id} item={item}/>
        )
    });
    /**props.children would get the content of between open and tag where the components would call.
     *  check index page where NewsList calls and see th syntax
     */
    return(
        
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default NewsList