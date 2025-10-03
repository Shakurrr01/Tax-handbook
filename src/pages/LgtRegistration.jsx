import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ClipboardList, Building, Users, Phone, Mail, MapPin } from 'lucide-react';

const LgtRegistration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Registering for Decentralised Entities Taxes and Fees",
      content: [
        {
          type: "heading",
          text: "Registering for Decentralised Entities Taxes and Fees"
        },
        {
          type: "paragraph",
          text: "Taxpayers must register for Decentralised Entities Taxes and fees with the help of staff at tax centres, listed on page 340 except for Trading License Tax for which registration is done upon registering a business in RDB system."
        },
        {
          type: "paragraph",
          text: "In order to register on the LGT system, the taxpayer must provide identification: either a Rwandan ID or Passport. The taxpayer must also provide their address and a mobile phone number. The taxpayer will be registered on the LGT system, and tax accounts will be set up for the relevant Decentralised Entities Taxes and fees by RRA staff."
        },
        {
          type: "paragraph",
          text: "In addition, when registering for Rental Income Tax, Immovable Property Tax, or Tax on Sale of Immovable Property, taxpayers must provide the Unique Plot Identifier (UPI) for each of their properties."
        },
        {
          type: "paragraph",
          text: "Once registered, the taxpayer will be provided with a username, TIN and a password for the LGT system. The taxpayer will also receive an SMS and/or email confirming the registration."
        },
        {
          type: "paragraph",
          text: "If the taxpayer later is required to pay any additional Decentralised Entities Taxes and fees for which they are not yet registered for, the taxpayer must return to any tax centre or RRA offices to set up the accounts for each of those Decentralised Entities Taxes and fees."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <ClipboardList size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{currentContent.title}</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to registering for Local Government Taxes and fees
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
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

export default LgtRegistration;