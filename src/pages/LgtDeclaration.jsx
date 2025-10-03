import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Laptop, Building, Users, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const LgtDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Decentralised Entities Taxes and Fees using the LGT system",
      content: [
        {
          type: "paragraph",
          text: "The four types of Decentralised Entities Taxes which are Rental Income Tax, Trading License Tax, Immovable Property Tax, and Tax on Sale of Immovable Property, and Decentralised Entities fees can be declared using the LGT system. The process of declaring each is similar, and described below."
        },
        {
          type: "heading",
          text: "Step 1: Login to the LGT System"
        },
        {
          type: "paragraph",
          text: "Access the LGT system at https://localgov.rra.gov.rw or through the RRA website at https://www.rra.gov.rw/en/home and clicking on 'Pay District taxes here' on the right of the screen. This loads the following login screen:"
        },
        {
          type: "paragraph",
          text: "The language can be changed by clicking on the flag icons in the top right corner, respectively English, Kinyarwanda and French."
        },
        {
          type: "paragraph",
          text: "Click 'Taxes' for the following LGT system login screen:"
        },
        {
          type: "paragraph",
          text: "If a taxpayer does not know their TIN, see page 92."
        },
        {
          type: "paragraph",
          text: "If a taxpayer does not know their password, it can be reset by clicking 'Forgot Password' on the LGT system login and receiving a new password by SMS or email."
        },
        {
          type: "heading",
          text: "Step 2: Select the correct Decentralised Entities Taxes or fee to declare"
        },
        {
          type: "paragraph",
          text: "After logging in, the LGT system home page is loaded."
        },
        {
          type: "paragraph",
          text: "There are four menus available on the left of the screen: 'Registration', 'Declaration', 'Fee Payment Ticket' and 'Change Password'. Each of these menus is discussed in turn."
        },
        {
          type: "paragraph",
          text: "As taxpayers must register with LGT System staff (see page 342) and cannot use the 'Registration' menu to register. However, it does display confirmation of registration, and allows for printing of Trading License Tax Certificates."
        },
        {
          type: "paragraph",
          text: "The taxpayer is also required to indicate building characteristics such as roofing, wall material, sewage system etc that was previously displayed on registration form as per below screen:"
        },
        {
          type: "paragraph",
          text: "The 'Declaration' menu is where the four types of Decentralised Entities Taxes are declared. Click 'Declaration' and the drop-down 'Taxes' option. Then choose the tax type and tax period that is being declared and click 'Submit'. Finally, click on the document number of the applicable declaration."
        },
        {
          type: "heading",
          text: "Example 73"
        },
        {
          type: "paragraph",
          text: "A taxpayer clicks 'Declaration' then 'Taxes' and sees the following screen. The only Decentralised Entities Tax the taxpayer is registered for is 'Rental Income'. They select this tax type and the tax year that is being declared, and click 'Submit'."
        },
        {
          type: "paragraph",
          text: "This loads the following screen. It displays each of the properties registered by that taxpayer for Rental Income Tax, for this taxpayer only one. For each property, the taxpayer clicks the 'Document No' to begin the declaration."
        },
        {
          type: "paragraph",
          text: "The 'Fees Payment Ticket' menu is where fees can be declared and the drop-down provides the choice of a range of fee declarations:"
        },
        {
          type: "list",
          items: [
            "Fees on civil marriage conducted on a day other than an official business day",
            "Fees on services and documents of immovable property",
            "Fees on official certificates of a decentralized entity",
            "Fees on authorisation to make or burn clay bricks, tiles, or charcoal",
            "Market fees",
            "Fees on parking",
            "Fees on public parking",
            "Parking fees on boats",
            "Fees on small-scale quarry exploitation",
            "Fees on advertising",
            "Fees for boat number plates",
            "Fees on bicycle number plates",
            "Fees on communication towers",
            "Fees on transport of materials from quarries and forests"
          ]
        },
        {
          type: "paragraph",
          text: "The 'Change Password' menu requires the taxpayer to enter the previous password, and the new password. The taxpayer is automatically required to change their password when first logging in to the LGT system with the RRA provided password."
        },
        {
          type: "heading",
          text: "Step 3: Complete declaration form and submit"
        },
        {
          type: "paragraph",
          text: "Having selected the correct Decentralised Entities Tax or fee, enter the required information in the declaration form. The information that is required depends upon the type of Decentralised Entities Tax or fee. These are displayed in turn below."
        },
        {
          type: "heading",
          text: "Immovable Property Tax"
        },
        {
          type: "paragraph",
          text: "The declaration for the Immovable Property Tax generally consists of three parts:"
        },
        {
          type: "list",
          items: [
            "Part referring to the land.",
            "Part referring to the building – if there is a building on the land.",
            "Part referring to the entire immovable property."
          ]
        },
        {
          type: "paragraph",
          text: "In the first part of the declaration, the taxpayer does not have to enter any information about the land. Instead, the LGT system automatically displays all information determining the tax due on the land."
        },
        {
          type: "paragraph",
          text: "Note that if the construction of a building has been completed on the plot during the tax period so that the land is no longer undeveloped, the taxpayer needs to visit an RRA office to update the registration of the Immovable Property Tax to indicate that land is developed."
        },
        {
          type: "paragraph",
          text: "In the second part of the declaration, the taxpayer needs to provide information on the building (for developed land, only). In particular, the taxpayer needs to indicate the market value of the building."
        },
        {
          type: "paragraph",
          text: "In the following section, the taxpayer is asked to indicate the total market value of the immovable property, which includes both the building component and the land component."
        },
        {
          type: "paragraph",
          text: "Once the required information has been entered, click 'Calculate Tax'. The LGT system automatically displays:"
        },
        {
          type: "list",
          items: [
            "The tax due on the land component, depending on the surface area of the plot and the tax rate on land.",
            "The tax due on the building component, based on the market value and the tax rate on building.",
            "The total tax due on the immovable property, potential penalties and interests in case of late declaration, as well as the total amount due."
          ]
        },
        {
          type: "paragraph",
          text: "Afterwards, certify that the declaration was done correctly before you 'Submit'."
        },
        {
          type: "heading",
          text: "Example 74"
        },
        {
          type: "paragraph",
          text: "An example of a filled in declaration form for Immovable Property Tax is shown below. The tax due on the land is FRW 14,460. The tax due on the building is FRW 125,000. Therefore, the total Immovable Property Tax due to be paid with this declaration is FRW 139,460."
        },
        {
          type: "heading",
          text: "Trading License Tax"
        },
        {
          type: "paragraph",
          text: "Select Trading License Tax from 'Taxes' menu, choose annual or quarterly: If the previous annual turnover exists, the system retrieves it and fills it automatically. Otherwise, the system classifies a taxpayer under 'Other profit-oriented activities' category and charges trading licence tax accordingly."
        },
        {
          type: "paragraph",
          text: "If all the information is correct, click 'Calculate Tax' to display the tax due, and click to 'Submit' the declaration."
        },
        {
          type: "heading",
          text: "Example 75"
        },
        {
          type: "paragraph",
          text: "The Trading License Tax due for a business with an annual turnover of FRW 20 million is FRW 160,000."
        },
        {
          type: "heading",
          text: "Example 76"
        },
        {
          type: "paragraph",
          text: "The Trading License Tax due for a business with unknown previous fiscal year turnover is FRW 60,000 if the taxpayer is located in urban zone or FRW 30,000 if the taxpayer is located rural zone as per 'other profit-oriented activities' category."
        },
        {
          type: "heading",
          text: "Rental Income Tax"
        },
        {
          type: "paragraph",
          text: "Having clicked on the document number of the relevant property for the tax type and tax period that is being declared, the following declaration form is displayed for Rental Income Tax."
        },
        {
          type: "paragraph",
          text: "The taxpayer must enter the monthly rent and the total amount of rental income received during the tax year. In addition, if bank interest is being paid on this property, the taxpayer must change 'Is Bank Interest paid' to 'Yes' and enter the additional required details including rent contract copy."
        },
        {
          type: "paragraph",
          text: "Once all required information has been entered, click 'Continue with Declaration'. This generates an additional 'Rental Income Declaration' section. If all the information is correct, click 'Calculate Tax' to display the tax due, and click to 'Submit' the declaration."
        },
        {
          type: "heading",
          text: "Example 76"
        },
        {
          type: "paragraph",
          text: "An example Rental Income Tax declaration form is entered below. The total Rental Income Tax due to be paid with this declaration is FRW 584,000."
        },
        {
          type: "heading",
          text: "Tax on a sale of Immovable Property Tax"
        },
        {
          type: "paragraph",
          text: "A rate of 2% is levied on the sale value of an immovable property for commercial use if the seller is a taxpayer registered for income tax. This tax is considered as a deductible expense."
        },
        {
          type: "paragraph",
          text: "A rate of 2.5% is levied on the sale value of an immovable property sold by a person not registered for income tax."
        },
        {
          type: "paragraph",
          text: "Tax on a sale of immovable property is levied on the balance of the sale value of the property after deduction of FRW 5,000,000 which is not subject to tax."
        },
        {
          type: "heading",
          text: "Decentralised Entities Fees"
        },
        {
          type: "paragraph",
          text: "The process of declaring Decentralised Entities fees varies depending upon the type of fee. In general, having selected the correct type of 'Fee Payment Ticket', enter the required information, and click 'Submit'. This Tax Handbook uses two examples to demonstrate the general processes of declaring Decentralised Entities fees."
        },
        {
          type: "heading",
          text: "Fees for civil marriage conducted on days other than official business days"
        },
        {
          type: "paragraph",
          text: "The taxpayer must enter their personal details including their national ID number or passport number, name, date of birth, mobile number and the province, district and sector where they live. Some of these details may be automatically generated after entering the ID number."
        },
        {
          type: "paragraph",
          text: "The taxpayer can then choose the type of service that is required. This may include further drop-down options. Once selected, this automatically generates the correct amount that must be paid for that service, and the taxpayer can click to 'Submit' the fee declaration."
        },
        {
          type: "heading",
          text: "Example 77"
        },
        {
          type: "paragraph",
          text: "An example fee declaration to pay for civil marriage done not on official business days is entered below. The amount that must be paid for this service is FRW 10,000."
        },
        {
          type: "heading",
          text: "Step 4: View payment details via the Acknowledgement Receipt, email or SMS, and pay the total amount due"
        },
        {
          type: "paragraph",
          text: "After successfully submitting the declaration, click to view the Acknowledgement Receipt. Alternatively, receive the payment details by email or SMS by entering an email address or phone number and clicking 'Send Email' or 'Send SMS'."
        },
        {
          type: "paragraph",
          text: "Use the RRA Reference Number to pay the total amount due. This must be paid before the deadline to avoid penalties and fines, see page 421 for more details on paying taxes."
        },
        {
          type: "heading",
          text: "Declaring Decentralised Entities Taxes and Fees using M-Declaration"
        },
        {
          type: "paragraph",
          text: "Taxpayers can use M-declaration for the following local government tax and fees:"
        },
        {
          type: "list",
          items: [
            "Trading License Tax",
            "Immovable Property Tax (available for plots without buildings, only)",
            "Outsourced Fees (available for Ngali Holding Ltd, only)"
          ]
        },
        {
          type: "paragraph",
          text: "The process for declaring these Decentralised Entities Taxes and fees using M-declaration is explained below."
        },
        {
          type: "heading",
          text: "M-Declaration Process"
        },
        {
          type: "paragraph",
          text: "The M-Declaration system is accessed by dialling *800#. The M-Declaration system has a series of screens, with number options, that are navigated by entering and sending the relevant number."
        },
        {
          type: "paragraph",
          text: "On the first screen, select a language: either English or Kinyarwanda."
        },
        {
          type: "paragraph",
          text: "On the next screen select which M-Declaration service is required. To declare Decentralised Entities Taxes and fees, select '3. Local Government Taxes'."
        },
        {
          type: "paragraph",
          text: "At the following screen, select the type of tax or fee:"
        },
        {
          type: "list",
          items: [
            "1. Land lease",
            "2. Trading license",
            "5. Property tax"
          ]
        },
        {
          type: "paragraph",
          text: "When the desired type of tax or fee is selected, first enter the 'TIN' and then follow the on-screen instructions, depending on the tax type."
        },
        {
          type: "paragraph",
          text: "Having entered all required information, the system calculates the tax to be paid, and generates the RRA Reference Number required for paying. For more details on paying taxes and fees, see page 421"
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
              <Laptop size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{currentContent.title}</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to declaring Local Government Taxes and fees using the LGT system
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

export default LgtDeclaration;