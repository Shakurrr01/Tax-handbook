import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, BookOpen, FileSpreadsheet, User, Car, Shield, AlertTriangle, ClipboardList, Laptop, Building, Search } from 'lucide-react';

const CustomsHub = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Customs",
      description: "Import and export procedures, duties, and customs management",
      mainTopics: [
        {
          title: "Customs Overview & Duties",
          items: [
            { path: '/customs-explanation', label: 'Explanation of Customs', icon: <BookOpen size={16} />, description: 'Understanding customs procedures and requirements' },
            { path: '/customs-duties', label: 'Customs Duties', icon: <FileSpreadsheet size={16} />, description: 'Detailed breakdown of customs duties and fees' },
            { path: '/customs-penalties', label: 'Customs Penalties and Fines', icon: <AlertTriangle size={16} />, description: 'Penalties for customs non-compliance' },
          ]
        },
        {
          title: "Clearing Agents & Border Posts",
          items: [
            { path: '/clearing-agents', label: 'Clearing Agents', icon: <User size={16} />, description: 'Licensed clearing agents for import/export' },
            { path: '/border-posts-dry-ports', label: 'Border Posts and Dry Ports', icon: <Globe size={16} />, description: 'Locations and procedures at border posts' },
            { path: '/declaring-imports-exports', label: 'Declaring Imports and Exports', icon: <ClipboardList size={16} />, description: 'Step-by-step declaration process' },
          ]
        },
        {
          title: "Facilitation & Special Procedures",
          items: [
            { path: '/facilitation-schemes', label: 'Facilitation Schemes', icon: <Shield size={16} />, description: 'Special schemes for faster customs clearance' },
            { path: '/importing-motor-vehicles', label: 'Importing Motor Vehicles', icon: <Car size={16} />, description: 'Special procedures for vehicle imports' },
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
              <Globe size={24} />
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
            This section covers all aspects of customs procedures in Rwanda, including import and export processes, duties and fees, clearing agents, border posts, and special facilitation schemes. Whether you're importing goods for business or personal use, you'll find comprehensive guidance here.
          </p>
        </div>

        <section className="content-section">
          <h2 className="content-heading">Quick Links</h2>
          <div className="quick-links-grid">
            {currentContent.mainTopics.flatMap(topic => topic.items).map((item, index) => (
              <a key={index} href={item.path} className="quick-link-card">
                <div className="quick-link-icon">
                  {item.icon}
                </div>
                <div className="quick-link-content">
                  <h3 className="quick-link-title">{item.label}</h3>
                  <p className="quick-link-description">{item.description}</p>
                </div>
                <div className="quick-link-arrow">
                  →
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="content-heading">Key Customs Systems</h2>
          <div className="customs-systems">
            <div className="system-card">
              <div className="system-icon">
                <Laptop size={24} />
              </div>
              <h3>Rwanda Electronic Single Window (ReSW)</h3>
              <p>Online portal for all trade-related information and customs declarations</p>
              <div className="system-features">
                <h4>Features:</h4>
                <ul>
                  <li>Single submission point for all government institutions</li>
                  <li>Real-time tracking of declarations</li>
                  <li>Transparent approval processes</li>
                  <li>Reduced compliance burden</li>
                </ul>
              </div>
            </div>
            <div className="system-card">
              <div className="system-icon">
                <Building size={24} />
              </div>
              <h3>Clearing Agents</h3>
              <p>Licensed professionals who handle customs procedures on your behalf</p>
              <div className="system-features">
                <h4>Services:</h4>
                <ul>
                  <li>Document preparation and submission</li>
                  <li>HS Code classification</li>
                  <li>Duty calculation and payment</li>
                  <li>Release order facilitation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="content-heading">Common Customs Duties</h2>
          <div className="duties-overview">
            <div className="duty-category">
              <h3>Import Duties</h3>
              <ul>
                <li>Import Duty (0-35% based on CET)</li>
                <li>Value Added Tax (18%)</li>
                <li>Excise Duty (varies by product)</li>
                <li>Withholding Tax (5%)</li>
                <li>Infrastructure Development Levy (1.5%)</li>
                <li>African Union Levy (0.2%)</li>
              </ul>
            </div>
            <div className="duty-category">
              <h3>Additional Fees</h3>
              <ul>
                <li>Computer Processing Fee (FRW 3,000)</li>
                <li>Quality Inspection Fees (0.2% of FOB)</li>
                <li>Motor Vehicle Registration Fees</li>
                <li>Road Toll (for foreign trucks)</li>
                <li>Fuel Levy (15% of CIF)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="content-heading">Related Sections</h2>
          <div className="quick-links-grid">
            <a href="/core-taxes-declarations" className="quick-link-card">
              <div className="quick-link-icon">
                <Receipt size={20} />
              </div>
              <div className="quick-link-content">
                <h3 className="quick-link-title">Core Taxes & Declarations</h3>
                <p className="quick-link-description">Main tax types and declarations</p>
              </div>
              <div className="quick-link-arrow">
                →
              </div>
            </a>
            <a href="/registration-processes" className="quick-link-card">
              <div className="quick-link-icon">
                <User size={20} />
              </div>
              <div className="quick-link-content">
                <h3 className="quick-link-title">Registration & Processes</h3>
                <p className="quick-link-description">How to register and get started</p>
              </div>
              <div className="quick-link-arrow">
                →
              </div>
            </a>
            <a href="/other-taxes-entities" className="quick-link-card">
              <div className="quick-link-icon">
                <Building size={20} />
              </div>
              <div className="quick-link-content">
                <h3 className="quick-link-title">Other Taxes & Entities</h3>
                <p className="quick-link-description">Specialized taxes and local government</p>
              </div>
              <div className="quick-link-arrow">
                →
              </div>
            </a>
            <a href="/introduction-basics" className="quick-link-card">
              <div className="quick-link-icon">
                <BookOpen size={20} />
              </div>
              <div className="quick-link-content">
                <h3 className="quick-link-title">Introduction & Basics</h3>
                <p className="quick-link-description">Essential tax information</p>
              </div>
              <div className="quick-link-arrow">
                →
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomsHub;