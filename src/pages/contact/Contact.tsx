import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";

import "./Contact.css";

export default function Contact() {

  return (
    <main className="contact">
      <Header />
      <div className="content">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
