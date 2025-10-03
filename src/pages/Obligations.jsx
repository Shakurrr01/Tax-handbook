import { FileText, BookOpen, Clock, AlertTriangle, Shield } from 'lucide-react';

const Obligations = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Shield size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Obligations and Bookkeeping</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Understanding taxpayer obligations, bookkeeping requirements, and document retention
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* General Obligations Section */}
        <section className="content-section">
          <h2>What are the obligations of taxpayers?</h2>
          <div className="info-card">
            <div className="info-icon">
              <FileText size={24} />
            </div>
            <div className="info-content">
              <p>The general obligations of all taxpayers include:</p>
              <ul className="obligations-list">
                <li>Keeping RRA informed of any changes in contact details or physical address. Any changes must be reported to RRA within ten (10) days.</li>
                <li>Keeping books of account, see below.</li>
                <li>Submitting tax declarations and paying due taxes</li>
                <li>Cooperating fully with all RRA officers and correspondence.</li>
              </ul>
              <div className="notice-box">
                <p>
                  <strong>Note:</strong> For additional obligations of taxpayers that are registered for specific tax types, see the relevant chapters of this Tax Handbook.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Books of Account Section */}
        <section className="content-section">
          <h2>What are 'Books of Account' and what bookkeeping is required of taxpayers?</h2>
          <div className="info-card">
            <div className="info-icon">
              <BookOpen size={24} />
            </div>
            <div className="info-content">
              <p>
                Books of account are very helpful for businesses to keep track of their cash-flow and profitability. The minimum information required by RRA is for taxpayers to record each sale transaction, with the date, client, nature of goods and amount recorded.
              </p>
            </div>
          </div>

          <div className="requirements-grid">
            <div className="requirement-card">
              <h3>Turnover: FRW 12,000,000 - FRW 20,000,000</h3>
              <p>Taxpayers must keep:</p>
              <ul className="requirements-list">
                <li>Record of daily purchases</li>
                <li>Record of all financial transactions</li>
                <li>Tax liability</li>
                <li>Withheld tax</li>
                <li>Declaration of withheld tax</li>
                <li>Record of sales</li>
              </ul>
            </div>

            <div className="requirement-card">
              <h3>Turnover: Above FRW 20,000,000</h3>
              <p>Taxpayers must also keep:</p>
              <ul className="requirements-list">
                <li>Record of assets and liabilities</li>
                <li>Records of daily income and expenses</li>
                <li>Records of stock inventory at the end of the period</li>
                <li>Information related to controlled transactions</li>
              </ul>
              <div className="important-notice">
                <p>
                  <strong>Important:</strong> Taxpayers with annual turnover above FRW 20,000,000 must register for VAT; must also declare Real Regime Income Tax and follow the additional bookkeeping requirements, see page 134 for details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Document Retention Section */}
        <section className="content-section">
          <h2>How long must taxpayers keep relevant tax documents?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Clock size={24} />
            </div>
            <div className="info-content">
              <p>
                Taxpayers are required to keep all documents and invoices relating to all tax declarations and payments for <strong>10 years</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice Section */}
        <section className="content-section">
          <div className="notice-card warning">
            <div className="notice-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="notice-content">
              <h3>Compliance Reminder</h3>
              <p>
                Failure to maintain proper books of account or retain required documents can result in penalties and fines. It's essential to maintain accurate and complete records to ensure compliance with RRA requirements and to support your tax declarations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Obligations;
