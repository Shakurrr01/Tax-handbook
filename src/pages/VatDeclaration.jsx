import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const VatDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring VAT",
      content: [
        {
          type: "paragraph",
          text: "The declaration process for VAT is similar to other domestic taxes, see the guide to Declaring Domestic Taxes using E-Tax on page 95 for more details."
        },
        {
          type: "heading",
          text: "Annexures"
        },
        {
          type: "paragraph",
          text: "Firstly, download the VAT Annexures from the E-Tax website, see page 95 for more details on downloading annexures."
        },
        {
          type: "paragraph",
          text: "The VAT Annexure file has five tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved. See page 97 if the taxpayer has any problems when validating annexures."
        },
        {
          type: "heading",
          text: "Sales Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable for taxpayer who has made sales during the tax period. These must be entered regardless of whether the sales were taxable, exempt, zero-rated or exported."
        },
        {
          type: "paragraph",
          text: "This sales data can be entered manually, or can be copied from the Electronic Invoicing System (EIS), a type of EBM Back Office and pasted into the Sales tab. For more information on copying sales data from the EBM Back Office, see the EIS section on page 245."
        },
        {
          type: "paragraph",
          text: "The 'Sales' tab has 11 columns. Each row is for a separate transaction. For each transaction, enter details on:"
        },
        {
          type: "list",
          items: [
            "Buyer TIN – For sales to other businesses, enter the Taxpayer Identification Number (TIN) of the buyer. For sales to final consumers, this can be left empty, where the system will convert it to '999999999' (nine '9's).",
            "Buyer Name – As above, for sales to other businesses, enter the name of the buyer. For sales to final consumers, this can be left empty.",
            "Nature of Goods – Enter a brief description of the goods or services that have been sold.",
            "Invoice Number – Enter the unique invoice number of the transaction; for example, SDC001000000/001.",
            "Invoice Date (dd/mm/yyyy) – Enter the date of the transaction in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.",
            "Total Amount of Sales (VAT Exclusive) – Enter the value of the transaction, excluding VAT.",
            "Exempted Sales Amount – Enter the value of sales of goods or services that were exempt from VAT.",
            "Zero Rated Sales Amount – Enter the value of sales of goods or services that were zero-rated for VAT purposes. Although exports are also zero-rated, do not include these in this column, instead enter exports in the 'Exports Amount column'.",
            "Exports Amount – Enter the value of sales of goods or services that were exported and sold outside Rwanda and therefore zero-rated for VAT purposes.",
            "Taxable Sales – Enter the total value of taxable sales. This is equal to 'Total Amount of Sales (VAT Exclusive)' minus ('Exempted Sales Amount' + 'Zero Rated Sales Amount' + 'Exports Amount').",
            "VAT – Enter the total output VAT. This is equal to 'Taxable Sales' * 18%."
          ]
        },
        {
          type: "heading",
          text: "Purchases Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayer who has purchased inputs from within Rwanda during the tax period for use in their goods and services sold."
        },
        {
          type: "paragraph",
          text: "The 'Purchases' tab is very similar to the 'Sales' tab except that it refers to the locally purchased inputs that have gone into the goods and services listed in 'Sales'."
        },
        {
          type: "paragraph",
          text: "Fill in the details in the same manner as before, except that it is now the Supplier TIN and Supplier Name that is required. In addition, there is no longer differentiation for exempt, zero-rated or exports, just the 'Amount without VAT' and the 'VAT' paid on local purchases."
        },
        {
          type: "heading",
          text: "VAT Importation Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable for any taxpayer who has imported inputs during the tax period for use in their goods and services sold. This tab uses information from the customs declaration of the imported inputs."
        },
        {
          type: "paragraph",
          text: "The 'VAT Importation' tab has 7 columns. Each row is for a separate import transaction. For each transaction, enter details on:"
        },
        {
          type: "list",
          items: [
            "Customs Station – Enter the border post where the goods or services were imported. This is listed under the 'Office of Destination' in the top right of the customs declaration.",
            "Customs Declaration (DD COM) Number – Enter the unique customs declaration number, for example: 'C39012'. This is listed under the 'Customs Reference' in the top right of the customs declaration.",
            "Customs Declaration Date – Enter the date of the importation, which must be entered in the format of DD/MM/YYYY such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted. This is listed next to the 'Customs Reference' in the top right of the customs declaration.",
            "Nature of Goods – Enter a brief description of the goods that have been imported. This is listed in the 'Packages and descriptions of goods' section in the middle of the customs declaration.",
            "Origin – Enter the name of the country where the goods or services purchased from. This means that if a product first comes from the United Kingdom but arrives via boat to Kenya and lorry through Uganda to the Gatuna border, the origin country is United Kingdom. This is listed under the 'Country of Origin' or 'Cty. orig. Code' in the middle of the customs declaration.",
            "Customs Value (CIF) – Enter the value of the goods or services upon entering Rwanda in Rwandan Francs. CIF stands for Cost, Insurance and Freight which means that this value includes the cost of the goods and services from when they originated, but also includes the costs of insurance and freight or transport in getting the goods to Rwanda. The value in FRW is under the 'Statistical Value' in the middle right of the customs declaration.",
            "VAT Paid – Enter the VAT paid on the imports. This is equal to the 'V02' Amount in the 'Calculation of Taxes' section in the middle of the customs declaration."
          ]
        },
        {
          type: "heading",
          text: "Deductible VAT Reverse Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayer who has received services from foreign suppliers during the tax period."
        },
        {
          type: "paragraph",
          text: "The 'Deductible VAT Reverse' tab has 6 columns. Each row is for a separate transaction. For each transaction, enter details on:"
        },
        {
          type: "list",
          items: [
            "Suppliers Name – Enter the name of the foreign supplier who provided the services. Note: The Taxpayer Identification Number (TIN) is not required as VAT Reverse Charge is only required from taxpayers who received services from non-resident suppliers who are not registered in Rwanda if the services are not available in the local market.",
            "Nature of Services Supplied – Described above.",
            "Invoice Number – Described above.",
            "Invoice Date (dd/mm/yyyy) – Described above.",
            "Total Invoice Amount – Enter the total amount paid for the services to the foreign supplier, excluding VAT.",
            "VAT Reverse Charge Amount – Enter the VAT to be paid by the taxpayer. If all services are taxable, this is equal to 'Total Invoice Amount' * 18%."
          ]
        },
        {
          type: "heading",
          text: "VAT Retained Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayer who has sold goods or services to public institutions and had the VAT withheld and paid on their behalf by the public institution."
        },
        {
          type: "paragraph",
          text: "The 'VAT Retained' tab has 8 columns. Each row is for a separate import transaction. For each transaction, enter details on:"
        },
        {
          type: "list",
          items: [
            "Public Institution's TIN – Enter the Taxpayer Identification Number (TIN) of the public institution to which the goods or service were sold.",
            "Public Institution's Name – Enter the name of the public institution to which the goods or service were sold.",
            "Nature of Goods or Services – Described above.",
            "Invoice Number – Described above.",
            "Date of Invoice – Described above.",
            "Date Delivered – Enter the date the goods or services were delivered or completed, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.",
            "Amount on Invoice (VAT Exclusive) – Enter the amount of the invoice, excluding VAT.",
            "Withheld Amount (18%) – Enter the amount of VAT that was withheld and paid on the taxpayers' behalf by the public institution, typically Invoice (VAT Exclusive) * 18%."
          ]
        },
        {
          type: "heading",
          text: "VAT Declaration"
        },
        {
          type: "paragraph",
          text: "After all the applicable annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the declaration, see page 101 for more detail on selecting the relevant declaration."
        },
        {
          type: "paragraph",
          text: "The declaration form requires similar data to the annexures that have previously been completed. The important distinction is that in the declaration form, the total combined values for all transactions during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically."
        },
        {
          type: "heading",
          text: "Example 34"
        },
        {
          type: "paragraph",
          text: "An example VAT declaration form is entered below. The final VAT due for this taxpayer in this tax period is FRW 18,900."
        },
        {
          type: "paragraph",
          text: "After saving the declaration form, upload the annexures and then compare with the declaration form, see page 105 for more detail on uploading annexures and comparing with declaration forms."
        },
        {
          type: "heading",
          text: "Example 35"
        },
        {
          type: "paragraph",
          text: "Continuing the example of the VAT declaration form above, the comparison between this VAT declaration form and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted."
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
          text: "What are the penalties for a taxpayer who is not registered for VAT, but is required to be?"
        },
        {
          type: "paragraph",
          text: "A taxpayer who is not registered for VAT but is required to be registered for VAT is subject to a penalty of:"
        },
        {
          type: "list",
          items: [
            "Fifty percent (50%) of the amount of value added tax output for the entire period of operation without value added tax output, where Value Added Tax registration is required",
            "An administrative fine of one hundred (100%) of the tax indicated on any invoice issued by a retailer not registered for VAT and pays the tax indicated on that invoice"
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

export default VatDeclaration;