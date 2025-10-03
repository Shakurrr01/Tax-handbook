import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Shield, FileText, Building, Library, Type, Scale, BarChart3, Search, DollarSign, Gavel, CreditCard, Gift, Mail, Smartphone, RefreshCw, Car, HelpCircle } from 'lucide-react';

const IntroductionBasics = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Introduction & Basics",
      description: "Essential information to get started with Rwanda's tax system",
      mainTopics: [
        {
          title: "Core Introduction Topics",
          items: [
            { path: '/definitions', label: 'Definitions', icon: <Library size={16} />, description: 'Key terms and concepts in Rwanda\'s tax system' },
            { path: '/obligations', label: 'Obligations and Bookkeeping', icon: <BarChart3 size={16} />, description: 'Taxpayer responsibilities and record keeping requirements' },
            { path: '/acronyms', label: 'Acronyms', icon: <Type size={16} />, description: 'Common abbreviations used in tax documentation' },
            { path: '/laws-rulings', label: 'Laws, Ministerial Orders and Rulings', icon: <Scale size={16} />, description: 'Legal framework governing taxation in Rwanda' },
          ]
        },
        {
          title: "RRA Information & Services",
          items: [
            { path: '/rra-info', label: 'General RRA Information', icon: <Building size={16} />, description: 'About the Rwanda Revenue Authority' },
            { path: '/foreword', label: 'Foreword by the Commissioner General', icon: <FileText size={16} />, description: 'Message from the Commissioner General' },
            { path: '/disclaimer', label: 'Disclaimer', icon: <Shield size={16} />, description: 'Important legal disclaimers and limitations' },
          ]
        },
        {
          title: "Tax Administration & Compliance",
          items: [
            { path: '/audits', label: 'Audits', icon: <Search size={16} />, description: 'Understanding tax audits and compliance checks' },
            { path: '/appeals', label: 'Appeals', icon: <Gavel size={16} />, description: 'How to appeal tax decisions' },
            { path: '/debt-management', label: 'Debt Management', icon: <CreditCard size={16} />, description: 'Managing tax debts and payment plans' },
            { path: '/refunds', label: 'Refunds / Tax Credits', icon: <DollarSign size={16} />, description: 'Claiming tax refunds and credits' },
          ]
        },
        {
          title: "Certificates & Special Programs",
          items: [
            { path: '/certificates', label: 'Certificates – VAT, Compliance and TCCs', icon: <FileText size={16} />, description: 'Tax certificates and compliance documentation' },
            { path: '/vds', label: 'Voluntary Disclosure Scheme (VDS)', icon: <Shield size={16} />, description: 'Voluntary disclosure of tax obligations' },
            { path: '/vat-reward', label: 'VAT Reward', icon: <Gift size={16} />, description: 'Rewards for VAT compliance' },
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
              <BookOpen size={24} />
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
            Welcome to the Introduction & Basics section of the Rwanda Tax Handbook. This section provides essential information to help you understand Rwanda's tax system, your obligations as a taxpayer, and the services available to you.
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
          <h2 className="content-heading">Quick Navigation</h2>
          <div className="quick-nav-grid">
            <a href="/core-taxes-declarations" className="quick-nav-card">
              <div className="quick-nav-icon">
                <DollarSign size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Core Taxes & Declarations</h3>
                <p>Income Tax, VAT, and main tax types</p>
              </div>
            </a>
            <a href="/registration-processes" className="quick-nav-card">
              <div className="quick-nav-icon">
                <User size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Registration & Processes</h3>
                <p>How to register and pay taxes</p>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntroductionBasics;