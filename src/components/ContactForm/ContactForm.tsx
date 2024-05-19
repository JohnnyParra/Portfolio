import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface alertInfo {
  display: boolean;
  message: string;
  type: string;
}


export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors }} = useForm<FormData>();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [alertInfo, setAlertInfo] = useState<alertInfo>({
    display: false,
    message: "",
    type: "",
  });

  console.log(process.env)

  emailjs.init({
    publicKey: process.env.VITE_PUBLIC_KEY,
    limitRate: {
      id: "app",
      throttle: 10000,
    }
  })

  const toggleAlert = (message: string, type: string) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };
  

  const onSubmit = async(data: FormData) => {
    setDisabled(true);
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.VITE_SERVICE_ID as string,
        process.env.VITE_TEMPLATE_ID as string,
        templateParams,
        process.env.VITE_PUBLIC_KEY as string
      );
      toggleAlert("Thanks for sending a message!" , "success");
    } catch(e) {
      console.log(e);
      toggleAlert("Oops. Something went wrong.", "danger");
    } finally {
      reset();
      setDisabled(false);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} >
      <span>Contact Me</span>
        <div className="row">
          <div className="col">
            <input 
              className="formInput"
              type="text" 
              placeholder="Name"
              {...register("name", {
                required: {value: true, message: "Please enter your name"},
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less"
                }
              })}
            />
            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
          </div>
          <div className="col">
            <input 
              className="formInput"
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: true,
                pattern:  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
            />
            {errors.email && <span className='errorMessage'>Please enter a valid email address</span>}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input 
              className="formInput"
              type="text"
              placeholder="Subject"
              {...register("subject", {
                required: {value: true, message: "Please enter a subject"},
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters"
                }
              })} 
            />
            {errors.subject && <span className='errorMessage'>{errors.subject.message}</span>}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea
              className="formInput"
              rows={3}
              placeholder="Message"
              {...register("message", {
                required: true
              })} 
            />
            {errors.message && <span className='errorMessage'>Please enter a message</span>}
          </div>
        </div>
        <button className="submit-btn" disabled={disabled} type="submit">Submit</button>
        {alertInfo.display && <div className="row">{alertInfo.message}</div>}
      </form>
    </div>
  );
}