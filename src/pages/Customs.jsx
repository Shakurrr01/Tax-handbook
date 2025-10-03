import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Truck, FileText, Calculator, Clock, AlertTriangle, CheckCircle, Info, MapPin, Users, Shield, Package, DollarSign } from 'lucide-react';
import '../styles/Diagrams.css';

const Customs = () => {
  const customsDuties = [
    { duty: 'Import Duty', rate: '0-35%', description: 'Tax on imported goods from outside EAC', code: 'C' },
    { duty: 'Excise Duty', rate: '10-160%', description: 'Tax on specific products', code: 'E' },
    { duty: 'VAT', rate: '18%', description: 'Value Added Tax on imports', code: 'V' },
    { duty: 'WHT 5%', rate: '5%', description: 'Withholding tax on imports', code: 'W' },
    { duty: 'IDL', rate: '1.5%', description: 'Infrastructure Development Levy', code: 'IDL' },
    { duty: 'AUL', rate: '0.2%', description: 'African Union Levy', code: 'AU' },
    { duty: 'Environmental Levy', rate: '0.2%', description: 'Tax on plastic packaged items', code: 'EPL' },
    { duty: 'MVF', rate: 'Variable', description: 'Motor Vehicle Registration Fees', code: 'MVF' },
    { duty: 'Road Toll', rate: '$76-152', description: 'Fee for foreign trucks entering Rwanda', code: 'FER' },
    { duty: 'Fuel Levy', rate: '15%', description: 'Tax on imported fuel', code: 'FER' }
  ];

  const borderPosts = [
    { name: 'Gatuna', country: 'Uganda', hours: '24 hours', threshold: 'FRW 2,500,000', type: 'OSBP' },
    { name: 'Kagitumba', country: 'Uganda', hours: '24 hours', threshold: 'FRW 3,000,000', type: 'OSBP' },
    { name: 'Rusumo', country: 'Tanzania', hours: '24 hours', threshold: 'FRW 2,500,000', type: 'OSBP' },
    { name: 'Rutete (Nemba)', country: 'Burundi', hours: '04:00-22:00', threshold: 'FRW 2,000,000', type: 'OSBP' },
    { name: 'Cyanika', country: 'Uganda', hours: '06:00-19:00', threshold: 'FRW 3,000,000', type: 'OSBP in process' },
    { name: 'Ruhwa', country: 'Burundi', hours: '06:00-18:00', threshold: 'FRW 1,000,000', type: 'OSBP' }
  ];

  const dryPorts = [
    { name: 'DPW - Masaka', location: 'Kigali', hours: '07:00-12:00', type: 'High-value consignments' },
    { name: 'Magerwa - Gikondo', location: 'Kigali', hours: '07:00-24:00', type: 'General cargo' },
    { name: 'Bollore Logistics', location: 'Kigali', hours: '07:00-24:00', type: 'Free Zone' },
    { name: 'Kigali Airport', location: 'Kigali', hours: '07:00-24:00', type: 'Air freight' },
    { name: 'Gatsata Oil Depot', location: 'Kigali', hours: '08:00-24:00', type: 'Fuel and petroleum' }
  ];

  const facilitationSchemes = [
    {
      scheme: 'Simplified Trade Regime',
      description: 'For small-scale traders with consignments below FRW 500,000',
      benefits: ['Direct assessment by customs officer', 'Simplified procedures', 'Reduced documentation']
    },
    {
      scheme: 'Gold Card Scheme',
      description: 'For compliant importers/exporters with good history',
      benefits: ['Quick release', 'Priority clearance', 'Reduced verification']
    },
    {
      scheme: 'Authorised Economic Operator (AEO)',
      description: 'EAC-wide privileged status for compliant traders',
      benefits: ['EAC-wide benefits', 'Enhanced facilitation', 'Reduced controls']
    },
    {
      scheme: 'Pre-clearance Facility',
      description: 'For EAC originating goods with automatic access',
      benefits: ['Automatic access', 'Reduced processing time', 'Simplified procedures']
    },
    {
      scheme: 'Duty Remission Scheme',
      description: 'Temporary modification of tariff rates',
      benefits: ['Reduced duty rates', 'Specific product benefits', 'Annual basis']
    }
  ];

  const declarationSteps = [
    {
      step: 1,
      title: 'Prepare Documents',
      description: 'Gather all required documents and contract a clearing agent'
    },
    {
      step: 2,
      title: 'Submit Declaration',
      description: 'Clearing agent submits import/export declaration to ReSW'
    },
    {
      step: 3,
      title: 'Receive Assessment',
      description: 'Receive assessment notice with customs duties due'
    },
    {
      step: 4,
      title: 'Pay Duties',
      description: 'Pay all customs duties due (directly or through agent)'
    },
    {
      step: 5,
      title: 'Verification',
      description: 'Customs assigns channel and conducts verification if required'
    },
    {
      step: 6,
      title: 'Release',
      description: 'Receive release order and exit note after successful verification'
    }
  ];

  const requiredDocuments = [
    {
      type: 'Mandatory Documents',
      documents: [
        'Commercial Invoice showing value and description',
        'Bill of Lading or Airway Bill',
        'Packing List',
        'Import/Export Declaration Form'
      ]
    },
    {
      type: 'Additional Documents (as required)',
      documents: [
        'Certificate of Origin (for EAC/COMESA benefits)',
        'Phytosanitary Certificate (agricultural goods)',
        'Health Certificate (food products)',
        'Technical Standards Certificate (electronics)',
        'Import License (restricted goods)'
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Globe size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Customs Duties and Procedures</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to import and export procedures, customs duties, border posts, 
                and facilitation schemes in Rwanda
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Overview Section */}
        <section className="content-section">
          <h2>Overview</h2>
          <div className="info-card">
            <div className="info-icon">
              <Globe size={24} />
            </div>
            <div className="info-content">
              <p>
                Customs duties are taxes levied on goods imported into or exported from Rwanda. 
                The Rwanda electronic Single Window (ReSW) system manages all customs operations, 
                and clearing agents assist taxpayers with the import/export process. Various 
                facilitation schemes are available to simplify procedures for compliant traders.
              </p>
            </div>
          </div>
        </section>

        {/* Customs Explanation Section */}
        <section className="content-section">
          <h2>Explanation of Customs</h2>
          
          <h3>What is importing and exporting?</h3>
          <p>
            Importing is when goods are brought into Rwanda from an external country. Exporting is when goods are taken from Rwanda into an external country.
          </p>
          <p>
            This Tax Handbooks aims to provide all the information required for taxpayers to import or export any goods. However, as taxes are often required on imports, there is a greater focus in this Tax Handbook on importing.
          </p>
          <p>
            For comprehensive information on export-related processes, stakeholders are encouraged to consult the Rwanda Trade Portal. Detailed export procedures can be accessed at: <a href="https://rwandatrade.rw/" target="_blank" rel="noopener noreferrer">https://rwandatrade.rw/</a>
          </p>

          <h3>Who can import or export?</h3>
          <p>
            Any taxpayer may import or export goods. No additional registration is required, but individuals or businesses without TINs must register with RDB or RRA as normal.
          </p>
          <p>
            The majority of importing and exporting procedures are carried out by licensed companies called Clearing Agents on behalf of the taxpayers, see page 386 for more details.
          </p>

          <h3>What are Customs Duties?</h3>
          <p>
            In this Tax Handbook, customs duties are defined as all taxes, duties, levies and fees that are required to be paid to RRA on imported or exported goods.
          </p>
          <p>Therefore, customs duties include:</p>
          
          <h4>Taxes paid on imports that are also paid on domestic goods</h4>
          <ul>
            <li>Value Added Tax (VAT)</li>
            <li>Excise Duty</li>
          </ul>

          <h4>Taxes that are specifically paid on imports</h4>
          <ul>
            <li>Import Duty (ID)</li>
            <li>Withholding Tax of 5% (WHT 5%)</li>
            <li>Infrastructure Development Levy (IDL)</li>
            <li>Strategic Reserves Levy (SRL)</li>
            <li>African Union Levy (AUL)</li>
            <li>Environmental levy on imported items that are packaged in plastic materials.</li>
            <li>Levy on petrol, gas oil and motor vehicles for road maintenance.</li>
          </ul>

          <h4>Taxes that are specifically paid on exports</h4>
          <ul>
            <li>Export Duty on Raw Hides and Skins</li>
            <li>Export Tax - Minerals</li>
          </ul>

          <h4>Small fees on imports and exports</h4>
          <ul>
            <li>Computer Processing Fee</li>
            <li>Quality Inspection Fee (QIF)</li>
          </ul>

          <p>
            Customs duties ensure that local and foreign business can compete fairly, by ensuring a level playing field (VAT and Excise Duty), encouraging intra-regional trade (Import Duty), ensuring compliance of Income Tax (WHT 5%), funding beneficial projects (IDL, SRL and AUL) and supporting domestic manufacturing industries (Export Duty on Raw Hides and Skins), and by ensuring economic benefit, environmental stewardship, and social equity in the exploitation of mineral resources (Export Tax – Minerals). For more details on all types of customs duties, see page 371.
          </p>

          <h3>What is the East African Community Customs Union?</h3>
          <p>
            The East African Community (EAC) Customs Union is formed of Kenya, Tanzania, Uganda, Burundi, Southern Soudan, Democratic Republic of Congo and Rwanda. The main features of the EAC Customs Union are:
          </p>
          <ul>
            <li>A shared set of import duties applied on goods from countries outside the EAC. This is referred to as the Common External Tariff (CET), see page 372 for details.</li>
            <li>Zero rate of import duty, and no quotas, applied on goods from countries within the EAC with valid Certificates of Origin, see page 367 for details.</li>
            <li>Shared procedures, safety measures, valuation methods, exemptions, trade policy and terminology governed by the EAC Customs Management Act (CMA).</li>
          </ul>
          <p>
            Rwanda is also a member of the Common Market for Eastern and Southern Africa (COMESA) free trade area.
          </p>

          <h3>What is the Rwanda electronic Single Window (ReSW)?</h3>
          <p>
            The ReSW is an online portal aimed at facilitating trade by ensuring all trade related information required by government institutions is submitted only once. This reduces the compliance burden and time taken when importing or exporting goods. The ReSW also increases transparency by clearly showing when information was submitted, changed or approved, and by whom.
          </p>
          <p>
            The ReSW is used by Clearing Agents, Customs Officials and other government institutions as required. Clearing Agents use the ReSW on behalf of taxpayers during the importing and exporting process. For more details on Clearing Agents, see page 386.
          </p>

          <h3>How are imported and exported goods valued?</h3>
          <p>
            Imports are valued as Cost, Insurance and Freight (CIF). This is equal to the cost of the goods, the cost of any insurance paid on the goods and the freight costs of transporting the goods to the first point of entry of the EAC territory. Exports are valued as Free On Board (FOB). This is equal to the cost of the goods only.
          </p>
          <p>
            Whether using the CIF or FOB valuation, the declared value must be supported by commercial invoices, as well as insurance and freight invoices where applicable.
          </p>
          <p>
            If goods have been purchased in a foreign currency, declare the value in the currency of the invoice. The ReSW system then uses the National Bank of Rwanda (BNR) exchange rate to convert this into Rwandan francs.
          </p>

          <h4>Example 79</h4>
          <p>
            Rukundo is importing a consignment of mobile phones from Japan. The cost of the mobile phones was USD 30,000 (thirty thousand US dollars). He paid an additional USD 400 (four hundred US dollars) to transport the consignment to the first point of entry of the EAC, in this case, the port of Mombasa in Kenya. He also paid USD 150 to insure the goods during transportation to the port of Mombasa. On the day of declaration, the exchange rate is USD 1: 900 FRW. Therefore, the CIF value of his import declaration is:
          </p>
          <p>
            CIF = (USD 30,000 + USD 400 + USD 150) * 900 = FRW 27,495,000.
          </p>

          <h3>What are Harmonised System (HS) Codes?</h3>
          <p>
            Harmonised System (HS) Codes are internationally standardized numerical codes used to classify traded products for customs, taxation, and statistical purposes. The importer provides a description of the type of goods to the Clearing Agent, who is trained to select the correct HS Code. Selecting the correct HS Code is important for ensuring the correct tariff rate and amount of tax to be declared and paid.
          </p>

          <h4>Example 80</h4>
          <p>
            Amahoro is importing scotch whisky of 40% alcoholic volume from the United Kingdom. She describes this to the Clearing Agent who correctly selects the HS Code:
          </p>
          <p>
            2208.30.00 – 'Whiskies' within the 'Beverages, Spirits and Vinegar' chapter.
          </p>

          <h3>What documents are required when importing or exporting?</h3>
          <p>
            The importing or exporting taxpayer must provide the Clearing Agent with valid documents proving the value and authenticity of their consignment.
          </p>

          <h4>The mandatory documents that taxpayers importing goods originating from within the EAC must provide are:</h4>
          <ul>
            <li><strong>Commercial Invoice or equivalent document</strong><br />
            Showing the value and description of all goods within the consignment.</li>
            <li><strong>Packing List</strong><br />
            Lists the goods being transported within the consignment.</li>
          </ul>

          <h4>There are two additional mandatory documents that taxpayers importing goods originating from outside the EAC must provide to RRA:</h4>
          <ul>
            <li><strong>Freight Invoice</strong><br />
            Showing the cost of transport and insurance for the consignment, if not included in the commercial invoice.</li>
            <li><strong>Bill of Lading / Airway Bill</strong><br />
            A contract between the owner of the ship / plane transporting the consignment and the importing taxpayer.</li>
          </ul>

          <h4>The only mandatory document that taxpayers exporting goods must provide to RRA:</h4>
          <ul>
            <li><strong>Commercial Invoice or equivalent document</strong><br />
            Showing the value and description of all goods within the consignment.</li>
          </ul>

          <p>
            Additional documents that taxpayers may be required to provide when importing or exporting depend upon the type of goods and their origin. Clearing Agents are trained to inform taxpayers which documents are necessary for their consignment. Without the required documents, Customs Officials will not permit the goods to be imported or exported. Examples of goods that may require additional documents include:
          </p>
          <ul>
            <li>Goods produced within the EAC or COMESA</li>
            <li>Agricultural goods and inputs including food</li>
            <li>Chemicals and cosmetics</li>
            <li>Medical equipment and pharmaceuticals</li>
            <li>Worn clothes</li>
          </ul>

          <h3>What documents are required to prove that goods being imported were produced in the EAC or COMESA?</h3>
          <p>
            Imported goods that are produced within the EAC or COMESA can be subject to exemptions. In addition, imported goods that are produced within the EAC only are granted automatic access to the pre-clearance facility, see page 406 for details. These benefits require a Certificate of Origin delivered by the exporting country.
          </p>
          <p>
            The EAC Rules of Origin document explains the criteria that goods should meet to be considered as originating from EAC partner states. This Tax Handbook does not include all details or exceptions. The EAC Rules of Origin document is on the RRA website at:
          </p>
          <p>
            <a href="https://www.rra.gov.rw/fileadmin/user_upload/eac_rules_of_origin_2015.pdf" target="_blank" rel="noopener noreferrer">https://www.rra.gov.rw/fileadmin/user_upload/eac_rules_of_origin_2015.pdf</a>
          </p>
          <p>
            Similarly, the COMESA Rules of Origin document is available at:
          </p>
          <p>
            <a href="https://www.comesa.int/wp-content/uploads/2022/01/COMESA_Protocol-on-Rules-of-Origin.pdf" target="_blank" rel="noopener noreferrer">https://www.comesa.int/wp-content/uploads/2022/01/COMESA_Protocol-on-Rules-of-Origin.pdf</a>
          </p>

          <h3>How do Rwandan exporters certify that goods being exported were produced in Rwanda?</h3>
          <p>
            Rwandan exporters can apply for a Certificate of Origin through their Clearing Agent. The Clearing Agent applies on the Rwanda electronic Single Window (ReSW) and provides the required evidence at any Border Post or Dry Port. There are different fees and requirements depending upon the country to which the goods are exported. There is also a Simplified Certificate of Origin available for smaller value consignments, see page 2 for more details.
          </p>
          <p>
            There are many incentives that Rwandan exporters can benefit from, depending on the country being exported to. This includes EAC, COMESA, and the European Union (EU), see the Export Handbook, referenced on page 402, for more details.
          </p>

          <h3>What are the different Customs channels?</h3>
          <p>
            After import or export declarations have been submitted and paid, the Rwanda electronic Single Window (ReSW) system assigns the consignment to a Customs channel. The Customs channel refers to the level of verification from Customs Officers required for that consignment.
          </p>
          <p>
            The ReSW uses a risk management system to assign Customs channels depending upon the customs facility scheme (AEO, Gold Card), the past history of the taxpayer, and the types of goods amongst other factors. However, Customs Officers are authorised to carry out surprise checks or additional verifications regardless of the assigned Customs channel.
          </p>
          <p>The Customs channels are:</p>
          <ul>
            <li><strong>Green</strong> – No verification, immediate release of goods, no post-clearance audit</li>
            <li><strong>Blue</strong> – No verification, immediate release of goods, available to taxpayers with history of correct compliance, scope for post-clearance audit</li>
            <li><strong>Yellow</strong> – Documentary verification, scope for post-clearance audit</li>
            <li><strong>Red</strong> – Documentary and physical verification, scope for post-clearance audit</li>
          </ul>
          <p>
            Documentary verification requires Customs Officers to check declarations and supplementary documentation. Physical verification requires Customs Officers to check the actual consignment.
          </p>
          <p>
            If there are any problems with verification, the Customs Officers will lodge a 'query' which may require a second assessment notice, additional taxes to be paid, statement of offence, or further actions to be taken. See page 418 for more details on Customs penalties.
          </p>
          <p>
            If there are no problems with verification, the Customs Official changes the Customs channel to 'Green' in the ReSW system and gives the taxpayer a release order.
          </p>

          <h3>What is a Post-Clearance Audit (PCA)?</h3>
          <p>
            In addition to documentary and physical verification at border posts, importing or exporting taxpayers may also be subject to Post-Clearance Audits (PCAs). PCAs are explained in more detail on the EAC website at:
          </p>
          <p>
            <a href="https://www.eac.int/documents" target="_blank" rel="noopener noreferrer">https://www.eac.int/documents</a>
          </p>
          <p>
            The different types and processes for PCAs is similar to other RRA audits, see page 37 for details.
          </p>

          <h3>What is a Stay of Application?</h3>
          <p>
            A 'stay of application' is a different rate of import duty from the Common External Tariff (CET) available for specific products. These are negotiated on a country-by-country basis, but once agreed are available for all importing taxpayers. The stay of application rate can be higher or lower than the CET rate. Stay of applications apply on annual fiscal year, 1st July to 30th June, basis.
          </p>
          <p>
            Once approved, the stay of applications are published by product (using HS Codes) in EAC gazettes, available at:
          </p>
          <p>
            <a href="https://www.rra.gov.rw/en/customs-services/eac-gazette" target="_blank" rel="noopener noreferrer">https://www.rra.gov.rw/en/customs-services/eac-gazette</a>
          </p>
        </section>

        {/* Customs Duties Detailed Section */}
        <section className="content-section">
          <h2>Customs Duties</h2>
          
          <h3>What are the different Customs Duties?</h3>
          <p>
            The full list of customs duties is displayed on page 361. The rates and bases of each type are described below.
          </p>

          <h3>Import Duty</h3>
          <p>
            Import Duty is a tax paid specifically on imported goods originating from outside of the EAC. The EAC Customs Union ensures a zero (0%) rate of Import Duty on all imports on goods originating from within the EAC, see page 367 for details.
          </p>
          <p>
            The EAC Customs Union means that the rates of import duty are agreed in the Common External Tariff (CET). The CET sets Import Duty rates on a product-by-product basis for each HS Code. The CET is available on the RRA website at: <a href="https://www.rra.gov.rw/fileadmin/user_upload/EAC_CET_2022_version_JULY_23.pdf" target="_blank" rel="noopener noreferrer">https://www.rra.gov.rw/fileadmin/user_upload/EAC_CET_2022_version_JULY_23.pdf</a>
          </p>
          <p>
            The Common External Tariff (CET) applies a range of import duty rates across four tariff bands, with rates varying from a minimum of 0% to a maximum of 35%, depending on the type of goods:
          </p>
          <ul>
            <li>Capital goods and raw materials = 0%</li>
            <li>Intermediate goods = 10%</li>
            <li>Finished goods = 25%</li>
            <li>Finished goods available in EAC = 35%</li>
          </ul>
          <p>
            In addition to these standard rates, certain products are classified as sensitive goods, which may be subject to specific tariff rates or trade restrictions.
          </p>
          <p>Some examples of sensitive goods which attract higher rate than 35% include:</p>
          <ul>
            <li>0402.10.00 - In powder, granules or other solid forms, of a fat content, by weight, not exceeding 1.5% at a rate of 60% of CIF;</li>
            <li>1006.40.00 - Broken Rice at a rate of 75% of CIF or $345/MT whichever is higher;</li>
            <li>1701.99.10 - White refined sugar (for industrial use) at a rate of 100% of CIF or $ 460/MT whichever is higher;</li>
            <li>1701.99.20 - Other sugar (for industrial use) at a rate of 100% of CIF or$ 460/MT whichever is higher…</li>
          </ul>
          <p>
            There are two exceptions where the above tariff rates can be temporally modified: 'Stay of Applications' and the 'Duty Remission Scheme'. For more details see page 370 and 407 respectively.
          </p>
          <p>The amount of Import Duty to be paid is calculated by:</p>
          <p><strong>Import Duty = CIF * Import Duty rate</strong></p>
          <p>
            In import declarations and assessment notices, Import Duty is referred to under code 'C', for example 'C02'.
          </p>

          <h3>Handling Fees (HF)</h3>
          <p>
            Handling Fees are not actually paid, but are included in VAT and Excise Duty calculations. HF is calculated by:
          </p>
          <p><strong>Handling Fees (HF) = Net Weight (kg) * FRW 10</strong></p>
          <p>Net Weight (kg) refers to the weight of the goods in the consignment in kilograms.</p>

          <h3>Excise Duty</h3>
          <p>
            Excise Duty is paid on specific products, regardless of whether they are produced domestically or imported. For more details on the products subject to Excise Duty, the basis and the rates, see page 255.
          </p>
          <p>
            The Excise Duty to be paid on a specific basis is calculated by an amount of tax per unit of the product. The Excise Duty to be paid on an ad valorem basis is calculated by:
          </p>
          <p><strong>Excise Duty = (CIF + Import Duty + HF) * Excise Rate</strong></p>
          <p>
            In import declarations and assessment notices, Excise Duty is referred to under code 'E', for example 'E01'.
          </p>

          <h3>Value Added Tax (VAT)</h3>
          <p>
            VAT is paid on the majority of products, regardless of whether they are produced domestically or imported. The normal rate of VAT in Rwanda is 18%. For details on products that are exempted or zero-rated, see page 213.
          </p>
          <p>Therefore, the VAT to be paid on imported goods is calculated by:</p>
          <p><strong>VAT = (CIF + Import Duty + Excise Duty + HF) * VAT rate</strong></p>
          <p>
            Any VAT previously paid in a foreign country is not offset when calculating the VAT that is to be paid at Customs. This is expected to be refunded at the country of origin.
          </p>
          <p>
            Once VAT has been paid on imports at Customs, this amount can be claimed back in subsequent domestic VAT declarations. See page 228 for the information required when claiming back VAT paid on imports.
          </p>
          <p>
            In import declarations and assessment notices, VAT is referred to under code 'V', for example 'V02'.
          </p>

          <h3>Withholding Tax of 5% (WHT 5%)</h3>
          <p>
            WHT 5% is a tax paid specifically on imported goods. WHT 5% is paid by all taxpayers except for taxpayers with a valid Compliance Certificate (Quitus Fiscal), and persons exempted from income tax, see page 55.
          </p>
          <p>The WHT 5% to be paid on imported goods is calculated by:</p>
          <p><strong>Withholding Tax of 5% (WHT 5%) = CIF * 5%</strong></p>
          <p>
            Once WHT 5% has been paid at Customs, this amount can be claimed back in subsequent domestic Income Tax (PIT or CIT) declarations by the importing taxpayers. This can be claimed back in the annual declarations. See page 150 for the information required when claiming back WHT 5% paid on imports.
          </p>
          <p>
            In import declarations and assessment notices, WHT 5% is referred to under code 'W', for example 'W01'.
          </p>

          <h3>Infrastructure Development Levy (IDL)</h3>
          <p>
            IDL is a tax paid specifically on imported goods from outside of the EAC. IDL contributes to regional trade-facilitation infrastructure projects. IDL is paid on all imported goods, with the exception of those detailed in Article 5 of Law N°34/2015 of 30/06/2015 establishing the infrastructure development levy on imported goods, including:
          </p>
          <ul>
            <li>Goods imported certifying the East African Community Rules of Origin;</li>
            <li>Goods imported specified in the Fifth Schedule of the East African Customs Management Act;</li>
            <li>Imported goods exempted from taxes as provided for in East African Community and industrial goods imported in Rwanda entitled to remission;</li>
            <li>Reproductive animals and reproductive plants;</li>
            <li>Pharmaceutical products;</li>
            <li>Veterinary and phytosanitary products;</li>
            <li>Medical equipment appearing on the list made by the Minister in charge of health and approved by the Minister in charge of taxes;</li>
            <li>Veterinary and phytosanitary equipment appearing on the list made by the Minister in charge of agriculture and animal husbandry and approved by the Minister in charge of taxes;</li>
            <li>Industrial machinery and equipment for energy and water sectors, as well as for investment projects with investment certificate;</li>
            <li>Organic and inorganic chemicals;</li>
            <li>Machinery and equipment approved by the Commissioner General.</li>
          </ul>
          <p>The IDL to be paid on imported goods is calculated by:</p>
          <p><strong>Infrastructure Development Levy (IDL) = CIF * 1.5%</strong></p>

          <h3>Strategic Reserves Levy (SRL)</h3>
          <p>
            SRL is a tax paid specifically on imported fuel and petroleum products. SRL funds the purchase and safe maintenance of greater reserves of fuel. The SRL is paid at a specific rate per litre of fuel, calculated by:
          </p>
          <p><strong>Strategic Reserves Levy (SRL) = FRW 50 per litre of fuel</strong></p>

          <h3>African Union Levy (AUL)</h3>
          <p>
            AUL is a tax paid specifically on imported goods. AUL contributes to the financing of African Union activities. AUL is paid on all imported goods, except for those subject to exemptions by the 5th Schedule of the EAC CMA, Duty Remission or VAT.
          </p>
          <p>The AUL paid on imported goods is calculated by:</p>
          <p><strong>African Union Levy (AUL) = CIF * 0.2%</strong></p>
          <p>
            In import declarations and assessment notices, AUL is referred to under code 'AU', for example 'AU0'.
          </p>

          <h3>Environmental levy</h3>
          <p>
            Environmental levy is a tax paid specifically on imported items that are packaged in plastic materials for the management of the resulting waste.
          </p>
          <p>
            Imported items provided for by the law are subjected to a levy of 0.2% to be calculated on their customs value. Items subject to environmental levy on imported items packaged in plastic materials are:
          </p>
          <ul>
            <li>Water</li>
            <li>All types of juice, energy drinks and carbonated non-alcoholic beverages</li>
            <li>Peanut butter, honey and derived products</li>
            <li>All types of body lotions, petroleum jelly and shampoos</li>
            <li>Mattresses</li>
            <li>Clothes</li>
            <li>Shoes</li>
            <li>All types of soaps</li>
            <li>Toilet papers</li>
          </ul>
          <p>
            In import declarations and assessment notices, Environmental levy is referred to under code 'EPL'.
          </p>

          <h3>Motor Vehicle Registration Fees (MVF)</h3>
          <p>
            MVF are paid specifically on imported motor vehicles. MVF must be paid regardless of the type of vehicle or the exemptions available to the importing taxpayer. For more details on importing motor vehicles see page 410.
          </p>
          <p>MVF vary depending upon the engine capacity of the vehicle as measured in cubic centimetres (cc):</p>
          <div className="table-container">
            <table className="customs-table">
              <thead>
                <tr>
                  <th>Engine Capacity (cc) between</th>
                  <th>Motor Vehicle Fees (MVF) for all Motor Vehicles</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0 to 1,000</td><td>FRW 75,000</td></tr>
                <tr><td>1,001 to 1,500</td><td>FRW 285,000</td></tr>
                <tr><td>1,501 to 3,000</td><td>FRW 445,000</td></tr>
                <tr><td>3,001 to 4,500</td><td>FRW 748,000</td></tr>
                <tr><td>4,501 and above</td><td>FRW 997,000</td></tr>
                <tr><td>Special Engine/Other categories</td><td>FRW 1,000,000</td></tr>
                <tr><td>Electric Vehicles</td><td>FRW 285,000</td></tr>
                <tr><td>All Electric Motorcycles</td><td>FRW 75,000</td></tr>
                <tr><td>Personalized Plate Number</td><td>FRW 5,000,000</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The special engine category includes semi-trailers, construction vehicles and other very heavy vehicles.
          </p>

          <h3>Road Toll</h3>
          <p>
            Road Toll is a fee paid specifically on foreign registered trucks entering Rwanda. Road Toll contributes to the Road Maintenance Fund (RMF) in Rwanda.
          </p>
          <p>
            It is important to note that the Road Toll is paid per truck entering Rwanda, not per declaration. Therefore, this is paid separately to other Customs Duties.
          </p>
          <p>
            The Road Toll has two different rates, depending on the size of the trucks. The Road Toll must be paid by trucks every time they enter Rwanda. The rate of Road Toll is:
          </p>
          <ul>
            <li>$76 USD for simple trucks</li>
            <li>$152 USD for semi-trailer, and trailer</li>
          </ul>
          <p>Road Toll is referred to as 'FER' in assessment notices.</p>

          <h3>Fuel Levy</h3>
          <p>
            Fuel Levy is a tax paid specifically on imported fuel and petroleum products. Fuel Levy contributes to the Road Maintenance Fund (RMF) in Rwanda. The Fuel Levy is paid at a specific rate per litre of fuel. The Fuel Levy to be paid on imported fuel is calculated by:
          </p>
          <p><strong>Fuel Levy = 15% of CIF</strong></p>
          <p>
            As with the Fuel Levy, Road Toll is referred to as 'FER' in import declarations and assessment notices.
          </p>

          <h3>Export Duty on Raw Hides and Skins</h3>
          <p>
            Export Duty on Raw Hides and Skins is paid on all exports of unprocessed hides and skins to outside of the EAC. The rate of Export Duty on Raw Hides and Skins is either:
          </p>
          <ul>
            <li>80% of FOB, or $0.52 per Kg, whichever is higher</li>
          </ul>
          <p>
            In export declarations and assessment notices, Export Duty on Raw Hides and Skins is referred to as code 'EX1'.
          </p>

          <h3>Export Tax – Minerals</h3>
          <p>Minerals exported in raw form are subject to an export tax as follows:</p>
          <ul>
            <li>2% of the norm value for the mineral category of base metals;</li>
            <li>3% of the norm value for the category of gemstones;</li>
            <li>2% of the norm value for the category of platinum group metals;</li>
            <li>1% of the norm value for the category of rare earth elements;</li>
            <li>2% of the norm value for the category of energy minerals;</li>
            <li>0.5% of the norm value for the category of gold.</li>
          </ul>
          <p>However, the law provides exemptions on Export Tax – Minerals as follows:</p>
          <ul>
            <li>Samples of minerals exported for the purpose of essay, analysis or any other examination are exempted from tax on minerals. A regulation of the competent authority determines the quantity of samples of minerals exempt from the tax on minerals.</li>
            <li>The processed minerals and imported minerals to be re-exported, except gold, are exempted from tax on minerals at export point.</li>
          </ul>

          <h3>Computer Processing Fee</h3>
          <p>
            The Computer Processing Fee is a fee paid for every import or export declaration that is submitted.
          </p>
          <p>The Computer Processing Fee is:</p>
          <ul>
            <li>FRW 3,000 per regular declaration</li>
            <li>FRW 500 per simplified declaration, see page 403 for more details on simplified declarations</li>
          </ul>
          <p>Computer Processing Fee is listed as a 'global fee' in import/export declarations and assessment notices.</p>

          <h3>Quality Inspection Fees (QIF)</h3>
          <p>
            Quality Inspection Fees (QIF) are fees paid on specific imported products. Rwanda Inspectorate, Competition and Consumer Protection Authority (RICA), and Rwanda Food and Drugs Authority (Rwanda FDA) are institutions which both designates which products are required to be inspected and carry out the inspections. RRA collects QIF on behalf of related regulatory agencies above mentioned. The QIF to be paid on imported goods is calculated by:
          </p>
          <p><strong>Quality Inspection Fees (QIF) = FOB * 0.2%</strong></p>
          <p>
            In import declarations and assessment notices, QIF are referred to under code 'QIF'.
          </p>

          <h3>Warehousing Fees</h3>
          <p>
            Warehousing Fees are paid when storing consignments in warehouses. It is important to note that these are paid directly to the warehouse owner and not to RRA. Rates may vary according to the warehouse, the size and weight of the consignment and how long it has been stored for.
          </p>

          <h3>Example 81</h3>
          <p>
            Rukundo is importing a consignment of sports shoes packed in plastic materials from the United Kingdom. The HS Code is 6404.11.00 'Sports footwear…'. The net weight of the consignment is 75kg. The CIF value of the consignment is:
          </p>
          <ul>
            <li>Cost = FRW 2,800,000</li>
            <li>Insurance = FRW 75,000</li>
            <li>Freight = FRW 350,000</li>
            <li>CIF (Cost + Insurance + Freight) = FRW 3,225,000</li>
          </ul>
          <p>The Customs Duties that must be paid are:</p>
          <ul>
            <li>Import Duty = FRW 3,225,000 * 35% = FRW 1,125,750</li>
            <li>Handling Fees (not paid) = FRW 10/kg * 75kg = FRW 750</li>
            <li>VAT = (FRW 3,225,000 + FRW 1,125,750 + FRW 750) * 18% = FRW 797,175</li>
            <li>WHT 5% = FRW 3,225,000 * 5% = FRW 161,250</li>
            <li>IDL = FRW 3,225,000 * 1.5% = FRW 48,375</li>
            <li>AUL = FRW 3,225,000 * 0.2% = FRW 6,450</li>
            <li>Environmental Levy = FRW 3,225,000 * 0.2% = FRW 6,450</li>
            <li>Computer Processing Fee = FRW 3,000</li>
          </ul>
          <p>Therefore, the total duties to be paid are FRW 2,149,200.</p>
          <p>
            Of this, the VAT of FRW 797,175 can be claimed back in domestic VAT declarations (as Rukundo is not the final consumer), and the WHT 5% of FRW 161,250 can be claimed back in domestic Income Tax declarations.
          </p>

          <h3>Example 82</h3>
          <p>
            Ubumwe is importing a consignment of Tusker beer from Kenya and presented EAC Certificate of Origin. The HS Code is 2203.00.90 'Beer made from malt'. The net weight of the consignment is 1,400kg. The CIF value of the consignment is:
          </p>
          <ul>
            <li>Cost = FRW 1,100,000</li>
            <li>Insurance = FRW 55,000</li>
            <li>Freight = FRW 450,000</li>
            <li>Since the goods are on EAC territory, Customs Value does not include Insurance and Freight. Therefore, CIF = FRW 1,100,000</li>
          </ul>
          <p>The customs duties that must be paid are:</p>
          <ul>
            <li>Import Duty = FRW 1,100,000 * 0% = FRW 0</li>
            <li>Handling Fee (not paid) = FRW 10/kg * 1,400kg = FRW 14,000</li>
            <li>Excise Duty = (FRW 1,100,000 + FRW 0 + FRW 14,000) * 65% = FRW 724,100</li>
            <li>VAT = (FRW 1,100,000 + FRW 0 + FRW 14,000 + FRW 724,100) * 18% = FRW 330,858</li>
            <li>WHT 5% = FRW 1,100,000 * 5% = FRW 55,000</li>
            <li>Computer Processing Fee = FRW 3,000</li>
            <li>QIF = (FRW 1,100,000) * 0.2% = FRW 2,200</li>
          </ul>
          <p>As Kenya is in the EAC Customs Unions the total duties to be paid are FRW 1,129,158.</p>
          <p>
            Of this, the VAT of FRW 330,858 can be claimed back in domestic VAT declarations (as Ubumwe is not the final consumer), and the WHT 5% of FRW 55,000 can be claimed back in domestic Income Tax declarations.
          </p>

          <h3>Example 83</h3>
          <p>
            Amahoro is importing a consignment of petrol from the United States of America. The HS Code is 2710.12.20 'Motor Spirit (gasoline) regular'. The consignment is 9,000 litres being transported in a semi-trailer truck. The CIF value of the consignment is:
          </p>
          <ul>
            <li>Cost = FRW 6,500,000</li>
            <li>Insurance = FRW 400,000</li>
            <li>Freight = FRW 600,000</li>
            <li>CIF (Cost + Insurance + Freight) = FRW 7,500,000</li>
          </ul>
          <p>The Customs Duties that must be paid are:</p>
          <ul>
            <li>Excise Duty = FRW 183/litre * 9,000 litres = FRW 1,647,000</li>
            <li>VAT = FRW 275.1/litre * 9,000 litres = 2,475,900</li>
            <li>WHT 5% = FRW 7,500,000 * 5% = FRW 375,000</li>
            <li>IDL = FRW 7,500,000 * 1.5% = FRW 172,500</li>
            <li>SRL = FRW 50/litre * 9,000 litres = FRW 450,000</li>
            <li>Road Toll = $152 * FRW 832/$ = FRW 126,464</li>
            <li>Fuel Levy = FRW 7,500,000 * 15% = FRW 1,125,000</li>
            <li>AUL= FRW 6,500,000 * 0.2% = FRW 13,000</li>
            <li>Computer Processing Fee = FRW 3,000</li>
          </ul>
          <p>Therefore, the total duties to be paid are FRW 6,387,864.</p>
          <p>
            Of this, the WHT 5% of FRW 375,000 can be claimed back in domestic Income Tax declarations.
          </p>
        </section>

        {/* Customs Duties Section */}
        <section className="content-section">
          <h2>Customs Duties Overview</h2>
          
          {/* Import Process Flow Diagram */}
          <div className="diagram-container">
            <div className="diagram-title">
              <h3>Import Process Flow</h3>
            </div>
            <div className="import-flow-diagram">
              <div className="flow-step">
                <div className="step-icon">
                  <Package size={24} />
                </div>
                <div className="step-content">
                  <h4>Goods Arrival</h4>
                  <p>At border post or port</p>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-icon">
                  <FileText size={24} />
                </div>
                <div className="step-content">
                  <h4>Declaration</h4>
                  <p>Submit import documents</p>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-icon">
                  <Calculator size={24} />
                </div>
                <div className="step-content">
                  <h4>Assessment</h4>
                  <p>Calculate duties & taxes</p>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-icon">
                  <CreditCard size={24} />
                </div>
                <div className="step-content">
                  <h4>Payment</h4>
                  <p>Pay duties & taxes</p>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-icon">
                  <Truck size={24} />
                </div>
                <div className="step-content">
                  <h4>Release</h4>
                  <p>Goods cleared for entry</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customs Duties Breakdown Diagram */}
          <div className="diagram-container">
            <div className="diagram-title">
              <h3>Customs Duties Breakdown</h3>
            </div>
            <div className="duties-breakdown-diagram">
              <div className="duty-category">
                <div className="category-header">
                  <h4>Import Duty</h4>
                  <span className="rate">0-35%</span>
                </div>
                <p>Tax on goods from outside EAC</p>
              </div>
              
              <div className="duty-category">
                <div className="category-header">
                  <h4>Excise Duty</h4>
                  <span className="rate">10-160%</span>
                </div>
                <p>Tax on specific products</p>
              </div>
              
              <div className="duty-category">
                <div className="category-header">
                  <h4>VAT</h4>
                  <span className="rate">18%</span>
                </div>
                <p>Value Added Tax on imports</p>
              </div>
              
              <div className="duty-category">
                <div className="category-header">
                  <h4>WHT</h4>
                  <span className="rate">5%</span>
                </div>
                <p>Withholding tax on imports</p>
              </div>
              
              <div className="duty-category">
                <div className="category-header">
                  <h4>IDL</h4>
                  <span className="rate">1.5%</span>
                </div>
                <p>Infrastructure Development Levy</p>
              </div>
              
              <div className="duty-category">
                <div className="category-header">
                  <h4>AUL</h4>
                  <span className="rate">0.2%</span>
                </div>
                <p>African Union Levy</p>
              </div>
            </div>
          </div>
          <div className="duties-grid">
            {customsDuties.map((duty, index) => (
              <div key={index} className="duty-card">
                <div className="duty-header">
                  <h3>{duty.duty}</h3>
                  <div className="duty-code">{duty.code}</div>
                </div>
                <div className="duty-rate">{duty.rate}</div>
                <p className="duty-description">{duty.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Border Posts and Dry Ports Section */}
        <section className="content-section">
          <h2>Border Posts and Dry Ports</h2>
          
          <h3>What are Border Posts and Dry Ports?</h3>
          <p>
            Importing and exporting of goods can only be done at authorised customs border posts, customs offices outside Rwanda, virtual offices in partner states and dry ports. Border posts are customs offices at the border with a neighbouring country, whilst dry ports are inland customs offices. There are RRA customs offices outside Rwanda at Dar Es Salaam, Eldoret and Mombasa.
          </p>
          <p>
            The list of currently operating customs border posts and dry ports is displayed on page 392. However, Customs Administration is receptive to taxpayers' behaviour, and may open or close border posts depending upon demand and the frequency of trade. Taxpayers may contact customs to request to import or export through other potential border posts.
          </p>

          <h3>Border Posts</h3>
          <p>
            Rwanda borders Uganda to the North, Tanzania to the East, Burundi to the South and the Democratic Republic of Congo (DRC) to the West. The border posts for each of the neighbouring countries are:
          </p>
          
          <h4>Uganda</h4>
          <ul>
            <li>Buziba, Rwempasha, Buhita, Gatuna, Kagitumba, Cyanika</li>
          </ul>

          <h4>Tanzania</h4>
          <ul>
            <li>Rusumo</li>
          </ul>

          <h4>Burundi</h4>
          <ul>
            <li>Akanyaru-Haut, Akanyaru-Bas, Rutete, Ruhwa</li>
          </ul>

          <h4>DRC</h4>
          <ul>
            <li>Gisenyi Corniche, Gisenyi Poids-Lourds, Kabuhanga, Bugarama, Rusizi 1, Rusizi 2 / Mururu</li>
          </ul>

          <h3>Customs office outside Rwanda</h3>
          <p>
            Goods that are imported from overseas are declared at RRA customs offices at the port of entry of Dar Es Salaam or Mombasa. On entry to Rwanda, checks will be undertaken to ensure the goods are the same as those declared at the port.
          </p>

          <h3>Dry Ports</h3>
          <p>
            Not all imports and exports are processed at Border Posts, some consignments are declared and processed at dry ports. This is typically because of the nature of the products, the value or the entry. There are three main types of inland border post:
          </p>

          <h4>Dry ports capable of handling high-value consignments, with associated licensed warehouses</h4>
          <ul>
            <li>Dubai Port World (DPW) - Masaka, Magerwa - Gikondo, Bolloré (former SDV) - Free Zone, Rubavu Inland Office, Mutara</li>
          </ul>

          <h4>Airports</h4>
          <ul>
            <li>Kigali Airport and Rusizi Airport</li>
          </ul>

          <h4>Oil Depots</h4>
          <ul>
            <li>Such as Gatsata, Kabuye, Rusororo and Jabana Oil Depots</li>
          </ul>

          <h3>When are imports declared at Dry Ports?</h3>
          <p>
            There are three situations when imports must be declared at inland border posts.
          </p>
          <p>
            Firstly, dry ports must be used when importing at a border goods above a certain value. The import value threshold varies depending upon the capacity of the border post, see the list of border posts on page 392.
          </p>
          <p>
            The main dry port for this use is Dubai Port World in Kigali - Masaka. However, Rubavu Inland Office and Mutara are also used for this purpose for imports into Gisenyi and Rusizi border posts respectively.
          </p>
          <p>
            Dry ports must also be used for processing and declaring imports when goods are imported by airplane to an airport. The goods must be declared at the airport they land at. The process is the same as at Border Posts.
          </p>
          <p>
            Finally, imported fuel and petroleum products must be processed and declared at oil depot dry ports. The importer can choose whichever oil depot to use.
          </p>

          <h3>When are Dry Ports used for exports?</h3>
          <p>
            There is no threshold of value for declaring exports at a border. The taxpayer may choose whether to declare at a Border Post or a Dry Port.
          </p>

          <h3>What are One Stop Border Posts (OSBPs)?</h3>
          <p>
            One Stop Border Posts (OSBPs) are border posts where RRA Customs Officials work in the same building as the neighbouring country Customs Officials. This allows the export procedures of the neighbouring country, and the import procedures of RRA (or vice versa) to be conducted in one place at one time, reducing the time taken when importing or exporting goods.
          </p>
          <p>Note that there are three types or models of OSBPs:</p>
          <ul>
            <li><strong>Juxtaposed model:</strong> State A and state B share facilities in the country of entry. For example, Rusumo;</li>
            <li><strong>Straddled model:</strong> Where a single facility is built across a border line for the two adjoining states. For example, Nemba;</li>
            <li><strong>Wholly located model (single country):</strong> Single shared border facility is constructed in one of the countries to house officers from both countries to carry out border controls. For example, Ruhwa OSBP.</li>
          </ul>
          <p>
            For the Juxtaposed model, the Clearing Agent only needs to visit the border post in the country they are importing into, as displayed in the example below of Rusumo OSBP.
          </p>

          <div className="osbp-diagram">
            <h4>Exporting goods from Rwanda and importing into Tanzania</h4>
            <div className="osbp-flow">
              <div className="osbp-step">
                <h5>Exporting Taxpayer</h5>
                <p>Rwanda</p>
              </div>
              <div className="osbp-arrow">→</div>
              <div className="osbp-step">
                <h5>Rusumo OSBP</h5>
                <p>Border</p>
              </div>
              <div className="osbp-arrow">→</div>
              <div className="osbp-step">
                <h5>Importing Taxpayer</h5>
                <p>Tanzania</p>
              </div>
            </div>
          </div>

          <h3>List of Border Posts and Dry Ports</h3>
          <p>
            The list of currently operational customs Border Posts and Dry Ports is displayed below, including details of the border country, opening hours, manager contact details, import declaration value threshold (FRW) and notes such as if the Border Post is a One Stop Border Post (OSBP).
          </p>
          <p>
            The import value threshold (FRW) refers to the value of imports that can be processed directly at that border post. It is important to note that higher value consignments are still able to pass through this border post, but must be declared and processed at a Dry Port, see page 390 for more details.
          </p>

          <div className="table-container">
            <table className="border-posts-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Name of Border Post or Dry Port</th>
                  <th>Border Country</th>
                  <th>Opening Hours</th>
                  <th>Contact Number</th>
                  <th>Import Value Threshold (FRW)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>11AH</td><td>Akanyaru-Haut</td><td>Burundi</td><td>06:00 - 18:00</td><td>078818 5739</td><td>500,000</td><td>OSBP in process</td></tr>
                <tr><td>11BZ</td><td>Buziba</td><td>Uganda</td><td>06:00 - 18:00</td><td>078818 5763</td><td>500,000</td><td></td></tr>
                <tr><td>11GA</td><td>Gatuna</td><td>Uganda</td><td>24 hours</td><td>078818 5731</td><td>2,500,000</td><td>OSBP</td></tr>
                <tr><td>11GI/ HQ01</td><td>Magerwa - Gikondo</td><td>Dry Port</td><td>07:00 - 24:00</td><td>078818 5712 077818 5713</td><td></td><td></td></tr>
                <tr><td>11GT</td><td>Gatsata Oil Depots</td><td>Dry Port</td><td>08:00 - 24:00</td><td>078818 5668</td><td></td><td></td></tr>
                <tr><td>11KA</td><td>Kagitumba</td><td>Uganda</td><td>24 hours</td><td>078818 5732</td><td>3,000,000</td><td>OSBP</td></tr>
                <tr><td>11KB</td><td>Kabuye Oil Depots</td><td>Dry Port</td><td>24 hours<br/>Weekend: 08:00 – 17:00</td><td>078818 5599</td><td></td><td></td></tr>
                <tr><td>11RS</td><td>Rusororo Oil Depots</td><td>Dry Port</td><td>07:00 - 24:00<br/>Weekend: 08:00 – 17:00</td><td>078818 5912</td><td></td><td></td></tr>
                <tr><td>11RE</td><td>Rutete (Nemba)</td><td>Burundi</td><td>04:00 - 22:00</td><td>078818 5578</td><td>2,000,000</td><td>OSBP</td></tr>
                <tr><td>11RU</td><td>Rusumo</td><td>Tanzania</td><td>24 hours</td><td>078818 5735</td><td>2,500,000</td><td>OSBP</td></tr>
                <tr><td>11DPW</td><td>DPW - Masaka</td><td>Dry Port</td><td>7:00 – 12:00</td><td>0788198500</td><td></td><td></td></tr>
                <tr><td>11SDV</td><td>Bollore Logistics RW (SDV)</td><td>Dry Port</td><td>7:00 – 24:00</td><td>252575584</td><td></td><td></td></tr>
                <tr><td>12KP</td><td>Kigali Poste</td><td>Dry Port</td><td>07:00 - 19:00</td><td>078818 5547</td><td></td><td></td></tr>
                <tr><td>21KA</td><td>Kigali Airport (Freight)</td><td>Dry Port</td><td>07:00 - 24:00</td><td>078818 5717</td><td></td><td></td></tr>
                <tr><td>22AE</td><td>Kigali – Aérogare (Passengers)</td><td>Dry Port</td><td>24 hours</td><td>078818 5724</td><td></td><td></td></tr>
                <tr><td>31CY</td><td>Cyanika</td><td>Uganda</td><td>06:00 - 19:00</td><td>078818 5737</td><td>3,000,000</td><td>OSBP in process</td></tr>
                <tr><td>31GC</td><td>Gisenyi Corniche</td><td>DRC</td><td>06:00 - 18:00</td><td>078818 5738</td><td>1,000,000</td><td></td></tr>
                <tr><td>32PL</td><td>Gisenyi Poids-Lourds</td><td>DRC</td><td>06:00 - 18:00</td><td>078818 5667</td><td>1,000,000</td><td></td></tr>
                <tr><td>32RB</td><td>Rubavu Inland Office</td><td>Dry Port</td><td>06:00 - 18:00</td><td>078818 5738</td><td></td><td></td></tr>
                <tr><td>41BU</td><td>Bugarama</td><td>DRC</td><td>06:00 - 18:00</td><td>078818 5746</td><td>1,000,000</td><td></td></tr>
                <tr><td>41MT</td><td>Mutara</td><td>Dry Port</td><td>07:00 - 17:00</td><td>078818 5729</td><td></td><td></td></tr>
                <tr><td>41CY</td><td>Rusizi 1</td><td>DRC</td><td>06:00 - 22:00</td><td>078818 5744</td><td>1,000,000</td><td></td></tr>
                <tr><td>41MU</td><td>Rusizi 2 / Mururu</td><td>DRC</td><td>06:00 - 18:00</td><td>078818 5745</td><td>1,000,000</td><td></td></tr>
                <tr><td>41KA</td><td>Rusizi Airport</td><td>Dry Port</td><td>06:00 - 16:30</td><td>078818 5829</td><td></td><td></td></tr>
                <tr><td>41RZ</td><td>Raha Warehouse</td><td>Dry Port</td><td>07:00 - 17:00</td><td>078818 5829</td><td></td><td></td></tr>
                <tr><td>41RU</td><td>Ruhwa</td><td>Burundi</td><td>06:00 - 18:00</td><td>078818 5728</td><td>1,000,000</td><td>OSBP</td></tr>
                <tr><td>11JB</td><td>Jabana Oil Depots</td><td>Dry Port</td><td>07:00 - 24:00<br/>Weekend: 08:00 – 17:00</td><td>078818 5768</td><td></td><td></td></tr>
                <tr><td>12RW</td><td>Rwempasha</td><td>Uganda</td><td>06:00 – 18:00</td><td></td><td>500,000</td><td></td></tr>
                <tr><td></td><td>Heart of Africa</td><td>Dry Port</td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td>Uzima Safi</td><td>Dry Port</td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Border Posts Section */}
        <section className="content-section">
          <h2>Border Posts Overview</h2>
          <div className="border-posts-info">
            <div className="border-posts-grid">
              {borderPosts.map((post, index) => (
                <div key={index} className="border-post-card">
                  <div className="post-header">
                    <h3>{post.name}</h3>
                    <span className="post-country">{post.country}</span>
                  </div>
                  <div className="post-details">
                    <div className="post-hours">
                      <Clock size={16} />
                      <span>{post.hours}</span>
                    </div>
                    <div className="post-threshold">
                      <Package size={16} />
                      <span>Threshold: {post.threshold}</span>
                    </div>
                    <div className="post-type">
                      <Shield size={16} />
                      <span>{post.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dry Ports Section */}
        <section className="content-section">
          <h2>Dry Ports</h2>
          <div className="dry-ports-grid">
            {dryPorts.map((port, index) => (
              <div key={index} className="dry-port-card">
                <div className="port-header">
                  <h3>{port.name}</h3>
                  <span className="port-location">{port.location}</span>
                </div>
                <div className="port-details">
                  <div className="port-hours">
                    <Clock size={16} />
                    <span>{port.hours}</span>
                  </div>
                  <div className="port-type">
                    <Package size={16} />
                    <span>{port.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Declaring Imports and Exports */}
        <section className="content-section">
          <h2>Declaring Imports and Exports</h2>
          
          <h3>What is the general procedure when declaring imports or exports at Border Posts or at Dry Ports?</h3>
          
          <div className="declaration-process-detailed">
            <div className="process-step-detailed">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Step 1: Taxpayer prepares all necessary documents and contracts a Clearing Agent.</h4>
                <p>Taxpayer gathers all required documentation and engages a licensed clearing agent to handle the import/export process.</p>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Step 2: The Clearing Agent prepares and submits an import or export declaration to RRA using the Rwanda electronic Single Window (ReSW).</h4>
                <p>The clearing agent completes the declaration form and submits it electronically through the ReSW system.</p>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Step 3: The Clearing Agent receives assessment notices, containing the amounts of customs duties due. The taxpayer pays all customs duties due, either directly or through the Clearing Agent.</h4>
                <p>The assessment notice may contain different 'Doc IDs' for different tax types. If so, these must each be paid separately.</p>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Step 4: The ReSW system allocates the consignment to a certain Customs channel. If verification is required, Customs Officers will request the necessary documents and/or access to the consignment.</h4>
                <p>If there are any problems, further action may be required.</p>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Step 5: After successful verification, the Customs Officer provides the taxpayer with a release order.</h4>
                <p>This confirms that all customs procedures have been completed successfully.</p>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4>Step 6: The taxpayer pays any due warehousing fees, if applicable, to the warehouse owner.</h4>
                <p>These fees are paid directly to the warehouse operator, not to RRA.</p>
              </div>
            </div>

            <div className="process-step-detailed">
              <div className="step-number">7</div>
              <div className="step-content">
                <h4>Step 7: The taxpayer receives an exit note and may leave with their consignment.</h4>
                <p>Final documentation allowing the consignment to leave the customs area.</p>
              </div>
            </div>
          </div>

          <h3>When consignments are continuing to Dry Ports for declaration, what is the procedure at Border Posts?</h3>
          <p>
            When declaring at Dry Ports except airports, see page 389, there are three steps to be fulfilled at the Border Posts whilst on the way to the Dry Ports. These are:
          </p>
          <ul>
            <li><strong>The consignment is sealed</strong> to ensure that it is not opened or altered before reaching the Dry Port.</li>
            <li><strong>The Customs Officer generates a Warehousing Document</strong> on the Rwanda electronic Single Window (ReSW) system. This is provided for free.</li>
            <li><strong>The consignment may continue to the Dry Port</strong> and begins declaration as explained on page 400.</li>
          </ul>

          <h3>What is the procedure at the ports of Dar es Salaam or Mombasa when importing?</h3>
          <p>
            There are two options available to taxpayers when importing through the Dar Es Salaam or Mombasa ports.
          </p>
          
          <h4>Option 1: Full Declaration at Port</h4>
          <p>
            The full declaration process as explained on page 400 can be carried out at the port, including payment of Customs Duties and all necessary verifications.
          </p>

          <h4>Option 2: Sealing and Warehousing Document</h4>
          <p>
            The process for when consignments are continuing to Dry Ports for declaration as explained above can be carried out at the port, including sealing the consignment and generating a Warehousing Document. The documents are then checked again at the Border Post on the way to the Dry Port and new seals are added.
          </p>
        </section>

        {/* Declaration Process */}
        <section className="content-section">
          <h2>Import/Export Declaration Process Overview</h2>
          <div className="declaration-process">
            <div className="process-steps">
              {declarationSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="content-section">
          <h2>Required Documents</h2>
          <div className="documents-info">
            {requiredDocuments.map((category, index) => (
              <div key={index} className="document-category">
                <h3>{category.type}</h3>
                <ul>
                  {category.documents.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Clearing Agents */}
        <section className="content-section">
          <h2>Clearing Agents</h2>
          
          <h3>What are Clearing Agents?</h3>
          <p>
            A clearing agent (or customs agent) is a company licensed to transact any business related to the import or export of goods. Clearing agents interact with the revenue authority on behalf of the taxpayer. Clearing agents are trained and licensed by the revenue authority ensuring that all customs procedures are followed correctly.
          </p>
          <p>
            There are 236 clearing agents licensed to operate by RRA as of May 2024. For the full list, see the RRA website at:
          </p>
          <p>
            <a href="https://www.rra.gov.rw/en/customs-services/licencing-of-agents/updated-list-of-clearing-agencies" target="_blank" rel="noopener noreferrer">https://www.rra.gov.rw/en/customs-services/licencing-of-agents/updated-list-of-clearing-agencies</a>
          </p>

          <h3>Who needs to contract Clearing Agents?</h3>
          <p>
            Any taxpayer wishing to import or export goods valued at more than FRW 500,000 is required to contract a clearing agent to carry out the importation or exportation process on their behalf.
          </p>

          <h3>What are the roles of taxpayers and Clearing Agents?</h3>
          <p>
            The importing or exporting taxpayers must contract clearing agents. The taxpayers may contract different clearing agents to conduct the import/export procedures on their behalf.
          </p>
          <p>
            The taxpayer is responsible for providing the clearing agent with all required documents (see page 366 for the documents required for imports and exports) and for paying all due taxes and fees. These can be paid by the taxpayer directly, or through the clearing agent.
          </p>
          <p>
            The clearing agent is responsible for exercising due diligence in ensuring the documentation provided by the taxpayer is valid and accurate, correctly identifying the HS Codes, submitting import or export declarations, printing assessment notices and if necessary paying Customs Duties on the taxpayers' behalf, facilitating any queries/statement of offence or verification by Customs staff and awaiting and receiving release orders, and exit notes. The clearing agent retains responsibility for the goods until they leave the border post or dry port.
          </p>

          <h3>What is the licensing process of Clearing Agents?</h3>
          <p>
            Clearing agents must apply for a license from the Commissioner for Customs in order to operate. If approved, clearing agents are licensed for a period of at least one year, before they must be renewed. The Commissioner may also suspend or revoke a license in the event of a breach of laws, procedure, negligence or unsatisfactory conduct.
          </p>

          <h3>Who is responsible in the event of penalties and fines?</h3>
          <p>
            Both taxpayers and clearing agents are jointly liable in the event of penalties and fines.
          </p>

          <div className="clearing-agents-info">
            <div className="agents-overview">
              <h3>Clearing Agent Services</h3>
              <p>
                Clearing agents provide comprehensive services to facilitate import/export procedures, 
                ensuring compliance with all customs regulations and requirements.
              </p>
            </div>
            <div className="agents-requirements">
              <h3>When are Clearing Agents Required?</h3>
              <p>Clearing agents are mandatory for consignments valued above FRW 500,000.</p>
            </div>
            <div className="agents-responsibilities">
              <h3>Responsibilities</h3>
              <div className="responsibilities-grid">
                <div className="responsibility-card">
                  <h4>Taxpayer Responsibilities</h4>
                  <ul>
                    <li>Contract clearing agent</li>
                    <li>Provide required documents</li>
                    <li>Pay all taxes and fees</li>
                  </ul>
                </div>
                <div className="responsibility-card">
                  <h4>Clearing Agent Responsibilities</h4>
                  <ul>
                    <li>Verify documentation accuracy</li>
                    <li>Submit declarations to ReSW</li>
                    <li>Facilitate verification process</li>
                    <li>Obtain release orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilitation Schemes */}
        <section className="content-section">
          <h2>Facilitation Schemes</h2>
          
          <h3>What are the available taxpayer facilitation schemes?</h3>
          <p>
            RRA recognises the importance of trade to Rwanda's development. Therefore, RRA has implemented many additional schemes to facilitate taxpayers in the import and export process. Each of these are discussed in more detail below, and include:
          </p>

          <h4>For small scale traders:</h4>
          <ul>
            <li>Simplified Trade Regime (Simplified Customs Declaration and Simplified EAC Certificate of Origin)</li>
          </ul>

          <h4>For frequent, compliant traders:</h4>
          <ul>
            <li>Gold Card Scheme</li>
            <li>Authorised Economic Operator</li>
            <li>Pre-payment facility</li>
            <li>Compliance Certificate (Quitus Fiscal)</li>
          </ul>

          <h4>For certain types of goods:</h4>
          <ul>
            <li>Pre-clearance facility</li>
            <li>Immediate Release of Goods</li>
            <li>Duty Remission scheme</li>
          </ul>

          <h4>For any taxpayers:</h4>
          <ul>
            <li>Cargo Tracking System</li>
            <li>Mobile Cargo Scanners</li>
          </ul>

          <p>
            Taxpayers may benefit from many of these facilitation schemes at the same time. It is important to note that the majority of these facilitation schemes require the taxpayer or their clearing agent to apply, see each of the explanations in turn below.
          </p>

          <h3>What is the Simplified Trade Regime?</h3>
          <p>
            The simplified trade regime is available to taxpayers and small-scale traders importing or exporting goods valued at less than FRW 500,000 per consignment (Simplified Customs Declaration) and $ 2,000 per consignment (Simplified EAC Certificate of Origin).
          </p>
          <p>
            The Simplified Customs Declaration is a direct assessment made by a customs officer to the taxpayer while the Simplified EAC Certificate of Origin is issued by a customs officer at any border post. In addition to the required documents the taxpayer should pay FRW 500 as computer processing fees either for Simplified Customs Declaration or for Simplified EAC Certificate of Origin.
          </p>
          <p>
            It is important to note that traders using the simplified trade regime are still required to pay any due Customs Duties as normal.
          </p>

          <h3>What is the Gold Card Scheme?</h3>
          <p>
            The Gold Card Scheme is a privileged status available to importers/exporters who have a good compliance record with RRA. Members of the Gold Card Scheme gain many benefits including quick release and priority clearance of consignments during the importing and exporting process. Taxpayers must apply for Gold Card Scheme membership, which requires:
          </p>
          <ul>
            <li>Good history of compliance with all RRA departments.</li>
            <li>Imported or exported goods with the total CIF value above FRW 200,000,000 during the year.</li>
          </ul>
          <p>
            For more details on the benefits and application process for the Gold Card Scheme, see the RRA website at: <a href="https://www.rra.gov.rw/en/customs-services/importers/gold-card-scheme-information-for-applicants" target="_blank" rel="noopener noreferrer">https://www.rra.gov.rw/en/customs-services/importers/gold-card-scheme-information-for-applicants</a>
          </p>

          <h3>What is the Authorised Economic Operator (AEO)?</h3>
          <p>
            The AEO is a privileged status available to taxpayers who have a good compliance record with all applicable EAC tax administrations. The benefits available to AEOs are similar in nature and even greater than for the Gold Card Scheme, described above, and are available throughout the EAC, but have even stricter application requirements.
          </p>
          <p>
            For more details on the benefits and application process to be certified as an AEO, see the RRA website at:
          </p>
          <p>
            <a href="https://www.rra.gov.rw/en/customs-services/importers/authorized-economic-operators-aeo" target="_blank" rel="noopener noreferrer">https://www.rra.gov.rw/en/customs-services/importers/authorized-economic-operators-aeo</a>
          </p>

          <h3>What is the pre-payment facility?</h3>
          <p>
            The pre-payment facility allows taxpayers to apply to set up accounts with RRA to pay in advance for any due Customs Duties, reducing the time taken when importing or exporting. Taxpayers must apply for the pre-payment facility, and approval is based upon their frequency of imports and previous tax compliance.
          </p>
          <p>
            In order to apply for the pre-payment facility, taxpayers must request the Prepayment Account Application Form. The application form is submitted to the Commissioner for Customs Services Department. Once approved, there is no limit to the amount that can be paid into the pre-payment account, and the taxpayer receives notification each time the account is used.
          </p>

          <h3>What is a Compliance Certificate (Quitus Fiscal)?</h3>
          <p>
            A Compliance Certificate (Quitus Fiscal) is available, upon request, to taxpayers who have demonstrated a history of correct tax compliance. The benefit of Compliance Certificate (Quitus Fiscal) is that certified taxpayers are not required to pay WHT 5%.
          </p>
          <p>
            The procedure and requirements for applying for a Compliance Certificate (Quitus Fiscal) are listed in more detail on page 55, but in terms of Customs, the taxpayer is required to have:
          </p>
          <ul>
            <li>Imported goods with the total CIF value above FRW 200,000,000 during two years with at least FRW 100,000,000 each year.</li>
            <li>A physical business address in Rwanda.</li>
          </ul>

          <h3>What is the pre-clearance facility?</h3>
          <p>
            The pre-clearance facility allows the clearing agent to begin the declaration process for certain goods before they arrive at a border post. The types of goods that are allowed pre-clearance include:
          </p>
          <ul>
            <li>Imported goods produced within the EAC, also referred to as Intra-Regional Trade.</li>
            <li>Perishable goods, such as:
              <ul>
                <li>Food</li>
                <li>Medicine</li>
                <li>Live animals</li>
              </ul>
            </li>
            <li>Fragile or difficult to unload goods.</li>
            <li>Government institution or project materials.</li>
          </ul>
          <p>
            For Intra-Regional Trade, this facility is granted automatically and no application is required. The clearing agent can immediately begin the declaration process.
          </p>
          <p>
            For other consignments, of goods produced outside the EAC, the clearing agent can apply for pre-clearance in the Rwanda electronic Single Window (ReSW) system. If the request for pre-clearance is approved, the clearing agent can begin the declaration process and pay any due taxes and fees as normal before reaching the border post or dry port.
          </p>

          <h3>What is the Direct Delivery of Goods?</h3>
          <p>
            The Direct Delivery of Goods facility, also referred to as Dédouanement À Domicile (DAD), allows the customs procedures for certain goods to be carried out at a taxpayer's premises rather than at border posts or dry port, subject to approval. The types of goods that are allowed Direct Delivery include:
          </p>
          <ul>
            <li>Perishable goods, such as:
              <ul>
                <li>Food</li>
                <li>Medicine</li>
                <li>Live animals</li>
              </ul>
            </li>
            <li>Fragile or difficult to unload goods.</li>
            <li>Government institution or project materials.</li>
            <li>Exempted goods.</li>
          </ul>
          <p>
            For consignments of this nature, the clearing agent can apply for Direct Delivery in the Rwanda electronic Single Window (ReSW) system. If the request for Direct Delivery is approved, the consignment can be immediately released from the border post and dry port, and then kept at a taxpayer's premises until Customs Officials have completed the verification process.
          </p>

          <h3>What is the Duty Remission scheme?</h3>
          <p>
            The Duty Remission scheme is an exemption from import duty available to taxpayers who are importing goods to be used as inputs in the production of goods for export, or in the production of particular goods for home consumption. The list of particular goods for home consumption that the Duty Remission scheme can apply to is contained within EAC gazettes, available at:
          </p>
          <p>
            <a href="https://www.rra.gov.rw/en/customs-services/eac-gazette" target="_blank" rel="noopener noreferrer">https://www.rra.gov.rw/en/customs-services/eac-gazette</a>
          </p>
          <p>
            Taxpayers must apply for the Duty Remission scheme by writing a letter to the Commissioner for Customs Services Department (CSD), explaining the reasons for application. If approved, the Duty Remission is valid for a period of twelve (12) months.
          </p>
          <p>There are conditions attached to the Duty Remission scheme. A taxpayer must:</p>
          <ul>
            <li>Pay Import Duty on any imported goods not used in the production of goods for export or particular goods for home consumption.
              <ul>
                <li>Any unpaid Import Duty that is liable is subject to a penalty of 10% of the dutiable value.</li>
              </ul>
            </li>
            <li>Submit quarterly returns to the Commissioner for Customs Services Department (CSD) giving relevant information as required.
              <ul>
                <li>A taxpayer who does not submit a return as required is liable to a fine of USD 2,000 (two thousand US Dollars).</li>
              </ul>
            </li>
          </ul>

          <h3>What is the Regional Electronic Cargo Tracking System?</h3>
          <p>
            The Regional Electronic Cargo Tracking System (RECTS) is a facilitation scheme aimed at increasing the security of consignments by electronically sealing and monitoring the trucks from regional ports to Rwanda. Any tampering with the seal, or unexpected deviations from the transit path, can be instantly detected and responded to by Rapid Response Units (RRUs).
          </p>
          <p>
            The RECTS is only available for consignments using the Northern Corridor, i.e., from the port of Mombasa in Kenya to Rwanda. In addition, there is currently no fee or application process for the RECTS, but the allocation and arming of electronic seals is decided by RRA staff at the Port of Mombasa. RECTS is under development through the Southern Corridor, i.e., from the port of Dar Es Salaam in Tanzania to Rwanda.
          </p>

          <h3>What are Mobile Cargo Scanners?</h3>
          <p>
            RRA has three mobile cargo scanners, situated at Magerwa - Gikondo Dry Port, Gatuna and Rusumo Border Posts. The mobile cargo scanners are able to carry out physical verification of medium risk consignments with reduced intrusion and time. Taxpayers can request for mobile cargo scanners to be used at these locations free of charge through their Clearing Agent.
          </p>

          <div className="facilitation-schemes">
            {facilitationSchemes.map((scheme, index) => (
              <div key={index} className="scheme-card">
                <div className="scheme-header">
                  <h3>{scheme.scheme}</h3>
                </div>
                <p className="scheme-description">{scheme.description}</p>
                <div className="scheme-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {scheme.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Customs Channels */}
        <section className="content-section">
          <h2>Customs Channels</h2>
          <div className="customs-channels">
            <div className="channel-card">
              <h3>Green Channel</h3>
              <p>No verification, immediate release, no post-clearance audit</p>
            </div>
            <div className="channel-card">
              <h3>Blue Channel</h3>
              <p>No verification, immediate release, available for compliant taxpayers</p>
            </div>
            <div className="channel-card">
              <h3>Yellow Channel</h3>
              <p>Documentary verification, scope for post-clearance audit</p>
            </div>
            <div className="channel-card">
              <h3>Red Channel</h3>
              <p>Documentary and physical verification, scope for post-clearance audit</p>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="content-section">
          <div className="notice-card warning">
            <div className="notice-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="notice-content">
              <h3>Important Notes</h3>
              <ul>
                <li>All consignments above FRW 500,000 require clearing agents</li>
                <li>EAC originating goods have zero import duty</li>
                <li>VAT paid on imports can be claimed back in domestic VAT declarations</li>
                <li>WHT 5% paid on imports can be claimed back in Income Tax declarations</li>
                <li>Post-clearance audits may be conducted within 5 years</li>
                <li>Penalties apply for false declarations or smuggling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="content-section">
          <h2>Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you understand customs procedures, you can:
            </p>
            <div className="steps-grid">
              <Link to="/paying-taxes" className="step-card">
                <h3>Learn Payment Methods</h3>
                <p>How to pay customs duties</p>
                <ArrowRight size={20} />
              </Link>
              <Link to="/income-tax" className="step-card">
                <h3>Claim WHT 5%</h3>
                <p>Claim back withholding tax on imports</p>
                <ArrowRight size={20} />
              </Link>
              <a 
                href="https://resw.rra.gov.rw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="step-card"
              >
                <h3>Access ReSW</h3>
                <p>Rwanda electronic Single Window</p>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* Importing Motor Vehicles Section */}
      <section className="content-section">
        <h2 className="content-heading">Importing Motor Vehicles</h2>
        
        <h3 className="content-subheading">What is the process for importing motor vehicles?</h3>
        <p className="content-paragraph">
          Imported motor vehicles must be declared at 'DPW – Masaka, Magerwa - Gikondo' Dry Port. See page 390 for the process at Border Posts when declaring at Dry Ports. If the motor vehicle does not have a number plate, they will receive a transit number plate until the process is completed.
        </p>
        <p className="content-paragraph">
          Once at DPW – Masaka or Magerwa - Gikondo, the process for declaring imported motor vehicles is similar to declarations of other types of goods, see page 400. The only difference is the additional step of registration of the motor vehicle.
        </p>
        <p className="content-paragraph">
          Registration of the motor vehicle first requires the owner to have a unique Taxpayer Identification Number (TIN). If they do not already have a TIN, they are provided with one. Secondly, the owner must provide a passport photo and either a Rwandan ID card or passport.
        </p>
        <p className="content-paragraph">
          Finally, they are registered as owner of the motor vehicle, and provided with a Rwandan number plate and 'Yellow Card' logbook. This initial registration service and the provision of the number plate has already been paid for within the Motor Vehicle Registration Fee (MVF).
        </p>

        <h3 className="content-subheading">How are imported brand new motor vehicles valued?</h3>
        <p className="content-paragraph">
          Brand new imported motor vehicles are valued at Cost, Insurance and Freight (CIF) using the transaction price invoices or equivalent documents as normal. When a customs officer is not satisfied with the transaction price, other customs valuation methods can be applied to determine customs value.
        </p>

        <h3 className="content-subheading">How are imported used motor vehicles valued?</h3>
        <p className="content-paragraph">
          Used or second-hand imported motor vehicles are valued using the depreciation method. The transaction price may also be used in special circumstances.
        </p>
        <p className="content-paragraph">
          The first step of the depreciation method is to download the valuation database. The link to the spreadsheet is available on the RRA website at: <a href="https://www.rra.gov.rw/en/customs-services/valuation-gateway" target="_blank" rel="noopener noreferrer" className="content-link">https://www.rra.gov.rw/en/customs-services/valuation-gateway</a>
        </p>
        <p className="content-paragraph">
          The valuation database contains details on the brand, mark, engine, drive, year and body style. Identify the exact description of the motor vehicle, and then note the 'When New Price ($)'. This price, in US Dollars, is the base of the depreciation. Contact RRA if you cannot identify the appropriate motor vehicle. An example view of the valuation database is shown below.
        </p>

        <p className="content-paragraph">
          The depreciation method then uses a standardised depreciation rate depending upon the age of the car. The depreciation schedule is shown below:
        </p>

        <div className="content-table-container">
          <table className="content-table">
            <thead>
              <tr>
                <th>Date of Manufacture</th>
                <th>Depreciation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Less than 1 year ago</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Between 1 and 2 years ago</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Between 2 and 3 years ago</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>Between 3 and 4 years ago</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Between 4 and 5 years ago</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Between 5 and 6 years ago</td>
                <td>55%</td>
              </tr>
              <tr>
                <td>Between 6 and 7 years ago</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>Between 7 and 8 years ago</td>
                <td>65%</td>
              </tr>
              <tr>
                <td>Between 8 and 9 years ago</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Between 9 and 10 years ago</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>More than 10 years ago</td>
                <td>80%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="content-subheading">What are the Customs Duties on imported motor vehicles?</h3>
        <p className="content-paragraph">
          The rates of Customs Duties on imported motor vehicles are summarised on page 415 below. In addition, a flat rate Motor Vehicle Registration Fee (MVF) is charged upon all imported motor vehicles without any exemptions. This depends upon the capacity or displacement of the engine in cubic centimetres (cc) and is displayed on page 378.
        </p>
        <p className="content-paragraph">
          The final tab of the depreciation method spreadsheet, titled 'Depreciation Schedule' can be used to estimate the Customs Duties due for imported motor vehicles.
        </p>

        <div className="content-example">
          <h4 className="content-example-title">Example 85</h4>
          <p className="content-paragraph">
            Rukundo is importing a 1997 Rav4 with a 1.8 litre engine, 2 Wheel Drive (2WD) and three doors. In the valuation database, the listed Price When New ($) is USD 13,200.
          </p>
          <p className="content-paragraph">
            In the 'Depreciation Schedule' tab, Rukundo enters the necessary details in the yellow boxes as shown below.
          </p>
        </div>

        <div className="content-table-container">
          <table className="content-table">
            <thead>
              <tr>
                <th>Vehicles</th>
                <th>Category</th>
                <th>Import Duty</th>
                <th>Excise Duty</th>
                <th>VAT</th>
                <th>IDL</th>
                <th>WHT 5%</th>
                <th>AUL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3">Non-utility motor vehicles</td>
                <td>Engine capacity less than 1,500cc</td>
                <td>A</td>
                <td>25%</td>
                <td>5%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td>Engine capacity between 1,501cc and 2,500cc</td>
                <td>B</td>
                <td>25%</td>
                <td>10%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td>Engine capacity more than 2,501cc</td>
                <td>C</td>
                <td>25%</td>
                <td>15%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td rowSpan="6">Utility motor vehicles</td>
                <td>Tractors</td>
                <td>D</td>
                <td>0%</td>
                <td>0%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td>Minibuses (with less than 25 seats)</td>
                <td>E</td>
                <td>25%</td>
                <td>0%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td>Buses (with 25 seats or more)</td>
                <td>F</td>
                <td>10%</td>
                <td>0%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td>Pick-up truck</td>
                <td>G</td>
                <td>25%</td>
                <td>0%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td>Truck (carrying capacity below 20 tonnes)</td>
                <td>H</td>
                <td>10%</td>
                <td>0%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td>Truck (carrying capacity 20 tonnes and above)</td>
                <td>I</td>
                <td>0%</td>
                <td>0%</td>
                <td>18%</td>
                <td>1.5%</td>
                <td>5%</td>
                <td>0.2%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="content-subheading">What are the requirements for receiving special number plates and exemption from certain Customs Duties when importing motor vehicles?</h3>
        <p className="content-paragraph">
          The normal number plate provided for Rwandan motor vehicles begins with 'RA'. There are also public institution number plates such as 'RDF', 'RNP' or 'GR'. These vehicles must have all customs duties due paid as normal.
        </p>
        <p className="content-paragraph">
          On the other hand, some international institutions and foreign investors are exempt from all customs duties, except for Motor Vehicle Registration Fees (MVF). The number plates are issued by RRA, but require supporting documents from other public institutions. These include:
        </p>

        <h4 className="content-subheading">'IT' Foreign Investors and other foreign persons for temporally residence</h4>
        <p className="content-paragraph">
          This requires a recommendation letter to the Commissioner for Customs Services Department (CSD) of RRA from concerned public institution. 'IT' number plate is only valid for one year, before requiring renewal.
        </p>
        <p className="content-paragraph">Other requirements include:</p>
        <ul className="content-list">
          <li className="content-list-item">Guarantee letter;</li>
          <li className="content-list-item">Valid passport;</li>
          <li className="content-list-item">Valid VISA;</li>
          <li className="content-list-item">Valid ID Card for foreigners</li>
        </ul>

        <h4 className="content-subheading">'CD' Diplomatic and Consular staff</h4>
        <p className="content-paragraph">
          This requires a letter from the Ministry of Foreign Affairs and Cooperation (MINAFFET) to the Commissioner for CSD of RRA, highlighting their diplomatic status and a reciprocal letter of approval.
        </p>

        <h4 className="content-subheading">'UN' United Nations agencies</h4>
        <p className="content-paragraph">
          This requires a letter from the Ministry of Foreign Affairs and Cooperation (MINAFFET) to the Commissioner for CSD of RRA, highlighting their UN status, and a reciprocal letter of approval.
        </p>

        <h3 className="content-subheading">Which customs duties must be paid when transferring ownership of motor vehicles with IT, CD or UN number plates to a buyer without the same status?</h3>
        <p className="content-paragraph">
          When transferring ownership of any motor vehicles with IT, CD or UN number plates to a buyer who is not subject to the same privileges, the buyer must pay all Customs Duties due on imported motor vehicles, see page 415, except for Motor Vehicle Registration Fees (MVF) that have already been paid for that motor vehicle.
        </p>

        <h3 className="content-subheading">Can Right-Hand Drive motor vehicles be imported?</h3>
        <p className="content-paragraph">
          Right-Hand Drive (RHD) motor vehicles, where the steering wheel is on the right-hand side of the car, are not allowed to be imported into Rwanda, except for:
        </p>
        <ul className="content-list">
          <li className="content-list-item">Diplomats or drivers with a medical condition. In both these cases, this requires permission from the Ministry of Infrastructure (MININFRA).</li>
          <li className="content-list-item">Trucks with a carrying capacity above 20 tonnes</li>
        </ul>
      </section>

      {/* Customs Penalties and Fines Section */}
      <section className="content-section">
        <h2 className="content-heading">Customs Penalties and Fines</h2>
        
        <h3 className="content-subheading">What law governs Customs Penalties?</h3>
        <p className="content-paragraph">
          Penalties for Customs offences concerning both imports and exports are listed in Articles from 93 to 218 of the EAC Customs Management Act (CMA). This Tax Handbook gives some examples of the offences and penalties. The latest version of the EAC CMA is available on the RRA website at: <a href="https://rwandatrade.rw/media/EAC%20Customs%20Management%20Act%20-%20Rev%202009.pdf" target="_blank" rel="noopener noreferrer" className="content-link">https://rwandatrade.rw/media/EAC%20Customs%20Management%20Act%20-%20Rev%202009.pdf</a>
        </p>
        <p className="content-paragraph">
          Note that penalties described as 'not exceeding' may be reduced through amicable agreement with the taxpayer.
        </p>

        <h3 className="content-subheading">When can goods be seized by RRA?</h3>
        <p className="content-paragraph">
          RRA has the right to forfeiture (seize without compensation) any of the following types of goods:
        </p>
        <ul className="content-list">
          <li className="content-list-item">Prohibited goods.</li>
          <li className="content-list-item">Restricted goods dealt with contrary to regulations.</li>
          <li className="content-list-item">Uncustomed goods, where goods have not followed full and correct customs procedures.</li>
          <li className="content-list-item">Concealed goods, or goods mislabelled or contained in any way likely to deceive any officer.</li>
          <li className="content-list-item">Smuggled goods.</li>
          <li className="content-list-item">Falsely documented or declared goods.</li>
          <li className="content-list-item">Goods subject to Customs control which are without authorisation moved, altered or interfered with.</li>
        </ul>

        <h3 className="content-subheading">What are the penalties for concealing, smuggling or mislabelling goods?</h3>
        <p className="content-paragraph">
          Anyone who is found concealing or smuggling any goods, or which are mislabelled or contained in anyway likely to deceive any officer is liable on conviction to:
        </p>
        <ul className="content-list">
          <li className="content-list-item">Pay any unpaid Customs duties.</li>
          <li className="content-list-item">Imprisonment not exceeding five years.</li>
          <li className="content-list-item">Fine not exceeding 50% of the dutiable value (CIF) of the goods.</li>
          <li className="content-list-item">Confiscation of goods.</li>
          <li className="content-list-item">Additional fines provided under VAT and Excise Duty laws may also apply.</li>
        </ul>

        <h3 className="content-subheading">What are the penalties for submitting false documents or declarations?</h3>
        <p className="content-paragraph">
          Anyone who submits any documents that are found to be false or incorrect is liable on conviction to:
        </p>
        <ul className="content-list">
          <li className="content-list-item">Pay any unpaid Customs duties.</li>
          <li className="content-list-item">Imprisonment not exceeding three years.</li>
          <li className="content-list-item">Fine not exceeding USD 10,000 (ten thousand US dollars).</li>
          <li className="content-list-item">Additional fines provided under VAT and Excise Duty laws may also apply.</li>
        </ul>

        <h3 className="content-subheading">What are the penalties for interfering with goods subject to Customs control without authorisation?</h3>
        <p className="content-paragraph">
          Anyone who moves, alters, interferes with goods subject to Customs control without authorisation is liable on conviction to:
        </p>
        <ul className="content-list">
          <li className="content-list-item">Pay any unpaid Customs duties.</li>
          <li className="content-list-item">Imprisonment not exceeding three years.</li>
          <li className="content-list-item">Fine not exceeding USD 1,000 (one thousand US dollars).</li>
        </ul>

        <h3 className="content-subheading">What is the penalty for aiding or abetting any offences?</h3>
        <p className="content-paragraph">
          Anyone who aids, abets, counsels or procures the commission of an offence is liable to the same penalty prescribed for that offence.
        </p>
      </section>
    </div>
  );
};

export default Customs;
