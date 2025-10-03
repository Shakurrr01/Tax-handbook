import { FileText, DollarSign, CheckCircle, ExternalLink, AlertTriangle, CreditCard, Award } from 'lucide-react';

const Certificates = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Award size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs)</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Understanding different types of certificates available from RRA and their application processes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Types of Certificates Section */}
        <section className="content-section">
          <h2>What are the different certificates available from RRA?</h2>
          <div className="info-card">
            <div className="info-icon">
              <FileText size={24} />
            </div>
            <div className="info-content">
              <p>There are six main types of certificates available from RRA. These are:</p>
              <ul className="certificates-list">
                <li>Value Added Tax (VAT) certificate</li>
                <li>Tax Clearance Certificates (TCCs)</li>
                <li>Compliance Certificate (Quitus Fiscal)</li>
                <li>Foreign Tax Credit certificate</li>
                <li>Trading License Tax certificate</li>
                <li>Electronic Billing Machine (EBM) Certificate</li>
              </ul>
            </div>
          </div>

          <div className="certificate-info-grid">
            <div className="certificate-info-card">
              <h3>Foreign Tax Credit Certificate</h3>
              <p>
                Available for taxpayers to prove that they have paid taxes in Rwanda. The Foreign Tax Credit certificate must be requested from RRA offices, and is processed on a case-by-case basis.
              </p>
            </div>
            <div className="certificate-info-card">
              <h3>Trading License Tax Certificate</h3>
              <p>
                Discussed in more detail in the Local Government Taxes (LGT) and fees chapter on page 316.
              </p>
            </div>
          </div>
        </section>

        {/* VAT Certificate Section */}
        <section className="content-section">
          <h2>What is Value Added Tax (VAT) certificates?</h2>
          <div className="info-card">
            <div className="info-icon">
              <CheckCircle size={24} />
            </div>
            <div className="info-content">
              <p>
                VAT certificates certify that the taxpayer is registered for VAT. All VAT registered taxpayers are required to clearly display the VAT registration certificate in plain view at their main place of business. See page 200 for the details of registering for VAT and the obligations of VAT-registered taxpayers.
              </p>
              <div className="cost-notice">
                <p><strong>Cost:</strong> VAT certificates are available free of charge.</p>
              </div>
            </div>
          </div>

          <div className="obtainment-channels-card">
            <h3>Channels for Obtaining VAT Certificates</h3>
            <div className="channels-grid">
              <div className="channel-item">
                <h4>Rwanda Development Board (RDB) System</h4>
                <p>During business registration, see page 87.</p>
              </div>
              <div className="channel-item">
                <h4>E-Tax Homepage</h4>
                <p>See page 90 for details on logging into E-Tax. After clicking on 'TCC Request', the process is the same as described on page 57 below.</p>
              </div>
              <div className="channel-item">
                <h4>RRA Website</h4>
                <p>See page 57 below for more details.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EBM Certificate Section */}
        <section className="content-section">
          <h2>What is Electronic Billing Machine (EBM) Certificate?</h2>
          <div className="info-card">
            <div className="info-icon">
              <CreditCard size={24} />
            </div>
            <div className="info-content">
              <p>
                It is a document certifying that a taxpayer adopted and uses an RRA certified electronic billing machine.
              </p>
            </div>
          </div>

          <div className="ebm-process-card">
            <h3>EBM Certificate Application Process</h3>
            <p>EBM Certificate is obtained by writing to the Assistant Commissioner in charge of Tax Control and Operational Support Division. The letter should indicate:</p>
            <ul className="requirements-list">
              <li>Taxpayer name</li>
              <li>Taxpayer Identification Number (TIN)</li>
              <li>Reason of requesting</li>
            </ul>
          </div>
        </section>

        {/* Compliance Certificate Section */}
        <section className="content-section">
          <h2>What is Compliance Certificate (Quitus Fiscal)?</h2>
          <div className="info-card">
            <div className="info-icon">
              <CheckCircle size={24} />
            </div>
            <div className="info-content">
              <p>
                Compliance Certificate (Quitus Fiscal) is a privileged status available, upon request, to taxpayers who have a good compliance record with RRA. Compliance Certificate (Quitus Fiscal) is proof of this status.
              </p>
            </div>
          </div>

          <div className="quitus-types-card">
            <h3>Types of Quitus Fiscal</h3>
            <div className="quitus-types-grid">
              <div className="quitus-type">
                <h4>WHT 3%</h4>
                <p>For withholding tax on public tenders of 3%</p>
              </div>
              <div className="quitus-type">
                <h4>WHT 5% & 3%</h4>
                <p>For withholding tax on imports of 5% and public tenders of 3%</p>
              </div>
            </div>
            <div className="page-reference">
              <p>For more details on the interaction of Compliance Certificate (Quitus Fiscal) on WHT 3% and WHT 5% & 3%, see pages 262 and 401 respectively.</p>
            </div>
          </div>

          <div className="quitus-benefits-card">
            <h3>Benefits of Compliance Certificate (Quitus Fiscal)</h3>
            <p>
              Taxpayers with Compliance Certificate (Quitus Fiscal) are not required to pay WHT 5%, or have WHT 3% withheld and paid on their behalf, depending upon the type of Compliance Certificate (Quitus Fiscal). This does not reduce the overall tax payable by the taxpayer, as any income from imports or public tenders are required to be declared in the annual Income Tax (PIT or CIT) declarations. However, Compliance Certificate (Quitus Fiscal) benefit their cash flow as the taxes do not have to be paid up front.
            </p>
            <div className="cost-notice">
              <p><strong>Cost:</strong> The cost of applying for Compliance Certificate (Quitus Fiscal) is FRW 10,000.</p>
            </div>
            <div className="page-reference">
              <p>The process of applying for Compliance Certificate (Quitus Fiscal) is described on page 57 below.</p>
            </div>
          </div>
        </section>

        {/* TCC Section */}
        <section className="content-section">
          <h2>What are Tax Clearance Certificates (TCCs)?</h2>
          <div className="info-card">
            <div className="info-icon">
              <FileText size={24} />
            </div>
            <div className="info-content">
              <p>
                Tax Clearance Certificates (TCCs) are available, upon online request through E-Tax, to prove that taxpayers have no unpaid arrears with RRA. This may be needed in order to bid for public tenders, apply for bank loans or a range of other reasons.
              </p>
              <div className="cost-notice">
                <p><strong>Cost:</strong> The cost of applying for TCCs is FRW 5,000.</p>
              </div>
              <div className="page-reference">
                <p>The process of applying for TCCs is described on page 57 below.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="content-section">
          <h2>What is the process of applying for and obtaining Certificates?</h2>
          <div className="info-card">
            <div className="info-icon">
              <ExternalLink size={24} />
            </div>
            <div className="info-content">
              <p>
                Certificates can be obtained through RRA website for non-business individuals (Tax Clearance Certificate – TCC only), and through E-Tax for businesses.
              </p>
            </div>
          </div>

          <div className="application-process-grid">
            <div className="process-card">
              <h3>For TIN Holders (TCC Only)</h3>
              <div className="process-steps">
                <p>Visit the RRA website at: <a href="http://www.rra.gov.rw" target="_blank" rel="noopener noreferrer">http://www.rra.gov.rw</a></p>
                <p>Log in into E-tax</p>
                <p>Click on 'TCC Quitus & other application'</p>
                <p>Click on 'Apply here'</p>
                <p>This loads the Certificates portal where you can:</p>
                <ul className="process-list">
                  <li>Submit the request for the listed certificates</li>
                  <li>Check the progress</li>
                  <li>Download the certificate</li>
                </ul>
              </div>
            </div>

            <div className="process-card">
              <h3>For Business Taxpayers</h3>
              <div className="process-steps">
                <p>Login into RRA E-Tax</p>
                <p>Click on 'TCC, Quitus & Other applications'</p>
                <p>This menu displays three options:</p>
                <ul className="process-list">
                  <li>'Apply here' - to send a certificate request to RRA</li>
                  <li>'View request' - to check the status of submitted requests</li>
                  <li>'Tax arrears' - to display arrears details if any</li>
                </ul>
                <div className="important-notice">
                  <p><strong>Important:</strong> It is advised to check tax arrears before applying for TCC and Compliance Certificate (Quitus Fiscal).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="certificate-types-card">
            <h3>Available Certificate Types</h3>
            <div className="certificate-types-grid">
              <div className="certificate-type">
                <h4>QUITUS</h4>
                <p>Must select '3%' or '5% & 3%' from the 'Quitus Certificate Type' drop-down menu. This refers to the type of Withholding Tax from which they wish to be exempted.</p>
              </div>
              <div className="certificate-type">
                <h4>VAT</h4>
                <p>No other selection required.</p>
              </div>
              <div className="certificate-type">
                <h4>TCC</h4>
                <p>The system allows to type remarks/comment.</p>
              </div>
              <div className="certificate-type">
                <h4>Withholding Certificate</h4>
                <p>The system requires additional information.</p>
              </div>
            </div>
            <div className="important-notice">
              <p>
                <strong>Note:</strong> After all required information has been entered for any certificate, click 'Submit' to confirm the certificate application. The system generates acknowledgement receipt for 'TCC' and 'Compliance Certificate (Quitus Fiscal)' indicating the cost to be paid as processing fees mentioned above.
              </p>
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
                <li>Always check tax arrears before applying for TCC and Compliance Certificate (Quitus Fiscal)</li>
                <li>Ensure all required information is complete before submitting applications</li>
                <li>Keep copies of all application receipts and acknowledgements</li>
                <li>Different certificates have different costs and requirements</li>
                <li>VAT certificates must be displayed at the main place of business</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificates;
