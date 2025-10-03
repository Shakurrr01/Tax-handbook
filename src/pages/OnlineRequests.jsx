import { Globe, FileText, DollarSign, Clock, AlertTriangle, CheckCircle, Building, CreditCard, Monitor, Clock3, Eye, Zap, Save } from 'lucide-react';

const OnlineRequests = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Monitor size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Online Requests</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Accessing various services through the online requests menu in the e-tax system
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Overview Section */}
        <section className="content-section">
          <h2 className="content-heading">Online Services Overview</h2>
          <div className="info-card">
            <div className="info-icon">
              <Globe size={24} />
            </div>
            <div className="info-content">
              <p>
                Taxpayer can access various services through the online requests menu in the e-tax system. These include:
              </p>
            </div>
          </div>
        </section>

        {/* CIT/PIT Requests Section */}
        <section className="content-section">
          <h2 className="content-heading">CIT/PIT Requests</h2>
          <div className="service-card">
            <div className="service-icon">
              <FileText size={24} />
            </div>
            <div className="service-content">
              <h3>Income Tax Filing and Payment Services</h3>
              <p>
                Services related to Income tax Filing and Payment for both Corporate Income Tax (CIT) and Personal Income Tax (PIT).
              </p>
              <div className="service-features">
                <h4>Available Services:</h4>
                <ul className="features-list">
                  <li>Tax filing submissions</li>
                  <li>Payment processing</li>
                  <li>Declaration amendments</li>
                  <li>Tax calculations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VAT/PAYE Filing Frequency Change Section */}
        <section className="content-section">
          <h2 className="content-heading">VAT/PAYE Filing Frequency Change</h2>
          <div className="service-card">
            <div className="service-icon">
              <Clock size={24} />
            </div>
            <div className="service-content">
              <h3>Change Filing Frequency</h3>
              <p>
                Request to change the filing frequency from quarterly to monthly for VAT or PAYE.
              </p>
              <div className="service-features">
                <h4>Frequency Options:</h4>
                <ul className="features-list">
                  <li>Quarterly to Monthly (VAT)</li>
                  <li>Quarterly to Monthly (PAYE)</li>
                  <li>Frequency adjustment requests</li>
                  <li>Approval tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Revision Requests Section */}
        <section className="content-section">
          <h2 className="content-heading">Requests for Revision Downwards</h2>
          <div className="service-card">
            <div className="service-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="service-content">
              <h3>Tax Reduction Requests</h3>
              <p>
                Submit a request to reduce previously declared tax amounts.
              </p>
              <div className="service-features">
                <h4>Revision Process:</h4>
                <ul className="features-list">
                  <li>Submit revision request</li>
                  <li>Provide supporting documentation</li>
                  <li>Review and approval process</li>
                  <li>Notification of decision</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Document Generation Section */}
        <section className="content-section">
          <h2 className="content-heading">Document Generation</h2>
          <div className="service-card">
            <div className="service-icon">
              <FileText size={24} />
            </div>
            <div className="service-content">
              <h3>Generate Missing Document Numbers</h3>
              <p>
                Allows taxpayers to generate a document number when one is missing for a given declaration period.
              </p>
              <div className="service-features">
                <h4>Document Services:</h4>
                <ul className="features-list">
                  <li>Generate missing document numbers</li>
                  <li>Document verification</li>
                  <li>Period-specific document requests</li>
                  <li>Document tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Closure Section */}
        <section className="content-section">
          <h2 className="content-heading">Business Closure</h2>
          <div className="service-card">
            <div className="service-icon">
              <Building size={24} />
            </div>
            <div className="service-content">
              <h3>Close Business or Tax Type</h3>
              <p>
                Submit a request to close a business entirely or close a specific tax type.
              </p>
              <div className="service-features">
                <h4>Closure Options:</h4>
                <ul className="features-list">
                  <li>Complete business closure</li>
                  <li>Specific tax type closure</li>
                  <li>Final tax clearance</li>
                  <li>Documentation requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Instalment Payment Request Section */}
        <section className="content-section">
          <h2 className="content-heading">Instalment Payment Request</h2>
          <div className="service-card">
            <div className="service-icon">
              <CreditCard size={24} />
            </div>
            <div className="service-content">
              <h3>Payment in Instalments</h3>
              <p>
                For taxpayers with tax arrears, this service allows them to request payment in instalments.
              </p>
              <div className="service-features">
                <h4>Instalment Features:</h4>
                <ul className="features-list">
                  <li>Payment plan requests</li>
                  <li>Instalment schedule creation</li>
                  <li>Payment tracking</li>
                  <li>Plan modification options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Access Information Section */}
        <section className="content-section">
          <div className="access-info-card">
            <h3 className="content-heading">How to Access Online Requests</h3>
            <div className="access-steps">
              <div className="access-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Login to E-Tax</h4>
                  <p>Access the e-tax system with your credentials</p>
                </div>
              </div>
              <div className="access-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Navigate to Requests</h4>
                  <p>Find the "Online Requests" menu in the e-tax system</p>
                </div>
              </div>
              <div className="access-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Select Service</h4>
                  <p>Choose the specific service you need from the available options</p>
                </div>
              </div>
              <div className="access-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Complete Request</h4>
                  <p>Fill out the required information and submit your request</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice Section */}
        <section className="content-section">
          <div className="notice-card info">
            <div className="notice-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="notice-content">
              <h3>Important Guidelines</h3>
              <ul className="guidelines-list">
                <li>Ensure all required information is complete before submitting requests</li>
                <li>Keep copies of all submitted requests and confirmations</li>
                <li>Monitor the status of your requests through the e-tax system</li>
                <li>Provide accurate and up-to-date information in all requests</li>
                <li>Follow up on pending requests if no response is received</li>
                <li>Contact RRA support if you encounter technical issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Summary Section */}
        <section className="content-section">
          <div className="benefits-summary-card">
            <h3 className="content-heading">Benefits of Online Requests</h3>
            <div className="benefits-summary-grid">
              <div className="benefit-summary">
                <div className="benefit-icon">
                  <Clock3 size={20} />
                </div>
                <div className="benefit-content">
                  <h4>24/7 Availability</h4>
                  <p>Access services anytime, anywhere</p>
                </div>
              </div>
              <div className="benefit-summary">
                <div className="benefit-icon">
                  <Eye size={20} />
                </div>
                <div className="benefit-content">
                  <h4>Real-time Tracking</h4>
                  <p>Monitor request status in real-time</p>
                </div>
              </div>
              <div className="benefit-summary">
                <div className="benefit-icon">
                  <Zap size={20} />
                </div>
                <div className="benefit-content">
                  <h4>Faster Processing</h4>
                  <p>Reduced processing times compared to manual submissions</p>
                </div>
              </div>
              <div className="benefit-summary">
                <div className="benefit-icon">
                  <Save size={20} />
                </div>
                <div className="benefit-content">
                  <h4>Digital Records</h4>
                  <p>Maintain digital copies of all requests and responses</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnlineRequests;
