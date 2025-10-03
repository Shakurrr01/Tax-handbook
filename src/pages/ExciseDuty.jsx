import { Package } from 'lucide-react';

const ExciseDuty = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Package size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Excise Duty</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Guide to excise duty on specific products
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <section className="content-section">
          <h2>Excise Duty Overview</h2>
          <p>Excise duty is charged on specific products at varying rates.</p>
        </section>
      </div>
    </div>
  );
};

export default ExciseDuty;
