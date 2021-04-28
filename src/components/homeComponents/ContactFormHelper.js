import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';

/**
 * @config preparing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be  the same
 * fieldsConfig = settings for each input/textarea field
 */
const config = {
  api: `http://mailform.designversum.com/contact/index.php`,
  successMessage: 'Thank you for contacting me.',
  errorMessage: 'Please fill the complete form',
  fields:{
    firstName: '',
    subject: '',
    email: '',
    msg: ''
  },
  fieldsConfig:  [
   { id: 1, label: 'Name', fieldName: 'firstName', type: 'text',placeholder:'Your Name', isRequired: true , KlassName:'first-name-field'},
   { id: 2, label: 'Subject', fieldName: 'subject', type: 'text', placeholder: 'Subject', isRequired: true , klassName:'subject-field'},
   { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , klassName:'email-field'},
   { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , klassName:'message-field'}
  ]
}
ReactDOM.render(<ContactForm config={config} />, document.getElementById('contact'));
