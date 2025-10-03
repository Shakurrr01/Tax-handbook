import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EisExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Electronic Invoicing System (EIS) - Explanation of Electronic Invoicing System",
      content: [
        {
          type: "heading",
          text: "What is the Electronic Invoicing System?"
        },
        {
          type: "paragraph",
          text: "The Electronic Invoicing System (EIS) formerly known as EBM (Electronic Billing Machine) refers to various methods of printing RRA certified invoices and sending sales data to RRA in real-time. EIS is not a type of tax, but helps to improve bookkeeping and Value Added Tax (VAT) collection. EIS invoices are required to be provided to buyers for every sales transaction by every registered taxpayer (EBM for all)."
        },
        {
          type: "paragraph",
          text: "EIS will be used to refer to electronic billing machines (EBMs) as well as software used to print RRA certified invoices (such as VSDC). There are two versions of EBMs. The new EBM version 2.1 (EBM 2.1) and EBM 2.0, both in a form of software now available for taxpayers to install onto desktop or laptop computers, see page 237 for more details. VSDC can be incorporated with privately provided billing systems."
        },
        {
          type: "paragraph",
          text: "EISs have proven benefits to tax administration and RRA is committed to increasing and enforcing the uptake and use of EISs. EISs have also been introduced in many other countries around the world and are a key priority in RRA's vision of becoming 'a model revenue administration optimally financing national needs'."
        },
        {
          type: "paragraph",
          text: "Taxpayers are encouraged to take advantage of the functionality provided in EBM 2.1. The advantages of EBM 2.1 are outlined later in this section."
        },
        {
          type: "paragraph",
          text: "This Tax Handbook will focus on EBM 2.1 which is the latest version."
        },
        {
          type: "paragraph",
          text: "For any questions regarding EIS/EBMs, contact the Tax Control and Operational Support Division within RRA directly by calling 078818 5702."
        },
        {
          type: "heading",
          text: "What are the benefits of EIS/EBMs?"
        },
        {
          type: "paragraph",
          text: "There are numerous benefits of EIS/EBMs, both to compliant taxpayers and to the tax administration. These benefits to the taxpayer, to RRA and to Rwanda include:"
        },
        {
          type: "list",
          items: [
            "EIS/EBM sales data can be copied and pasted into the 'Sales' tab when completing the VAT annexures, making it quicker and easier for taxpayers to declare and pay VAT, see page 245 for more details on this process.",
            "Improving bookkeeping and stocktaking for taxpayers through using EIS/EBMs to record the exact items and prices being sold.",
            "Simplifying the audit process, reducing the time and interruption of taxpayer's daily operations",
            "Reducing the potential for tax evasion, ensuring that taxpayers can compete fairly, and increasing the tax revenues for public spending."
          ]
        },
        {
          type: "heading",
          text: "Which taxpayers must have EIS/EBMs?"
        },
        {
          type: "paragraph",
          text: "All registered taxpayers are required to have and use EIS/EBM at each of their sales locations."
        },
        {
          type: "heading",
          text: "What are various types of EBM2.1 Solutions?"
        },
        {
          type: "paragraph",
          text: "EBM 2.1 as an upgraded EIS version is available with various solutions where taxpayers may choose the solution that fit best their business operations and sizes. And each solution is available for free of charge."
        },
        {
          type: "list",
          items: [
            "EBM Mobile Application: This is solution for micro and small non-VAT registered taxpayers with turnover less than twenty million by the time of application and is installed in smart phone with latest android version and with internal storage capacity from 8GB and above.",
            "EBM2.1 Client Software: EBM2.1 Client Software is for large, medium, small or micro taxpayers either VAT registered or not. Taxpayer must possess a computing device (Desktop, laptop, tablet or POS, PDA) with latest windows version from 10.0.17 and above or android version 8.0 and above. The IOS and MacOS devices are not compatible with the current EBM software.",
            "Online EBM: This is a Web based invoicing solution for micro and small both VAT and non-VAT registered taxpayers selling only services and with turnover less than twenty million by the time of application.",
            "VSDC: Virtual Sales Data Controller: VSDC is for taxpayers having their own private invoicing that adopts both online offline mode and after being certified by RRA, these systems are integrate with EBM system to issue certified sales invoices.",
            "OSDC: Online Sales Data Controller: OSDC Online sales data controller is for taxpayers having their own private invoicing that works only if connected on internet and after being certified by RRA, these systems are integrate with EBM system to issue certified sales invoices."
          ]
        },
        {
          type: "heading",
          text: "How can taxpayers obtain EBM 2.1?"
        },
        {
          type: "paragraph",
          text: "Taxpayers requesting EBM 2.1 must submit an application form, which can be found at https://myrra.rra.gov.rw/basic/login/indexLogin and follow the steps of Login (existing myRRA user) and Sign Up (new MyRRA user)."
        },
        {
          type: "list",
          items: [
            "Step 1: Once a taxpayer gets a username (TIN) and password, he/she logs in into myRRA as per the following screen:",
            "Step 2: Click on LOGIN, enter the TIN and password;",
            "Step 3: Click service request button on the top right corner, then click EBM2.1 button;",
            "Step 4: Fill service information and attach the required documents then click Send button;",
            "Step 5: Processing of application by RRA staff;",
            "Step 6: If the application is accepted, click 'Registration' button and fill the following key information:",
            "Serial No (Windows OS machine you can run this command: wmic bios get serial number in cmd command interface);",
            "Model No (For example, HP Envy, Dell etc);",
            "EBM Client Software: For windows OS users choose, EBM2.1 Installer. If you are intending to use Tablet, choose EBM2.1 Tablet (Android).",
            "Step 7: Download the setup of EBM2.1 software as shown below: The software is automatically downloaded.",
            "Step 8: Unzip the file once the software is downloaded",
            "Right click on the file and then click Extract All;",
            "Click Extract;",
            "Double clicking EBM2xWPFSetupPRODUCTIONV23 file;",
            "Click Next, then Install and Ok",
            "Step 9: Click Confirm and wait for 30 seconds;",
            "Step 10: Click Initialize button;",
            "Step 11: Click on EBM 2.1 icon shortcut to start using EBM;",
            "Step 12: Create the user accounts by providing User Id (TIN) and default password (rra123), then click Login Button"
          ]
        },
        {
          type: "heading",
          text: "What do I require to obtain EBM 2.1?"
        },
        {
          type: "paragraph",
          text: "If you would like to obtain EBM 2.1, bring to RRA Headquarters:"
        },
        {
          type: "list",
          items: [
            "RDB Business Registration Certificate",
            "VAT Registration Certificate for VAT registered taxpayers",
            "If you are the owner of the company, your National ID or Passport",
            "If you are not the owner of the company, the Power of Attorney and National or Passport of the Owner"
          ]
        },
        {
          type: "paragraph",
          text: "Taxpayers will have EBM 2.1 installed on their machine. In addition, the user must first be trained how to use EBM 2.1."
        },
        {
          type: "heading",
          text: "What are the advantages of EBM Version 2.1 (EBM 2.1)?"
        },
        {
          type: "paragraph",
          text: "The advantages of EBM 2.1 include:"
        },
        {
          type: "list",
          items: [
            "Extracting data automatically from suppliers also with EBM 2.1 and Customs, allowing the taxpayer to also copy and paste into the 'Purchases' and 'VAT Importation' tabs when completing the VAT annexures, making it quicker and easier for taxpayers to declare and pay VAT.",
            "Providing the taxpayer with greater information over their own stock and supply chain;",
            "When an EBM 2.1 taxpayer makes a purchase with another domestic retailer and receives an EBM 2.1 invoice, this purchase will automatically be loaded to the buyer's EBM 2.1 as a purchase;",
            "When an EBM 2.1 taxpayer declares an import at customs, using the same TIN supplied for EBM 2.1, this import will automatically be loaded to the importer's EBM 2.1 as a purchase;",
            "RRA provides free remote technical support for EBM 2.1. The 'Team View'/'Any Desk' function allowing the taxpayer and RRA to work remotely together to fix any problems, without needing to visit RRA offices.",
            "Multiple EBM 2.1 user accounts can be created for one enterprise. These accounts can be created with different user access rights, as required;",
            "EBM 2.1 can be connected to the taxpayer's existing internet connection."
          ]
        },
        {
          type: "heading",
          text: "How can taxpayers copy sales data into the VAT Sales Annexure?"
        },
        {
          type: "paragraph",
          text: "One of the advantages to using EBMs is that a monthly report containing all sales is available to be accessed online, and can be copied and pasted directly into the Sales tab of the VAT annexure when declaring. This reduces the time taken to complete the VAT annexures."
        },
        {
          type: "paragraph",
          text: "To view and download the EBM monthly reports, visit: https://ebm2.rra.gov.rw/ follow the link and login to the EBM back office using the username (TIN) and password. If a taxpayer does not know their EBM back-office password, they should call the RRA call centre on 3004."
        },
        {
          type: "paragraph",
          text: "Once logged in, the taxpayer can click 'VAT Annexure', select the relevant month, and click 'Excel Download'. This can then be copied and pasted into the sales tab of the VAT annexures, see page 245 for more details."
        },
        {
          type: "heading",
          text: "Where can I find information about EBM 2.1 usage?"
        },
        {
          type: "paragraph",
          text: "A client manual on the use of EBM 2.1 is available in the EBM section of the 'Domestic Tax Services' page on the RRA website at https://www.rra.gov.rw/en/ebm-electronic-billing-machine"
        },
        {
          type: "heading",
          text: "What is a Virtual Sales Data Controller (VSDC)?"
        },
        {
          type: "paragraph",
          text: "A VSDC can be used to integrate local sales management systems/private billing system with the requirements of EBM 2.1."
        },
        {
          type: "paragraph",
          text: "Businesses can then continue to use their own retail management software package, while complying with the modalities of EBM requirements."
        },
        {
          type: "paragraph",
          text: "A client manual on the use of VSDC is available in the EBM section of the 'Domestic Tax Services' page on the RRA website at https://www.rra.gov.rw/en/ebm-electronic-billing-machine"
        },
        {
          type: "paragraph",
          text: "For further information and training on EBM 2.1, please visit the RRA EBM 2.1 training centre at RRA HQ."
        },
        {
          type: "heading",
          text: "How do taxpayers use EBMs to provide EBM invoices?"
        },
        {
          type: "paragraph",
          text: "EBMs must be used to produce EBM invoices for every sales transaction, whether business to business, business to government or businesses to final consumers."
        },
        {
          type: "paragraph",
          text: "The typical process for using original EBMs involves entering the quantity, price, and code of each item being sold. For sales to other businesses, the taxpayer must enter the client's TIN and the purchase code provided by the client to protect their TIN. For non-business clients, the taxpayer should enter the client's phone number instead."
        },
        {
          type: "paragraph",
          text: "Once all items in a transaction have been entered, the taxpayer must print the EBM invoice and provide it to the consumer. Alternatively, at the end of the business day, the taxpayer can print a daily report of all EBM invoices."
        },
        {
          type: "heading",
          text: "What is purchase code and how to request it?"
        },
        {
          type: "paragraph",
          text: "Purchase code is used for buyer TIN protection. This feature was introduced by RRA to protect buyers' TINs as a security measure in the EBM system and to prevent misuse of buyer TINs. Therefore, no registered taxpayer is allowed to make purchases for resale purposes without a purchase code issued by the RRA system."
        },
        {
          type: "heading",
          text: "Process to request purchase code"
        },
        {
          type: "paragraph",
          text: "Through USSD *800#:"
        },
        {
          type: "list",
          items: [
            "Step 1: The buyer dials *800# in the calling menu of the telephone and press YES. Welcome to M-declaration Select language 1.English 2.Kinyarwanda 3.Press o to exit",
            "Step 2: Select 4 and press SEND to access EBM service",
            "Step 3: Select 2 to request code for purchase Under purchase code request: Enter Buyer TIN: ex: 1222*** Press * to main menu Press 00 to exit",
            "Step 4: Enter the Seller TIN in the space provided Enter Seller TIN: ex: 1222*** Press * to main menu Press 00 to exit",
            "Step 5: Type 1 to confirm that the information provided is true and you need the purchase code",
            "Step 6: Receive the SMS containing the requested purchase code Therefore, the received purchase code is given to the seller to generate invoice to buyer's TIN"
          ]
        },
        {
          type: "paragraph",
          text: "Through MyRRA: https://myrra.rra.gov.rw/main/service/indexPurchaseInitiation"
        },
        {
          type: "list",
          items: [
            "Step 1: Access MyRRA portal - Under the login page, click on button name [Click here to request purchase code] - User is redirected to purchase code request page",
            "Step 2: Fill in the following information - Enter Phone Authorized by Buyer - Enter Buyer TIN - Enter Seller TIN",
            "Step 3: Click on 'Get Purchase Code' button - System validates the information provided and generate purchase code if validation succeeded - Buyer get SMS containing the requested purchase code on the registered phone provided"
          ]
        },
        {
          type: "heading",
          text: "What if the taxpayer enters an EBM invoice incorrectly, or wishes to cancel/refund or discount a transaction?"
        },
        {
          type: "paragraph",
          text: "If a taxpayer wishes to issue a refund or makes a mistake when entering a transaction, they can cancel the entire invoice if it has already been approved. If the invoice is still pending approval, the taxpayer can adjust it by removing specific items, changing quantities, or cancelling it entirely. Additionally, any discounts should be entered during the sale registration process, before the invoice is approved."
        },
        {
          type: "heading",
          text: "What should taxpayers do if the EBM is not working?"
        },
        {
          type: "paragraph",
          text: "If the EBM is not working for any reason, the taxpayer must notify RRA, issue handwritten invoices to consumers, and retain duplicates. Once the EBM is functional again, all handwritten invoices must be entered into the system. Further actions depend on the nature of the issue, as explained below."
        },
        {
          type: "heading",
          text: "What should taxpayers do if the machine with EBM installed is stolen?"
        },
        {
          type: "paragraph",
          text: "If a machine with EBM installed is stolen or damaged due to a force majeure event (unforeseeable circumstances), the taxpayer must notify RRA in writing within six (6) hours. The notification must be accompanied by official proof from a competent authority confirming that the device where EBM 2.1 was installed was stolen."
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

export default EisExplanation;