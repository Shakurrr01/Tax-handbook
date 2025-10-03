import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Receipt, Monitor, AlertTriangle, DollarSign, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const OtherTaxesLanding = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "Other Taxes",
            description: "Specialized taxes including VAT, EIS/EBMs, Excise Duty, and other tax types",
            consolidatedTaxes: [
                {
                    path: '/vat-unified',
                    label: 'VAT',
                    icon: <Receipt size={20} />,
                    description: 'Value Added Tax - explanation and declaration combined'
                },
                {
                    path: '/eis-unified',
                    label: 'EIS / EBMs',
                    icon: <Monitor size={20} />,
                    description: 'Electronic Invoicing System - explanation and penalties combined'
                },
                {
                    path: '/excise-unified',
                    label: 'Excise Duty',
                    icon: <DollarSign size={20} />,
                    description: 'Excise Duty - explanation and declaration combined'
                }
            ],
            otherTaxSubmenu: {
                path: '/other-tax-submenu',
                label: 'Other Tax Submenu',
                description: 'Additional specialized taxes and levies'
            }
        },
        fr: {
            title: "Autres Impôts",
            description: "Impôts spécialisés incluant la TVA, EIS/EBMs, Droits d'Accise, et autres types d'impôts",
            consolidatedTaxes: [
                {
                    path: '/vat-unified',
                    label: 'TVA',
                    icon: <Receipt size={20} />,
                    description: 'Taxe sur la Valeur Ajoutée - explication et déclaration combinées'
                },
                {
                    path: '/eis-unified',
                    label: 'EIS / EBMs',
                    icon: <Monitor size={20} />,
                    description: 'Système de Facturation Électronique - explication et pénalités combinées'
                },
                {
                    path: '/excise-unified',
                    label: 'Droits d\'Accise',
                    icon: <DollarSign size={20} />,
                    description: 'Droits d\'Accise - explication et déclaration combinées'
                }
            ],
            otherTaxSubmenu: {
                path: '/other-tax-submenu',
                label: 'Sous-menu Autres Impôts',
                description: 'Impôts spécialisés et prélèvements supplémentaires'
            }
        },
        rw: {
            title: "Imisoro Yandi",
            description: "Imisoro yihariye harimo TVA, EIS/EBMs, Umusoro w'Ubucuruzi, n'ubwoko bw'imisoro yandi",
            consolidatedTaxes: [
                {
                    path: '/vat-unified',
                    label: 'TVA',
                    icon: <Receipt size={20} />,
                    description: 'Umusoro w\'Agaciro kwongewemo - gusobanura n\'ibyemezo byombi'
                },
                {
                    path: '/eis-unified',
                    label: 'EIS / EBMs',
                    icon: <Monitor size={20} />,
                    description: 'Sisiteme y\'Icyemezo cya Elektroniki - gusobanura n\'ibihano byombi'
                },
                {
                    path: '/excise-unified',
                    label: 'Umusoro w\'Ubucuruzi',
                    icon: <DollarSign size={20} />,
                    description: 'Umusoro w\'Ubucuruzi - gusobanura n\'ibyemezo byombi'
                }
            ],
            otherTaxSubmenu: {
                path: '/other-tax-submenu',
                label: 'Gahunda y\'Imisoro Yandi',
                description: 'Imisoro yihariye n\'imisoro yongewemo'
            }
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
                        This section covers specialized taxes and levies that complement the core tax system. These include Value Added Tax (VAT), Electronic Invoicing System (EIS/EBMs), Excise Duty, and various other taxes that apply to specific activities or sectors.
                    </p>
                </div>

                <section className="content-section">
                    <h2 className="content-heading">Quick Links</h2>
                    <div className="quick-links-grid">
                        {currentContent.consolidatedTaxes.map((tax, index) => (
                            <Link key={index} to={tax.path} className="quick-link-card">
                                <div className="quick-link-icon">
                                    {tax.icon}
                                </div>
                                <div className="quick-link-content">
                                    <h3 className="quick-link-title">{tax.label}</h3>
                                    <p className="quick-link-description">{tax.description}</p>
                                </div>
                                <div className="quick-link-arrow">
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Additional Tax Types</h2>
                    <div className="quick-links-grid">
                        <Link to={currentContent.otherTaxSubmenu.path} className="quick-link-card">
                            <div className="quick-link-icon">
                                <AlertTriangle size={20} />
                            </div>
                            <div className="quick-link-content">
                                <h3 className="quick-link-title">{currentContent.otherTaxSubmenu.label}</h3>
                                <p className="quick-link-description">{currentContent.otherTaxSubmenu.description}</p>
                            </div>
                            <div className="quick-link-arrow">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
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
                        <Link to="/core-taxes" className="quick-link-card">
                            <div className="quick-link-icon">
                                <FileText size={20} />
                            </div>
                            <div className="quick-link-content">
                                <h3 className="quick-link-title">Core Taxes</h3>
                                <p className="quick-link-description">PIT, CIT, and PAYE information</p>
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

export default OtherTaxesLanding;