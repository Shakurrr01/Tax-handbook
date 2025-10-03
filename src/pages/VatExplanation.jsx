import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const VatExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Value Added Tax (VAT) - Explanation of VAT",
      content: [
        {
          type: "heading",
          text: "What is VAT?"
        },
        {
          type: "paragraph",
          text: "VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers on the value added at each stage of production."
        },
        {
          type: "paragraph",
          text: "VAT is applied to as wide a range of products as possible to ensure fairness across business sectors. However, there are some goods and services that are exempt or zero-rated for VAT. This is usually because tax on these goods and services may be unfairly burdensome on the poor or because those goods and services have benefits to efficiency across the rest of the economy."
        },
        {
          type: "paragraph",
          text: "VAT registered taxpayers are required to have at least one Electronic Invoicing System (EIS), such as an EBM, each of their sales locations, and use these to provide EIS invoices for all sales transactions, see page 237 for details on EISs."
        },
        {
          type: "heading",
          text: "Who must register for VAT?"
        },
        {
          type: "paragraph",
          text: "A taxpayer must register for VAT if their turnover is above FRW 20,000,000 for any twelve-month period, or above FRW 5,000,000 for three consecutive months. This includes all taxable, exempt and zero-rated sales."
        },
        {
          type: "paragraph",
          text: "In addition, any taxpayer may choose to register for VAT."
        },
        {
          type: "heading",
          text: "What are the obligations of VAT registered taxpayers?"
        },
        {
          type: "paragraph",
          text: "VAT registered taxpayers must:"
        },
        {
          type: "list",
          items: [
            "Display clearly the VAT registration certificate in plain view at the place of business, see page 57 for how to obtain a VAT certificate.",
            "Use an Electronic Invoicing System (EIS), a type of EBM to issue VAT invoices.",
            "Issue an EBM invoice to all customers with every transaction.",
            "Submit a monthly or quarterly VAT declaration within fifteen days after the end of the tax period.",
            "Be available at all times to receive RRA officers and to make available books of accounts."
          ]
        },
        {
          type: "heading",
          text: "What is the tax rate of VAT?"
        },
        {
          type: "paragraph",
          text: "The normal rate of VAT is 18%. There is also a zero-rate (0%) and exemptions applicable for certain types of goods and services, see page 214 for more details."
        },
        {
          type: "heading",
          text: "Who pays VAT?"
        },
        {
          type: "paragraph",
          text: "VAT is indirectly paid by the final consumer of the goods or service. However, taxpayers pay on their behalf on the value added at each stage of production."
        },
        {
          type: "paragraph",
          text: "This means that taxpayers charge VAT on their sales, output VAT, whilst claiming back VAT paid on their inputs, input VAT. The amount each taxpayer pays is therefore equal to output VAT minus input VAT."
        },
        {
          type: "heading",
          text: "What do VAT inclusive and VAT exclusive prices mean?"
        },
        {
          type: "paragraph",
          text: "The VAT inclusive price means the price of the goods or service including VAT. The VAT exclusive price means the price of the goods or service that is not the final cost, to which VAT has not yet been added."
        },
        {
          type: "paragraph",
          text: "Goods and services supplied by VAT registered taxpayers must always be sold at the VAT inclusive price. However, when completing the VAT declaration form, the total VAT exclusive price of all sales is entered, see page 227. The invoice supplied to the customer must show the VAT exclusive price, amount of VAT and VAT inclusive price."
        },
        {
          type: "paragraph",
          text: "To calculate the VAT inclusive or VAT exclusive price of taxable goods and services:"
        },
        {
          type: "list",
          items: [
            "VAT exclusive price * 1.18 = VAT inclusive price.",
            "VAT inclusive price / 1.18 = VAT exclusive price."
          ]
        },
        {
          type: "heading",
          text: "Which goods and services are taxable for VAT?"
        },
        {
          type: "paragraph",
          text: "All goods and services supplied in Rwanda are considered either taxable or exempt."
        },
        {
          type: "paragraph",
          text: "Services are considered to be supplied in Rwanda if the services provider:"
        },
        {
          type: "list",
          items: [
            "Has their headquarters in Rwanda.",
            "Is usually resident in Rwanda.",
            "Or if the recipient of the services benefits from it within Rwanda, for further details see the VAT Reverse Charge section on page 221."
          ]
        },
        {
          type: "heading",
          text: "Which goods and services are zero-rated for VAT?"
        },
        {
          type: "paragraph",
          text: "Zero-rated for VAT purposes means that no output VAT is charged on the goods or services, but input VAT can still be claimed."
        },
        {
          type: "paragraph",
          text: "The list of zero-rated goods and services, detailed in Article 7 of Law N°049/2023 of 05/09/2023, includes:"
        },
        {
          type: "list",
          items: [
            "Exported goods and their auxiliary services, including those that are already exempted;",
            "Exported services;",
            "Minerals sold on the domestic market;",
            "International transportation services of goods entering Rwanda and transportation services of goods in transit in Rwanda to other countries and related services;",
            "Commission fee charged to a tourist for all-inclusive tour package booking service;",
            "Goods sold in the shops that are exempted from tax as provided for by the law governing customs;",
            "Goods supplied in the shop intended for persons working in such security organs as provided for by the legislation governing such a shop;",
            "Goods and services intended for special categories of persons that are used in their missions:",
            "diplomats accredited to Rwanda;",
            "international organisations having signed agreements with the Republic of Rwanda;",
            "local non-governmental organizations to which goods and services are donated and acquired through funding by countries or international organizations having signed agreements with the Republic of Rwanda;",
            "projects funded by partners having signed agreements with the Republic of Rwanda;",
            "locally assembled electric automotive vehicles, hybrid automotive vehicles, relevant batteries and their electric charging station equipment."
          ]
        },
        {
          type: "heading",
          text: "Example 32"
        },
        {
          type: "paragraph",
          text: "Innocent designs and manufactures clothes. He sells within Rwanda but also exports some to Kenya. The goods sold within Rwanda are subject to VAT as normal. The goods exported to Kenya are zero-rated. He pays input VAT on the material used in the manufacturing."
        },
        {
          type: "paragraph",
          text: "He sells FRW 236,000 (VAT inclusive) within Rwanda, with VAT paid on inputs of FRW 10,000. He exports FRW 300,000 (VAT exclusive) to Kenya, with VAT paid on inputs of FRW 30,000."
        },
        {
          type: "paragraph",
          text: "The total (VAT exclusive) sales is therefore: (FRW 236,000 / 1.18) + FRW 300,000 = FRW 200,000 + FRW 300,000 = FRW 500,000."
        },
        {
          type: "paragraph",
          text: "The taxable sales exclude the exports so is FRW 200,000. The output VAT is therefore: FRW 200,000 * 18% = FRW 36,000."
        },
        {
          type: "paragraph",
          text: "The input VAT includes the VAT paid for the taxable sales, as well as the zero-rated sales. The input VAT is therefore: FRW 10,000 + FRW 30,000 = FRW 40,000"
        },
        {
          type: "paragraph",
          text: "Therefore, Innocent's VAT due is equal to: FRW 36,000 – FRW 40,000 = FRW -4,000."
        },
        {
          type: "paragraph",
          text: "Innocent requests a VAT refund from RRA of FRW 4,000."
        },
        {
          type: "heading",
          text: "Which goods and services are exempt for VAT?"
        },
        {
          type: "paragraph",
          text: "Exempt for VAT purposes means that no output VAT is charged on the goods or services, and no input VAT can be claimed. The list of exempt goods and services, detailed in Article 1 of law No 009/2025 of 27/05/2025 emending article 8 of Law N°049/2023 of 05/09/2023, includes:"
        },
        {
          type: "paragraph",
          text: "(1) The following goods and services are exempted from value added tax:"
        },
        {
          type: "list",
          items: [
            "(a) water supply and environmental conservation services for non- profit-making purposes with the exception of sewage pump-out services;",
            "(b) the following goods and services for health-related purposes:",
            "(i) health and medical services;",
            "(ii) equipment intended for persons with disabilities;",
            "(iii) goods and pharmaceutical products appearing on the list established by the Minister in charge of health and approved by the Minister, which are imported or locally manufactured by a person authorised by the competent authority",
            "(iv) sanitary pads;",
            "(c) educational materials, services and equipment supplied physically or online that appear on the list established by the Minister in charge of education and approved by the Minister;",
            "(d) books, newspapers and journals;",
            "(e) the following transportation services carried out by a licensed person:",
            "(i) transportation of persons by land in a motor vehicle with a capacity of 14 persons or more;",
            "(ii) transportation of persons by air;",
            "(iii) transportation of persons or goods by boat;",
            "(iv) transportation of household solid waste;",
            "(f) lending, lease and sale of the following:",
            "(i) sale or lease of land;",
            "(ii) sale of whole or part of a building for residential use;",
            "(iii) renting or grant of the right to occupy a building used as a place of residence for one person or a family if the period of accommodation for a continuous term exceeds 90 days;",
            "(iv) lease of a movable property made by a licensed financial institution or by or for a special purpose vehicle;",
            "(g) financial and insurance services determined by an Order of the Minister in charge of finance;",
            "(h) goods and services in connection with burial or cremation of a dead body that appear on the list established by the Minister in charge of cemeteries and approved by the Minister;",
            "(i) energy supply equipment that appears on the list established by the Minister in charge of energy and approved by the Minister;",
            "(j) exempted goods under lease;",
            "(k) agricultural and livestock products, except processed ones. However, processed maize, rice and milk, excluding powdered milk and milk- derived products, are exempted from this tax;",
            "(l) agricultural and livestock insurance services;",
            "(m) services, agricultural inputs, agricultural and livestock materials and machinery that appear on the list established by the Minister in charge of agriculture and animal resources and approved by the Minister;",
            "(n) gaming activities;",
            "(o) personal effects of a Rwandan diplomat returning from a foreign mission, those of a Rwandan national who was residing abroad and is returning to Rwanda as well as those of any other Rwandan national returning to Rwanda and entitled to tax exemption in accordance with the customs legislation. In relation to the motor vehicle they possess, with the exception of returning Rwandan diplomats, other persons referred to in this Subparagraph are required to have owned the motor vehicle for a period of at least 12 months for being exempted;",
            "(p) goods and services intended for special economic zone imported by a licensed zone user;",
            "(q) goods, materials, supplies, machinery and motor vehicles intended for public organs in charge of national defence and security determined by law;",
            "(r) goods sold in customs before payment of taxes and duties;",
            "(s) machinery and capital assets of industries as well as raw materials used in industries that appear on the list established by the Minister in charge of industry and approved by the Minister;",
            "(t) aircraft, their spare parts and maintenance tools that appear on the list established by the Minister in charge of transport and approved by the Minister;",
            "(u) transfer of assets between related persons residing in Rwanda at the time of the restructuring of their business, activity if –",
            "(i) the business activity of a person that acquires assets persists for a period of not less than three years; or",
            "(ii) the person transferring the assets has the actual business of supplying or providing exempted goods or services;",
            "(v) equipment for conservation of bodies of victims of the Genocide against the Tutsi and its related evidence that appear on the list established by the Minister in charge of commemoration of the Genocide against the Tutsi and approved by the Minister;",
            "(w) goods or services which are purchased, sold, assigned, exchanged or otherwise transferred to or by a special purpose vehicle as a consequence of entering into an asset-backed securitisation transaction if the transaction has been approved or authorised based on the law regulating the capital market in Rwanda and the special purpose vehicle is a taxpayer registered in Rwanda;",
            "(x) imported pure electric motor vehicles, relevant batteries and their electric charging station equipment."
          ]
        },
        {
          type: "paragraph",
          text: "However, some supplies of goods have a sunset date. These are:"
        },
        {
          type: "list",
          items: [
            "Energy supply equipment that appears on the list established by the Minister in charge of energy and approved by the Minister are exempted until 30 June 2028.",
            "Machinery and capital assets of industries as well as raw materials used in industries that appear on the list established by the Minister in charge of industry and approved by the Minister are exempted until 30 June 2026.",
            "Imported pure electric motor vehicles, relevant batteries and their electric charging station equipment are exempted until 30 June 2028."
          ]
        },
        {
          type: "paragraph",
          text: "If it is not possible to distinguish whether the VAT paid on inputs directly, or indirectly, contributed to taxable sales or exempted sales, then the allowable input VAT can be equal to the ratio of taxable (or zero-rated) sales to total sales multiplied by the total input VAT."
        },
        {
          type: "heading",
          text: "Example 33"
        },
        {
          type: "paragraph",
          text: "Lucie sells processed and unprocessed agricultural products. The processed agricultural products are subject to VAT as normal. The unprocessed agricultural products are exempt."
        },
        {
          type: "paragraph",
          text: "She sells FRW 3,540,000 (VAT inclusive) of processed agricultural products. She sells FRW 1,000,000 (VAT exclusive) of unprocessed agricultural products."
        },
        {
          type: "paragraph",
          text: "The total (VAT exclusive) sales are therefore: (FRW 3,540,000 / 1.18) + FRW 1,000,000 = FRW 3,000,000 + FRW 1,000,000 = FRW 4,000,000."
        },
        {
          type: "paragraph",
          text: "The taxable sales exclude the exempt sales so is FRW 3,000,000. The output VAT is therefore: FRW 3,000,000 * 18% = FRW 540,000."
        },
        {
          type: "paragraph",
          text: "She paid VAT on inputs of FRW 500,000 but cannot distinguish between which inputs contributed to which sales Therefore, the allowable input VAT is equal to: (FRW 3,000,000 / FRW 4,000,000) * FRW 500,000 = 0.75 * FRW 500,000 = FRW 375,000"
        },
        {
          type: "paragraph",
          text: "Therefore, Amahoro's VAT due is equal to: FRW 540,000 – FRW 375,000 = FRW 165,000."
        },
        {
          type: "heading",
          text: "Can taxpayers that only sell exempt goods and services be exempted from VAT registration?"
        },
        {
          type: "paragraph",
          text: "Taxpayers exclusively making exempt or zero-rated sales may write to the Commissioner General of RRA requesting exemption from the requirement to register for VAT. This letter should:"
        },
        {
          type: "list",
          items: [
            "Identify the taxpayer's name and TIN.",
            "State the request to be exempted from the requirement to register for VAT.",
            "Contain all supporting documents proving the taxpayer does not make any taxable sales."
          ]
        },
        {
          type: "paragraph",
          text: "Taxpayers whose business is totally exempted from VAT is exempted from the obligation to register for VAT. However, taxpayers making zero-rated sales who intend to claim input tax credits must register for VAT to do so."
        },
        {
          type: "heading",
          text: "What is VAT Reverse Charge?"
        },
        {
          type: "paragraph",
          text: "If a local taxpayer is the recipient of services from a foreign supplier, the local taxpayer is required to pay the VAT on this service. The local taxpayer must declare and pay 18% of the value of the services received."
        },
        {
          type: "paragraph",
          text: "This VAT may be offset as an input tax only if the services recieved are not available in the local market. Services are considered not to be available in Rwanda if there is no one who can deliver identical or similar services on the local market. The taxpayer who wants to acquire a service not available in Rwanda must request for authorization from the Ministry of Finance and Economic Planning."
        },
        {
          type: "paragraph",
          text: "If the services are available on the local market, then the VAT may not be offset as an input tax. This is to encourage taxpayers to work with domestic businesses."
        },
        {
          type: "heading",
          text: "What is VAT Retained by Public Institutions?"
        },
        {
          type: "paragraph",
          text: "Government and public institutions must withhold 18% VAT on all taxable supplies within public tenders. The taxpayer who has won the tender is required to declare the taxable supplies as output VAT, but can offset the VAT Retained by Public Institutions. The VAT is paid by the public institution on behalf of the taxpayer."
        },
        {
          type: "paragraph",
          text: "The taxpayer must keep proof that this VAT was withheld. The public institution must pay the VAT to RRA by the fifteenth day of the following month, from the date of the invoice, as with regular VAT payments."
        },
        {
          type: "heading",
          text: "What is a VAT refund?"
        },
        {
          type: "paragraph",
          text: "It is possible for the final VAT due of a taxpayer to be negative. In this case, the taxpayer is due a VAT refund. There is no further action required of the taxpayer."
        },
        {
          type: "paragraph",
          text: "If the VAT refund claimed is a small amount relative to the size of the business, as decided by RRA, this will be carried forward and will automatically be used to offset against future VAT payments. This is determined by the scale of the business as below:"
        },
        {
          type: "list",
          items: [
            "Small taxpayer carries forward up to FRW 500,000",
            "Medium taxpayers carry forward up to FRW 2,000,000",
            "Large taxpayer carries forward up to FRW 5,000,000"
          ]
        },
        {
          type: "paragraph",
          text: "If the VAT refund claimed is a larger than these thresholds RRA will audit the refund and may contact the taxpayer for further evidence. If the refund is correct and accurate, RRA will contact the taxpayer and provide a bank cheque for the refund amount."
        },
        {
          type: "paragraph",
          text: "If a taxpayer is in a refund position, they are required to provide a valid bank account for the deposit of the refund. The following is the procedure for submitting bank account details: E-Tax > Update details"
        },
        {
          type: "heading",
          text: "When is the deadline to declare and pay VAT?"
        },
        {
          type: "paragraph",
          text: "VAT is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may request to declare on a quarterly basis."
        },
        {
          type: "paragraph",
          text: "Whether monthly or quarterly, the VAT declaration must be submitted and paid by the 15th of the month following the end of the tax period."
        },
        {
          type: "paragraph",
          text: "This means that monthly declarations concerning the tax period between March 1st and March 31st must be declared to RRA and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared to RRA and paid by May 15th and so on throughout the year."
        },
        {
          type: "paragraph",
          text: "The quarters for taxpayers declaring VAT on a quarterly basis concern the tax period between:"
        },
        {
          type: "list",
          items: [
            "1st January to 31st March must be declared and paid by 15th April;",
            "1st April to 30th June must be declared and paid by 15th July;",
            "1st July to 30th September must be declared and paid by 15th October;",
            "1st October to 31st December must be declared and paid by 15th January."
          ]
        },
        {
          type: "heading",
          text: "What is a VAT Refund for Privileged Persons?"
        },
        {
          type: "paragraph",
          text: "VAT Refund for 'privileged persons' refers to the refund available to certain consumers on the VAT paid on their goods or services. Where 'privileged persons' refers to:"
        },
        {
          type: "list",
          items: [
            "diplomats or individuals on diplomatic missions.",
            "non-governmental organisations (NGOs), inter-governmental organisations (IGOs) or donor-funded projects."
          ]
        },
        {
          type: "paragraph",
          text: "Privileged persons claim refunds online using the E-tax system."
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

export default VatExplanation;