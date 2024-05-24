import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";

import "./Contact.css";
import { ScrollRestoration } from "react-router-dom";

export default function Contact() {

  return (
    <main className="contact">
      <Header />
      <div className="content">
        <ContactForm />
        <div className="alternate">
          <h3>Another Contact:</h3>
          <p>johnny.m.parra1996@gmail.com</p>
        </div>
        <div className="location">
          <h3>Location:</h3>
          <p>Turlock, CA</p>
        </div>
        <div className="social">
          <h3>Social Media:</h3>
          <span>
            <a href="https://www.linkedin.com/in/juan-parra-developer/" target="_blank">LinkedIn</a>
            <a href="https://github.com/JohnnyParra" target="_blank">GitHub</a>
            <a href="https://www.instagram.com/johnnyparra209/?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr" target="_blank">Instagram</a>
            <a href="https://boxd.it/7UK3B" target="_blank">Letterboxd</a>
          </span>
        </div>
        <div className="extra">
          <p>I’d love to hear from you! Whether you have a question about my projects, want to collaborate, or just want to say hello, feel free to reach out.</p>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </main>
  );
}
