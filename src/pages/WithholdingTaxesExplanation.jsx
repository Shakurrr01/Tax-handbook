import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WithholdingTaxesExplanation = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Withholding Taxes (WHT 15% and WHT 3%)",
      content: [
        {
          type: "heading",
          text: "Explanation of Withholding Taxes"
        },
        {
          type: "heading",
          text: "Which tax types are included in this chapter?"
        },
        {
          type: "paragraph",
          text: "This chapter focuses on withholding tax of 15% (WHT 15%) and withholding tax of 3% (WHT 3%). The process of declaring and paying each of these tax types are similar. The use of the phrase 'withholding taxes' in this chapter refers to WHT 15% and WHT 3%."
        },
        {
          type: "paragraph",
          text: "It is important to note that although they are also technically types of withholding tax, this chapter does not concern Withholding tax on imports of 5% (WHT 5%), Pay As You Earn (PAYE), Gaming Tax or Mining Royalty Tax as these are declared and paid differently. For more details on these tax types, see their respective chapters in this Tax Handbook."
        },
        {
          type: "paragraph",
          text: "Finally, withholding tax of 15% on gambling proceeds is a type of WHT 15%, but the process of declaring is more similar to that of Gaming Tax. Therefore, this particular type of WHT 15% is mentioned briefly, but is covered in more detail in the Gaming Tax chapter on page 282."
        },
        {
          type: "heading",
          text: "What are Withholding Taxes (WHT 15% and WHT 3%)?"
        },
        {
          type: "paragraph",
          text: "Withholding taxes are paid on transactions on particular types of income. Withholding taxes are declared and paid by the taxpayer who is the source of the transaction, but on behalf of the recipient. The recipient is then able to claim the tax paid back in their Income Tax declarations."
        },
        {
          type: "paragraph",
          text: "Withholding taxes are very important tax types. Withholding taxes ensure compliance by withholding tax on sources of income that might otherwise be difficult to trace. This increases the fairness of the tax system."
        },
        {
          type: "paragraph",
          text: "The different types withholding taxes (WHT 15% and WHT 3%) concern different types of income with different tax rates, explained in turn below."
        },
        {
          type: "heading",
          text: "What is Withholding Tax of 15% (WHT 15%)?"
        },
        {
          type: "paragraph",
          text: "WHT 15% is required to be withheld and paid on income received by non-registered businesses or registered businesses without proof of their most recent income tax declaration. It applies to the following types of income:"
        },
        {
          type: "list",
          items: [
            "Interest income",
            "Dividend income",
            "Royalty income",
            "Service fees",
            "Performance payments",
            "Gambling proceeds",
            "Payments for goods",
            "Public tender income"
          ]
        },
        {
          type: "paragraph",
          text: "The definitions of each of these types of income are discussed in more detail on page 270."
        },
        {
          type: "paragraph",
          text: "It is important to note that there are specific circumstances where some of these transactions may be subject to reduced withholding tax rates instead of 15% mostly because of double taxation avoidance agreements. Although the tax rate might be different, these are still referred to as WHT 15% in this Tax Handbook."
        },
        {
          type: "heading",
          text: "What is Withholding Tax of 3% (WHT 3%)?"
        },
        {
          type: "paragraph",
          text: "WHT 3% is required to be withheld and paid by public institutions on payments to the winners of public tenders who are registered and have proof of their recent income tax declaration."
        },
        {
          type: "heading",
          text: "What is a Tax Compliance Certificate (Quitus Fiscal)?"
        },
        {
          type: "paragraph",
          text: "A Quitus Fiscal certificate is available, upon request, to taxpayers who have demonstrated a history of correct tax compliance. The benefit of Compliance Certificate (Quitus Fiscal) is that certified taxpayers are not required to have WHT 3% withheld and paid on their behalf."
        },
        {
          type: "paragraph",
          text: "The procedure and requirements for applying for a Quitus Fiscal certificate are listed in more detail on page 55."
        },
        {
          type: "heading",
          text: "Who must register for Withholding Taxes?"
        },
        {
          type: "paragraph",
          text: "Any taxpayer making payments of taxable income, of the types listed for each specific tax type above, must register for the relevant withholding taxes."
        },
        {
          type: "heading",
          text: "How are Withholding Taxes calculated?"
        },
        {
          type: "paragraph",
          text: "Withholding taxes are required to be calculated before transmitting transactions of taxable income. The net amount of income that is actually transmitted is therefore equal to:"
        },
        {
          type: "paragraph",
          text: "Net Amount = Taxable Income – Tax Due"
        },
        {
          type: "paragraph",
          text: "Where 'Tax Due' is equal to:"
        },
        {
          type: "paragraph",
          text: "Tax Due = Taxable Income * Tax Rate"
        },
        {
          type: "paragraph",
          text: "Note that the taxable income excludes any other taxes due on the transaction, such as Value Added Tax (VAT)."
        },
        {
          type: "heading",
          text: "What is 'Withholding on interest'?"
        },
        {
          type: "paragraph",
          text: "Interest income is subject to withholding tax of 15%. Interest income includes income from loans, deposits, guarantees, current accounts, government securities, bonds and negotiable securities. It excludes interest income on deposits held for at least one year."
        },
        {
          type: "paragraph",
          text: "However, interest income on securities listed on capital markets and interest arising from investments in listed bonds with a maturity of three years and above can be withheld from Rwandan or EAC citizen registered taxpayers at the rate of 5%."
        },
        {
          type: "heading",
          text: "Example 41"
        },
        {
          type: "paragraph",
          text: "Amahoro has a current account with Gorilla Bank Ltd. Gorilla Bank Ltd pays her a gross interest of FRW 40,000 on her savings. As the source of this income, Gorilla Bank Ltd must declare and pay withholding tax on this interest of:"
        },
        {
          type: "paragraph",
          text: "FRW 40,000 * 15% = FRW 6,000"
        },
        {
          type: "paragraph",
          text: "This FRW 6,000 is declared and paid to RRA by Gorilla Bank Ltd. Therefore, the net amount that is transmitted by Gorilla Bank Ltd to Amahoro is:"
        },
        {
          type: "paragraph",
          text: "FRW 40,000 – FRW 6,000 = FRW 34,000"
        },
        {
          type: "paragraph",
          text: "The FRW 6,000 withholding tax was withheld by Gorilla Bank Ltd on behalf of Amahoro. Therefore, Amahoro can claim back this amount in Income Tax declarations."
        },
        {
          type: "heading",
          text: "What is 'Withholding on dividend'?"
        },
        {
          type: "paragraph",
          text: "Dividend income is subject to withholding tax of 15%. Dividend income includes any income from shares and similar income distributed by companies."
        },
        {
          type: "paragraph",
          text: "However, dividend income from securities listed on capital markets if the beneficiary of the dividend is a resident of Rwanda or EAC citizen is withheld at the rate of 5%."
        },
        {
          type: "heading",
          text: "Example 42"
        },
        {
          type: "paragraph",
          text: "ABC Ltd pays a gross dividend of FRW 125,000 to its shareholder, Lucie. As the source of this income, ABC Ltd must declare and pay withholding tax on this dividend of:"
        },
        {
          type: "paragraph",
          text: "FRW 125,000 * 15% = FRW 18,750"
        },
        {
          type: "paragraph",
          text: "This FRW 18,750 is declared and paid to RRA by ABC Ltd. Therefore, the net amount that is transmitted by ABC Ltd to Lucie is:"
        },
        {
          type: "paragraph",
          text: "FRW 125,000 – FRW 18,750 = FRW 106,250"
        },
        {
          type: "paragraph",
          text: "The FRW 18,750 withholding tax was withheld by ABC Ltd on behalf of Lucie. Therefore, Lucie can claim back this amount in Income Tax declarations."
        },
        {
          type: "heading",
          text: "What is 'Withholding on royalty income'?"
        },
        {
          type: "paragraph",
          text: "Royalty income is subject to withholding tax of 15%. Royalty income includes all payments of any kind received for the use of, or the right to use:"
        },
        {
          type: "list",
          items: [
            "on the use of or the right to use any copyright of literary, craftsmanship or scientific work including cinematograph films, films or tapes used for radio or television broadcasting;",
            "on the use, right to use or exploitation of a trademark or a tradename, a design or a model, a computer application, a software and a patent;",
            "as the price or consideration of using, or of the right to use industrial, commercial or scientific equipment or for using information concerning industrial, commercial or scientific knowledge or formula;",
            "on the right to exploit or explore natural resource."
          ]
        },
        {
          type: "heading",
          text: "What are 'service fees'?"
        },
        {
          type: "paragraph",
          text: "Service fees are subject to withholding tax of 15%. Service fees includes payments of any kind to any person other than to an employee, in consideration for any service of a managerial, technical or consultancy nature."
        },
        {
          type: "paragraph",
          text: "Managerial services involve activities related to scoping or improving how a business is run, as opposed to the actual day-to-day activities involved in running the business."
        },
        {
          type: "paragraph",
          text: "Technical services involve activities where skills or knowledge related to a technical field are required for the provision of goods and services."
        },
        {
          type: "paragraph",
          text: "Consultancy services involve the provision of advice by experts, professionals or consultants in particular fields, typically of a short-term nature of less than one year. This can overlap with managerial and technical services as these can also be provided by a consultant."
        },
        {
          type: "paragraph",
          text: "Lastly, board members allowance attracts 30% withholding tax."
        },
        {
          type: "paragraph",
          text: "The rates of withholding tax on service fees can be affected by Double Taxation Agreements (DTAs) signed with other countries."
        },
        {
          type: "heading",
          text: "Example 43"
        },
        {
          type: "paragraph",
          text: "Innocent is hired by XYZ Business Ltd as a technical consultant on a short-term contract. Innocent's gross income for this contract is FRW 3,500,000. As the source of this income, XYZ Business Ltd must declare and pay withholding tax on this income of:"
        },
        {
          type: "paragraph",
          text: "FRW 3,500,000 * 15% = FRW 525,000"
        },
        {
          type: "paragraph",
          text: "This FRW 525,000 is declared and paid to RRA by XYZ Business Ltd. Therefore, the net amount transmitted by XYZ Business Ltd to Innocent is:"
        },
        {
          type: "paragraph",
          text: "FRW 3,500,000 – FRW 525,000 = FRW 2,975,000"
        },
        {
          type: "paragraph",
          text: "The FRW 525,000 withholding tax was withheld by XYZ Business Ltd on behalf of Innocent. Therefore, Innocent can claim back this amount in Income Tax declarations."
        },
        {
          type: "heading",
          text: "What are 'performance payment'?"
        },
        {
          type: "paragraph",
          text: "Performance payments are subject to withholding tax of 15%. Performance payments includes payments of any kind made to an artist, musician or sportsperson for a performance in Rwanda. This is irrespective of whether the payments are made directly or through an entity that is not resident in Rwanda."
        },
        {
          type: "heading",
          text: "What are 'payments for goods and services supplied by non-registered taxpayers?"
        },
        {
          type: "paragraph",
          text: "Payments of any kind for any goods and services supplied by non-registered taxpayers are subject to withholding tax of 15%. 'Non-registered taxpayers' refers to any individual or business without a unique Taxpayer Identification Number (TIN). This includes payments made for goods and services supplied by companies or individuals outside Rwanda that are not registered with RRA."
        },
        {
          type: "heading",
          text: "What are 'gambling proceeds?"
        },
        {
          type: "paragraph",
          text: "Gambling proceeds won by the player during gaming activities are subject to withholding tax of 15%. Gambling proceeds are defined as the difference between the winnings of a player and the amount of money invested by the player from the start until the end of the game."
        },
        {
          type: "paragraph",
          text: "The declaration process for Withholding Tax of 25% on gambling proceeds is similar to Gaming Tax. Therefore, this is covered in the Gaming Taxes chapter on page 282."
        },
        {
          type: "heading",
          text: "When is the deadline to declare and pay Withholding Taxes?"
        },
        {
          type: "paragraph",
          text: "Withholding taxes (WHT 15% and WHT 3%) are each declared and paid on a monthly basis. The declaration must be submitted and any tax paid within fifteen (15) days of the end of the tax period in which the payment was made. A separate declaration is required for each type of withholding tax (including the different types of income subject to Withholding 15%). Declarations are not required if no taxable payments were made during the tax period."
        },
        {
          type: "paragraph",
          text: "This means that declarations concerning the tax period between March 1st and March 31st must be declared to RRA and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared to RRA and paid by May 15th and so on throughout the year."
        },
        {
          type: "heading",
          text: "Can Withholding Taxes be claimed back in Income Tax?"
        },
        {
          type: "paragraph",
          text: "Taxpayers may claim back Withholding taxes that have been withheld and paid on their behalf in Income Tax declarations, see page 132 for more details."
        },
        {
          type: "heading",
          text: "Fees Levied by Decentralised Entities"
        },
        {
          type: "heading",
          text: "What are Decentralised Entities fees?"
        },
        {
          type: "paragraph",
          text: "There are fees levied on services and certificates:"
        },
        {
          type: "paragraph",
          text: "Fees levied on services and certificates delivered by decentralised entities as follows:"
        },
        {
          type: "list",
          items: [
            "fees on the use of public domain of State;",
            "fees on services delivered by decentralised entities;",
            "charges levied as fees;"
          ]
        },
        {
          type: "paragraph",
          text: "However, a decentralised entity is prohibited to set any other kind of fees or charges levied as fees not specified in the Presidential Order nº 075/01 of 04/12/2023 determining fees levied on services and certificates delivered by decentralised entities."
        },
        {
          type: "heading",
          text: "Which third parties also collect decentralised entities fees?"
        },
        {
          type: "paragraph",
          text: "Ngali Holdings Ltd is mandated to support RRA in collecting all local government fees. Millennium Savings and Investment Cooperative (MISIC) also collects parking fees."
        },
        {
          type: "paragraph",
          text: "In addition, the declaration and payment of the following decentralized entities fees is now processed through the e-Government platform known as Irembo or Rwanda Online:"
        },
        {
          type: "list",
          items: [
            "Civil status certificates, including Birth, Marriage and Death certificates.",
            "Transfer of land titles."
          ]
        },
        {
          type: "heading",
          text: "When are the deadlines to declare and pay different types of decentralised entities fees?"
        },
        {
          type: "paragraph",
          text: "The deadline to declare and pay decentralized entities fees depends upon the basis of the fee. Fees charged for a service, such as fees on official certificates and documents to be notified by the public notary, must be declared and paid before the service is delivered."
        },
        {
          type: "paragraph",
          text: "Fees payable on an annual basis, such as fees on advertising, must be declared and paid no later than 31st December of that year."
        },
        {
          type: "heading",
          text: "What are the different decentralized entities fees and rates?"
        },
        {
          type: "paragraph",
          text: "The rates of many decentralized entities fees are variable, within certain thresholds, depending upon certain factors such as the location, i.e., urban, trading centre, or rural, or the vehicle details. The exact rate, within the thresholds, is determined by the District Council on an annual basis by the 30th June."
        },
        {
          type: "paragraph",
          text: "The list of local government fees, detailed in the Presidential Order Determining Fees Levied For Public Services And Certificates Delivered by Decentralized Entities are displayed below, and accessible using below link:"
        },
        {
          type: "paragraph",
          text: "https://www.rra.gov.rw/fileadmin/user_upload/Iteka_rya_Perezida_04.12.2023_ku_mahoro_kuri_serivise_n_ibyemezo_bitangwa_2023.pdf"
        },
        {
          type: "heading",
          text: "Fees charged on public parking on road:"
        },
        {
          type: "paragraph",
          text: "FRW 200 per hour – FRW 30,000 per month"
        },
        {
          type: "heading",
          text: "Fees charged on fenced public parking:"
        },
        {
          type: "list",
          items: [
            "a vehicle used for public transport not more than 18 seats and small cars used as taxis: FRW 500 per day;",
            "a vehicle of 19 to 30 seats used for public transport: FRW 1,000 per day;",
            "a vehicle of 31 to 50 seats used for public transport: fee ranges from FRW 1,500 to FRW 3,000 per day;",
            "a vehicle of more than 50 seats used for public transport: fee ranges from FRW 3,500 to FRW 10,000 per day;",
            "a vehicle not used for public transport which enters in a public parking is subject to FRW 200 every time it enters a public parking."
          ]
        },
        {
          type: "heading",
          text: "Fees levied on boat public parking:"
        },
        {
          type: "list",
          items: [
            "Motor boat with loading capacity of equal to or less than five tons:",
            "FRW 150 per day;",
            "FRW 4,000 per month;",
            "Motor boat with loading capacity exceeding five tons:",
            "FRW 200 per day;",
            "FRW 5,000 per month;",
            "a small boat without engine:",
            "FRW 100 per day;",
            "FRW 3,000 per month."
          ]
        },
        {
          type: "heading",
          text: "Livestock trade Fee:"
        },
        {
          type: "list",
          items: [
            "a cow: FRW 3,000;",
            "a goat: FRW 500;",
            "a pig: FRW 700;",
            "a sheep: FRW 500."
          ]
        },
        {
          type: "heading",
          text: "Fee for use of slaughterhouse organised by a decentralised entity:"
        },
        {
          type: "list",
          items: [
            "a cow: FRW 2,000;",
            "a goat: FRW 500;",
            "a pig: FRW 1,000;",
            "a sheep: FRW 500."
          ]
        },
        {
          type: "heading",
          text: "Civil marriage on a day different from the day fixed by the Council of a decentralised entity:"
        },
        {
          type: "paragraph",
          text: "FRW 50,000"
        },
        {
          type: "heading",
          text: "Building permit, renewal of the building permit or for authorisation to change reasons based on the request for the building permit:"
        },
        {
          type: "list",
          items: [
            "FRW 20,000 for the floor area not exceeding 100 sqm;",
            "FRW 100,000 for the floor area ranging from above 100 sqm to 200 sqm;",
            "FRW 150,000 for the floor area ranging from above 200 sqm to 500 sqm;",
            "FRW 200,000 for the floor area of more than 500 sqm."
          ]
        },
        {
          type: "heading",
          text: "Records, certificates and services"
        },
        {
          type: "list",
          items: [
            "a civil status record: FRW 1,500;",
            "an extract of a civil status record: FRW 1,000;",
            "an identity card: FRW 500;",
            "a certificate for the loss of an identity card: FRW 3,000;",
            "a birth certificate: FRW 500;",
            "a marriage certificate: FRW 500;",
            "a celibacy certificate: FRW 500;",
            "a divorce certificate: FRW 500;",
            "public auction conducted by a non-professional bailiff on immovable property: FRW 5,000."
          ]
        },
        {
          type: "heading",
          text: "Documents notarized by a public notary"
        },
        {
          type: "list",
          items: [
            "certification of document authenticity: FRW 1,500;",
            "certification of the conformity of a copy to the original: FRW 1,500;",
            "authentication of signatures: FRW 1,200;",
            "certification of by-laws: FRW 500 for each page;",
            "certification of any contract is FRW 500 for each page;",
            "issuance of other notarial deeds provided for by law: FRW 500 for each page."
          ]
        },
        {
          type: "heading",
          text: "Non-electronic advertising billboards are fixed as follows:"
        },
        {
          type: "list",
          items: [
            "In the City of Kigali: FRW 20,000 per sqm per year;",
            "In satellite or secondary cities: FRW 15,000 per sqm per year;",
            "Elsewhere in the country: 10,000 FRW per sqm per year"
          ]
        },
        {
          type: "paragraph",
          text: "Electronic advertising billboard: FRW 100,000 per year, regardless of its size and its location. This fee can be valued and paid quarterly at the request of the advertiser."
        },
        {
          type: "paragraph",
          text: "Other advertising billboards with non-permanent messages require authorization from the competent authority and are subject to a fee of 5,000 FRW per day."
        },
        {
          type: "paragraph",
          text: "If the advertising billboard advertises on both sides, each side is subject to charges."
        },
        {
          type: "heading",
          text: "Fee for use of loudspeaker for advertisement"
        },
        {
          type: "list",
          items: [
            "In the City of Kigali: FRW 100,000 per day;",
            "In satellite or secondary cities: FRW 50,000 per day;",
            "Elsewhere in the country: FRW 10,000 per day."
          ]
        },
        {
          type: "paragraph",
          text: "Use of a banner is FRW 7,500 per day."
        },
        {
          type: "paragraph",
          text: "Fee on advertisement means not specified in the Presidential Order is FRW 10,000 per quarter or FRW 1,000 per day."
        },
        {
          type: "heading",
          text: "Fees on boat number plate:"
        },
        {
          type: "list",
          items: [
            "A motor boat: FRW 15,000;",
            "A non-motorised boat: FRW 5,000."
          ]
        },
        {
          type: "heading",
          text: "Fees on communication towers:"
        },
        {
          type: "list",
          items: [
            "FRW 2,000 on every meter of the tower's vertical length per year",
            "The height of the building or structure on which the tower is erected is charged FRW 1,000 per meter of the vertical length per year."
          ]
        },
        {
          type: "heading",
          text: "Commercial transportation of quarry materials:"
        },
        {
          type: "paragraph",
          text: "Per round of the vehicle, on commercial transportation of quarry materials is FRW 1,000 per m3"
        },
        {
          type: "heading",
          text: "Commercial transportation of bricks or tiles:"
        },
        {
          type: "list",
          items: [
            "FRW 1,000 per m3 per round of the vehicle transporting bricks;",
            "FRW 500 per m3 per round of the vehicle transporting tiles."
          ]
        },
        {
          type: "heading",
          text: "Forest products:"
        },
        {
          type: "list",
          items: [
            "FRW 150 per plank, payable by the producer of planks;",
            "FRW 150 per bag of charcoal paid by the charcoal maker;",
            "FRW 1,000 per m3 of firewood, payable by the woodcutter;",
            "FRW 1,000 per m3 of beams, payable by the woodcutter."
          ]
        },
        {
          type: "paragraph",
          text: "The processes for declaring these fees varies, depending upon the type of fee. These different processes for declaring are explained in more detail on page 345."
        },
        {
          type: "paragraph",
          text: "Note that vulnerable people may request a waiver from fees by the District Council for all of the following fees."
        },
        {
          type: "heading",
          text: "Tax Centres"
        },
        {
          type: "paragraph",
          text: "In order to facilitate taxpayers, RRA has a widespread network across the country. RRA has established tax centres at district level. Taxpayers can register for decentralised entities taxes and Fees, and be assisted at each of these tax centres. The working hours of each tax centre are 09:00 to 17:00 from Monday to Friday, excluding national holidays."
        },
        {
          type: "paragraph",
          text: "If there are any difficulties in finding a tax centre, or any problems of access or service, please contact the regional coordinator listed for each province. The list of tax centres by province are displayed below:"
        },
        {
          type: "heading",
          text: "City of Kigali"
        },
        {
          type: "paragraph",
          text: "Head of RRA One Stop Service Centre Contact Number: +250 788185802"
        },
        {
          type: "list",
          items: [
            "RRA HQ,",
            "Kicukiro;",
            "Gasabo;",
            "Nyarugenge."
          ]
        },
        {
          type: "heading",
          text: "Eastern Province"
        },
        {
          type: "paragraph",
          text: "Region Coordinator Contact Number: +250 78818 5777"
        },
        {
          type: "list",
          items: [
            "Bugesera;",
            "Gatsibo;",
            "Kayonza;",
            "Kirehe;",
            "Ngoma;",
            "Nyagatare;",
            "Rwamagana."
          ]
        },
        {
          type: "heading",
          text: "Southern Province"
        },
        {
          type: "paragraph",
          text: "Region Coordinator Contact Number: +250 78818 5580"
        },
        {
          type: "list",
          items: [
            "Gisagara;",
            "Huye;",
            "Kamonyi",
            "Nyamagabe;",
            "Nyanza;",
            "Nyaruguru;",
            "Ruhango."
          ]
        },
        {
          type: "heading",
          text: "Western Province"
        },
        {
          type: "paragraph",
          text: "Region Coordinator Contact Number: +250 78818 5782"
        },
        {
          type: "list",
          items: [
            "Karongi;",
            "Ngororero;",
            "Nyabihu;",
            "Nyamasheke;",
            "Rubavu;",
            "Rusizi;",
            "Rutsiro."
          ]
        },
        {
          type: "heading",
          text: "Northern Province"
        },
        {
          type: "paragraph",
          text: "Region Coordinator Contact Number: +250 78818 5787"
        },
        {
          type: "list",
          items: [
            "Burera;",
            "Gakenke;",
            "Gicumbi;",
            "Musanze;",
            "Rulindo."
          ]
        },
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

export default WithholdingTaxesExplanation;