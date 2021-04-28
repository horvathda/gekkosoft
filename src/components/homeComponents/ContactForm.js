import React, {useState} from 'react';
import axios from 'axios';



class ContactForm extends Component {


  const form = (props) => {
    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});
   
    /**
    * @function handleFormSubmit
    * @param e { obj } - form event
    * @return void
    */
    const handleFormSubmit = e => {
      e.preventDefault();
      axios({
        method: "post",
        url: `http://mailform.designversum.com/contact/index.php`,
        headers: { "content-type": "application/json" },
        data: formData
      })
        .then(result => {
          if (result.data.sent) {
            setmailSent(result.data.sent)
            setError(false)
          } else {
            setError(true)
          }
        })
        .catch(error => setError( error.message ));
  
    };
    /**
      * @function handleChange
      * @param e { obj } - change event
      * @param field { string } - namve of the field
      * @return void
      */
     const handleChange = (e, field) => {
      let value = e.target.value;
      setFormData({
        ...formData,
        [field]: value,
      });
      e.preventDefault();
  
    };
  
      

    render(){
        const {name, email, message, emailStatus} = this.state;
        return(
            <div className="formBlock" onSubmit={this.submitForm}>
                {emailStatus ? emailStatus : null}
                <form>
                    <label>
                        <input type="text" value={name} onChange={this.handleCHange('name')} placeholder="Name" />
                    </label>
                    <label>
                        <input type="text" value={email} onChange={this.handleCHange('email')} placeholder="Email" />
                    </label>
                    <label>
                        <textarea type="text" value={message} onChange={this.handleCHange('message')} placeholder="Message"></textarea>
                    </label>
                    <label>
                        <input type="submit" className="submitBtn" value="Submit" inClick={handleFormSubmit}/>
                    </label>
                </form>
            </div>
        );
    }
}
}

export default ContactForm;


