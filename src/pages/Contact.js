import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMsg } from "../redux/ContactSlice";
import'../styles/contact.css';


const Contact = () => {
  const [msg, setMsg] = useState({name:"",
  email:"",
  location:"",
  phone:"",
  message:""

  })
  const dispatch = useDispatch();
  return (
    <div className="contacts">
      <div className="contact_info">
        <h2>CONTACT</h2>
        <div id="map">
        
        </div>
        <p>
          1ème Étage, Bureau N°2
          <br />
          36, Avenue Boumessouer, Djerba, Tunisie
        </p>
        <p>
          Phone: (00216) 75 620 274
          <br />
          GSM: (00216) 20 714 971
          <br />
          Email:
          <a href=""> decoluxtunisia@gmail.com</a>
          <br />
          Web:
          <a href="">www.decoluxtunisia.com</a>
        </p>
      </div>
      <div className="contact-card">

<h2>Contact us</h2>
<form>
<br/><br/>
<input placeholder='Name *'   onChange={(e) => setMsg({ ...msg, name: e.target.value })}/>
<br/><br/>
<input placeholder='E.mail *'   onChange={(e) => setMsg({ ...msg, email: e.target.value })}/>
<br/><br/>
<input placeholder='Location *' onChange={(e) => setMsg({ ...msg, location: e.target.value })}/>
<br/><br/>
<input placeholder='Phone Number *'  onChange={(e) => setMsg({ ...msg, phone: e.target.value })}/>
<br/><br/>
<input style={{height:'100px'}} placeholder='Message *'  onChange={(e) => setMsg({ ...msg, message: e.target.value })}/>
<br/><br/>
<div className="list_btn">
<input type="reset" className="myButton" value="Reset"/>
        <input type="submit" value="Send" className="myButton" onClick={() => {dispatch(addMsg(msg))}}/>
        </div>
</form>

    </div>
      
    </div>
  );
};

export default Contact;
