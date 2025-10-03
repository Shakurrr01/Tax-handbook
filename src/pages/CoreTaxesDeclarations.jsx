import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Receipt, DollarSign, Monitor, Smartphone, Calendar, FileText, Gift, Shield, Scale, Car, Globe, Building, Laptop, AlertTriangle } from 'lucide-react';

const CoreTaxesDeclarations = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Core Taxes & Declarations",
      description: "Main tax types and how to declare them in Rwanda",
      mainTopics: [
        {
          title: "Domestic Taxes",
          items: [
            { path: '/domestic-taxes', label: 'Domestic Taxes Hub', icon: <FileText size={16} />, description: 'Comprehensive domestic tax information and guides' },
          ]
        },
        {
          title: "Core Taxes",
          items: [
            { path: '/core-taxes', label: 'Core Taxes Hub', icon: <DollarSign size={16} />, description: 'PIT, CIT, and PAYE information' },
          ]
        },
        {
          title: "Other Taxes",
          items: [
            { path: '/other-taxes', label: 'Other Taxes Hub', icon: <Building size={16} />, description: 'VAT, Excise Duty, and specialized taxes' },
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
              <Receipt size={24} />
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
            This section covers the main tax types in Rwanda and provides detailed guidance on how to declare them. Whether you're dealing with Income Tax, VAT, or other core taxes, you'll find comprehensive information and step-by-step guides here.
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
          <h2 className="content-heading">Declaration Methods</h2>
          <div className="declaration-methods">
            <div className="method-card">
              <div className="method-icon">
                <Monitor size={24} />
              </div>
              <h3>E-Tax Portal</h3>
              <p>Online tax declaration system for comprehensive tax management</p>
              <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="method-link">
                Access E-Tax →
              </a>
            </div>
            <div className="method-card">
              <div className="method-icon">
                <Smartphone size={24} />
              </div>
              <h3>M-Declaration</h3>
              <p>Mobile-based declaration system for quick and easy submissions</p>
              <span className="method-info">Dial *800# on your mobile phone</span>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="content-heading">Quick Navigation</h2>
          <div className="quick-nav-grid">
            <a href="/registration-processes" className="quick-nav-card">
              <div className="quick-nav-icon">
                <User size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Registration & Processes</h3>
                <p>How to register and get started</p>
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

export default CoreTaxesDeclarations;