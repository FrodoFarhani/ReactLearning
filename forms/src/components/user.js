import React, { Component } from 'react';
import FormFields from '../components/Widgets/Forms/formFields';
class User extends Component {

    state = {
        formData:{
            name:{
                element:'input',
                value:'',
                lable:true,
                lableText:'Name',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastname:{
                element:'input',
                value:'',
                lable:true,
                lableText:'Last Name',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your last name'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            message:{
                element:'textarea',
                value:'',
                lable:true,
                lableText:'Message',
                config:{
                    name:'message_input',
                    rows:4,
                    cols:36
                },
                validation:{
                    required:false
                },
                valid:true,
                touched:false,
                validationMessage:''
            },
            age:{
                element:'select',
                value:'',
                lable:true,
                lableText:'Age',
                config:{
                    name:'age_input',
                    options:[
                        {val:1,text:'10-20'},
                        {val:2,text:'20-30'},
                        {val:3,text:'+30'},
                    ]
                },
                validation:{
                    required:false
                },
                valid:true,
                touched:false,
                validationMessage:''
            },
        }
    }

     updateForm=(newState)=>{
        this.setState({
            formData:newState
        });
    }

    hanleFormSubmit=(event)=>{
        event.preventDefault();
        let dataToSubmit={};
        let isValid=true;

        for (let key in this.state.formData) {
            dataToSubmit[key]=this.state.formData[key].value;
        }
        for (let key in this.state.formData) {
            isValid=this.state.formData[key].valid && isValid;
        }

        if (isValid) {
            console.log("submit:",dataToSubmit);
        }
        

    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.hanleFormSubmit}>
                    <FormFields
                        formData={this.state.formData}
                        onblur={(newState)=>this.updateForm(newState)}
                        change={(newState)=>this.updateForm(newState)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;