import React, { Component } from 'react'
import emailjs from 'emailjs-com';

import Input from '../Components/Input'
import TextArea from '../Components/TextArea'
import SendSVG from '../Assets/icons/send.svg'
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../Services/EmailJS'

import { ReactComponent as MailSVG } from '../Assets/icons/mail.svg'

export default class Contact extends Component {
   state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      isSubmitting: false,
      isSuccess: false,
   }

   inputName = (event) => {
      this.setState({ name: event.target.value })
   }

   inputEmail = (event) => {
      this.setState({ email: event.target.value })
   }

   inputPhone = (event) => {
      this.setState({ phone: event.target.value })
   }

   inputMessage = (event) => {
      this.setState({ message: event.target.value })
   }

   handleSubmit = (event) => {
      const { message, name, phone, email } = this.state
      event.preventDefault();
      this.setState({ isSubmitting: true }, () => {
         emailjs.send(SERVICE_ID, TEMPLATE_ID, { message, name, phone, email }, USER_ID).then(response => {
            this.setState({
               message: '',
               name: '',
               phone: '',
               email: '',
               isSubmitting: false,
               isSuccess: true
            })
         }, err => {
            this.setState({
               message: '',
               name: '',
               phone: '',
               email: '',
               isSubmitting: false,
            })
         })
      })
   }

   render() {
      const { isSubmitting, isSuccess, name, email, message, phone } = this.state
      return (
         <section className="section section-contact">
            <MailSVG />
            <header>
               <div className="section-title">
                  <div className="title-line"></div>
                  <h1>Contact</h1>
               </div>
               <h2>If you have any questions, let me know and I'll get back to you as soon as possible. I would love to help and look forward to the opportunity to work with you.</h2>
            </header>
            <body className='contact'>
               <form onSubmit={this.handleSubmit}>
                  <div className="contact-input">
                     <Input
                        text={'Name*'}
                        id={'name'}
                        type={'text'}
                        required={true}
                        onChange={this.inputName}
                        value={name}
                        placeholder={'Input name or company here'}
                     />
                     <Input
                        text={'Email*'}
                        id={'email'}
                        type={'email'}
                        required={true}
                        onChange={this.inputEmail}
                        value={email}
                        placeholder={'Input email here'}
                     />
                     <Input
                        text={'Phone'}
                        id={'phone'}
                        type={'number'}
                        required={false}
                        onChange={this.inputPhone}
                        value={phone}
                        placeholder={'Input phone here'}
                     />
                  </div>
                  <div className="contact-area">
                     <TextArea
                        text={'Message*'}
                        id={'message'}
                        type={'text'}
                        required={true}
                        cols={'30'}
                        rows={'10'}
                        onChange={this.inputMessage}
                        value={message}
                        placeholder={'Input message here'}
                     />
                     <button type='submit'>
                        <img src={SendSVG} alt="send" />
                     </button>
                  </div>
               </form>
            </body>
         </section>
      )
   }
}
