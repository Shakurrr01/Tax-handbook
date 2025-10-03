import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ImmovablePropertyTax = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Immovable Property Tax",
      content: [
        {
          type: "heading",
          text: "What is the Immovable Property Tax?"
        },
        {
          type: "paragraph",
          text: "Immovable Property Tax is a tax levied on the market value of a building and the surface of a plot of land. The land and buildings are referred to as the 'Immovable Property'. In order to facilitate taxpayers, the market value of the building only needs to be assessed every five years, unless major changes in the building and structures occur."
        },
        {
          type: "heading",
          text: "Who is subject to the Immovable Property Tax?"
        },
        {
          type: "paragraph",
          text: "The immovable property tax is declared and paid by:"
        },
        {
          type: "list",
          items: [
            "the owner, the usufructuary or any other person considered to be the owner.",
            "The proxy of an owner who lives abroad;"
          ]
        },
        {
          type: "paragraph",
          text: "The tax liability on immovable property is not terminated or deferred if the owner of immovable property has disappeared without leaving behind a proxy or other person to manage the immovable property on his or her behalf. If any land or properties is owned by more than one co-owner, the co-owners shall appoint and authorise one owner or any other person as a proxy to represent them collectively as a group of taxpayers."
        },
        {
          type: "paragraph",
          text: "If co-owners of immovable property did not appoint a co-owner or a proxy to represent them collectively as a group of taxpayers, the tax obligations related to the immovable property are settled in accordance with laws regulating co-owned property."
        },
        {
          type: "heading",
          text: "What is the tax base of the Immovable Property Tax?"
        },
        {
          type: "paragraph",
          text: "The tax base of the immovable property is:"
        },
        {
          type: "list",
          items: [
            "The market value of a building and related plot;",
            "The surface of land designated for construction but without any construction; the surface of land not designated for residential use;",
            "The surface of a plot of land with a building exempted from immovable property tax."
          ]
        },
        {
          type: "paragraph",
          text: "However, if the immovable property consists of a plot of land, a building and its improvements, the tax on immovable property is calculated on the market value of both the building and the related plot of land if the two are subject to tax."
        },
        {
          type: "heading",
          text: "What is the taxable value of the Immovable Property?"
        },
        {
          type: "paragraph",
          text: "If there is no building on a plot of land, the tax is calculated on each square metre of the whole surface of the plot of land. If there is a building on a plot of land, the tax is calculated on each square metre of the whole surface of the plot of land and the market value of the building."
        },
        {
          type: "heading",
          text: "How is the building being valued?"
        },
        {
          type: "paragraph",
          text: "The valuation of a building and its improvements must be carried out by a certified valuer of the Institute of Real Property Valuers in Rwanda (IRPV) or by a computerised mass valuation system. The approved list of valuers is displayed on the IRPV website at: https://www.irpv.rw/ or call on +250 (0)788 788 122 / +250 783 177 760."
        },
        {
          type: "paragraph",
          text: "However, if the taxpayer presents supporting documents to the RRA, the acquisition value or the construction value of a building can be used until valuation by a certified valuer or by computerised mass valuation system is effective. The purchase price is considered to be the market value if all of the following three conditions are fulfilled:"
        },
        {
          type: "list",
          items: [
            "The immovable property was bought within the previous five years in the free market",
            "The property value has not changed by more than twenty percent (20%) since the acquisition",
            "The acquisition contract is presented to the RRA"
          ]
        },
        {
          type: "heading",
          text: "When must the Immovable Property be valued?"
        },
        {
          type: "paragraph",
          text: "The market value of each immovable property is required to be valued on the basis of a five-year cycle."
        },
        {
          type: "paragraph",
          text: "The first valuation of the immovable property is 1st January of the first taxable year. Unless significant changes to the value of the property occur, no subsequent valuations are required within the five-year assessment cycle. At the beginning of each five-year assessment cycle, the market value of the building is revised."
        },
        {
          type: "heading",
          text: "What happens during the five-year assessment cycle?"
        },
        {
          type: "paragraph",
          text: "Although valuation generally only takes place once in the five-year assessment cycle, declaration and payment must be made every year."
        },
        {
          type: "paragraph",
          text: "This five-year cycle can be disturbed if, due to major changes in the building and structures, the value of the immovable property increases or decreases by more than 20% within an assessment cycle."
        },
        {
          type: "paragraph",
          text: "If the RRA believes that a taxpayer's self-assessment on the value of the building is undervalued, it will proceed to a counter-valuation. The value from the counter-valuation will be considered as the final market value only if the difference between the taxpayer's self-assessment and RRA's counter-valuation is more than 20%."
        },
        {
          type: "heading",
          text: "What are the exemptions for Immovable Property Tax?"
        },
        {
          type: "paragraph",
          text: "The following immovable properties are exempted from the immovable property tax:"
        },
        {
          type: "list",
          items: [
            "One building intended by the owner to be occupied as his or her dwelling and its annex buildings located in a residential plot for one family. That building remains considered as his or her dwelling even when he/she does not occupy it for various reasons;",
            "Immovable property determined by the district Council or the Council of the City of Kigali as owned by vulnerable persons;",
            "Immovable property owned by the State, decentralized entities and public institutions, except if they are used for profit-making activities or for leasing;",
            "Immovable property belonging to foreign diplomatic missions in Rwanda if their countries do not levy tax on immovable property of Rwanda's diplomatic missions;",
            "Land used for agricultural, livestock or forestry activities whose area is equal to or less than two hectares;",
            "Land reserved for construction of residential houses but where no basic infrastructure has been erected;",
            "Plot of land on which a condominium is built or meant for construction of a condominium."
          ]
        },
        {
          type: "heading",
          text: "Example 56"
        },
        {
          type: "paragraph",
          text: "Amahoro is a farmer and lives in a small house on her 30,000m2 farm. As the land usage is agricultural, the first 20,000m2 of land is exempted. Therefore, Amahoro is only required to pay the Immovable Property Tax on the remaining 10,000m2 of land."
        },
        {
          type: "heading",
          text: "Example 57"
        },
        {
          type: "paragraph",
          text: "As Musafiri intends to live with his family on his residential property, the building component is not subject to property tax. Therefore, Musafiri is only required to pay tax for the plot of land."
        },
        {
          type: "heading",
          text: "What is the tax rate on immovable property?"
        },
        {
          type: "paragraph",
          text: "The tax rate on immovable property is determined as follows:"
        },
        {
          type: "list",
          items: [
            "zero to FRW 80 per square meter of the surface of land",
            "0.5% of the market value of both the building and related plot of land for residential use;",
            "0.3% of the market value of both building and related plot of land for commercial use;",
            "0.1% of the market value of both the building and related plot of land for industrial use, building and plot belonging to micro-enterprises and small business."
          ]
        },
        {
          type: "paragraph",
          text: "However, special consideration is given to the following:"
        },
        {
          type: "list",
          items: [
            "a plot and a building for residential use of three floors are taxed at the rate of 0.25% of their market value;",
            "a plot and a building for residential use with more than three floors are taxed at the rate of 0.1% of their market value;",
            "in determining the taxable value of a commercial or industrial building, machinery and other equipment attached to the building are not considered."
          ]
        },
        {
          type: "heading",
          text: "Example 58"
        },
        {
          type: "paragraph",
          text: "In the year 2024, Amahoro owns two residential buildings. Both buildings are located in Isange village where the land tax rate is FRW 80 per square meter. Each building is valued at FRW 10,000,000 and constructed on a plot of 400 Square meters. Each plot is valued at FRW 3,000,000. Amahoro and his family occupy the first house. Using information above mentioned, let's us compute the tax to be paid by Amahoro."
        },
        {
          type: "paragraph",
          text: "Since the first house is exempted as the dwelling of the family, Immovable Property Tax is: FRW 80*400=FRW 32,000."
        },
        {
          type: "paragraph",
          text: "For the second owned property, the Immovable Property Tax is: (FRW 10,000,000 + FRW 3,000,000) * 0.5%=FRW 65,000"
        },
        {
          type: "paragraph",
          text: "The total Immovable Property Tax to be paid by Amahoro in 2024 is: FRW 32,000 + FRW 65,000=FRW 97,000."
        },
        {
          type: "paragraph",
          text: "Suppose the second property is a commercial building. Amahoro would pay: FRW 32,000 + (FRW 10,000,000 + FRW 3,000,000) * 0.3%=FRW 71,000"
        },
        {
          type: "heading",
          text: "Example 59"
        },
        {
          type: "paragraph",
          text: "Amahoro owns a residential building with three floors plus a basement floor. The building is valued at FRW 10,000,000. As Amahoro does not intend occupying the house with her family and the building has four floors, the tax due on the building in 2019 is:"
        },
        {
          type: "paragraph",
          text: "FRW 10,000,000 * 0.25% * 50% (reduction) = FRW 12,500"
        },
        {
          type: "heading",
          text: "How is the land component valued?"
        },
        {
          type: "paragraph",
          text: "The tax rate on the surface of plot of land is determined by the location of the land and the land use:"
        },
        {
          type: "list",
          items: [
            "FRW 0 – FRW 80 per square metre per year (set by the District Council).",
            "First 20,000 square metres are exempt if the land is used for agriculture or livestock activities."
          ]
        },
        {
          type: "heading",
          text: "Example 60"
        },
        {
          type: "paragraph",
          text: "Amahoro owns a coffee farm, which is 30,000m2 in size. As her land is used for agriculture, the first 20,000m2 of land are exempted from Immovable Property Tax. Therefore, Amahoro is only required to pay the Immovable Property Tax on the remaining 10,000m2 of land. As the District Council set the rate on agriculture at FRW 0.4 per square metre at her location, the tax due is on land is:"
        },
        {
          type: "paragraph",
          text: "(30,000m2 farm - 20,000m2 exempted) * FRW 0.4 = 10,000m2 taxable farm land * FRW 0.4 = FRW 4,000"
        },
        {
          type: "heading",
          text: "When is the deadline to declare and pay Immovable Property Tax?"
        },
        {
          type: "paragraph",
          text: "Immovable Property Tax declaration is required and paid on an annual basis, for each immovable property. The tax period is the calendar year, from 1st January until 31st December. The deadline to declare and pay Immovable Property Tax by is 31st December of the same year."
        },
        {
          type: "paragraph",
          text: "However, in the event of changes in the value of the immovable property by more than 20% within an assessment cycle, the taxpayer must submit a new tax declaration reflecting these value changes and pay it within one month."
        },
        {
          type: "heading",
          text: "Example 61"
        },
        {
          type: "paragraph",
          text: "Nshuti owns a house with land liable to Immovable Property Tax. He must declare and pay his Immovable Property Tax for the tax period in 2023 – from 1st January 2023 until 31st December 2023 – by the deadline of 31st December 2023."
        },
        {
          type: "paragraph",
          text: "Given that there will be no substantial change in the value of his immovable property, his declaration of the year 2023 will also determine the tax to be paid on the building in the following year – which is in the same tax assessment cycle."
        },
        {
          type: "heading",
          text: "What happens if the Immovable Property changes ownership during the tax period?"
        },
        {
          type: "paragraph",
          text: "If Immovable Property is purchased in a given tax period, the old owner must declare and pay the amount including the month of the ownership transfer. The new owner must declare and pay Immovable Property Tax for the remaining months."
        },
        {
          type: "paragraph",
          text: "No transfer of ownership of an immovable property can take place without all due taxes having been paid to RRA."
        },
        {
          type: "heading",
          text: "Example 62"
        },
        {
          type: "paragraph",
          text: "The most recent valuation of Rukundo's immovable property implied that the Immovable Property Tax to be paid is FRW 60,000 per year. As Rukundo sells his plot to Amahoro in August 2023, Rukundo needs to pay the Immovable Property Tax for eight months of 2023 before he can transfer the plot. Amahoro needs to pay the Immovable Property Tax for the remaining four months. The tax due in 2023 is as follows:"
        },
        {
          type: "paragraph",
          text: "Tax due of Rukundo: FRW 60,000 * 8/12 = FRW 40,000"
        },
        {
          type: "paragraph",
          text: "Tax due of Amahoro: FRW 60,000 * 4/12 = FRW 20,000"
        },
        {
          type: "heading",
          text: "What are the rates for tax on sale of immovable property?"
        },
        {
          type: "paragraph",
          text: "There is established a tax on sale of immovable property levied in accordance with the following rates and modalities:"
        },
        {
          type: "list",
          items: [
            "a rate of 2% is levied on the sale value of an immovable property for commercial use if the seller is a taxpayer registered for income tax",
            "a rate of 2.5% is levied on the sale value of an immovable property sold by a person not registered for income tax"
          ]
        },
        {
          type: "paragraph",
          text: "This tax is levied on the balance of the sale value of the property after deduction of FRW 5,000,000 which is not subject to tax."
        },
        {
          type: "heading",
          text: "What is the tax period for a tax on sale of immovable property?"
        },
        {
          type: "paragraph",
          text: "There is no specific tax period for a tax on sale of immovable property. This tax is due on transfer of a property between seller and buyer."
        },
        {
          type: "heading",
          text: "Example 63"
        },
        {
          type: "paragraph",
          text: "ABC Ltd, an income tax registered taxpayer sold a commercial building at FRW 60,000,000. The tax on sale of Immovable Property to be paid is (FRW 60,000,000 – FRW 5,000,000) * 2% = FRW 1,100,000."
        },
        {
          type: "heading",
          text: "Example 71"
        },
        {
          type: "paragraph",
          text: "Ihirwe, a resident of Gasabo district sold his residential building at FRW 10,000,000. The tax on sale of Immovable Property to be paid is (FRW 10,000,000 – FRW 5,000,000) * 2.5% = FRW 125,000."
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

export default ImmovablePropertyTax;