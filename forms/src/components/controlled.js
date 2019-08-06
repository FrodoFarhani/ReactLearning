import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:'',
        lastname:''  
    }
    handleNameChange=(event)=>{
       console.log(event.target.value);
       this.setState({
            name:event.target.value
       });
    }
    handleLastNameChange=(event)=>{
       console.log(event.target.value); 
       this.setState({
            lastname:event.target.value
       });
    }
    handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        
    }
    render(){
        return(
            <div className="container">
               <form onSubmit={this.handleFormSubmit}>
                   <div className="form_element">
                       <label>Enter Name</label>
                       <input type="text"
                              value={this.state.name}
                              onChange={this.handleNameChange}
                        />
                   </div>
                   <div className="form_element">
                       <label>Enter LastName</label>
                       <input type="text"
                              value={this.state.lastname}
                              onChange={this.handleLastNameChange}
                       />
                   </div>
                   <button type="submit">Register</button>
               </form>
            </div>
        )
    }
}

export default Controlled;