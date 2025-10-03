import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LocalGovernmentTaxesExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Taxes and Fees levied by Decentralised Entities",
      content: [
        {
          type: "heading",
          text: "Introduction to taxes and fees levied by decentralised entities"
        },
        {
          type: "heading",
          text: "What are Local Government Taxes?"
        },
        {
          type: "paragraph",
          text: "Taxes and fees levied by decentralised entities commonly known as Local Government Taxes (LGT) and fees are revenues collected by RRA on behalf of the district authorities. Decentralised entities ensure that landowners, landlords and business owners contribute towards the good governance and improvement of their local communities. In addition, decentralised entities ensure that taxpayers occupying public areas, or taxpayers requiring certain services, pay fair and consistent fees wherever they are in the country."
        },
        {
          type: "paragraph",
          text: "Combined, taxes and fees levied by decentralised entities provide revenues for local government to deliver valuable community development and social protection projects."
        },
        {
          type: "paragraph",
          text: "There are three types of taxes levied by decentralised entities:"
        },
        {
          type: "list",
          items: [
            "Immovable Property Tax, see page 308 for details.",
            "Trading License Tax, see page 319 for details.",
            "Rental Income Tax, see page 327 for details."
          ]
        },
        {
          type: "paragraph",
          text: "There are also a wide range of decentralised entities fees. These can be for taxpayers who conduct profit-oriented activities or who require services or authorisations from District Offices. See page 332 for details of decentralised entities fees."
        },
        {
          type: "paragraph",
          text: "The process of declaring each type of taxes and fees for decentralised entities on the LGT system is explained on page 343."
        },
        {
          type: "heading",
          text: "What is the relationship between RRA and the Districts?"
        },
        {
          type: "paragraph",
          text: "The mandate for collecting taxes and fees levied by decentralised entities was transferred from the district authorities themselves to RRA in 2014. Within RRA, taxes and fees levied by decentralised entities are administered by the Provincial and Decentralized Revenues Division. The mandate was changed because of the greater experience and capacity of RRA in collecting revenues, facilitating taxpayers and modernising processes, which means that taxes and fees levied by decentralised entities can be collected more fairly and efficiently by RRA than by the districts themselves. The collected revenues are directly paid to the corresponding Districts bank account."
        },
        {
          type: "heading",
          text: "How do taxpayers declare taxes and fees levied by decentralised entities?"
        },
        {
          type: "paragraph",
          text: "Taxpayers must declare taxes and fees levied by decentralised entities using the Rwanda Automated Local Government Taxes Management System, referred to as the LGT system. This can be done online. For more details on taxes and fees levied by decentralised entities contact RRA-tax centres, see page 340.or decentralised entity offices."
        },
        {
          type: "paragraph",
          text: "Some taxes and fees levied by decentralised entities can also be declared using M-declaration – see page 357."
        },
        {
          type: "paragraph",
          text: "This Tax Handbook aims to provide all the information necessary for taxpayers to be able declare online or using M-declaration."
        },
        {
          type: "heading",
          text: "What are the advantages of declaring online using the LGT system or using M-declaration?"
        },
        {
          type: "paragraph",
          text: "The LGT system has been designed with taxpayers in mind to make it as easy as possible to declare the required taxes and fees. The advantages of declaring online using the LGT system or using M-declaration are:"
        },
        {
          type: "list",
          items: [
            "Declare taxes anytime, from anywhere.",
            "Avoid travel costs of visiting RRA offices.",
            "Avoid queuing times at RRA offices."
          ]
        },
        {
          type: "heading",
          text: "How do taxpayers register and login to the LGT system?"
        },
        {
          type: "paragraph",
          text: "Taxpayers must visit an RRA office to register with the LGT system. After registering, declarations of taxes and fees levied by decentralised entities and fees can be done online, or with the help of staff at RRA offices. See page 343 for more details."
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

export default LocalGovernmentTaxesExplanation;