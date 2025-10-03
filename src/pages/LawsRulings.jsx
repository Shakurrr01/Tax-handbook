import { ExternalLink, FileText, Mail, Scale } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const LawsRulings = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Scale size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{t('lawsRulings.title')}</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                {t('lawsRulings.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Where Laws Are Published Section */}
        <section className="content-section">
          <h2>{t('lawsRulings.wherePublished.title')}</h2>
          <div className="info-card">
            <div className="info-icon">
              <FileText size={24} />
            </div>
            <div className="info-content">
              <p>
                {t('lawsRulings.wherePublished.description')}
              </p>
              <div className="link-container">
                <a
                  href="https://www.rra.gov.rw/en/laws-policies-and-rulings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  <ExternalLink size={16} />
                  https://www.rra.gov.rw/en/laws-policies-and-rulings
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How to Request Rulings Section */}
        <section className="content-section">
          <h2>{t('lawsRulings.howToRequest.title')}</h2>
          <div className="info-card">
            <div className="info-icon">
              <Mail size={24} />
            </div>
            <div className="info-content">
              <p>
                {t('lawsRulings.howToRequest.description')}
              </p>
            </div>
          </div>

          <div className="process-card">
            <h3>{t('lawsRulings.process.title')}</h3>
            <p>
              {t('lawsRulings.process.description')}
            </p>
            <ul className="requirements-list">
              <li>{t('lawsRulings.process.requirement1')}</li>
              <li>{t('lawsRulings.process.requirement2')}</li>
              <li>{t('lawsRulings.process.requirement3')}</li>
            </ul>
            <div className="notice-box">
              <p>
                <strong>{t('lawsRulings.process.note')}</strong> {t('lawsRulings.process.noteText')}
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice Section */}
        <section className="content-section">
          <div className="notice-card info">
            <div className="notice-icon">
              <FileText size={24} />
            </div>
            <div className="notice-content">
              <h3>{t('lawsRulings.stayUpdated.title')}</h3>
              <p>
                {t('lawsRulings.stayUpdated.description')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LawsRulings;
