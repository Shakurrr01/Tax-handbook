import { Car, DollarSign, FileText, Clock, AlertTriangle, CheckCircle, Users, CreditCard, ExternalLink } from 'lucide-react';

const MotorVehicle = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Car size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Motor Vehicle</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Understanding motor vehicle transfer requirements, costs, and processes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* When Transfer is Required Section */}
        <section className="content-section">
          <h2>When must motor vehicles be transferred?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Car size={24} />
            </div>
            <div className="info-content">
              <p>
                Transfer of motor vehicles is required when the ownership of the vehicle changes.
              </p>
            </div>
          </div>
        </section>

        {/* Transfer Cost Section */}
        <section className="content-section">
          <h2>What is the cost of motor vehicle transfer?</h2>
          <div className="info-card">
            <div className="info-icon">
              <DollarSign size={24} />
            </div>
            <div className="info-content">
              <p>
                The Transfer Fee is <strong>FRW 30,000</strong> for motorcycles and <strong>FRW 60,000</strong> for all other motor vehicles.
              </p>
              <div className="custom-notice-card">
                <AlertTriangle size={20} className="custom-notice-icon" />
                <p className="custom-notice-text">
                  For transfer of motor vehicles with number plates that begin 'IT', 'CD' or 'UN' to new owners who do not have that status, see page 433 for details on the customs duties that must also be paid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents Section */}
        <section className="content-section">
          <h2>What documents are required for motor vehicle transfer?</h2>
          <div className="info-card">
            <div className="info-icon">
              <FileText size={24} />
            </div>
            <div className="info-content">
              <p>The documents required for motor vehicle transfer are:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ position: 'relative', padding: '0.75rem 0 0.75rem 1.5rem', color: 'var(--text)', lineHeight: '1.6', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Notarised Sale Contract</strong> (containing the date, location, value and the names, phone numbers, NID, identification of motor vehicles and signatures of both the buyer and seller). If done outside the country, Embassy and MINAFET may approval it.
                </li>
                <li style={{ position: 'relative', padding: '0.75rem 0 0.75rem 1.5rem', color: 'var(--text)', lineHeight: '1.6', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Registration Transfer Fee payment receipt</strong> (FRW 30,000-FRW 60,000)
                </li>
                <li style={{ position: 'relative', padding: '0.75rem 0 0.75rem 1.5rem', color: 'var(--text)', lineHeight: '1.6', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Latest Yellow Card and plate number</strong> for the motor vehicle
                </li>
                <li style={{ position: 'relative', padding: '0.75rem 0 0.75rem 1.5rem', color: 'var(--text)', lineHeight: '1.6', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>The buyer's TIN</strong>, see page 68 for details
                </li>
                <li style={{ position: 'relative', padding: '0.75rem 0 0.75rem 1.5rem', color: 'var(--text)', lineHeight: '1.6', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Historical insurance information</strong> (only required if vehicle will be used as a business such as a taxi)
                </li>
                <li style={{ position: 'relative', padding: '0.75rem 0 0.75rem 1.5rem', color: 'var(--text)', lineHeight: '1.6' }}>
                  <strong>No tax arrears</strong> of the vehicle
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transfer Process Section */}
        <section className="content-section">
          <h2>What is the motor vehicle transfer process?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Clock size={24} />
            </div>
            <div className="info-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', flexShrink: 0 }}>1</div>
                  <div>
                    <h4 style={{ color: 'var(--primary)', margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '600' }}>Seller Initiates Transfer</h4>
                    <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                      The motor vehicle seller logs in into E-Tax, goes to 'Motor Vehicle' then clicks on 'Ownership Transfer'.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', flexShrink: 0 }}>2</div>
                  <div>
                    <h4 style={{ color: 'var(--primary)', margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '600' }}>Payment of Transfer Fee</h4>
                    <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                      The taxpayer pays the Transfer Fee (FRW 30,000 for motorcycles, FRW 60,000 for other vehicles).
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', flexShrink: 0 }}>3</div>
                  <div>
                    <h4 style={{ color: 'var(--primary)', margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '600' }}>Buyer TIN Verification</h4>
                    <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                      If the buyer of the motor vehicle does not have a unique Taxpayer Identification Number (TIN), they must provide RRA staff with a valid NID or Passport. The TIN and certificate are provided free.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', flexShrink: 0 }}>4</div>
                  <div>
                    <h4 style={{ color: 'var(--primary)', margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '600' }}>Document Submission</h4>
                    <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                      The buyer must provide RRA staff with all the required documents.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', flexShrink: 0 }}>5</div>
                  <div>
                    <h4 style={{ color: 'var(--primary)', margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '600' }}>Document Verification and Yellow Card Update</h4>
                    <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                      If all required documents are valid, RRA staff will provide the buyer of the motor vehicle with the updated Yellow Card containing the buyer's details after receiving the old yellow card and plate number.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1.5rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem', flexShrink: 0 }}>6</div>
                  <div>
                    <h4 style={{ color: 'var(--primary)', margin: '0 0 0.75rem 0', fontSize: '1.2rem', fontWeight: '600' }}>Transfer Complete</h4>
                    <p style={{ color: 'var(--text)', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                      The process is finished and the buyer is now the legal owner of the motor vehicle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Services Section */}
        <section className="content-section">
          <h2 className="content-heading">What services related to motor vehicle can a taxpayer access online?</h2>
          <div className="info-card">
            <div className="info-icon">
              <ExternalLink size={24} />
            </div>
            <div className="info-content">
              <p>
                To access online Motor vehicle services, log into E-Tax, click on Motor vehicle menu, choose any of the following services as displayed by the system:
              </p>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <FileText size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Motor Vehicle (MV) Declaration</h4>
                    <p className="service-description">Submit motor vehicle declarations</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <FileText size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Motor Vehicle (MV) Acknowledgment Receipt</h4>
                    <p className="service-description">Generate acknowledgment receipts</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <Clock size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">New Inactivity Request</h4>
                    <p className="service-description">Request vehicle inactivity status</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <FileText size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Duplicate Request</h4>
                    <p className="service-description">Request duplicate documents</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <Users size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">View Duplicate Requests</h4>
                    <p className="service-description">Track duplicate request status</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <Car size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Ownership Transfer</h4>
                    <p className="service-description">Initiate ownership transfer process</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <Users size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">View Ownership Transfer Requests</h4>
                    <p className="service-description">Track transfer request status</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <FileText size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Ownership Certificate Request</h4>
                    <p className="service-description">Request ownership certificates</p>
                  </div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <Users size={20} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">View Ownership Certificate Requests</h4>
                    <p className="service-description">Track certificate request status</p>
                  </div>
                </div>
              </div>
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
              <ul className="guidelines-list">
                <li>Ensure all documents are properly notarized and complete</li>
                <li>Verify that the vehicle has no outstanding tax arrears</li>
                <li>Both buyer and seller must have valid identification documents</li>
                <li>Transfer fees must be paid before processing the transfer</li>
                <li>Keep copies of all submitted documents and receipts</li>
                <li>Contact RRA for assistance if you encounter any issues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Summary Section */}
        <section className="content-section">
          <div className="info-card">
            <div className="info-icon">
              <DollarSign size={24} />
            </div>
            <div className="info-content">
              <h3 className="content-heading">Transfer Fee Summary</h3>
              <div className="fee-summary-grid">
                <div className="fee-card">
                  <div className="fee-icon">
                    <Car size={20} />
                  </div>
                  <div className="fee-content">
                    <h4 className="fee-title">Motorcycles</h4>
                    <p className="fee-amount">FRW 30,000</p>
                    <p className="fee-description">Standard transfer fee for motorcycles</p>
                  </div>
                </div>
                <div className="fee-card">
                  <div className="fee-icon">
                    <Car size={20} />
                  </div>
                  <div className="fee-content">
                    <h4 className="fee-title">Other Vehicles</h4>
                    <p className="fee-amount">FRW 60,000</p>
                    <p className="fee-description">Standard transfer fee for cars, trucks, and other motor vehicles</p>
                  </div>
                </div>
                <div className="fee-card">
                  <div className="fee-icon">
                    <FileText size={20} />
                  </div>
                  <div className="fee-content">
                    <h4 className="fee-title">TIN Certificate</h4>
                    <p className="fee-amount free">Free</p>
                    <p className="fee-description">Provided free of charge for new buyers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MotorVehicle;
