import { Mail, FileText, ExternalLink, AlertTriangle, CheckCircle, Upload, MessageSquare } from 'lucide-react';

const CommunicateRRA = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <MessageSquare size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Communicate to RRA in Writing</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Understanding how to send letters to RRA and the requirements for written communication
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* How to Send Letter Section */}
        <section className="content-section">
          <h2>How to send a letter to RRA?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Mail size={24} />
            </div>
            <div className="info-content">
              <p>
                To send a letter to RRA whether you have a TIN or not, visit RRA website then click on "CLICK HERE TO SEND YOUR LETTER TO RRA" as per below screenshot:
              </p>
            </div>
          </div>

          <div className="process-overview-card">
            <h3>Letter Submission Process</h3>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Visit RRA Website</h4>
                  <p>Go to the official RRA website</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Click Letter Link</h4>
                  <p>Click on "CLICK HERE TO SEND YOUR LETTER TO RRA"</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Follow Steps</h4>
                  <p>Follow all steps by filling all requested information</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Submit Letter</h4>
                  <p>Submit your signed, stamped, and PDF-saved letter</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Letter Requirements Section */}
        <section className="content-section">
          <h2>Letter Requirements</h2>
          <div className="info-card">
            <div className="info-icon">
              <FileText size={24} />
            </div>
            <div className="info-content">
              <p>
                The letter to be sent should meet the following requirements:
              </p>
            </div>
          </div>

          <div className="requirements-card">
            <div className="requirements-grid">
              <div className="requirement-item">
                <div className="requirement-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="requirement-content">
                  <h4>Signed</h4>
                  <p>The letter must be properly signed by the sender</p>
                </div>
              </div>
              <div className="requirement-item">
                <div className="requirement-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="requirement-content">
                  <h4>Stamped</h4>
                  <p>The letter should include appropriate stamps or seals</p>
                </div>
              </div>
              <div className="requirement-item">
                <div className="requirement-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="requirement-content">
                  <h4>PDF Format</h4>
                  <p>The letter must be saved and submitted as a PDF file</p>
                </div>
              </div>
              <div className="requirement-item">
                <div className="requirement-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="requirement-content">
                  <h4>Complete Information</h4>
                  <p>All requested information must be filled out completely</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="content-section">
          <h2>Who can send letters to RRA?</h2>
          <div className="info-card">
            <div className="info-icon">
              <CheckCircle size={24} />
            </div>
            <div className="info-content">
              <p>
                This service is available to both:
              </p>
            </div>
          </div>

          <div className="accessibility-card">
            <div className="accessibility-grid">
              <div className="accessibility-item">
                <h4>📋 TIN Holders</h4>
                <p>Taxpayers who have a Taxpayer Identification Number (TIN)</p>
              </div>
              <div className="accessibility-item">
                <h4>👤 Non-TIN Holders</h4>
                <p>Individuals who do not have a TIN but need to communicate with RRA</p>
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
                <li>Ensure your letter is clear, concise, and professional</li>
                <li>Include all necessary supporting documents if required</li>
                <li>Provide accurate contact information for follow-up</li>
                <li>Keep a copy of your submitted letter for your records</li>
                <li>Follow up on your letter if you don't receive a response within reasonable time</li>
                <li>Use the official RRA website for all letter submissions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="content-section">
          <div className="benefits-card">
            <h3>Benefits of Online Letter Submission</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h4>🚀 Convenience</h4>
                <p>Submit letters from anywhere with internet access</p>
              </div>
              <div className="benefit-item">
                <h4>📱 Accessibility</h4>
                <p>Available to both TIN and non-TIN holders</p>
              </div>
              <div className="benefit-item">
                <h4>📋 Tracking</h4>
                <p>Track the status of your letter submission</p>
              </div>
              <div className="benefit-item">
                <h4>💾 Digital Records</h4>
                <p>Maintain digital copies of all communications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="content-section">
          <div className="contact-info-card">
            <h3>Additional Contact Information</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <h4>🌐 Website</h4>
                <p>Visit <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="external-link">www.rra.gov.rw</a> for the letter submission portal</p>
              </div>
              <div className="contact-item">
                <h4>📞 Phone Support</h4>
                <p>Contact RRA for assistance with letter submission process</p>
              </div>
              <div className="contact-item">
                <h4>📧 Email Support</h4>
                <p>Email support available for technical issues</p>
              </div>
              <div className="contact-item">
                <h4>🏢 Office Visits</h4>
                <p>Visit RRA offices for in-person assistance if needed</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunicateRRA;
