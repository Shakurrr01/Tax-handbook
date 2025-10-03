import { Dice6 } from 'lucide-react';

const GamingTaxes = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Dice6 size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Gaming Taxes</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Guide to gaming taxes and gambling proceeds taxation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <section className="content-section">
          <h2>Gaming Taxes Overview</h2>
          <p>Gaming taxes are charged on gambling proceeds at a rate of 40%.</p>
        </section>
      </div>
    </div>
  );
};

export default GamingTaxes;
