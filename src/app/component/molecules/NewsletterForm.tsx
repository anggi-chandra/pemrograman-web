import React from 'react';
import { FooterInput } from '../atoms/FooterInput';
import { FooterButton } from '../atoms/FooterButton';

interface NewsletterFormProps {
  className?: string;
  inputPlaceholder?: string;
  buttonText?: string;
}

export const NewsletterForm = ({ 
  className = "flex flex-col sm:flex-row gap-2",
  inputPlaceholder = "Enter your email address.",
  buttonText = "Subscribe Now"
}: NewsletterFormProps) => {
  return (
    <div className={className}>
      <FooterInput placeholder={inputPlaceholder} />
      <FooterButton>{buttonText}</FooterButton>
    </div>
  );
};