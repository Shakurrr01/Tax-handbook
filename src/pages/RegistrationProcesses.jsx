import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ClipboardList, User, CreditCard, FileText, Search, Gavel, DollarSign, X, Mail, Smartphone, RefreshCw, Car, Building, Laptop, BookOpen } from 'lucide-react';

const RegistrationProcesses = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Registration & Processes",
      description: "How to register for taxes and manage your tax processes",
      mainTopics: [
        {
          title: "Registration",
          items: [
            { path: '/registration', label: 'Registration Overview', icon: <ClipboardList size={16} />, description: 'General overview of tax registration' },
            { path: '/registration-explanation', label: 'Explanation of Registration', icon: <BookOpen size={16} />, description: 'Detailed explanation of registration requirements' },
            { path: '/registration-guide', label: 'Step-by-Step Registration', icon: <ClipboardList size={16} />, description: 'Complete step-by-step registration guide' },
            { path: '/deregistration', label: 'Deregistration', icon: <X size={16} />, description: 'How to deregister from tax obligations' },
          ]
        },
        {
          title: "Payment & Financial Management",
          items: [
            { path: '/paying-taxes', label: 'Paying Taxes', icon: <CreditCard size={16} />, description: 'Methods and procedures for paying taxes' },
            { path: '/refunds', label: 'Refunds / Tax Credits', icon: <DollarSign size={16} />, description: 'How to claim tax refunds and credits' },
            { path: '/debt-management', label: 'Debt Management', icon: <CreditCard size={16} />, description: 'Managing tax debts and payment plans' },
          ]
        },
        {
          title: "Compliance & Administration",
          items: [
            { path: '/audits', label: 'Audits', icon: <Search size={16} />, description: 'Understanding tax audits and compliance checks' },
            { path: '/appeals', label: 'Appeals', icon: <Gavel size={16} />, description: 'How to appeal tax decisions' },
            { path: '/certificates', label: 'Certificates – VAT, Compliance and TCCs', icon: <FileText size={16} />, description: 'Tax certificates and compliance documentation' },
          ]
        },
        {
          title: "Communication & Support",
          items: [
            { path: '/communicate-rra', label: 'Communicate to RRA in Writing', icon: <Mail size={16} />, description: 'How to contact RRA for assistance' },
            { path: '/online-requests', label: 'Online Requests', icon: <Smartphone size={16} />, description: 'Submit requests through digital channels' },
            { path: '/exchange-info', label: 'Exchange of Information', icon: <RefreshCw size={16} />, description: 'International tax information exchange' },
            { path: '/motor-vehicle', label: 'Motor Vehicle', icon: <Car size={16} />, description: 'Motor vehicle tax information' },
          ]
        },
        {
          title: "Special Programs",
          items: [
            { path: '/vds', label: 'Voluntary Disclosure Scheme (VDS)', icon: <FileText size={16} />, description: 'Voluntary disclosure of tax obligations' },
            { path: '/vat-reward', label: 'VAT Reward', icon: <Gift size={16} />, description: 'Rewards for VAT compliance' },
          ]
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <ClipboardList size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{currentContent.title}</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                {currentContent.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="landing-page-intro">
          <p className="content-paragraph">
            This section covers all aspects of tax registration and process management in Rwanda. From initial registration to ongoing compliance, payment methods, and special programs, you'll find everything you need to manage your tax obligations effectively.
          </p>
        </div>

        {currentContent.mainTopics.map((topic, topicIndex) => (
          <section key={topicIndex} className="content-section">
            <h2 className="content-heading">{topic.title}</h2>
            <div className="topic-grid">
              {topic.items.map((item, itemIndex) => (
                <div key={itemIndex} className="topic-card">
                  <div className="topic-card-header">
                    <div className="topic-card-icon">
                      {item.icon}
                    </div>
                    <h3 className="topic-card-title">{item.label}</h3>
                  </div>
                  <p className="topic-card-description">{item.description}</p>
                  <a href={item.path} className="topic-card-link">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="content-section">
          <h2 className="content-heading">Key RRA Systems</h2>
          <div className="systems-grid">
            <div className="system-card">
              <div className="system-icon">
                <Laptop size={24} />
              </div>
              <h3>E-Tax Portal</h3>
              <p>Online tax management system for declarations and payments</p>
              <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="system-link">
                Access E-Tax →
              </a>
            </div>
            <div className="system-card">
              <div className="system-icon">
                <Building size={24} />
              </div>
              <h3>LGT System</h3>
              <p>Local Government Tax system for decentralized entities</p>
              <a href="https://localgov.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="system-link">
                Access LGT →
              </a>
            </div>
            <div className="system-card">
              <div className="system-icon">
                <User size={24} />
              </div>
              <h3>MyRRA</h3>
              <p>Personal tax portal for individual taxpayers</p>
              <a href="/myrra" className="system-link">
                Access MyRRA →
              </a>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="content-heading">Quick Navigation</h2>
          <div className="quick-nav-grid">
            <a href="/core-taxes-declarations" className="quick-nav-card">
              <div className="quick-nav-icon">
                <Receipt size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Core Taxes & Declarations</h3>
                <p>Main tax types and declarations</p>
              </div>
            </a>
            <a href="/other-taxes-entities" className="quick-nav-card">
              <div className="quick-nav-icon">
                <Building size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Other Taxes & Entities</h3>
                <p>Specialized taxes and local government</p>
              </div>
            </a>
            <a href="/customs" className="quick-nav-card">
              <div className="quick-nav-icon">
                <Globe size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Customs</h3>
                <p>Import and export procedures</p>
              </div>
            </a>
            <a href="/introduction-basics" className="quick-nav-card">
              <div className="quick-nav-icon">
                <BookOpen size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Introduction & Basics</h3>
                <p>Essential tax information</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegistrationProcesses;