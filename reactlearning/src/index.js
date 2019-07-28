import React,{Component} from "react";
import ReactDOM from "react-dom";

import jsonnews from "./db.json";
//components
import  Header  from "./components/header";
import NewsList from "./components/news-list";

//this is our component
/* const App=()=>{
    //return <h1>Hello world!!!</h1> // this works when we pass just a single argument
   // return React.createElement('h1',{className:'title'},'hello world !!!')
  /*  return React.createElement('h1',{className:'title'}
                                ,React.createElement('div',{},'New DIV')); */

    /**
     * to return more than one element we can put them all in just one single div to pass it throw
     * remember the code inside () is javascript not HTML ! so we sould use className instead of
     * class inside it
     */
     /*  return (
          <div>
                <h1 className='title'>Hello world!!!</h1>
                <div>new DIV</div>
          </div>
      ) 

      //here we import Header from our header.js in components folder
      console.log(json);
      
      return(
          <div>
              <Header/>
          </div>
      )
} */

class App extends Component{

    state={
        news:jsonnews
    }
    render(){
        //console.log(this.state);
        /** we can pass data between components with props , props are in all components by default
         * NOTE: stateless components (just function in component like news-list) 
         * */
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news} alaki="che jaleb!">
                    <h2>The Latest News:</h2>
                    <hr/><hr/><br/>
                </NewsList>
            </div>
        )
    }
}

/**
 *  we use <App/> because react render would render only components and to show our App function is a
 * component we use this style, and then we should say where we wanna render that. #root is a div in 
 * index.html
 */
ReactDOM.render(<App/>,document.querySelector('#root'));