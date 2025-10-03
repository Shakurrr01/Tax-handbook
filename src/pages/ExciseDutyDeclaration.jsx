import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ExciseDutyDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Excise Duty",
      content: [
        {
          type: "paragraph",
          text: "The declaration process for Excise Duty is similar to other domestic taxes, see the guide to Declaring Domestic Taxes using E-Tax on page 95 for more details."
        },
        {
          type: "heading",
          text: "Annexures"
        },
        {
          type: "paragraph",
          text: "Firstly, download the Excise Duty Annexures from the E-Tax website, see page 95 for more detail on downloading annexures. The Excise Annexure file has two tabs."
        },
        {
          type: "heading",
          text: "Raw Materials Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable for all taxpayers to record their register of raw materials used in the manufacturing of taxable products during the tax period."
        },
        {
          type: "paragraph",
          text: "Each raw material used for production of each product on each date is required to have its own row in the annex. For example, if two raw materials are used to produce two separate products on eight days of production, then (2 * 2 * 8 = 32) 32 rows are required in the annexure."
        },
        {
          type: "list",
          items: [
            "Product Name – Enter the type or brand of product that is being produced. This does not have to specify amounts or unit sizes.",
            "Production Date – Enter the date of production, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.",
            "Name of the Raw Materials Used – Enter the name of the manufactured product.",
            "Opening Stock – Enter the opening stock (in given units) of the raw material at the beginning of that day's production.",
            "Note: The units that are used can be chosen by the taxpayer, i.e., grams, kilograms or tonnes, but should remain consistent for that raw material. The units that are used are not written in the annexure, only numbers.",
            "Quantity of Raw materials locally purchased – Enter the units of raw material used purchased locally.",
            "Quantity of Raw materials imported - Enter the units of raw material used purchased abroad.",
            "Quantities Used for Production – Enter the amount of stock (in given units) of the raw material during that day's production.",
            "Quantities Spoiled – Enter the amount of stock (in given units) of the raw material that was spoiled during that day's production.",
            "Closing Stock – Enter the amount of stock (in given units) of the raw material remaining at the end of that day's production. This should equal Opening Stock – Quantities Used for Production – Quantities Spoiled."
          ]
        },
        {
          type: "heading",
          text: "Excise Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable for all taxpayers to record their sales of taxable products sold during the tax period. There are different Excise tabs for cigarette, telephone and for other excisable products. The information to complete in each tab is almost similar. In this Tax Handbook the tab 'Excise others' is explained."
        },
        {
          type: "paragraph",
          text: "Each product type sold on each date for each specific unit price is required to have its own row in the annex. For example, if two different sized products of the same brand are sold on the same day, these are required to have two separate rows."
        },
        {
          type: "list",
          items: [
            "Date of Delivery – Enter the exit date",
            "Item Name – Enter excisable product name",
            "Container Type – Select the type of the container",
            "Quantity per container produced(ml/gr) – Enter the number of units in a single container in millilitre or in gram depending of the nature of the product.",
            "Unit of measurement - Select either (ml) for mil-litter or (gr) for milligram depending of the nature of the product.",
            "Package type – Select one of the listed package types",
            "Quantity in the package – Enter the number of units of the product in a package as per package type",
            "Total Packages in Stores – Enter the number of units of package produced in the store",
            "Total Package Out of Factory – Enter the number of the package to be sold",
            "Quantity Out of Factory – Convert the number of units to be sold into Kilograms or litres",
            "Total Adjustment – Enter converted number of units to be sold into litres or kilograms",
            "Total Export – Enter converted number of units to be sold outside the country into litres or kilograms",
            "Total Taxable Units – Enter the number of units to be sold (in Kg/lt) minus the number of units to be sold outside the country (manufactured for exported)",
            "Unit price – Enter the value of recorded units",
            "Total Taxable Value – Enter the product of unit price times total taxable units (column M*N)",
            "Tax Due – Enter the total tax due of all units sold (including exports). This should equal Total Taxable Value multiplied by the excise tax rate for that product.",
            "Package in KG/Liter remaining in Stock – Enter the number of units that are not yet sold and remain in the factory."
          ]
        },
        {
          type: "heading",
          text: "Excise Declaration"
        },
        {
          type: "paragraph",
          text: "Once all the Excise Duty annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the Excise Duty declaration, see page 101 for more detail on selecting the relevant declaration."
        },
        {
          type: "paragraph",
          text: "The Excise Duty declaration requires similar data to the Excise Duty Annexures that have previously been completed. The important distinction is that in the Excise Duty declaration, the total combined values for all transactions during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically."
        },
        {
          type: "heading",
          text: "Example 40"
        },
        {
          type: "paragraph",
          text: "Excise declaration is entered below. The Excise Duty due for this taxpayer in this tax period is FRW 192,000."
        },
        {
          type: "paragraph",
          text: "After saving the Excise Duty declaration form, upload the Excise Duty annexures and then compare with the Excise Duty declaration form, see page 105 for more detail on uploading annexures and comparing with declaration forms."
        },
        {
          type: "paragraph",
          text: "Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load."
        },
        {
          type: "paragraph",
          text: "Click 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. See page 421 for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines."
        },
        {
          type: "heading",
          text: "What are the penalties for failing to keep a tax stamp register?"
        },
        {
          type: "paragraph",
          text: "A domestic producer or importer who does not keep:"
        },
        {
          type: "list",
          items: [
            "Stamp registers, records or related documents",
            "Stamp reconciliation statements"
          ]
        },
        {
          type: "paragraph",
          text: "is subject to an administrative fine between million Rwandan francs (FRW 1,000,000) and two million Rwandan francs (FRW 2,000,000)."
        },
        {
          type: "heading",
          text: "What are the consequences for incorrectly applying tax stamps?"
        },
        {
          type: "paragraph",
          text: "A domestic producer or importer of products who:"
        },
        {
          type: "list",
          items: [
            "Does not affix tax stamps to appropriate products",
            "Does not affix tax stamps incorrectly",
            "Affixes tax stamps to products in a manner contrary to rules set forth by the Authority",
            "Making an overprint or defaces tax stamps",
            "Submits an incorrect or incomplete tax stamp reconciliation statement",
            "Applies tax stamps to products for which they are not intended",
            "Sells products which are subject to excise duty without tax stamps"
          ]
        },
        {
          type: "paragraph",
          text: "Is, upon conviction, subject to a fine of between one million Rwandan francs (FRW 1,000,000) and two million Rwandan francs (FRW 2,000,000) or to imprisonment for a term of six (6) months to one (1) year."
        },
        {
          type: "paragraph",
          text: "When the perpetrator of the offence referred to in this Article is a person other than an individual, such a person is liable to a fine of not less than FRW 5,000,000 but not more than FRW 10,000,000. In case of recidivism within a period not exceeding two years, the fine is doubled"
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

export default ExciseDutyDeclaration;