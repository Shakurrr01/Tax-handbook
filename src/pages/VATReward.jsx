import { Gift, Users, Smartphone, DollarSign, Clock, AlertTriangle, CheckCircle, Award } from 'lucide-react';

const VATReward = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Award size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">VAT Reward</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Understanding the VAT Reward scheme and how consumers can benefit from requesting EBM invoices
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Why VAT Reward Section */}
        <section className="content-section">
          <h2>Why VAT Reward?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Gift size={24} />
            </div>
            <div className="info-content">
              <p>
                This scheme was established by tax law to address the following concerns at the level of final consumer:
              </p>
            </div>
          </div>

          <div className="concerns-card">
            <div className="concerns-grid">
              <div className="concern-item">
                <div className="concern-icon">
                  <AlertTriangle size={20} />
                </div>
                <div className="concern-content">
                  <h4>Non-compliance with EBM</h4>
                  <p>Non-compliance with the issuance of EBM invoice</p>
                </div>
              </div>
              <div className="concern-item">
                <div className="concern-icon">
                  <AlertTriangle size={20} />
                </div>
                <div className="concern-content">
                  <h4>Incorrect Pricing</h4>
                  <p>Issuance of invoice with incorrect price value (under-pricing)</p>
                </div>
              </div>
              <div className="concern-item">
                <div className="concern-icon">
                  <AlertTriangle size={20} />
                </div>
                <div className="concern-content">
                  <h4>Low Invoice Culture</h4>
                  <p>Low culture of invoice demand amongst consumers</p>
                </div>
              </div>
              <div className="concern-item">
                <div className="concern-icon">
                  <AlertTriangle size={20} />
                </div>
                <div className="concern-content">
                  <h4>Lack of Incentives</h4>
                  <p>Lack of incentives to final consumers</p>
                </div>
              </div>
              <div className="concern-item">
                <div className="concern-icon">
                  <AlertTriangle size={20} />
                </div>
                <div className="concern-content">
                  <h4>Limited Information</h4>
                  <p>Limited information of consumer contribution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="content-section">
          <h2>Who is eligible for VAT Reward?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Users size={24} />
            </div>
            <div className="info-content">
              <p>Individuals who fulfil the following:</p>
            </div>
          </div>

          <div className="eligibility-criteria-card">
            <div className="criteria-grid">
              <div className="criteria-item">
                <div className="criteria-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="criteria-content">
                  <h4>System Registration</h4>
                  <p>Being registered in the VAT reward system</p>
                </div>
              </div>
              <div className="criteria-item">
                <div className="criteria-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="criteria-content">
                  <h4>EBM Invoice</h4>
                  <p>Having received an EBM invoice from a VAT registered taxpayer indicating her or his recorded mobile telephone number</p>
                </div>
              </div>
            </div>
          </div>

          <div className="important-notice-card">
            <div className="notice-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="notice-content">
              <h3>Important Note</h3>
              <p>
                A final consumer who makes a payment and requests an invoice but does not receive one must declare this in the system as prescribed by the tax administration.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Process Section */}
        <section className="content-section">
          <h2>How to register for VAT Reward?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Smartphone size={24} />
            </div>
            <div className="info-content">
              <p>
                Using USSD technology, dial <strong>*800#</strong>, select your preferred language, then follow these steps:
              </p>
            </div>
          </div>

          <div className="registration-process-card">
            <h3>Registration Steps</h3>
            <div className="steps-grid">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Choose EBM Services</h4>
                  <p>Choose option 4 – EBM Services</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Select VAT Reward</h4>
                  <p>Select option 1 – VAT Reward Services</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Choose Registration</h4>
                  <p>Choose option 1 – VAT Reward Registration</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Enter Information</h4>
                  <p>Enter the requested information: your National ID number and the mobile phone number where the reward should be sent.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reward Rate Section */}
        <section className="content-section">
          <h2>What is the rate of VAT Reward?</h2>
          <div className="info-card">
            <div className="info-icon">
              <DollarSign size={24} />
            </div>
            <div className="info-content">
              <p>
                A final consumer is rewarded <strong>10% of the VAT amount</strong> as shown on the EBM invoice issued.
              </p>
            </div>
          </div>

          <div className="reward-rate-card">
            <div className="rate-highlight">
              <h3>Reward Rate</h3>
              <div className="rate-display">
                <span className="rate-percentage">10%</span>
                <span className="rate-description">of VAT amount on EBM invoice</span>
              </div>
            </div>
          </div>
        </section>

        {/* Disbursement Section */}
        <section className="content-section">
          <h2>When VAT Reward is disbursed?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Clock size={24} />
            </div>
            <div className="info-content">
              <p>
                The VAT reward is deposited to the mobile money or bank account designated by the last consumer on quarterly basis, within 15 days following the declaration period of that quarter.
              </p>
            </div>
          </div>

          <div className="disbursement-details-card">
            <h3>Disbursement Details</h3>
            <div className="disbursement-grid">
              <div className="disbursement-item">
                <h4>📅 Frequency</h4>
                <p>Quarterly basis</p>
              </div>
              <div className="disbursement-item">
                <h4>⏰ Timeline</h4>
                <p>Within 15 days following the declaration period</p>
              </div>
              <div className="disbursement-item">
                <h4>💳 Payment Method</h4>
                <p>Mobile money or bank account</p>
              </div>
              <div className="disbursement-item">
                <h4>📱 Account</h4>
                <p>Designated by the consumer during registration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Summary Section */}
        <section className="content-section">
          <div className="benefits-summary-card">
            <h3>Benefits of VAT Reward Scheme</h3>
            <div className="benefits-summary-grid">
              <div className="benefit-summary">
                <h4>💰 Cash Rewards</h4>
                <p>Receive 10% of VAT amount as cash reward</p>
              </div>
              <div className="benefit-summary">
                <h4>📱 Easy Registration</h4>
                <p>Simple USSD registration process</p>
              </div>
              <div className="benefit-summary">
                <h4>🔄 Quarterly Payments</h4>
                <p>Regular quarterly disbursements</p>
              </div>
              <div className="benefit-summary">
                <h4>📋 Compliance Incentive</h4>
                <p>Encourages proper invoice issuance</p>
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
              <h3>Important Reminders</h3>
              <ul className="reminders-list">
                <li>Always request EBM invoices when making purchases</li>
                <li>Ensure your mobile number is correctly recorded on invoices</li>
                <li>Register in the VAT reward system to be eligible</li>
                <li>Report cases where invoices are not provided when requested</li>
                <li>Keep track of your quarterly reward disbursements</li>
                <li>Update your contact information if it changes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VATReward;
