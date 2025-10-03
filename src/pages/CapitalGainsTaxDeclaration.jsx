import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CapitalGainsTaxDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Capital Gains Tax",
      content: [
        {
          type: "paragraph",
          text: "The declaration process for Capital Gains Tax is the same as for other Withholding Taxes as explained on page 276. The 'Withholdings' tab of the Withholding annexure must be completed, validated and saved as normal."
        },
        {
          type: "paragraph",
          text: "The Capital Gains declaration form is selected by choosing 'WOP – CAPITAL GAINS'. Complete the declaration form, upload the annexure and submit the declaration as normal."
        },
        {
          type: "paragraph",
          text: "In the withholding taxes declaration forms, the total combined values for all transactions for the withholding type during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically."
        },
        {
          type: "heading",
          text: "Example 54"
        },
        {
          type: "paragraph",
          text: "A share sold at FRW 150,000 was acquired at FRW 140,000. This attracts a withholding tax of 10% on the increase in value of shared sold (FRW 150,000- FRW 140,000) *10%. The Capital Gains Tax due for the transaction in this tax period is FRW 1,000."
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

export default CapitalGainsTaxDeclaration;