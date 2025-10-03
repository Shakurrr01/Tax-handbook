import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ExciseDutyExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Explanation of Excise Duty",
      content: [
        {
          type: "heading",
          text: "What is Excise Duty?"
        },
        {
          type: "paragraph",
          text: "Excise Duty is a tax applied to specific products. This means that it is able to discourage consumption with negative social impacts. This can reduce the costs of healthcare and policing, whilst raising significant revenues for further government spending. As Excise Duties are charged on the consumption of certain products, it is also referred to as a 'excise tax'."
        },
        {
          type: "heading",
          text: "Who must register for Excise Duty?"
        },
        {
          type: "paragraph",
          text: "Any manufacturer or importer of a product that is subject to Excise Duty by the law is required to declare and pay Excise Duty. There is no threshold on company size for Excise Duty. A taxpayer who manufactures taxable products must declare and pay Excise Duty regardless of the size of the business."
        },
        {
          type: "heading",
          text: "What are the obligations of taxpayers registered for Excise Duty?"
        },
        {
          type: "paragraph",
          text: "The obligations of Excise Duty registered taxpayers are detailed in Chapter 2, section one of the Law Nº 011/2025 Of 27/05/2025 Establishing the Excise Duty. Excise Duty registered taxpayers must:"
        },
        {
          type: "list",
          items: [
            "Keeping registers",
            "Affixing a tax stamp on a taxable product",
            "Submission to the Tax Administration of a reconciliation statement on the usage of tax stamps",
            "Keeping books of accounts"
          ]
        },
        {
          type: "heading",
          text: "Who pays Excise Duty?"
        },
        {
          type: "paragraph",
          text: "Excise Duty is paid by the manufacturer or importer of the taxable products. However, it is expected that these costs will be passed onto consumers in the form of higher selling prices."
        },
        {
          type: "heading",
          text: "What are the valuation methods of Excise Duty?"
        },
        {
          type: "paragraph",
          text: "The rates of excise duties can be charged on a 'specific', 'ad valorem' or 'mixed' basis as follows:"
        },
        {
          type: "list",
          items: [
            "A specific Excise Duty charges a certain amount of tax per unit of the product. For example, Excise Duty is charged on premium oil in Rwanda at a rate of FRW 183 per litre.",
            "An ad valorem Excise Duty charges a percentage of the taxable value of the product. For example, Excise Duty is charged on beer in Rwanda at 65% of the taxable value.",
            "A mixed Excise Duty charges both a certain amount of tax per unit and as a percentage of the taxable value of the product. For example, Excise Duty is charged on cigarettes in Rwanda at a rate of 36% of the retail price in addition to FRW 230 per pack of 20 individual cigarettes."
          ]
        },
        {
          type: "heading",
          text: "What are the taxable products and rates of Excise Duty?"
        },
        {
          type: "paragraph",
          text: "The tax rates for Excise Duty vary depending upon the product. The taxable products and tax rates are:"
        },
        {
          type: "paragraph",
          text: "The taxable base for ad valorem Excise Duty on locally manufactured products is calculated according to the selling price, excluding all other taxes."
        },
        {
          type: "paragraph",
          text: "The rates of Excise Duty are the same for both domestic and imported products. For more details on the taxable value of Excise Duty on imported products, see page 374."
        },
        {
          type: "heading",
          text: "Example 37"
        },
        {
          type: "paragraph",
          text: "Amahoro produces fruit juice. In one tax period she manufactures and sells 10,000 small bottles for a pre-tax selling price of FRW 400 each for a total taxable sale during that tax period of FRW 4,000,000. Amahoro must pay ad valorem Excise Duty of:"
        },
        {
          type: "paragraph",
          text: "FRW 4,000,000 * 10% = FRW 400,000."
        },
        {
          type: "heading",
          text: "Example 38"
        },
        {
          type: "paragraph",
          text: "Ubumwe produces cigarettes. In one tax period he manufactures and sells 400 packs (of 20 cigarettes) for a pre-tax selling price of FRW 300 each for a total taxable sale during that tax period of FRW 120,000. Ubumwe must pay mixed Excise Duty of:"
        },
        {
          type: "paragraph",
          text: "(FRW 120,000 * 36%) + (400 * FRW 230) = FRW 135,200."
        },
        {
          type: "heading",
          text: "Example 39"
        },
        {
          type: "paragraph",
          text: "Lucie produces banana wine using ingredients sourced in Rwanda. In one tax period she manufactures and sells 200 bottles for a pre-tax selling price of FRW 850 each for a total taxable sale during that period of FRW 170,000. Lucie must pay ad valorem Excise Duty of:"
        },
        {
          type: "paragraph",
          text: "FRW 170,000 * 40% = FRW 68,000."
        },
        {
          type: "heading",
          text: "When is the deadline to declare and pay Excise Duty?"
        },
        {
          type: "paragraph",
          text: "Excise Duty is declared on a monthly basis and must be declared and paid within five days after the end of each tax period."
        },
        {
          type: "heading",
          text: "What are the exemptions for Excise Duty?"
        },
        {
          type: "paragraph",
          text: "The following goods are exempt from Excise Duty:"
        },
        {
          type: "list",
          items: [
            "Goods for charitable organizations;",
            "Vehicles assembled in Rwanda;",
            "One personal vehicles of a returning Rwandan diplomat;",
            "one vehicle of a Rwandan returnee or any other person returning back from a foreign country who fulfils exemption conditions set forth under the Customs Law;",
            "minibus and bus that can carry not less than 14 persons, lorries and single cabin pickups manufactured to carry goods, refrigerating vehicles, tourist vehicles, ambulances and vehicles designed for persons with disabilities;",
            "Products which are specifically manufactured for export;",
            "Products which are sold to duty free shops and other specific persons legally determined"
          ]
        },
        {
          type: "heading",
          text: "Should Excise Duty be paid on exports?"
        },
        {
          type: "paragraph",
          text: "Taxable products are exempt from Excise Duty if they were specifically manufactured for export."
        },
        {
          type: "heading",
          text: "What are tax stamps?"
        },
        {
          type: "paragraph",
          text: "A tax stamp is a sign affixed on some products subject to Excise Duty to show retailers and consumers that excise duty has been paid. The products requiring tax stamps are cigarettes (each pack of 20 cigarettes), wines and liquors (each bottle). Tax stamps can be purchased (at cost price) from RRA. Call 3004 for details on purchasing tax stamps."
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

export default ExciseDutyExplanation;