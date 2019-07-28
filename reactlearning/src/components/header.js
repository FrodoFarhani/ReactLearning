import React,{Component} from "react";

const getYear=()=>{
    let mydate=new Date();
    return mydate.getFullYear()
}
const user={
    name:"mohamad",
    last:"farhani",
    age:"33"
}

/**
 * this is a function based component, these components would just return jsx to the client, and nothing
 * else matters for them. I mean they do not care what will happend to the rest of application.
 * On the other hand, class based components are working with othe components.
 */
/* const Header=()=>{
    // we can use dynamic data in our return like this, we calc year and pass it to header
    return(
        <div>
            <h1>Header !</h1>
            <h3>The year is {
                getYear()
            }</h3>
            <div>
                Name:{user.name}<br/>
                Last Name:{user.last}<br/>
                Age:{user.age}<br/>
            </div>

        </div>
    )
} */


/**
 * Sample for class components
 */
//class Header extends React.Component{
// we import {Component} from react on top of here so we change this line, this is ES 6 magic ! 
class Header extends Component{
    
    /**
     * state is a special object for react because whenever this object changes react would call RENDER
     * tmethod again. for changing this state we have state.setState() method....
     */
    state={
       // title:"The keywords are:",
        keyword:"",
       // active:false // this will change the header color while typing!
        active:'non-active' // this will change the header color while typing!
    }
    /**
     *we chenge the method to fat arrow function just for this word !
     fat arrow functions are smart and THIS in them refers to the parent, here is our class.
     so we do not need to .bind(this) in calling the method in render
     */
    //inputChangeHandler(event){
    inputChangeHandler=(event)=>{
        //console.log(event.target.value);
       // let blntyping=event.target.value===''?false:true;
        let classtyping=event.target.value===''?'non-active':'active';
        this.setState({
            keyword:event.target.value,
            //active:blntyping
            active:classtyping
        });
    }
    
    render(){// this render is like a constructor for this class
        /**
         * with bellow aproach styles would be inline and this is not good !    
         */
       /*  let styles={
            header:{
                background:"#03a9f4",
            },
            logo:{
                color:"#fff",
                fontFamily:"Anton",// here we write js so no - like css jusdt camle case! also we import Anton font from google in index.html file
                textAlign:"center"
            }
        }
        return(
            <header style={styles.header}>
                <div style={styles.logo}>LOGO</div>
                <input type="text"/>
            </header>
            ) */

            /**
             * we wanna use the old fashion way of using styless so we add css file in public and 
             * include it in index.html
             * READ react DOCs for more events... they are handeling by react so there are lots of them
             * if we write this line : <input type="text" onChange={this.inputChangeHandler}/>
             * with () for this.inputChangeHandler() we would tell react that when ever u render the code
             * ubside render you should rund this function. try it with console log in that method, the first
             * time page loaded there will be your console log, without changing the text box
             * with no () we just refrencing the function not calling it. to fix above issue we can write 
             * code like the line bellow of the orginal
             */
            //console.log(this.state);
            
            return(
                /* <header style={{background:`${this.state.active?'red':'blue'}` }}> */
                <header className={this.state.active}>
                    <div className="logo" 
                        onClick={()=>{
                        console.log("I just clicked!");    
                        }}
                        onDoubleClick={()=>console.log("Oh dubel click :D")
                        }
                    >LOGO</div>
                    <input type="text" 
                        onChange={this.inputChangeHandler} 
                        /**
                         * the reason why we add .bind(this) to our code is in inputChangeHandler method 
                         * we have this.setState and this refers to his own method witch is inputChangeHandler!
                         * so we bind(this) to the method to refer the THIS word in inputChangeHandler to the
                         * Head class not the inputChangeHandler  function.
                         */
                       // onChange={this.inputChangeHandler.bind(this)}
                    />
                    {/* <input type="text" onChange={(e)=>this.inputChangeHandler(e)}/> */}
                   {/*  <div>{this.state.title}</div>
                    <div>{this.state.keyword}</div> */}
                    
                </header>
                )
    }
}

export default Header