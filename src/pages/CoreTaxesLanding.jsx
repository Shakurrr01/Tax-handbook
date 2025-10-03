import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DollarSign, Users, ArrowRight, FileText, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoreTaxesLanding = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "Core Taxes",
            description: "Essential tax types including Personal Income Tax, Corporate Income Tax, and Pay As You Earn",
            sections: [
                {
                    path: '/pit-cit',
                    label: 'PIT & CIT',
                    icon: <DollarSign size={20} />,
                    description: 'Personal Income Tax and Corporate Income Tax declarations and explanations'
                },
                {
                    path: '/paye',
                    label: 'Pay As You Earn (PAYE)',
                    icon: <Users size={20} />,
                    description: 'PAYE system for employee tax deductions and declarations'
                }
            ]
        },
        fr: {
            title: "Impôts Principaux",
            description: "Types d'impôts essentiels incluant l'Impôt sur le Revenu Personnel, l'Impôt sur le Revenu des Sociétés, et le Prélèvement à la Source",
            sections: [
                {
                    path: '/pit-cit',
                    label: 'IRP & IRS',
                    icon: <DollarSign size={20} />,
                    description: 'Déclarations et explications de l\'Impôt sur le Revenu Personnel et des Sociétés'
                },
                {
                    path: '/paye',
                    label: 'Prélèvement à la Source (PAYE)',
                    icon: <Users size={20} />,
                    description: 'Système PAYE pour les déductions et déclarations d\'impôts des employés'
                }
            ]
        },
        rw: {
            title: "Imisoro Nkomeye",
            description: "Ubwoko bw'imisoro nkomeye harimo Umusoro w'ingengo y'umuntu, Umusoro w'ingengo y'ubucuruzi, n'Umusoro wakurwa mu gihe",
            sections: [
                {
                    path: '/pit-cit',
                    label: 'IRP & IRS',
                    icon: <DollarSign size={20} />,
                    description: 'Gusobanura n\'ibyemezo by\'Umusoro w\'ingengo y\'umuntu n\'ubucuruzi'
                },
                {
                    path: '/paye',
                    label: 'Umusoro wakurwa mu gihe (PAYE)',
                    icon: <Users size={20} />,
                    description: 'Sisiteme ya PAYE y\'imisoro y\'abakozi n\'ibyemezo'
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
                            <DollarSign size={24} />
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
                        Core taxes form the foundation of Rwanda's tax system. This section covers Personal Income Tax (PIT), Corporate Income Tax (CIT), and the Pay As You Earn (PAYE) system, providing comprehensive guidance for both individuals and businesses.
                    </p>
                </div>

                <section className="content-section">
                    <h2 className="content-heading">Quick Links</h2>
                    <div className="quick-links-grid">
                        {currentContent.sections.map((section, index) => (
                            <Link key={index} to={section.path} className="quick-link-card">
                                <div className="quick-link-icon">
                                    {section.icon}
                                </div>
                                <div className="quick-link-content">
                                    <h3 className="quick-link-title">{section.label}</h3>
                                    <p className="quick-link-description">{section.description}</p>
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
                    <div className="quick-links-grid">
                        <Link to="/domestic-taxes" className="quick-link-card">
                            <div className="quick-link-icon">
                                <FileText size={20} />
                            </div>
                            <div className="quick-link-content">
                                <h3 className="quick-link-title">Domestic Taxes</h3>
                                <p className="quick-link-description">Comprehensive domestic tax information and guides</p>
                            </div>
                            <div className="quick-link-arrow">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                        <Link to="/other-taxes" className="quick-link-card">
                            <div className="quick-link-icon">
                                <Building size={20} />
                            </div>
                            <div className="quick-link-content">
                                <h3 className="quick-link-title">Other Taxes</h3>
                                <p className="quick-link-description">VAT, Excise Duty, and specialized taxes</p>
                            </div>
                            <div className="quick-link-arrow">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CoreTaxesLanding;