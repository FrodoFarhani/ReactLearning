import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";

import '../css/App.css';

class Fade extends Component{
    state={
        show:true
    }
    showDiv=()=>{
        this.setState({
            show:!this.state.show 
        })
    }
    render(){
        return(
            <div>
                {/* CSSTransition shoud get classNames and it will automatically appent 
                    them to insite this tag element
                    if you check the element in inspect html dom you can see by hitting
                    the btn the classe square-entered-active and square-entered would 
                    be attached to our DIV */}
                <CSSTransition
                    in={this.state.show}
                    timeout={2000}
                    classNames="square"
                >
                    <div className={`square ${this.state.show}`}>Hello</div>
                </CSSTransition>
                 <div className="showDiv"
                     onClick={this.showDiv}>
                     Show/Hide DIV</div>
            </div>
        )
    }
}


export default Fade;