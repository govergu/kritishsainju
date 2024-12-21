import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page refresh

    emailjs
      .sendForm(
        "service_yq7hzdj", // Replace with your Service ID
        "template_5d99wpw", // Replace with your Template ID
        e.target, // Pass the form element
        "I-sk3Ki9MMOokl4FL" // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("Message sent sucessfully");
          e.target.reset(); // Clear the form after submission
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>Have a question or want to work together? Drop me a message below!</p>
      <form onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
