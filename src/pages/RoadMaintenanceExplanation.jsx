import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const RoadMaintenanceExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Road Maintenance Levy",
      content: [
        {
          type: "heading",
          text: "Explanation of Road Maintenance Levy"
        },
        {
          type: "heading",
          text: "What is Road Maintenance Levy Tax?"
        },
        {
          type: "paragraph",
          text: "Road Maintenance Levy is a tax imposed on petrol, gas oil, and motor vehicles to fund road maintenance."
        },
        {
          type: "paragraph",
          text: "The levy on petrol and gas oil is collected at the customs point."
        },
        {
          type: "paragraph",
          text: "The levy on new or already registered motor vehicles is declared and paid annually to the Domestic Taxes Department, no later than 31st December of each year."
        },
        {
          type: "heading",
          text: "Who must register for Road Maintenance Levy?"
        },
        {
          type: "paragraph",
          text: "There is no registration process for the Road Maintenance Levy. Simply possessing a taxable vehicle automatically makes it subject to this tax."
        },
        {
          type: "heading",
          text: "What is the tax rate for the Road Maintenance Levy?"
        },
        {
          type: "table",
          headers: ["Category", "Levy Amount (FRW)"],
          rows: [
            ["Car", "50,000"],
            ["Jeep", "50,000"],
            ["Pick-up", "100,000"],
            ["Microbus", "100,000"],
            ["Minibus", "100,000"],
            ["Bus", "100,000"],
            ["Truck", "120,000"],
            ["Half-trailer", "120,000"],
            ["Trailer", "150,000"]
          ]
        },
        {
          type: "heading",
          text: "What are the exemptions for the Road Maintenance Levy?"
        },
        {
          type: "list",
          items: [
            "Motor vehicles of the Government of Rwanda;",
            "Motor vehicles of high commissions, embassies and diplomats accredited to Rwanda;",
            "Motor vehicles of international organizations having signed an agreement with the Republic of Rwanda."
          ]
        },
        {
          type: "heading",
          text: "How can one apply for an exemption from the Road Maintenance Levy?"
        },
        {
          type: "list",
          items: [
            "Login in to your E-Tax account",
            "Navigate to Online requests",
            "Online requests",
            "Under request type select Exemption for moto vehicle road levy",
            "Click view.",
            "Select category of exemption:",
            "oGovernment,",
            "oHigh Commissions,",
            "oEmbassies and diplomats accredited to Rwanda,",
            "oInternational organizations",
            "Submit exemption and wait for approval notification"
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
          } else if (item.type === 'table') {
            return (
              <div key={index} className="table-container">
                <table className="content-table">
                  <thead>
                    <tr>
                      {item.headers.map((header, headerIndex) => (
                        <th key={headerIndex} className="table-header">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="table-cell">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default RoadMaintenanceExplanation;