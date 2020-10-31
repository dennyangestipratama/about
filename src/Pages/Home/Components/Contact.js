import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert';

import Input from '../../../Components/Input'
import TextArea from '../../../Components/TextArea'
import SendSVG from '../../../Assets/icons/send.svg'
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../../Services/EmailJS'

import { ReactComponent as MailSVG } from '../../../Assets/icons/mail.svg'

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
            }, () => Swal("Email Sent!", "Thanks for the message, I will reply it as soon as I can", "success"))
         }, err => {
            this.setState({
               message: '',
               name: '',
               phone: '',
               email: '',
               isSubmitting: false,
            }, () => Swal("Error", "Sorry there's an error, please try again, or you can do it manual by email me at dennyangesti@gmail.com", "error"))
         })
      })
   }

   render() {
      const { name, email, message, phone } = this.state
      return (
         <section id='section-contact' className="section section-contact">
            <MailSVG />
            <header>
               <div className="section-title">
                  <div className="title-line"></div>
                  <Fade left distance={'30px'} duration={1800} delay={200}>
                     <h1>Contact</h1>
                  </Fade>
               </div>
               <Fade top distance={'30px'} duration={1800}>
                  <h2>If you have any questions, let me know and I'll get back to you as soon as possible. I would love to help and look forward to the opportunity to work with you.</h2>
               </Fade>
            </header>
            <body className='contact'>
               <Fade bottom distance={'20px'} duration={1800}>
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
               </Fade>
            </body>
         </section>
      )
   }
}
