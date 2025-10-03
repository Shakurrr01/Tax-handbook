import { Monitor, Smartphone, ArrowRight, FileText } from 'lucide-react';

const DomesticTaxes = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Domestic Taxes & E-Tax</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to domestic taxes and the E-Tax declaration system
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>What are Domestic Taxes?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Monitor size={24} />
            </div>
            <div className="info-content">
              <p>
                Domestic taxes include Income Tax, PAYE, VAT, Excise Duty, Withholding Taxes, 
                Gaming Tax, Mining Royalty Tax, Capital Gains Tax, Road Maintenance Levy, and Tourism Tax. 
                All can be declared using the E-Tax system.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Declaration Methods</h2>
          <div className="declaration-methods">
            <div className="method-card">
              <div className="method-icon">
                <Monitor size={24} />
              </div>
              <h3>E-Tax System</h3>
              <p>Online declaration for all domestic tax types</p>
              <a 
                href="https://etax.rra.gov.rw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="method-link"
              >
                Access E-Tax
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="method-card">
              <div className="method-icon">
                <Smartphone size={24} />
              </div>
              <h3>M-Declaration</h3>
              <p>Mobile phone declaration for selected tax types</p>
              <span className="method-note">Dial *800# to access</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DomesticTaxes;
