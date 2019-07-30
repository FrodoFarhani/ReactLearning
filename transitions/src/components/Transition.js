import React, { Component } from 'react';
import Transition from "react-transition-group/Transition";
import '../css/App.css';

class TransitionComp extends Component{
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
                 {/*
                    this.state.show
                        ?<div style={{
                            background:'red',
                            height:'100px'
                        }}></div>
                        :null
                */} 
                {/* transition in react would return a function that has a state
                    that is really important for us and we shoud use it to affect
                    the element we want using CSS or ...
                    here it has 4 state: entering entered / exiting exited
                    ing states are while it is doing the transition
                     mountOnEnter and unmountOnExit would completely remove or mount
                     the div  */}
                    <Transition
                        in={this.state.show}
                        timeout={
                            {
                                enter:2000,
                                exit:1000
                            }
                        }
                        // these lines would remove ing states!
                        enter={false}
                        exit={true}
                        onEnter={(node)=>{
                            console.log('Enter');
                        }}
                        onExit={(node)=>{
                            console.log('Exit');
                        }}
                       /*  mountOnEnter
                        unmountOnExit */
                    >
                        {state=>
                          /*  <div style={{
                                background:'red',
                                height:'100px',
                                transition:'all 2s ease',
                                opacity: state==='exiting' || state==='exited'
                                         ?0
                                         :1
                        }}>
                            {state}
                        </div> */
                            <div className={`square square-${state}`}>
                                {`square square-${state}`}
                            </div>
                            }
                    </Transition>
                <div className="showDiv"
                     onClick={this.showDiv}>
                     Show/Hide DIV</div>
            </div>

        )
    }
}


export default TransitionComp;