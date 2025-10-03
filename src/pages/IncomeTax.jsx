import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Clock, FileText, Smartphone, Monitor, AlertTriangle, CheckCircle, Info, Users, Building, Car, Download, Upload, CreditCard } from 'lucide-react';
import '../styles/Diagrams.css';

const IncomeTax = () => {
  const flatTaxRates = [
    { turnover: 'FRW 2M – 4M', tax: 'FRW 60,000' },
    { turnover: 'FRW 4M – 7M', tax: 'FRW 120,000' },
    { turnover: 'FRW 7M – 10M', tax: 'FRW 210,000' },
    { turnover: 'FRW 10M – 12M', tax: 'FRW 300,000' }
  ];

  const pitRates = [
    { income: 'FRW 0 – 720K', rate: '0%' },
    { income: 'FRW 720K – 1.2M', rate: '10%' },
    { income: 'FRW 1.2M – 2.4M', rate: '20%' },
    { income: 'Above FRW 2.4M', rate: '30%' }
  ];

  const citRate = '28%';

  const motorVehicleRates = [
    { vehicle: 'Motorcycle <100cc', rate: 'FRW 9,000' },
    { vehicle: 'Motorcycle >100cc', rate: 'FRW 18,000' },
    { vehicle: 'Car', rate: 'FRW 22,050' },
    { vehicle: 'Bus/Minibus', rate: 'FRW 3,000/seat' },
    { vehicle: 'Truck <7t', rate: 'FRW 15,000/t' },
    { vehicle: 'Truck 7-30t', rate: 'FRW 19,500/t' }
  ];

  const deductibleExpenses = [
    'Business expenses', 'Rent and utilities', 'Salaries', 'Insurance',
    'Professional fees', 'Travel costs', 'Marketing', 'Depreciation'
  ];

  const nonDeductibleExpenses = [
    'Personal expenses', 'Entertainment', 'Fines', 'Political contributions',
    'Unsupported expenses', 'Non-business costs', 'Dividends', 'Capital expenditures'
  ];

  const withholdingTaxTypes = [
    { type: 'WHT 15%', description: 'Services and professional fees', rate: '15%' },
    { type: 'WHT 3%', description: 'Construction services', rate: '3%' },
    { type: 'WHT 5%', description: 'Imports', rate: '5%' },
    { type: 'PAYE', description: 'Employment income', rate: '0-30%' },
    { type: 'Mining Royalty', description: 'Mineral extraction', rate: '0.5-3%' },
    { type: 'Capital Gains', description: 'Asset disposal', rate: '10%' }
  ];

  const declarationMethods = [
    {
      method: 'E-Tax System',
      description: 'Complete online declaration for all tax types',
      icon: <Monitor size={16} />,
      features: ['All tax types', 'Annexure uploads', 'WHT claims', 'Real-time validation'],
      link: 'https://etax.rra.gov.rw'
    },
    {
      method: 'M-Declaration',
      description: 'Mobile phone declaration for selected taxes',
      icon: <Smartphone size={16} />,
      features: ['Flat Tax', 'Lump Sum', 'Motor Vehicle Tax', 'IQP declarations'],
      code: '*800#'
    }
  ];

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Calculator size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Income Tax (PIT & CIT)</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Personal and Corporate Income Tax - Complete guide to registration,
                calculation, declaration, and payment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Overview Section */}
        <section className="content-section">
          <h2>Overview</h2>
          <div className="info-card">
            <div className="info-icon">
              <Info size={16} />
            </div>
            <div className="info-content">
              <p>
                Income Tax in Rwanda includes Personal Income Tax (PIT) and Corporate Income Tax (CIT).
                Three tax regimes available: Real Regime, Flat Tax, and Lump Sum.
              </p>
            </div>
          </div>
        </section>

        {/* Tax Regimes Section */}
        <section className="content-section">
          <h2>Tax Regimes</h2>

          {/* Tax Regime Flow Diagram */}
          <div className="diagram-container">
            <div className="diagram-title">
              <h3>Income Tax Regime Selection Flow</h3>
            </div>
            <div className="flow-diagram">
              <div className="flow-start">
                <div className="flow-node start">
                  <Users size={20} />
                  <span>Business Income</span>
                </div>
              </div>

              <div className="flow-arrow">↓</div>

              <div className="flow-decision">
                <div className="flow-node decision">
                  <Calculator size={20} />
                  <span>Annual Turnover?</span>
                </div>
              </div>

              <div className="flow-branches">
                <div className="flow-branch">
                  <div className="flow-condition">Below FRW 2M</div>
                  <div className="flow-arrow-small">↓</div>
                  <div className="flow-node regime lump-sum">
                    <FileText size={20} />
                    <span>Lump Sum</span>
                    <div className="regime-details">
                      <small>Fixed annual tax<br />Minimal records</small>
                    </div>
                  </div>
                </div>

                <div className="flow-branch">
                  <div className="flow-condition">FRW 2M - 12M</div>
                  <div className="flow-arrow-small">↓</div>
                  <div className="flow-node regime flat-tax">
                    <Calculator size={20} />
                    <span>Flat Tax</span>
                    <div className="regime-details">
                      <small>Fixed amounts<br />Simplified accounting</small>
                    </div>
                  </div>
                </div>

                <div className="flow-branch">
                  <div className="flow-condition">Above FRW 12M</div>
                  <div className="flow-arrow-small">↓</div>
                  <div className="flow-node regime real-regime">
                    <Building size={20} />
                    <span>Real Regime</span>
                    <div className="regime-details">
                      <small>Detailed accounting<br />Deductible expenses</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="regimes-grid">
            <div className="regime-card">
              <h3>Real Regime</h3>
              <p>For businesses with turnover above FRW 12M annually</p>
              <ul>
                <li>Detailed accounting required</li>
                <li>Deductible expenses allowed</li>
                <li>Progressive tax rates</li>
              </ul>
            </div>
            <div className="regime-card">
              <h3>Flat Tax</h3>
              <p>For businesses with turnover FRW 2M - 12M annually</p>
              <ul>
                <li>Fixed tax amounts</li>
                <li>Simplified accounting</li>
                <li>No expense deductions</li>
              </ul>
            </div>
            <div className="regime-card">
              <h3>Lump Sum</h3>
              <p>For small businesses below FRW 2M annually</p>
              <ul>
                <li>Fixed annual tax</li>
                <li>Minimal record keeping</li>
                <li>Simplified compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tax Rates Section */}
        <section className="content-section">
          <h2>Tax Rates</h2>

          {/* PIT Tax Calculation Diagram */}
          <div className="diagram-container">
            <div className="diagram-title">
              <h3>Personal Income Tax (PIT) Calculation Flow</h3>
            </div>
            <div className="tax-calculation-diagram">
              <div className="calculation-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Gross Income</h4>
                  <p>Total employment income</p>
                </div>
              </div>

              <div className="calculation-arrow">-</div>

              <div className="calculation-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Deductible Expenses</h4>
                  <p>Social security, pension contributions</p>
                </div>
              </div>

              <div className="calculation-arrow">=</div>

              <div className="calculation-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Taxable Income</h4>
                  <p>Income subject to tax</p>
                </div>
              </div>

              <div className="calculation-arrow">×</div>

              <div className="calculation-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Progressive Rates</h4>
                  <div className="rate-breakdown">
                    <div className="rate-item">0-720K: 0%</div>
                    <div className="rate-item">720K-1.2M: 10%</div>
                    <div className="rate-item">1.2M-2.4M: 20%</div>
                    <div className="rate-item">Above 2.4M: 30%</div>
                  </div>
                </div>
              </div>

              <div className="calculation-arrow">=</div>

              <div className="calculation-step final">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Tax Due</h4>
                  <p>Total income tax payable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rates-section">
            <h3>Personal Income Tax (PIT)</h3>
            <div className="rates-table">
              {pitRates.map((rate, index) => (
                <div key={index} className="rate-row">
                  <span className="rate-range">{rate.income}</span>
                  <span className="rate-percentage">{rate.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rates-section">
            <h3>Corporate Income Tax (CIT)</h3>
            <div className="rate-highlight">
              <span className="rate-label">Standard Rate:</span>
              <span className="rate-value">{citRate}</span>
            </div>
          </div>

          <div className="rates-section">
            <h3>Flat Tax Rates</h3>
            <div className="rates-table">
              {flatTaxRates.map((rate, index) => (
                <div key={index} className="rate-row">
                  <span className="rate-range">{rate.turnover}</span>
                  <span className="rate-amount">{rate.tax}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rates-section">
            <h3>Motor Vehicle Income Tax</h3>
            <div className="rates-table">
              {motorVehicleRates.map((rate, index) => (
                <div key={index} className="rate-row">
                  <span className="rate-range">{rate.vehicle}</span>
                  <span className="rate-amount">{rate.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deductible Expenses Section */}
        <section className="content-section">
          <h2>Deductible Expenses (Real Regime)</h2>
          <div className="expenses-grid">
            <div className="expense-category">
              <h3>Allowed Deductions</h3>
              <ul>
                {deductibleExpenses.map((expense, index) => (
                  <li key={index}>{expense}</li>
                ))}
              </ul>
            </div>
            <div className="expense-category">
              <h3>Non-Deductible</h3>
              <ul>
                {nonDeductibleExpenses.map((expense, index) => (
                  <li key={index}>{expense}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Withholding Taxes Section */}
        <section className="content-section">
          <h2>Withholding Taxes</h2>
          <div className="withholding-grid">
            {withholdingTaxTypes.map((tax, index) => (
              <div key={index} className="withholding-card">
                <div className="withholding-header">
                  <h3>{tax.type}</h3>
                  <span className="withholding-rate">{tax.rate}</span>
                </div>
                <p>{tax.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Declaration Methods Section */}
        <section className="content-section">
          <h2>Declaration Methods</h2>
          <div className="methods-grid">
            {declarationMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-header">
                  <div className="method-icon">{method.icon}</div>
                  <h3>{method.method}</h3>
                </div>
                <p>{method.description}</p>
                <div className="method-features">
                  {method.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">{feature}</span>
                  ))}
                </div>
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-link"
                  >
                    Access System
                    <ArrowRight size={12} />
                  </a>
                ) : (
                  <div className="method-code">
                    <span>Dial: {method.code}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Important Notice removed per request */}

        {/* Next Steps Section */}
        <section className="content-section">
          <h2>Next Steps</h2>
          <div className="next-steps">
            <div className="steps-grid">
              <Link to="/registration" className="step-card">
                <h3>Register for Taxes</h3>
                <p>Get your TIN and register for appropriate tax types</p>
                <ArrowRight size={16} />
              </Link>
              <Link to="/domestic-taxes" className="step-card">
                <h3>Learn About Domestic Taxes</h3>
                <p>Understand E-Tax system and declaration process</p>
                <ArrowRight size={16} />
              </Link>
              <Link to="/paye" className="step-card">
                <h3>PAYE Information</h3>
                <p>Learn about Pay As You Earn tax</p>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IncomeTax;
