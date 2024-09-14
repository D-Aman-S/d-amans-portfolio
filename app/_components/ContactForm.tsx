// ContactForm.tsx
import React, { useState } from "react";

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ name, email, message }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Extract values here and do whatever is needed (e.g., sending an email)
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);
    console.log(formProps); // Replace with actual logic
  };

  return (
    <form
      id="contact-form"
      className="font-fira_retina text-menu-text w-full max-w-[370px] sm:max-w-[320px] sm:max-h-[400px] p-4 text-menu-text"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name-input" className="mb-3 text-labelText">
          _name:
        </label>
        <input
          type="text"
          id="name-input"
          name="name"
          placeholder={name}
          className="p-2 mb-5 bg-[#011221] border-2 border-[#1E2D3D] rounded-md placeholder-slate-600 text-sm "
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email-input" className="mb-3 text-labelText">
          _email:
        </label>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder={email}
          className="p-2 mb-5 bg-[#011221] border-2 border-[#1E2D3D] rounded-md placeholder-slate-600 text-sm"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message-input" className="mb-3 text-labelText">
          _message:
        </label>
        <textarea
          id="message-input"
          name="message"
          placeholder={message}
          className="p-2 bg-[#011221] border-2 border-[#1E2D3D] rounded-md placeholder-slate-600 resize-none h-[150px] text-sm"
          required
        ></textarea>
      </div>
      <button
        id="submit-button"
        type="submit"
        className="py-2 px-4 mt-5 bg-[#1E2D3D] rounded-md text-white cursor-pointer hover:bg-[#263B50] transition-colors duration-300 ease-in-out"
      >
        submit-message
      </button>
    </form>
  );
};

export default ContactForm;
