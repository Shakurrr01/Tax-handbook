import { FileText, BookOpen } from 'lucide-react';
import '../styles/Acronyms.css';

const Acronyms = () => {

  const acronyms = [
    { acronym: 'AEO', meaning: 'Authorised Economic Operator', category: 'customs' },
    { acronym: 'AEOI', meaning: 'Automatic Exchange of Information', category: 'international' },
    { acronym: 'AfCFTA', meaning: 'African Continental Free Trade Area', category: 'international' },
    { acronym: 'AUL', meaning: 'African Union Levy', category: 'taxes' },
    { acronym: 'BDF', meaning: 'Business Development Fund', category: 'government' },
    { acronym: 'BNR', meaning: 'National Bank of Rwanda', category: 'government' },
    { acronym: 'BRD', meaning: 'Development Bank of Rwanda', category: 'government' },
    { acronym: 'CBHI', meaning: 'Community Based Health Insurance', category: 'government' },
    { acronym: 'CD', meaning: 'Corps Diplomatic', category: 'government' },
    { acronym: 'CET', meaning: 'Common External Tariff', category: 'customs' },
    { acronym: 'CG', meaning: 'Commissioner General', category: 'rra' },
    { acronym: 'CIF', meaning: 'Cost, Insurance and Freight', category: 'customs' },
    { acronym: 'CIT', meaning: 'Corporate Income Tax', category: 'taxes' },
    { acronym: 'CMA', meaning: 'Customs Management Act', category: 'customs' },
    { acronym: 'COMESA', meaning: 'Common Market of Eastern and Southern Africa', category: 'international' },
    { acronym: 'CRS', meaning: 'Common Reporting Standard', category: 'international' },
    { acronym: 'CSD', meaning: 'Customs Services Department', category: 'rra' },
    { acronym: 'DAD', meaning: 'Dédouanement à Domicile', category: 'customs' },
    { acronym: 'DC', meaning: 'Deputy Commissioner', category: 'rra' },
    { acronym: 'DCG', meaning: 'Deputy Commissioner General', category: 'rra' },
    { acronym: 'DMC', meaning: 'Declaration de Mise à la Consommation', category: 'customs' },
    { acronym: 'DPW', meaning: 'Doubai Port World', category: 'customs' },
    { acronym: 'DRC', meaning: 'Democratic Republic of Congo', category: 'international' },
    { acronym: 'DTD', meaning: 'Domestic Taxes Department', category: 'rra' },
    { acronym: 'EAC', meaning: 'East African Community', category: 'international' },
    { acronym: 'EBM', meaning: 'Electronic Billing Machine', category: 'technology' },
    { acronym: 'EIS', meaning: 'Electronic Invoicing System', category: 'technology' },
    { acronym: 'EO', meaning: 'Executive Organ', category: 'government' },
    { acronym: 'EOI', meaning: 'Exchange of Information', category: 'international' },
    { acronym: 'EOIR', meaning: 'Exchange of Information on Request', category: 'international' },
    { acronym: 'FER', meaning: 'Fonds d\'Entretien Routier', category: 'taxes' },
    { acronym: 'FOB', meaning: 'Free On Board', category: 'customs' },
    { acronym: 'FRW', meaning: 'Franc Rwandais', category: 'currency' },
    { acronym: 'HF', meaning: 'Handling Fee', category: 'customs' },
    { acronym: 'IDL', meaning: 'Infrastructure Development Levy', category: 'taxes' },
    { acronym: 'IGO', meaning: 'Inter-Governmental Organisation', category: 'international' },
    { acronym: 'IQP', meaning: 'Instalment Quarterly Payment', category: 'taxes' },
    { acronym: 'IT', meaning: 'Immatriculation Temporaire', category: 'customs' },
    { acronym: 'LGT', meaning: 'Local Government Taxes', category: 'taxes' },
    { acronym: 'MINAFFET', meaning: 'Ministry of Foreign Affairs, Cooperation and East African Community', category: 'government' },
    { acronym: 'MINECOFIN', meaning: 'Ministry of Finance and Economic Planning', category: 'government' },
    { acronym: 'MINICOM', meaning: 'Ministry of Trade and Industry', category: 'government' },
    { acronym: 'MININFRA', meaning: 'Ministry of Infrastructure', category: 'government' },
    { acronym: 'MINIRENA', meaning: 'Ministry of Natural Resources', category: 'government' },
    { acronym: 'MSIC', meaning: 'Millennium Savings & Investment Cooperative', category: 'government' },
    { acronym: 'MTN', meaning: 'Mobile Telephone Networks', category: 'technology' },
    { acronym: 'MVF', meaning: 'Motor Vehicle Registration Fee', category: 'taxes' },
    { acronym: 'NGO', meaning: 'Non-Governmental Organisation', category: 'government' },
    { acronym: 'NID', meaning: 'National Identification', category: 'government' },
    { acronym: 'NISR', meaning: 'National Institute of Statistics Rwanda', category: 'government' },
    { acronym: 'OECD', meaning: 'Organisation for Economic Co-operation and Development', category: 'international' },
    { acronym: 'ORG', meaning: 'Office of the Registrar General', category: 'government' },
    { acronym: 'OS', meaning: 'Operating System', category: 'technology' },
    { acronym: 'OSBP', meaning: 'One-Stop Border Post', category: 'customs' },
    { acronym: 'PAYE', meaning: 'Pay As You Earn', category: 'taxes' },
    { acronym: 'PCA', meaning: 'Post-Clearance Audit', category: 'customs' },
    { acronym: 'PIT', meaning: 'Personal Income Tax', category: 'taxes' },
    { acronym: 'PSF', meaning: 'Private Sector Federation', category: 'government' },
    { acronym: 'QIF', meaning: 'Quality Inspection Fee', category: 'customs' },
    { acronym: 'RAMA', meaning: 'Rwandaise d\'Assurance Maladie', category: 'government' },
    { acronym: 'RCA', meaning: 'Rwanda Cooperatives Authority', category: 'government' },
    { acronym: 'RDB', meaning: 'Rwanda Development Board', category: 'government' },
    { acronym: 'RECTS', meaning: 'Rwanda Electronic Cargo Tracking System', category: 'technology' },
    { acronym: 'ReSW', meaning: 'Rwanda electronic Single Window', category: 'technology' },
    { acronym: 'RGB', meaning: 'Rwanda Governance Board', category: 'government' },
    { acronym: 'RICA', meaning: 'Rwanda Inspectorate, Competition and Consumer Protection Authority', category: 'government' },
    { acronym: 'RIED', meaning: 'Revenue Investigation and Enforcement Dept', category: 'rra' },
    { acronym: 'RMB', meaning: 'Rwanda Mines, Petroleum and Gas Board', category: 'government' },
    { acronym: 'RMF', meaning: 'Road Maintenance Fund', category: 'government' },
    { acronym: 'RRA', meaning: 'Rwanda Revenue Authority', category: 'rra' },
    { acronym: 'RSSB', meaning: 'Rwanda Social Security Board', category: 'government' },
    { acronym: 'SMS', meaning: 'Short Message Service', category: 'technology' },
    { acronym: 'SRL', meaning: 'Strategic Reserves Levy', category: 'taxes' },
    { acronym: 'TCC', meaning: 'Tax Clearance Certificates', category: 'taxes' },
    { acronym: 'TIN', meaning: 'Taxpayer Identification Number', category: 'taxes' },
    { acronym: 'TP', meaning: 'Transfer Pricing', category: 'taxes' },
    { acronym: 'UN', meaning: 'United Nations', category: 'international' },
    { acronym: 'USD', meaning: 'United States Dollars', category: 'currency' },
    { acronym: 'USSD', meaning: 'Unstructured Supplementary Service Data', category: 'technology' },
    { acronym: 'VAT', meaning: 'Value Added Tax', category: 'taxes' },
    { acronym: 'VDS', meaning: 'Voluntary Disclosure Scheme', category: 'taxes' },
    { acronym: 'VSDC', meaning: 'Virtual Sales Data Controller', category: 'technology' },
    { acronym: 'WHT', meaning: 'Withholding Tax', category: 'taxes' },
    { acronym: 'WOP', meaning: 'Withholding on Payments', category: 'taxes' }
  ];


  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Acronyms & Abbreviations</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Comprehensive reference guide to acronyms and abbreviations used in Rwandan tax administration and related government services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Acronyms Grid */}
        <section className="content-section">
          <div className="acronyms-grid">
            {acronyms.map((item, index) => (
              <div key={index} className="acronym-card">
                <div className="acronym-header">
                  <div className="acronym-badge">
                    <span className="acronym-text">{item.acronym}</span>
                  </div>
                </div>
                <div className="acronym-content">
                  <p className="acronym-meaning">{item.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Acronyms;
