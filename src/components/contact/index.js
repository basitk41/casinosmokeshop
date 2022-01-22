import "./style.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-inner">
        <section className="title">
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12423.045754378956!2d-71.16911970429253!3d41.677473684569094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4ff0be8dbe8d7%3A0x55e2bcffe161a72e!2sCasino%20Smoke%20Shop!5e0!3m2!1sen!2s!4v1642881130928!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              className="map"
            ></iframe>
          </div>
          <div className="details">
            <h1>Monday to Saturday</h1>
            <h2>10 AM to 9 PM</h2>
            <h1>Sunday</h1>
            <h2>12 PM to 9 PM</h2>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
