import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TourismTaxExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Explanation of Tourism Tax",
      content: [
        {
          type: "heading",
          text: "What is Tourism Tax?"
        },
        {
          type: "paragraph",
          text: "Tourism Tax is a levy paid on accommodation service, which consists of providing a room or place to sleep or rest."
        },
        {
          type: "heading",
          text: "Who must register for Tourism Tax?"
        },
        {
          type: "paragraph",
          text: "A provider of room or place to sleep or rest has the following obligations:"
        },
        {
          type: "list",
          items: [
            "to register for the tourism tax on accommodation with the Tax Administration;",
            "to charge the tourism tax on accommodation;",
            "to remit the tourism tax on accommodation to the Tax Administration within the time period provided for by the Law."
          ]
        },
        {
          type: "heading",
          text: "What is the tax rate for Tourism Tax?"
        },
        {
          type: "paragraph",
          text: "The rate of the tourism tax on accommodation is set at 3% of the amount paid or payable for accommodation, exclusive of value added tax."
        },
        {
          type: "heading",
          text: "Tourism Tax Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable for any taxpayer who provides accommodation services."
        },
        {
          type: "paragraph",
          text: "The 'Tourism' tab has 16 columns. Each row is for a separate accommodation transaction. For each transaction, enter details on:"
        },
        {
          type: "list",
          items: [
            "Property type - On the list of value, select the business type (Hotel, Motel, etc).",
            "Room type – Based on selected property type, select the corresponding room type from the list of value (Single room, double room, etc).",
            "Client name or Code – Indicate the client's name or client code as per internal procedures.",
            "Room number – Indicate the room number according to the internal room numbering approach.",
            "Booking date (DD/MM/YYYY) – Enter the booking date.",
            "Check-in (DD/MM/YYYY) – Enter the check-in date.",
            "Check-out (DD/MM/YYYY) – Enter the exit date.",
            "Nationality – Enter the client's nationality.",
            "Country of residence – Enter the client's country of residence.",
            "Invoice No (SDCID/RECEIPT NUMBER) – Enter the invoice number (E.g: SDC004002498/6795).",
            "Day(s) spent in room I = (calculated based on (F&G) – Enter the number of days spent in the room.",
            "Room price/ per night - Enter the price charged on accommodation services.",
            "Invoice amount without VAT – Enter the amount as per EBM invoice net-off VAT.",
            "Accommodation amount (VAT excl.) – Enter the amount on invoice charged on accommodation services net-off VAT.",
            "Tax due O=(N*3/103) – Enter the amount of tourism tax calculated on 'Accommodation amount (VAT excl.)'"
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

export default TourismTaxExplanation;