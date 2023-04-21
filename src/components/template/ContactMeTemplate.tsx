import React, { useState } from 'react';
import { EmailjsForm } from '../organisms';

interface Type {
  title?: string;
  content?: string;
}

const ContactMeTemplate = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <span className="text-xxl font-Tommy">CONTACT ME</span>
        <EmailjsForm />
      </div>
    </div>
  );
};

export default ContactMeTemplate;
