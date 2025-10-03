import { Search, FileText, Clock, AlertTriangle, Calendar, Shield } from 'lucide-react';

const Audits = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Shield size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Audits</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Understanding RRA audit processes, types, and taxpayer rights
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* What is an Audit Section */}
        <section className="content-section">
          <h2>What is an audit?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Search size={24} />
            </div>
            <div className="info-content">
              <p>
                An audit is one of the methods RRA uses to ensure that taxpayers are correctly declaring and paying their taxes. Audits involve RRA checking the relevant documents concerning a taxpayer's tax obligations for any tax period(s) within the past five years.
              </p>
              <p>
                If there is evidence of non-compliance, the taxpayer will be issued with an assessment notice. This contains details of the offence(s), and the unpaid tax due, as well as additional penalties or fines that must be paid.
              </p>
              <div className="notice-box">
                <p>
                  <strong>Important:</strong> It is important to note that being selected for an audit does not necessarily mean that RRA suspects the taxpayer of non-compliance. Instead, RRA wishes to check a taxpayer's declarations and payments in more detail, to encourage a high level of compliance across all taxpayers.
                </p>
              </div>
              <p>
                The processes for audits are similar for domestic taxes, Local Government Taxes (LGT) and fees, and for Post-Clearance Audits (PCAs) regarding customs duties.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Audits Section */}
        <section className="content-section">
          <h2>What are the different types of audits?</h2>
          <div className="info-card">
            <div className="info-icon">
              <FileText size={24} />
            </div>
            <div className="info-content">
              <p>There are five main types of audits:</p>
              <ul className="audit-types-list">
                <li>Comprehensive audit</li>
                <li>Issue-oriented audit</li>
                <li>Desk audit</li>
                <li>Transfer pricing audit</li>
                <li>Refund audit</li>
              </ul>
            </div>
          </div>

          <div className="audit-types-grid">
            <div className="audit-type-card">
              <h3>Comprehensive Audit</h3>
              <p>
                Comprehensive audits are more in-depth and time-intensive. These are usually conducted by RRA staff whilst visiting the taxpayer's business premises and reviewing all relevant documents.
              </p>
            </div>

            <div className="audit-type-card">
              <h3>Issue-Oriented Audit</h3>
              <p>
                Issue-oriented audits are usually focussed on a single tax type, single aspect or single tax period. Issue audits may be desk-based or involve visits to the taxpayer's business premises.
              </p>
            </div>

            <div className="audit-type-card">
              <h3>Desk Audit</h3>
              <p>
                Desk audits are conducted by RRA staff using information that has already been submitted to RRA.
              </p>
            </div>

            <div className="audit-type-card">
              <h3>Transfer Pricing Audit</h3>
              <p>
                Transfer pricing audit focuses on related party transactions.
              </p>
            </div>

            <div className="audit-type-card">
              <h3>Refund Audit</h3>
              <p>
                Refund audits are a type of issue audit, focused on tax declarations claiming refunds from RRA.
              </p>
            </div>
          </div>
        </section>

        {/* Audit Notification Section */}
        <section className="content-section">
          <h2>When are taxpayers informed about audits?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Calendar size={24} />
            </div>
            <div className="info-content">
              <p>
                Taxpayers will be informed of what is required of them, the documents required by RRA, their rights, the anticipated timeframe, and the process of the audit during the notification of the audit or the initial meeting.
              </p>
            </div>
          </div>

          <div className="notification-grid">
            <div className="notification-card">
              <h3>Desk Audits</h3>
              <div className="notification-details">
                <p>In the case of desk audits, taxpayers may not be informed about the audit unless a specific problem is identified. Taxpayers will always be invited to offer explanations before being issued with assessment notices.</p>
              </div>
            </div>

            <div className="notification-card">
              <h3>Issue Audits</h3>
              <div className="notification-details">
                <p>In the case of issue audits, taxpayers will be notified at least <strong>three working days</strong> beforehand. The postponement of such an issue-oriented audit cannot exceed <strong>seven (7) working days</strong>.</p>
              </div>
            </div>

            <div className="notification-card">
              <h3>Comprehensive Audits</h3>
              <div className="notification-details">
                <p>In the case of comprehensive audits, taxpayers will be notified at least <strong>seven working days</strong> beforehand. If the taxpayer is not ready, they may write to RRA requesting an extension, up to a maximum of <strong>thirty days</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Timeline Section */}
        <section className="content-section">
          <div className="notice-card warning">
            <div className="notice-icon">
              <Clock size={24} />
            </div>
            <div className="notice-content">
              <h3>Payment Timeline</h3>
              <p>
                Any unpaid taxes or additional penalties or fines must be paid within <strong>seven days</strong> of receipt of the assessment notice.
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
              <h3>Taxpayer Rights</h3>
              <p>
                During an audit, taxpayers have the right to be treated fairly and professionally. They can request clarification on any aspect of the audit process and should cooperate fully with RRA officers while ensuring their rights are respected.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Audits;
