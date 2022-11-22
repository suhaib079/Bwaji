import { useState } from "react";

const defultFormfield = {
    displayName:'',
    email:'',
    password:'',
    confirmpassword:''
}
const SignUpForm =() => {

    const [formFields,setFormFields]=useState(defultFormfield)
    const {displayName,email,password,confirmpassword}=formFields;
    return (
        <div>
            <h1>sign up form</h1>
            <form onSubmit={()=>{}}>

               <label>display name</label> 
               <input type="text" required></input>
               <label>email</label> 
               <input type="email" required></input>
               <label>password</label> 
               <input type="password" required></input>
               <label>confirm password</label> 
               <input type="password" required></input>
               <button type="submit">Sign up</button>
            </form>
        </div>
    )
}
export default SignUpForm;