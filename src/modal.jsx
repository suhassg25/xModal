import './modal.css';
import { useState } from 'react';

function Modal({show, onClose}) {
    const [form, setForm] = useState({
        username: '',
        email: '',
        phone: '',
        dob: ''
    });

    const handleChange = (e) => {
        setForm((prev)=> ({
            ...prev, [e.target.id] : e.target.value
        }));
    }

 const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, dob, phone } = form;

   /* if (!username) {
      alert("Please fill out the username field.");
      return;
    } */
    if (!email) {
      alert("Please fill out the email field.");
      return;
    }
    if (!email.includes('@')) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!phone) {
      alert("Please fill out the phone field.");
      return;
    }
    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (!dob) {
      alert("Please fill out the Date of Birth field.");
      return;
    }

    const enteredDate = new Date(dob);
    const today = new Date();
    if (enteredDate > today) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }
    
  setForm({ username: '', email: '', dob: '', phone: '' });
  };

  const handleOutsideClick = (e) =>{
    if(e.target.className.includes('modal-main')){
       onClose();
    }
  }
    return (
        <div className="modal modal-main" style={{display: show ? 'block' : 'none'}} onClick={handleOutsideClick}>
            <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id='username' value={form.username} onChange={handleChange}/>
                <label htmlFor="email">Email Address:</label>
                <input type="text" id='email' value={form.email} onChange={handleChange}/>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id='phone'  value={form.phone} onChange={handleChange}/>
                <label htmlFor="dob">Date Of Birth:</label>
                <input type="date" id='dob' value={form.dob} onChange={handleChange}/>
                <button className="submit-button" type='submit'>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Modal;