import './modal.css';
import { useState } from 'react';

function Modal({show}) {
    const [form, setForm] = useState({
        username: '',
        email: '',
        phone: '',
        dob: ''
    });


    const handleSubmit =(e)=>{
        let val = e.target.form;
        if(val.email.value && val.phone.value && val.phone.value.length < 10){
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            e.preventDefault();
            return;
        }
        if(val.dob.value > new Date().toISOString().split('T')[0]){
            alert("invalid date of birth. Date of Birth cannot be in the future");
            e.preventDefault();
            return;
        }
        if(val.username.value && val.email.value && val.phone.value && val.dob.value){
            setForm({
                username: "",
                email: "",
                phone: "",
                dob:""
            });  
            e.preventDefault();          
        } 
    }
    return (
        <div className="modal modal-main" style={{display: show ? 'block' : 'none'}}>
            <div className="modal-content">
            <h2>Fill Details</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id='username' required value={form.username} onChange={(e)=>{setForm({username : e.target.value})}}/>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id='email' required value={form.email} onChange={(e)=>{setForm({email : e.target.value})}}/>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id='phone' required  value={form.phone} onChange={(e)=>{setForm({phone : e.target.value})}}/>
                <label htmlFor="dob">Date Of Birth:</label>
                <input type="date" id='dob' required value={form.dob} onChange={(e)=>{setForm({dob : e.target.value})}}/>
                <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Modal;