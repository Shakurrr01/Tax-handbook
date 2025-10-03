import { User, LogIn, ExternalLink, Monitor, FileText, DollarSign, AlertTriangle, CheckCircle, Globe } from 'lucide-react';

const MyRRA = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>MyRRA</h1>
        <p className="page-subtitle">
          Understanding the unified gateway for accessing RRA tax services
        </p>
      </div>

      <div className="page-content">
        {/* What is MyRRA Section */}
        <section className="content-section">
          <h2>What is MyRRA?</h2>
          <div className="info-card">
            <div className="info-icon">
              <User size={24} />
            </div>
            <div className="info-content">
              <p>
                The MyRRA system is a unified gateway that allows taxpayers to access a range of tax services provided by the Rwanda Revenue Authority. These services were previously accessed through separate systems such as E-Tax, LGT, ESW, and NFR.
              </p>
            </div>
          </div>
        </section>

        {/* How to Login Section */}
        <section className="content-section">
          <h2>How to Login into MyRRA?</h2>
          <div className="login-card">
            <div className="login-icon">
              <LogIn size={24} />
            </div>
            <div className="login-content">
              <p>
                Visit RRA website and click on highlighted menu as per the following picture:
              </p>
              
              <div className="login-steps">
                <div className="login-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Visit RRA Website</h4>
                    <p>Go to the official RRA website</p>
                  </div>
                </div>
                
                <div className="login-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Click on MyRRA Menu</h4>
                    <p>Look for the highlighted MyRRA menu option</p>
                  </div>
                </div>
                
                <div className="login-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Direct Link Access</h4>
                    <p>
                      Or click on the following link: 
                      <a 
                        href="https://myrra.rra.gov.rw/basic/login/indexLogin" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="external-link"
                      >
                        https://myrra.rra.gov.rw/basic/login/indexLogin
                        <ExternalLink size={16} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="login-options">
                <h4>Login Options</h4>
                <p>Once clicked, the following access picture will be displayed on the screen:</p>
                
                <div className="options-grid">
                  <div className="option-item">
                    <div className="option-icon">
                      <User size={20} />
                    </div>
                    <div className="option-content">
                      <h5>Sign Up</h5>
                      <p>Click on 'Sign Up' to access MyRRA for the first time</p>
                    </div>
                  </div>
                  
                  <div className="option-item">
                    <div className="option-icon">
                      <LogIn size={20} />
                    </div>
                    <div className="option-content">
                      <h5>Login</h5>
                      <p>Click on 'Login' if you already have credentials</p>
                    </div>
                  </div>
                  
                  <div className="option-item">
                    <div className="option-icon">
                      <AlertTriangle size={20} />
                    </div>
                    <div className="option-content">
                      <h5>Forgot Password</h5>
                      <p>If you have forgotten your password, click on 'Forgot your Password' to reset it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What can I access Section */}
        <section className="content-section">
          <h2>What can I access through MyRRA?</h2>
          <div className="access-card">
            <div className="access-icon">
              <Monitor size={24} />
            </div>
            <div className="access-content">
              <p>Through MyRRA, the system displays:</p>
              
              <div className="access-grid">
                <div className="access-item">
                  <div className="access-item-icon">
                    <FileText size={20} />
                  </div>
                  <div className="access-item-content">
                    <h4>Current Tax Declarations</h4>
                    <p>View and manage your current tax declarations</p>
                  </div>
                </div>
                
                <div className="access-item">
                  <div className="access-item-icon">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="access-item-content">
                    <h4>Undeclared Taxes</h4>
                    <p>Check for any taxes that need to be declared</p>
                  </div>
                </div>
                
                <div className="access-item">
                  <div className="access-item-icon">
                    <DollarSign size={20} />
                  </div>
                  <div className="access-item-content">
                    <h4>Unpaid Taxes</h4>
                    <p>View and manage any unpaid tax amounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="content-section">
          <h2>What else can a Taxpayer access once logged into MyRRA?</h2>
          <div className="features-card">
            <div className="features-icon">
              <Globe size={24} />
            </div>
            <div className="features-content">
              <p>MyRRA offers other features as displayed on below picture:</p>
              
              <div className="features-notice">
                <div className="notice-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="notice-content">
                  <h4>Comprehensive Tax Services</h4>
                  <p>
                    MyRRA provides a unified platform for accessing all RRA services that were previously 
                    scattered across multiple systems (E-Tax, LGT, ESW, NFR). This creates a more 
                    streamlined and user-friendly experience for taxpayers.
                  </p>
                </div>
              </div>
              
              <div className="features-list">
                <h4>Key Benefits of MyRRA:</h4>
                <ul>
                  <li><strong>Unified Access:</strong> Single login for all RRA services</li>
                  <li><strong>Centralized Dashboard:</strong> View all tax information in one place</li>
                  <li><strong>Real-time Updates:</strong> Get instant notifications about tax status</li>
                  <li><strong>Simplified Navigation:</strong> Easy access to all tax services</li>
                  <li><strong>Secure Platform:</strong> Enhanced security for all transactions</li>
                  <li><strong>24/7 Availability:</strong> Access services anytime, anywhere</li>
                </ul>
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
                <li>Keep your MyRRA credentials secure and confidential</li>
                <li>Use a strong password and change it regularly</li>
                <li>Log out after each session for security</li>
                <li>Contact RRA support if you encounter login issues</li>
                <li>Ensure you have a stable internet connection</li>
                <li>Use supported browsers for optimal experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="content-section">
          <div className="quick-access-card">
            <h3>Quick Access to MyRRA</h3>
            <div className="quick-access-grid">
              <div className="quick-access-item">
                <h4>🌐 Official Website</h4>
                <p>Visit <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="external-link">www.rra.gov.rw</a> and look for MyRRA menu</p>
              </div>
              <div className="quick-access-item">
                <h4>🔗 Direct Link</h4>
                <p>Go directly to <a href="https://myrra.rra.gov.rw/basic/login/indexLogin" target="_blank" rel="noopener noreferrer" className="external-link">MyRRA Login</a></p>
              </div>
              <div className="quick-access-item">
                <h4>📞 Support</h4>
                <p>Call RRA Call Center at 3004 for assistance</p>
              </div>
              <div className="quick-access-item">
                <h4>📧 Email Support</h4>
                <p>Contact RRA for technical support with MyRRA access</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyRRA;
