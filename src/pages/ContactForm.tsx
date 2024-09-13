import React, { FormEvent, useState, ChangeEvent, useRef } from 'react';
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

type FormState = {
  email: string;
  name: string;
  message: string;
}

type ServiceMessage = {
  class: string;
  text: string;
}
//formspark
const formId = '5VhSzGnX2';
const formSparkUrl = `https://submit-form.com/${formId}`;
const recaptchaKey = '6LeeSrsgAAAAAC77Qq93jjwwlvfUDSyyJQTDhbPW';


const initialFormState = {
  email: '',
  name: '',
  message: '',
};

export default function Contactform() {
const recaptchaRef = useRef<any>();  
const [formState, setFormState] = useState<FormState>(initialFormState);
const [submitting, setSubmitting] = useState<boolean>(false);
const [message, setMessage] = useState<ServiceMessage>();
const [recaptchaToken, setRecaptchaToken] = useState<string>();
const submitForm = async (event: FormEvent) => {
  event.preventDefault();
  setSubmitting(true);
  await postSubmission();
  setSubmitting(false);
};

const postSubmission = async () => {
  const payload = {
    ...formState, 
    "g-recaptcha-response": recaptchaToken
  };

  try {
    const result = await axios.post(formSparkUrl, payload);
    console.log(result);
    setMessage({
      class: 'bg-green-500',
      text: 'Thank you for your message, AD will respond soon.',
    });
    setFormState(initialFormState);
    recaptchaRef.current.reset();
    } catch(error){
      console.log(error);
      setMessage({
        class: 'bg-red-500',
        text: 'Sorry, something went wrong, please try again or use e-mail directly if this message repeats.',
      });
    }
  }

const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { id, value } = event.target;
  const formKey = id as keyof FormState;
  const updateFormState = {...formState};
  updateFormState[formKey] = value;
  setFormState(updateFormState);
};

const updateRecaptchaToken = (token: string | null) => {
  setRecaptchaToken(token as string);
};

  return (
    <div className="contactform">
      {message && (
        <div className={`"contactmessage" ${message.class}`}> 
          {message.text}
        </div>
        )}
        <form className="flex flex-col" onSubmit = {submitForm}>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={updateFormControl} type="text" className="contactname" id="name" value={formState.name} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={updateFormControl} type="text" className="contactemail" id="email" value={formState.email} />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea onChange={updateFormControl} className="contactmessage" id="message" value={formState.message} />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
          <button type="submit" disabled={submitting} className="submit">
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
    </div>
  )
}