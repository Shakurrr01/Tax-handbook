import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertTriangle, Building, Users, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const LgtPenalties = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Decentralised Entities Taxes and Fees Penalties and Fines",
      content: [
        {
          type: "heading",
          text: "What are the penalties for late declaration of Decentralised Entities Taxes and Fees?"
        },
        {
          type: "paragraph",
          text: "A Decentralised Entities Tax and Fee registered taxpayer who has failed to submit a tax declaration within the required time must still declare and pay, and is subject to an additional three penalties:"
        },
        {
          type: "list",
          items: [
            "1.5% interest of the unpaid tax due per month",
            "A fine equal to 40% of the tax due if the declaration is submitted late",
            "An additional fine for late payment of 10% of the tax due, up to a maximum of FRW 100,000"
          ]
        },
        {
          type: "heading",
          text: "Example 78"
        },
        {
          type: "paragraph",
          text: "Amahoro declared Trading License Tax for the 2024 tax period late. Instead of declaring by the 31st January 2024, she finally declared and paid on 18th March 2024 (within two months late). The tax due for this tax period was FRW 160,000."
        },
        {
          type: "paragraph",
          text: "Amahoro's penalty for declaring late is:"
        },
        {
          type: "list",
          items: [
            "(1) FRW 160,000 * 1.5% * 2 = FRW 4,800",
            "(2) FRW 160,000 * 40% = FRW 64,000",
            "(3) FRW 160,000 * 10% = FRW 16,000."
          ]
        },
        {
          type: "paragraph",
          text: "In addition to the FRW 160,000 tax due, Amahoro must thus pay FRW 4,800 + FRW 64,000 + FRW 16,000 = FRW 84,800."
        },
        {
          type: "heading",
          text: "What are the penalties for late payment of Decentralised Entities Taxes and fees?"
        },
        {
          type: "paragraph",
          text: "A Decentralised Entities Tax and Fee registered taxpayer who has submitted a tax declaration, but failed to pay the full amount of taxes due within the required time must still pay the full amount of taxes due, and is subject to two additional penalties:"
        },
        {
          type: "list",
          items: [
            "1.5% interest of the unpaid tax due per month",
            "10% of the unpaid tax due, up to a maximum of FRW 100,000"
          ]
        },
        {
          type: "paragraph",
          text: "The same penalties also apply to late payment of Decentralised Entities fees."
        },
        {
          type: "heading",
          text: "What are the penalties for not registering for Trading License Tax or not presenting a Trading License Tax certificate when requested?"
        },
        {
          type: "paragraph",
          text: "It is illegal to conduct business activities without having declared and paid Trading License Tax for the concerned tax period. Failure to present a valid Trading License Tax certificate when requested is subject to a penalty of FRW 10,000. In addition, the district has the right to temporarily close down any business activities."
        },
        {
          type: "heading",
          text: "What are the penalties for a taxpayer who declares incomplete, incorrect or fraudulent information?"
        },
        {
          type: "paragraph",
          text: "A taxpayer who submits a declaration, but is found to have declared incomplete, incorrect or fraudulent information, must pay the unpaid tax due and is subject to an additional penalty of 40% of the tax due."
        },
        {
          type: "heading",
          text: "What are the rules concerning interest?"
        },
        {
          type: "paragraph",
          text: "The rules concerning interest are the same as for interest on domestic taxes, as explained on page 116."
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
              <AlertTriangle size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{currentContent.title}</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to penalties and fines for Local Government Taxes and fees
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

export default LgtPenalties;