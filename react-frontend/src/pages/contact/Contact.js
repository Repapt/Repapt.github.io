import React from 'react';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.handleEntry = this.handleEntry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEntry(event) {
    const field = event.target.id;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [field]: value,
    })
  }

  handleSubmit() {
    const template_id = "personal_website";
    const variables = this.state;
    window.emailjs.send(
      'gmail',
      template_id,
      variables
    ).then(res => {
      if(res.ok){
        alert("Message successfully sent!")
      } else {
        throw Error("Message failed to send.")
      }
    }).catch(alert)
  }

  render() {
    return (
      <div className="page">
        <div className="text">
          <h2 className="contact-title">How to reach me</h2>
          <div className="contact-options">
            <div className="email">
              <h4>Feel free to shoot me a message:</h4>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleEntry}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEntry}
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={this.state.subject}
                onChange={this.handleEntry}
              />
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleEntry}
              />
              <div className="contact-button" onClick={this.handleSubmit}>Send</div>
            </div>
            <div className="socials">
              <h4>Or DM me on any of these social media platforms:</h4>
            </div>  
          </div>      
        </div>
      </div>
    );
  }
}

export default Contact;
