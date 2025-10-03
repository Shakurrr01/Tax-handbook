import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CapitalGainsTaxExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Explanation of Capital Gains Tax",
      content: [
        {
          type: "heading",
          text: "What is Capital Gains Tax?"
        },
        {
          type: "paragraph",
          text: "Capital Gains Tax applies to the profit from the sale or transfer of shares, licenses, debt instruments, options, guarantees and similar assets."
        },
        {
          type: "paragraph",
          text: "Capital Gains Tax ensures that shareholders pay tax on the income gained at the point of sale of these assets."
        },
        {
          type: "heading",
          text: "Who must register for Capital Gains Tax?"
        },
        {
          type: "paragraph",
          text: "The tax on profit from the sale of shares is withheld, declared and paid by the company whose shares were sold."
        },
        {
          type: "heading",
          text: "What is the tax rate of Capital Gains Tax?"
        },
        {
          type: "paragraph",
          text: "The tax rate of Capital Gains Tax is 10%. This is charged on the basis of the profit from the sale of shares, licenses, debt instruments, options, guarantees and similar assets where profit equals sale price minus purchase price."
        },
        {
          type: "heading",
          text: "When is the deadline to declare and pay Capital Gains Tax?"
        },
        {
          type: "paragraph",
          text: "Capital Gains tax must be declared and paid by the 15th of the month after the transaction was made."
        },
        {
          type: "paragraph",
          text: "However, as Capital Gains Tax is declared on a case-by-case basis, companies do not have to wait for the deadline to declare and pay. It is recommended to declare and pay Capital Gains Tax as soon as possible after making the transaction."
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

export default CapitalGainsTaxExplanation;