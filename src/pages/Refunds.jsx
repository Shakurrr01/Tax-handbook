import { DollarSign, FileText, Mail, Clock, AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';

const Refunds = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <RotateCcw size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Refunds/Tax Credits</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Understanding refund and tax credit processes for overpaid taxes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Types of Refunds Section */}
        <section className="content-section">
          <h2>What are the different types of refunds/tax credits?</h2>
          <div className="info-card">
            <div className="info-icon">
              <DollarSign size={24} />
            </div>
            <div className="info-content">
              <p>
                There are situations where it is possible for taxpayers to have overpaid the amount of taxes due, and require refunds/tax credits. These situations occur most frequently for:
              </p>
            </div>
          </div>

          <div className="refund-types-grid">
            <div className="refund-type-card">
              <h3>VAT Refunds</h3>
              <p>
                Where the VAT paid on inputs exceeds the output VAT, particularly in the case of zero-rated products and exports.
              </p>
              <div className="special-notice">
                <p>
                  <strong>Special Allowance:</strong> There is also a special allowance of VAT Refunds for Privileged Persons, see page 217 for more details.
                </p>
              </div>
            </div>

            <div className="refund-type-card">
              <h3>Income Tax Refunds</h3>
              <p>
                Where the Instalment Quarterly Prepayments paid by the taxpayer and the Withholding Taxes withheld and paid on behalf of the taxpayer exceed the Income Tax due.
              </p>
            </div>

            <div className="refund-type-card">
              <h3>Audit Refunds</h3>
              <p>
                Where the result of an audit finds that the taxpayer has over declared and over paid.
              </p>
            </div>

            <div className="refund-type-card">
              <h3>Appeal Refunds</h3>
              <p>
                Where the taxpayer pays the taxes due, and is subsequently successful in their appeal.
              </p>
            </div>

            <div className="refund-type-card">
              <h3>Accidental Overpayment</h3>
              <p>
                Any accidental overpayment of taxes.
              </p>
            </div>
          </div>
        </section>

        {/* Refund Process Section */}
        <section className="content-section">
          <h2>What is the process for taxpayers to receive refunds?</h2>
          
          <div className="process-grid">
            <div className="process-card">
              <h3>VAT Refunds</h3>
              <div className="process-details">
                <p>
                  The refund process requires no initial action from the taxpayer. For higher value refunds, the claims are refunded to the taxpayer's bank account. For lower value refunds, the claims may be deducted against future payments.
                </p>
                <div className="page-reference">
                  <p>See page 214 for more details on VAT refunds.</p>
                </div>
              </div>
            </div>

            <div className="process-card">
              <h3>Appeal Refunds</h3>
              <div className="process-details">
                <p>
                  In the case of refunds/tax credits due to successful appeals, the refund/tax credits process requires no additional action from the taxpayer.
                </p>
              </div>
            </div>

            <div className="process-card">
              <h3>General Tax Credits</h3>
              <div className="process-details">
                <p>
                  For all tax credits, the taxpayer must write a letter addressed to the tax administration. This means either addressed to:
                </p>
                <ul className="requirements-list">
                  <li>The 'Assistant Commissioner in charge of Filing and Payment Monitoring Division' in case of tax credits resulting from taxpayers' self-assessment</li>
                  <li>The 'Assistant Commissioner in charge of Debt Management Division' for tax credits resulting from tax administration assessments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Letter Requirements Section */}
        <section className="content-section">
          <h2>Requirements for Refund Request Letters</h2>
          <div className="info-card">
            <div className="info-icon">
              <Mail size={24} />
            </div>
            <div className="info-content">
              <p>The refund request letter should include:</p>
              <ul className="requirements-list">
                <li>Identify the taxpayer's name and TIN</li>
                <li>Identify the tax period and tax type(s) concerned</li>
                <li>State the reason(s) for the refund request</li>
                <li>State the amount of refund claimed</li>
                <li>Be signed by the taxpayer or legal representative</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RRA Response Section */}
        <section className="content-section">
          <div className="notice-card info">
            <div className="notice-icon">
              <CheckCircle size={24} />
            </div>
            <div className="notice-content">
              <h3>RRA Response</h3>
              <p>
                RRA will provide the taxpayer with a Refund/tax credit Claim Notification reply, informing them whether their refund/tax credit claim has been accepted, adjusted or rejected and the reason for this decision. Tax credit is used to pay current or future liability.
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
              <h3>Important Reminders</h3>
              <ul className="reminders-list">
                <li>Ensure all documentation is complete and accurate when requesting refunds</li>
                <li>Keep copies of all correspondence with RRA regarding refund requests</li>
                <li>Tax credits can be used to offset current or future tax liabilities</li>
                <li>Different processes apply for different types of refunds</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Refunds;
