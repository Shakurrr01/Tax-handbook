import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, AlertTriangle, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DomesticTaxesLanding = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "Domestic Taxes",
            description: "Comprehensive guide to domestic tax obligations and declarations in Rwanda",
            quickLinks: [
                {
                    path: '/domestic-taxes-explanation',
                    label: 'Domestic Taxes Explanation',
                    icon: <FileText size={20} />,
                    description: 'Understanding domestic tax system and obligations'
                },
                {
                    path: '/domestic-taxes-guide',
                    label: 'Domestic Taxes Guide',
                    icon: <BookOpen size={20} />,
                    description: 'Step-by-step guide for domestic tax declarations'
                },
                {
                    path: '/domestic-taxes-penalties',
                    label: 'Domestic Taxes Penalties',
                    icon: <AlertTriangle size={20} />,
                    description: 'Penalties and fines for domestic tax non-compliance'
                }
            ]
        },
        fr: {
            title: "Impôts Domestiques",
            description: "Guide complet des obligations et déclarations d'impôts domestiques au Rwanda",
            quickLinks: [
                {
                    path: '/domestic-taxes-explanation',
                    label: 'Explication des Impôts Domestiques',
                    icon: <FileText size={20} />,
                    description: 'Comprendre le système fiscal domestique et les obligations'
                },
                {
                    path: '/domestic-taxes-guide',
                    label: 'Guide des Impôts Domestiques',
                    icon: <BookOpen size={20} />,
                    description: 'Guide étape par étape pour les déclarations d\'impôts domestiques'
                },
                {
                    path: '/domestic-taxes-penalties',
                    label: 'Pénalités des Impôts Domestiques',
                    icon: <AlertTriangle size={20} />,
                    description: 'Pénalités et amendes pour non-conformité fiscale domestique'
                }
            ]
        },
        rw: {
            title: "Imisoro yo Mu Rwanda",
            description: "Ubuyobozi buzuye bw'ibyemezo n'ibyemezo by'imisoro yo mu Rwanda",
            quickLinks: [
                {
                    path: '/domestic-taxes-explanation',
                    label: 'Gusobanura Imisoro yo Mu Rwanda',
                    icon: <FileText size={20} />,
                    description: 'Gusobanura sisiteme y\'imisoro yo mu Rwanda n\'ibyemezo'
                },
                {
                    path: '/domestic-taxes-guide',
                    label: 'Ubuyobozi bw\'Imisoro yo Mu Rwanda',
                    icon: <BookOpen size={20} />,
                    description: 'Ubuyobozi bukurikirana amabwiriza y\'imisoro yo mu Rwanda'
                },
                {
                    path: '/domestic-taxes-penalties',
                    label: 'Ibihano by\'Imisoro yo Mu Rwanda',
                    icon: <AlertTriangle size={20} />,
                    description: 'Ibihano n\'amande kubera kutakurikiza amabwiriza y\'imisoro yo mu Rwanda'
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
                            <FileText size={24} />
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
                        Access comprehensive information about domestic taxes in Rwanda. This section provides detailed explanations, step-by-step guides, and information about penalties to help you understand and comply with domestic tax obligations.
                    </p>
                </div>

                <section className="content-section">
                    <h2 className="content-heading">Quick Links</h2>
                    <div className="quick-links-grid">
                        {currentContent.quickLinks.map((link, index) => (
                            <Link key={index} to={link.path} className="quick-link-card">
                                <div className="quick-link-icon">
                                    {link.icon}
                                </div>
                                <div className="quick-link-content">
                                    <h3 className="quick-link-title">{link.label}</h3>
                                    <p className="quick-link-description">{link.description}</p>
                                </div>
                                <div className="quick-link-arrow">
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Related Sections</h2>
                    <div className="related-sections">
                        <Link to="/core-taxes" className="related-section-card">
                            <h3>Core Taxes</h3>
                            <p>Income Tax, PAYE, and other core tax types</p>
                        </Link>
                        <Link to="/other-taxes" className="related-section-card">
                            <h3>Other Taxes</h3>
                            <p>VAT, Excise Duty, and specialized taxes</p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DomesticTaxesLanding;