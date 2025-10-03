import { Shield, CheckCircle, Clock, AlertTriangle, FileText, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const VDS = () => {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>{t('vds.title')}</h1>
                <p className="page-subtitle">
                    {t('vds.subtitle')}
                </p>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>{t('vds.whatIsVDS.title')}</h2>
                    <div className="info-card">
                        <div className="info-icon">
                            <Shield size={24} />
                        </div>
                        <div className="info-content">
                            <p>
                                {t('vds.whatIsVDS.description')}
                            </p>
                            <ul className="benefits-list">
                                {t('vds.whatIsVDS.benefits').map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>{t('vds.basis.title')}</h2>
                    <div className="legal-basis">
                        <div className="legal-card">
                            <div className="legal-icon">
                                <FileText size={20} />
                            </div>
                            <div className="legal-content">
                                <h3>{t('vds.basis.article94.title')}</h3>
                                <p>
                                    {t('vds.basis.article94.description')}
                                </p>
                            </div>
                        </div>
                        <div className="legal-card">
                            <div className="legal-icon">
                                <FileText size={20} />
                            </div>
                            <div className="legal-content">
                                <h3>{t('vds.basis.ministerialOrder.title')}</h3>
                                <p>
                                    {t('vds.basis.ministerialOrder.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>{t('vds.eligibility.title')}</h2>
                    <div className="eligibility-grid">
                        {t('vds.eligibility.criteria').map((criterion, index) => (
                            <div key={index} className="eligibility-card">
                                <CheckCircle size={20} />
                                <span>{criterion}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="content-section">
                    <h2>{t('vds.application.title')}</h2>
                    <div className="application-info">
                        <div className="application-card">
                            <div className="application-icon">
                                <Globe size={24} />
                            </div>
                            <div className="application-content">
                                <h3>{t('vds.application.onlineTitle')}</h3>
                                <p>
                                    {t('vds.application.description')}
                                </p>
                                <div className="website-link">
                                    <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer">
                                        {t('vds.application.website')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="notice-card warning">
                        <div className="notice-icon">
                            <AlertTriangle size={24} />
                        </div>
                        <div className="notice-content">
                            <h3>{t('vds.notices.important.title')}</h3>
                            <p>
                                {t('vds.notices.important.description')}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="notice-card info">
                        <div className="notice-icon">
                            <Clock size={24} />
                        </div>
                        <div className="notice-content">
                            <h3>{t('vds.notices.payment.title')}</h3>
                            <p>
                                {t('vds.notices.payment.description')}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VDS;