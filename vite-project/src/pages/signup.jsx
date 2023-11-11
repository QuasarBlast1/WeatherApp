import React from "react";
import { useEffect, useState } from 'react'


    



// Creates sign up info logging into database
export default function SignUp() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    
    function handleInput(props) {
        props.preventDefault();
        const form = props.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson); 
        console.log(Object.values(formJson));
        // setFirstName(formJson.firstName)
        // setLastName(formJson.lastName)
        // setEmail(formJson.email)

    }
    
    return (
        <>
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "500vh",
            }}
        >
            <h2>Sign Up for more info:</h2>
            <form method="post" onSubmit={handleInput}>
                <label>First Name: 
                    <input type="text" 
                            name="name" 
                            defaultValue="" />
                </label>
                <br />
                <label>Last Name: 
                    <input type="text" 
                            name="lastName" 
                            defaultValue="" />
                </label>
              <br />
              <label style={{padding: 1}}>   Email: 
                    <input type="text" 
                            name="email" 
                            defaultValue="" />
                </label>
              <br />
              <hr />
              <button type="submit">Sign Up: </button>
            </form>
        </div>
        </>
    )
}