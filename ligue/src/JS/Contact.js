import '../CSS/Contact.css';
import '../CSS/Commun.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { nom, email, message } = e.target.elements
    let conFom = {
      nom: nom.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="fontFamily marginBottom container mt-5"> <br/>
      <h2 className="mb-3">Formulaire de Contact</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="nom">
            Nom
          </label>
          <input className="form-control" type="text" id="nom" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          Envoyer
        </button>
      </form>
      <br/>
      <div className='iframe'>
              <iframe className="myFrame" title="myFrame"   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410694684!2d2.276995235800789!3d48.858833639301146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1669548701639!5m2!1sfr!2sfr"> 
              </iframe>
          </div>
    </div>
  )
}
export default Contact