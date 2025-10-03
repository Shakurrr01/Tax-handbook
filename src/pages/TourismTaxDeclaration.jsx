import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TourismTaxDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Tourism Tax",
      content: [
        {
          type: "paragraph",
          text: "The declaration process for Tourism Tax is the same as for other Taxes as explained on page 281. The 'Tourism' tab must be completed, validated and saved as normal."
        },
        {
          type: "paragraph",
          text: "The Tourism Tax declaration form is selected by choosing 'Tourism Tax'. Complete the declaration form, upload the annexure and submit the declaration as normal."
        },
        {
          type: "paragraph",
          text: "In the declaration forms, the total combined values for all transactions for the Tourism Tax type during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically."
        },
        {
          type: "paragraph",
          text: "However, in contrary to other domestic taxes, the taxpayer offering accommodation services has to register the property type. This is done using the following steps:"
        },
        {
          type: "list",
          items: [
            "Go to E-Tax portal and login",
            "Go to Update details",
            "Click on Tourism property",
            "Select Tourism Property from the list of value",
            "Select Property Type",
            "Select Room type",
            "Fill Number of rooms",
            "Tick Ownership",
            "Click the \"Add Property\" button to submit the updated tourism property details"
          ]
        },
        {
          type: "heading",
          text: "Example 55"
        },
        {
          type: "paragraph",
          text: "An example of Tourism Tax computation: A client paid FRW 50,000 VAT inclusive for accommodation service. What is the Tourism Tax to be remitted to the Tax Administration?"
        },
        {
          type: "list",
          items: [
            "Amount paid by the client: 50,000",
            "VAT (50,000*18/118): (7,127)",
            "Selling price (Excluding VAT): 42,373",
            "Tourism Tax (42,373*3/103): (1,234)",
            "Net for service provider: 41,139"
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

export default TourismTaxDeclaration;