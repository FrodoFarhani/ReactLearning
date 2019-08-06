import React from 'react'

export default function formFields(props) {
    const renderFields=()=>{
        let formArray=[];
        for (let elementName in props.formData) {
            formArray.push({
                id:elementName,
                settings:props.formData[elementName]
            });
        }
       //console.log(formArray);
        return formArray.map((item,i)=>{
               return(
                        <div key={i}>
                            {renderTemplates(item)}
                        </div>
               )
               
            }
        )
        
    }
    const showLable=(show,lable)=>{
        return show ?
            <label>{lable}</label>
            :null
    }
    const changeHandler=(event,id,blur)=>{
        //console.log(props.formData[id]);
        const newState=props.formData;
        newState[id].value=event.target.value;
        //console.log("state:",newState);
        if (blur) {
            let validData=validate(newState[id]);
            newState[id].valid=validData[0];
            newState[id].validationMessage=validData[1];
        }
        newState[id].touched=blur;
        
        console.log(newState);
        props.change(newState);
    }
    const validate=(element)=>{
        
        let error=[true,''];
        
        if (element.validation.minLen) {
            const valid=element.value.length >= element.validation.minLen;
            const message=`${ !valid ?`* min lenght is ${element.validation.minLen}!`:''}`
            error= !valid ?[valid,message]:error
        }
        if (element.validation.required) {
            const valid=element.value.trim()!=='';
            const message=`${ !valid ?'* required!':''}`
            error= !valid ?[valid,message]:error
        }

        return error;
    }
    const showValidation=(data )=>{
            let errorMessage =null;
            if (data.validation && !data.valid) {
                errorMessage=(
                    <div className="label_error">
                        {data.validationMessage}
                    </div>
                )
            }
            return errorMessage;
    }
    
    const  renderTemplates=(data)=>{
                
        let values=data.settings;
        let formTemplate='';

        switch (values.element) {
            case "input":
                formTemplate=( 
                    <div className="form_element">
                        {showLable(values.lable,values.lableText)}
                        <input
                            /* type={values.config.type}
                            name={values.config.name}
                            placeholder={values.config.placeholder} */
                            {...values.config}
                            value={values.value}
                            onBlur={(event)=>changeHandler(event,data.id,true)}
                            onChange={(event)=>changeHandler(event,data.id,false)}
                        />
                        {showValidation(values)}
                    </div>
                )
                break;
            case "textarea":
                formTemplate=( 
                    <div className="form_element">
                        {showLable(values.lable,values.lableText)}
                        <textarea
                            /* type={values.config.type}
                            name={values.config.name}
                            placeholder={values.config.placeholder} */
                            {...values.config}
                            value={values.value}
                            onChange={(event)=>changeHandler(event,data.id)}
                        />
                    </div>
                )
                break;
            case "select":
                formTemplate=( 
                    <div className="form_element">
                        {showLable(values.lable,values.lableText)}
                        <select  
                            value={values.value}
                            name={values.config.name}
                            onChange={(event)=>changeHandler(event,data.id)}
                        >
                                {values.config.options.map((item,i)=>(
                                    <option
                                        key={i} 
                                        value={item.val}
                                    >{item.text}</option>
                                ))}
                        </select>
                    </div>
                )
                break;
        
            default:
                formTemplate=null;
                break;
        }
        
        return formTemplate;

    }
    return (
        <div>
            {renderFields()}
        </div>
    )
}
