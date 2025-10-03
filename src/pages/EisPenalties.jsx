import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EisPenalties = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "EIS/EBMs Penalties and Fines",
      content: [
        {
          type: "paragraph",
          text: "The penalties and fines relating to the non-compliance with EBM user obligations or misuse are explained below. These may be applied separately, or in addition to, any penalties and fines relating to Value Added Tax (VAT) explained on page 235."
        },
        {
          type: "heading",
          text: "What are the penalties for a taxpayer who does not have an EIS/EBM, but is required to have?"
        },
        {
          type: "paragraph",
          text: "A taxpayer who does not have an EIS/EBM for a sales location that requires an EIS/EBM is subject to a penalty of:"
        },
        {
          type: "list",
          items: [
            "FRW 200,000 for a first-time offence.",
            "FRW 400,000 for any repeat offences."
          ]
        },
        {
          type: "heading",
          text: "What are the penalties for a taxpayer who fails to comply with any other EIS/EBM user obligations?"
        },
        {
          type: "paragraph",
          text: "A VAT taxpayer who fails to comply with any other five EIS/EBM user obligations, including indicating the true name of the goods, notify RRA of EIS/EBM failure and refraining from deleting invoices inappropriately, is subject to a penalty of:"
        },
        {
          type: "list",
          items: [
            "FRW 200,000 for a first-time offence.",
            "FRW 400,000 for any repeat offences."
          ]
        },
        {
          type: "heading",
          text: "What are the penalties for a taxpayer who has an EBM but fails to issue an EIS/EBM invoice?"
        },
        {
          type: "paragraph",
          text: "A VAT taxpayer who has an operational EIS/EBM but fails to issue an EIS/EBM invoice when required is subject to a penalty of:"
        },
        {
          type: "list",
          items: [
            "Ten (10) times the value of the evaded VAT for a first-time offence.",
            "Twenty (20) times the value of the evaded VAT for any repeat offences."
          ]
        },
        {
          type: "paragraph",
          text: "A non-VAT taxpayer who has an operational EIS/EBM bit fails to issue an EIS/EBM invoice when required is subject to a penalty of:"
        },
        {
          type: "list",
          items: [
            "Twice (2) times the value of the transaction.",
            "Four (4) times the value of the transaction for any repeat offences."
          ]
        },
        {
          type: "heading",
          text: "Example 36"
        },
        {
          type: "paragraph",
          text: "Lucie is a VAT-registered taxpayer. Lucie is caught not issuing an EBM invoice for a FRW 59,000 transaction with VAT evaded of FRW 9,000. As it is her first offence, Lucie is subject to a penalty of:"
        },
        {
          type: "paragraph",
          text: "FRW 9,000 * 10 = FRW 90,000."
        },
        {
          type: "heading",
          text: "What are the penalties for a taxpayer who has an EIS/EBM but issues an undervalued EIS/EBM invoice?"
        },
        {
          type: "paragraph",
          text: "A taxpayer who has an operational EIS/EBM but issues an undervalued EIS/EBM invoice is subject to a penalty of:"
        },
        {
          type: "list",
          items: [
            "Ten (10) times the value of the evaded VAT for a first-time offence.",
            "Twenty (20) times the value of the evaded VAT for any repeat offences."
          ]
        },
        {
          type: "paragraph",
          text: "A non-VAT taxpayer who has an operational EIS/EBM bit fails to issue an EIS/EBM invoice when required is subject to a penalty of:"
        },
        {
          type: "list",
          items: [
            "Twice (2) times the value of the transaction.",
            "Four (4) times the value of the transaction for any repeat offences."
          ]
        },
        {
          type: "heading",
          text: "What other penalties can taxpayers be subject to for non-compliance with EIS/EBM requirements?"
        },
        {
          type: "paragraph",
          text: "Additional penalties available to RRA for non-compliance with EIS/EBM requirements can include:"
        },
        {
          type: "list",
          items: [
            "Closure of business activities for a period of thirty (30) days.",
            "Being barred from bidding for public tenders.",
            "Being named in nationwide newspapers."
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

export default EisPenalties;