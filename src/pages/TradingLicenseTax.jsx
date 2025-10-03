import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TradingLicenseTax = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Trading License Tax",
      content: [
        {
          type: "heading",
          text: "What is Trading License Tax?"
        },
        {
          type: "paragraph",
          text: "Trading License Tax, also informally known as 'patent', is a tax levied on business activities carried out in defined boundaries of decentralized entities."
        },
        {
          type: "heading",
          text: "Who must register for Trading License Tax?"
        },
        {
          type: "paragraph",
          text: "Any person or business activities carried out in defined boundaries of decentralized entities in Rwanda is required to register for Trading License Tax. It is important to note that the Trading License Tax must be declared and paid regardless of whether the taxpayer actually makes a profit, as long as it is the intention to do so."
        },
        {
          type: "paragraph",
          text: "It is illegal to conduct business activities of any kind without a Trading License Tax certificate."
        },
        {
          type: "paragraph",
          text: "Exemptions from trading licence tax applies to:"
        },
        {
          type: "list",
          items: [
            "Non-commercial public institutions;",
            "Micro-enterprises and small businesses during the first two years following their establishment."
          ]
        },
        {
          type: "heading",
          text: "Example 64"
        },
        {
          type: "paragraph",
          text: "Footie Fun Pub is established in 1 April 2023. As the pub is considered a small enterprise, it will be exempted from Trading License Tax"
        },
        {
          type: "list",
          items: [
            "from 1st April to 31st December 2023",
            "from 1st January to 31st December 2024",
            "from 1st January to 31st March 2025."
          ]
        },
        {
          type: "paragraph",
          text: "By 7th April 2025, Footie Fun Pub will need to declare and pay Trading License Tax for April to December 2025. The deadline for declaring and paying Trading License Tax for 2025 will be 31st March 2025."
        },
        {
          type: "heading",
          text: "How many times must Trading License Tax be paid by the same taxpayer?"
        },
        {
          type: "paragraph",
          text: "If a taxpayer has a head office and branches in Districts, a trading license tax declaration is required for the head office as well as for each branch of his or her business activities basing on the turnover of the previous year for the head office and for each branch."
        },
        {
          type: "paragraph",
          text: "In case a branch does not have or cannot determine its turnover, the trading license tax is declared based on the turnover of the head office."
        },
        {
          type: "paragraph",
          text: "However, if all the branches are located in the same district as the head office, the taxpayer pays the trading license tax according to the turnover of the head office. If the branches are located in a district other than that of the head office, the trading license tax is unique and calculated basing on the turnover of the branch with the highest turnover."
        },
        {
          type: "paragraph",
          text: "This principle doesn't apply to motor vehicles, including motorcycles, and motorboats. If a taxpayer has multiple motor vehicles and motorboats used for profit-oriented activities, Trading License Tax must be paid for each."
        },
        {
          type: "paragraph",
          text: "On the other hand, if a taxpayer carries out multiple activities by the same company at the same premises, Trading License Tax is only paid once for that premises. If a taxpayer carries out different business activities in different buildings, he/she files a trading license tax declaration for each business activity."
        },
        {
          type: "heading",
          text: "Example 65"
        },
        {
          type: "paragraph",
          text: "Lucie has a supermarket business. She has a warehouse where goods are kept, two shops in same district where goods are sold. Lucie does not have to declare and pay Trading License Tax for the warehouse, but is required to declare and pay a single Trading License Tax for both shops. In case the two shops are located in different districts, each shop shall pay a separate trading licence tax. This also applies if the two are carrying different activities either in same district or more than one district."
        },
        {
          type: "paragraph",
          text: "Assume that Lucie owns a truck facilitating delivery of goods:"
        },
        {
          type: "paragraph",
          text: "If the truck is in Lucie's business financial statements, this truck doesn't pay trading licence tax. However, this truck pays trading licence tax if it is not in the financial statement."
        },
        {
          type: "heading",
          text: "What are the rates for Trading License Tax?"
        },
        {
          type: "paragraph",
          text: "The Trading License Tax depends on the annual turnover as per the following table:"
        },
        {
          type: "table",
          headers: ["No", "Turnover", "Annual tax due/per quarter"],
          rows: [
            ["1", "50,000,000,000 and above", "2,000,000/500,000"],
            ["2", "From 25,000,000,000 to 50,000,000,000", "1,500,000/375,000"],
            ["3", "From 1,000,000,000 to 25,000,000,000", "1,000,000/250,000"],
            ["4", "From 200,000,000 to 1,000,000,000", "500,000/125,000"],
            ["5", "From 20,000,000 to 200,000,000", "280,000/70,000"],
            ["6", "From 12,000,000 to 20,000,000", "160,000/40,000"],
            ["7", "From 7,000,000 to 12,000,000", "120,000/30,000"],
            ["8", "From 2,000,000 to 7,000,000", "100,000/25,000"]
          ]
        },
        {
          type: "paragraph",
          text: "There are also other profit-oriented activities with specified flat amount of trading licence tax as per the following table:"
        },
        {
          type: "table",
          headers: ["No", "Activities", "Amount to be paid"],
          rows: [
            ["1", "Profit-oriented activities not registered on income tax, in urban zone.", "60,000/15,000"],
            ["2", "Profit-oriented activities not registered on income tax, in rural zone.", "30,000/7,500"],
            ["3", "Individual transport activities by vehicles.", "40,000/10,000 per vehicle"],
            ["4", "Transport activities by boat.", "20,000/5,000 per boat"],
            ["5", "Transport activities by motor cycle", "8,000/2,000 per moto"]
          ]
        },
        {
          type: "heading",
          text: "Example 67"
        },
        {
          type: "paragraph",
          text: "Intare is a moto driver based in Remera, Kigali. The trading licence tax due for the full tax year for 'Transport activities on motorcycles' is FRW 8,000."
        },
        {
          type: "heading",
          text: "When is the deadline to declare and pay Trading License Tax?"
        },
        {
          type: "paragraph",
          text: "Trading License Tax is to be declared and paid optionally on annually or quarterly basis. The tax period is the calendar year, from 1st January until 31st December. For the annual basis, the deadline to declare and pay Trading License Tax by is 31st January of the same year. For quarter basis, the deadline to declare and pay Trading License Tax by is the end of the first month of the concerned quarter:"
        },
        {
          type: "list",
          items: [
            "Quarter 1: From 1st January to 31st March – Due by 31st January;",
            "Quarter 2: From 1st April to 30th June – Due by 30th April;",
            "Quarter 3: From 1st July to 30th September – Due by 31st July;",
            "Quarter 4: From 1st October to 31st December – Due by 31st October."
          ]
        },
        {
          type: "heading",
          text: "Example 68"
        },
        {
          type: "paragraph",
          text: "Amahoro must declare and pay Trading License Tax to authorise her business activities during the 2023 tax period, from 1st January 2023 until 31st December 2023, by the deadline of 31st January 2023."
        },
        {
          type: "heading",
          text: "What happens if the business activities start or end during the tax period?"
        },
        {
          type: "paragraph",
          text: "If taxable activities begin during a calendar year tax period, the taxpayer may pay Trading License Tax equivalent to the remaining months including the month in which the taxable activities began. Trading License Tax must be declared and paid before beginning the taxable activities."
        },
        {
          type: "heading",
          text: "Example 69"
        },
        {
          type: "paragraph",
          text: "Ubumwe opens a small shop in Musanze in March 2024. The tax due for the full tax year for 'other profit-oriented' activities is FRW 120,000. However, as Ubumwe is only in business for ten out of the twelve months that year, his Trading License Tax due is:"
        },
        {
          type: "paragraph",
          text: "FRW 120,000 * 10/12 = FRW 100,000"
        },
        {
          type: "paragraph",
          text: "If taxable activities end during a calendar year tax period, and the full rate Trading License Tax has been paid for the whole calendar year tax period, the taxpayer may be entitled to a refund, subject to an audit, equivalent to the remaining months excluding the month in which the taxable activities ended or changed."
        },
        {
          type: "paragraph",
          text: "Similarly, if taxable activities change during a calendar year, the taxpayer may be entitled to a refund, or be required to pay additional tax, depending upon the nature of the change in taxable activities."
        },
        {
          type: "paragraph",
          text: "However, taxpayers conducting regular seasonal or periodic activities must pay the full rate Trading License Tax for the whole calendar year tax period, even if the taxable activities do not occur throughout the whole calendar year tax period."
        },
        {
          type: "heading",
          text: "What is the Trading License Tax Certificate?"
        },
        {
          type: "paragraph",
          text: "After declaring and paying Trading License Tax, taxpayers can print a Trading License Tax certificate."
        },
        {
          type: "paragraph",
          text: "The Trading License Tax Certificates must be clearly displayed at the entrance of the business premisses or clearly attached to the motor vehicle (including motorcycles) or motorboat for which the tax was declared and paid. The taxpayer must also be able to present the Trading License Tax Certificate at all times upon request."
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

export default TradingLicenseTax;