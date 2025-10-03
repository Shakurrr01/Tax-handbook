import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, FileText, Phone, Globe, Clock, Users, Shield, TrendingUp, Award, HelpCircle, Smartphone, Monitor, Search, Building, Info, Megaphone, Bell, LogIn } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const Home = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  const quickLinks = [
    {
      title: t('home.quickLinks.registration.title'),
      description: t('home.quickLinks.registration.description'),
      icon: <FileText size={16} />,
      path: '/registration',
      color: 'bg-blue-500'
    },
    {
      title: t('home.quickLinks.incomeTax.title'),
      description: t('home.quickLinks.incomeTax.description'),
      icon: <Calculator size={16} />,
      path: '/income-tax',
      color: 'bg-green-500'
    },
    {
      title: t('home.quickLinks.vat.title'),
      description: t('home.quickLinks.vat.description'),
      icon: <BookOpen size={16} />,
      path: '/vat',
      color: 'bg-purple-500'
    },
    {
      title: t('home.quickLinks.paye.title'),
      description: t('home.quickLinks.paye.description'),
      icon: <Users size={16} />,
      path: '/paye',
      color: 'bg-orange-500'
    },
    {
      title: t('home.quickLinks.customs.title'),
      description: t('home.quickLinks.customs.description'),
      icon: <Globe size={16} />,
      path: '/customs',
      color: 'bg-red-500'
    },
    {
      title: t('home.quickLinks.payingTaxes.title'),
      description: t('home.quickLinks.payingTaxes.description'),
      icon: <Clock size={16} />,
      path: '/paying-taxes',
      color: 'bg-teal-500'
    },

  ];

  const keyFeatures = [
    {
      icon: <Smartphone size={16} />,
      title: t('home.keyFeatures.mDeclaration.title'),
      description: t('home.keyFeatures.mDeclaration.description'),
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: <Monitor size={16} />,
      title: t('home.keyFeatures.eTax.title'),
      description: t('home.keyFeatures.eTax.description'),
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: <Search size={16} />,
      title: t('home.keyFeatures.search.title'),
      description: t('home.keyFeatures.search.description'),
      color: 'bg-purple-100 text-purple-800'
    },
    {
      icon: <Phone size={16} />,
      title: t('home.keyFeatures.support.title'),
      description: t('home.keyFeatures.support.description'),
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  const digitalServices = [
    {
      name: t('home.services.eTax.name'),
      url: 'https://etax.rra.gov.rw',
      description: t('home.services.eTax.description'),
      accessText: t('home.services.eTax.access')
    },
    {
      name: t('home.services.mDeclaration.name'),
      code: '*800#',
      description: t('home.services.mDeclaration.description'),
      dialText: t('home.services.mDeclaration.dial')
    },
    {
      name: t('home.services.lgt.name'),
      url: 'https://localgov.rra.gov.rw',
      description: t('home.services.lgt.description'),
      accessText: t('home.services.lgt.access')
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Award size={12} />
            <span>{t('home.hero.badge')}</span>
          </div>
          <h1 className="hero-title">
            {t('home.hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('home.hero.subtitle')}
          </p>
          <div className="hero-actions">
            <Link to="/introduction" className="btn btn-primary">
              {t('home.hero.getStarted')}
              <ArrowRight size={14} />
            </Link>
            <a href="tel:3004" className="btn btn-secondary">
              <Phone size={14} />
              {t('home.hero.callCenter')}
            </a>
            <Link to="/rra-info" className="btn btn-outline">
              <HelpCircle size={14} />
              {t('home.hero.aboutRRA')}
            </Link>
          </div>
        </div>
        <div className="hero-stats">

          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">{t('home.stats.taxTypes')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2025</div>
            <div className="stat-label">{t('home.stats.updated')}</div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <h2 className="section-title">{t('home.quickAccess.title')}</h2>
        <div className="quick-links-grid">
          {quickLinks.map((link, index) => (
            <Link key={index} to={link.path} className="quick-link-card">
              <div className={`quick-link-icon ${link.color}`}>
                {link.icon}
              </div>
              <div className="quick-link-content">
                <h3 className="quick-link-title">{link.title}</h3>
                <p className="quick-link-description">{link.description}</p>
              </div>
              <ArrowRight size={14} className="quick-link-arrow" />
            </Link>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <h2 className="section-title">{t('home.features.title')}</h2>
        <div className="features-grid">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Services */}
      <section className="digital-services-section">
        <h2 className="section-title">{t('home.digitalServices.title')}</h2>
        <div className="digital-services-grid">
          {digitalServices.map((service, index) => (
            <div key={index} className="digital-service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              {service.url ? (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  {service.accessText}
                  <ArrowRight size={12} />
                </a>
              ) : (
                <div className="service-code">
                  <span>{service.dialText}: {service.code}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Important Notice removed per request */}

      {/* Contact Information Section */}
      <section className="contact-section">
        <h2>{t('home.contact.title')}</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon"><Phone size={16} /></div>
            <h3>{t('home.contact.callCenter.title')}</h3>
            <p>{t('home.contact.callCenter.tollFree')}</p>
            <p>{t('home.contact.callCenter.available')}</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon"><Globe size={16} /></div>
            <h3>{t('home.contact.website.title')}</h3>
            <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer">
              www.rra.gov.rw
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon"><Clock size={16} /></div>
            <h3>{t('home.contact.officeHours.title')}</h3>
            <p>{t('home.contact.officeHours.days')}</p>
            <p>{t('home.contact.officeHours.time')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
