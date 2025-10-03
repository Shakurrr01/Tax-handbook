import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WithholdingTaxesDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Withholding Taxes (WHT 15% and WHT 3%)",
      content: [
        {
          type: "paragraph",
          text: "The declaration process for withholding taxes is similar to other domestic taxes, see the guide to Declaring Domestic Taxes using E-Tax on page 95 for more details."
        },
        {
          type: "heading",
          text: "Annexures"
        },
        {
          type: "paragraph",
          text: "Firstly, download the Withholding Annexures from the E-Tax website, see page 95 for more detail on downloading annexures."
        },
        {
          type: "paragraph",
          text: "It is important to note that each type of withholding tax (including the different types of income subject to Withholding 15%) must complete their own annexure and declaration separately. The whole declaration process should be completed for each type of withholding tax before beginning the next type."
        },
        {
          type: "paragraph",
          text: "The Withholding Annexure file has three tabs. Only the 'Withholdings' Tab needs to be completed, validated and saved for withholding taxes, the other tabs are for Gaming Taxes, see page 282 for more details on Gaming Taxes. See page 97 if the taxpayer has any problems when validating annexures."
        },
        {
          type: "heading",
          text: "Withholdings Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable for any taxpayer who has withheld tax of 15% (except on gambling proceeds) or 3%."
        },
        {
          type: "paragraph",
          text: "The 'Withholdings' tab has 8 columns. Each row is for a separate transaction where tax has been withheld. For each transaction, enter details on:"
        },
        {
          type: "list",
          items: [
            "Withholdee's TIN – Enter the Taxpayer Identification Number (TIN) of the taxpayer receiving the income, from whom tax is being withheld and paid on their behalf. If they do not have a TIN, enter '999999999' (nine '9's).",
            "Withholdee's Name – Enter the name of the taxpayer receiving the income, from whom tax is being withheld and paid on their behalf.",
            "Invoice/Transaction Number - Enter the unique invoice number of the transaction.",
            "Date of Withholding (dd/mm/yyyy) – Enter the date of the transaction, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.",
            "Nature of Goods/Services - Enter a brief description of the goods or services for which income is being withheld.",
            "Amount on which to Withhold – Enter the total amount of income which is subject to withholding tax, excluding other taxes.",
            "Rate Used – Enter the rate of tax withheld, without the percentage symbol. For example, withholding tax of 3% should be entered as '3'.",
            "Amount – Enter the amount of tax withheld. This should equal 'Amount on Which to Withhold' multiplied by 'Rate Used'%."
          ]
        },
        {
          type: "heading",
          text: "Withholding Taxes declaration"
        },
        {
          type: "paragraph",
          text: "Once the relevant annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the declaration, see page 101 for more detail on selecting the relevant declaration."
        },
        {
          type: "paragraph",
          text: "However, as previously mentioned it is important to note that each type of withholding tax, including the different types of income subject to withholding 15%, must be declared separately."
        },
        {
          type: "paragraph",
          text: "In addition, it is important to select the correct type of withholding tax, with the different types of income subject to WHT 15% listed as 'WOP – INTEREST', 'WOP – DIVIDEND' and so on. Withholding tax of 15% on payments for goods and services supplied by non-registered taxpayers is listed as 'WOP – SERVICES'. Finally, WHT 3% is listed as 'WOP – PUBLIC SUPPLIES'. WOP refers to 'Withholding On Payments'."
        },
        {
          type: "paragraph",
          text: "The withholding taxes declaration forms require similar data to the annexures that have previously been completed. The important distinction is that in the withholding taxes declaration forms, the total combined values for all transactions for the withholding type during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically."
        },
        {
          type: "heading",
          text: "Example 44"
        },
        {
          type: "paragraph",
          text: "An example WHT 15% declaration form is entered below. This is a withholding tax of 15% on dividends. The WHT 15% due for this taxpayer in this tax period is FRW 877,500."
        },
        {
          type: "paragraph",
          text: "After saving the declaration form, upload the annexures and then compare with the declaration form, see page 105 for more detail on uploading annexures and comparing with declarations."
        },
        {
          type: "heading",
          text: "Example 45"
        },
        {
          type: "paragraph",
          text: "Continuing the example of the WHT 15% declaration above, the comparison between this WHT 15% declaration and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted."
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
          text: "Who must pay withholding taxes penalties and fines?"
        },
        {
          type: "paragraph",
          text: "Any penalties and fines are the liability of the 'withholding agent', where the withholding agent is defined as the source of the taxable income who is required to declare and pay the withholding tax."
        },
        {
          type: "heading",
          text: "What if the withholding agent fails to withhold tax?"
        },
        {
          type: "paragraph",
          text: "A withholding agent who fails to withhold tax at the point of transaction, is still liable to declare and pay the withholding tax, including any penalties and fines."
        },
        {
          type: "paragraph",
          text: "However, the withholding agent is entitled to recover the principal amount from the recipient of the income."
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

export default WithholdingTaxesDeclaration;