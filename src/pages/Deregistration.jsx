import { XCircle } from 'lucide-react';

const Deregistration = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <XCircle size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">De-Registration</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Guide to business closure and tax account deactivation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <section className="content-section">
          <h2>De-Registration Overview</h2>
          <p>Learn how to close your business and deactivate tax accounts.</p>
        </section>
      </div>
    </div>
  );
};

export default Deregistration;
