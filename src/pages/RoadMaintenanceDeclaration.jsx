import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const RoadMaintenanceDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Road Maintenance Levy",
      content: [
        {
          type: "paragraph",
          text: "Road Maintenance Levy can be declared using one of the following means of declaration:"
        },
        {
          type: "heading",
          text: "Through E-tax:"
        },
        {
          type: "list",
          items: [
            "Login in to your E-Tax account",
            "Navigate to Motor Vehicle",
            "MVDeclaration",
            "Click MV- Road levy Declaration",
            "Select the year",
            "Choose Undeclared vehicles for declaration (Declared vehicles is for review of declared MV)",
            "Select ALL or one by one or a batch of MV that share the payment (One single RRA ref Number shall be produced for selected MV)",
            "Click the \"declare selected vehicles\" button",
            "Click on \"Acknowledgment receipt\"",
            "Use doc ID on the acknowledgment receipt to pay the tax due"
          ]
        },
        {
          type: "heading",
          text: "Through M-declaration:"
        },
        {
          type: "list",
          items: [
            "Dial *800#",
            "Choose 1 for English or Choose 2 for Kinyarwanda",
            "Choose 1 for Motor cycles/vehicles",
            "Chose 1 for Declaration",
            "Choose 2 for Road Levy",
            "Chose 1 for Declaration",
            "Enter TIN as per MV registration card",
            "Select year",
            "Enter Motor Plate Number as per MV registration card",
            "Enter 2 and Submit",
            "Enter 1 to confirm your details",
            "View and use the doc ID to pay the tax due"
          ]
        },
        {
          type: "heading",
          text: "Through RRA Website"
        },
        {
          type: "list",
          items: [
            "Visit www.rra.gov.rw",
            "Click on declare Motor Vehicle levy for road maintenance",
            "Fill NID and Phone number for nationals or Passport and email for foreigners",
            "Enter received OTP (via SMS/Email)",
            "Enter TIN",
            "Enter Plate number",
            "Verify Information",
            "Select year",
            "Click the \"submit declaration\" button",
            "Click on \"Acknowledgment receipt\"",
            "Use doc ID on the acknowledgment receipt to pay the tax due."
          ]
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <div className="page-container">
      <h1 className="professional-main-title">{currentContent.title}</h1>
      
      <div className="content-section">
        {currentContent.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index} className="content-paragraph">{item.text}</p>;
          } else if (item.type === 'heading') {
            return <h2 key={index} className="content-heading">{item.text}</h2>;
          } else if (item.type === 'list') {
            return (
              <ul key={index} className="content-list">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="content-list-item">{listItem}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default RoadMaintenanceDeclaration;