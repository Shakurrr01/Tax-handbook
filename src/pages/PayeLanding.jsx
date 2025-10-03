import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PayeLanding = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "Pay As You Earn (PAYE)",
            description: "PAYE system for employee tax deductions and declarations",
            quickLinks: [
                {
                    path: '/paye-explanation',
                    label: 'PAYE Explanation',
                    icon: <Users size={20} />,
                    description: 'Understanding the Pay As You Earn tax system'
                },
                {
                    path: '/paye-declaration',
                    label: 'PAYE Declaration',
                    icon: <FileText size={20} />,
                    description: 'How to declare PAYE for employees'
                }
            ]
        },
        fr: {
            title: "Prélèvement à la Source (PAYE)",
            description: "Système PAYE pour les déductions et déclarations d'impôts des employés",
            quickLinks: [
                {
                    path: '/paye-explanation',
                    label: 'Explication PAYE',
                    icon: <Users size={20} />,
                    description: 'Comprendre le système de prélèvement à la source'
                },
                {
                    path: '/paye-declaration',
                    label: 'Déclaration PAYE',
                    icon: <FileText size={20} />,
                    description: 'Comment déclarer PAYE pour les employés'
                }
            ]
        },
        rw: {
            title: "Umusoro wakurwa mu gihe (PAYE)",
            description: "Sisiteme ya PAYE y'imisoro y'abakozi n'ibyemezo",
            quickLinks: [
                {
                    path: '/paye-explanation',
                    label: 'Gusobanura PAYE',
                    icon: <Users size={20} />,
                    description: 'Gusobanura sisiteme y\'umusoro wakurwa mu gihe'
                },
                {
                    path: '/paye-declaration',
                    label: 'Ibyemezo bya PAYE',
                    icon: <FileText size={20} />,
                    description: 'Uburyo bwo kwemeza PAYE y\'abakozi'
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
                            <Users size={24} />
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
                        The Pay As You Earn (PAYE) system is designed to collect income tax from employees as they earn their income. This system ensures regular tax collection and reduces the burden on employees to make large tax payments at the end of the year.
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
                    <h2 className="content-heading">Key Features of PAYE</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Automatic Deduction</h3>
                            <p>Tax is automatically deducted from employee salaries each month</p>
                        </div>
                        <div className="feature-card">
                            <h3>Employer Responsibility</h3>
                            <p>Employers are responsible for calculating and remitting PAYE to RRA</p>
                        </div>
                        <div className="feature-card">
                            <h3>Regular Payments</h3>
                            <p>Monthly tax payments help spread the tax burden throughout the year</p>
                        </div>
                        <div className="feature-card">
                            <h3>Simplified Process</h3>
                            <p>Reduces the need for employees to file complex annual tax returns</p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Related Sections</h2>
                    <div className="related-sections">
                        <Link to="/pit-cit" className="related-section-card">
                            <h3>PIT & CIT</h3>
                            <p>Personal and Corporate Income Tax information</p>
                        </Link>
                        <Link to="/core-taxes" className="related-section-card">
                            <h3>Core Taxes</h3>
                            <p>Back to main core taxes section</p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PayeLanding;