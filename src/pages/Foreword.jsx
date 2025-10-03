import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';
import { User, Quote, Award, Target, Heart, CheckCircle, Star, Calendar, Building } from 'lucide-react';
import { useState } from 'react';

const Foreword = () => {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);
    const [activeSection, setActiveSection] = useState(0);

    const keyPoints = [
        {
            icon: <Heart size={20} />,
            title: "Here For You, To Serve",
            description: "RRA's strong commitment to providing the best possible service to taxpayers"
        },
        {
            icon: <Target size={20} />,
            title: "Comprehensive Coverage",
            description: "All aspects of domestic taxes, local government taxes, and customs duties"
        },
        {
            icon: <CheckCircle size={20} />,
            title: "Easy Compliance",
            description: "Simple step-by-step guides for online tax declaration and payment"
        },
        {
            icon: <Award size={20} />,
            title: "Updated Information",
            description: "Latest tax laws and procedures in one comprehensive handbook"
        }
    ];

    const paragraphs = [
        { content: t('foreword.paragraph1'), highlight: "Here For You, To Serve" },
        { content: t('foreword.paragraph2'), highlight: "comprehensive tax information" },
        { content: t('foreword.paragraph3'), highlight: "all aspects of taxation" },
        { content: t('foreword.paragraph4'), highlight: "easy online compliance" },
        { content: t('foreword.paragraph5'), highlight: "helping taxpayers succeed" }
    ];

    return (
        <div className="page-container">
            {/* Enhanced Professional Header */}
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <User size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">{t('foreword.title')}</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                A personal message from the Commissioner General of Rwanda Revenue Authority
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Highlights Section */}
            <section className="content-section">
                <div className="highlights-grid">
                    {keyPoints.map((point, index) => (
                        <div key={index} className="highlight-card">
                            <div className="highlight-icon">
                                {point.icon}
                            </div>
                            <div className="highlight-content">
                                <h3>{point.title}</h3>
                                <p>{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Foreword Content */}
            <div className="foreword-content">
                <div className="foreword-image-section">
                    <div className="commissioner-card">
                        <img
                            src="/images/General_Commisioner.png"
                            alt={t('foreword.commissionerGeneral')}
                            className="commissioner-photo"
                        />
                        <div className="commissioner-info">
                            <h3>{t('foreword.commissionerName')}</h3>
                            <p>{t('foreword.commissionerTitle')}</p>
                            <div className="rra-badge">
                                <Building size={16} />
                                <span>Rwanda Revenue Authority</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="foreword-text">
                    <div className="foreword-intro">
                        <div className="quote-icon">
                            <Quote size={32} />
                        </div>
                        <p className="intro-text">
                            A personal message from the Commissioner General
                        </p>
                    </div>

                    <div className="foreword-paragraphs">
                        {paragraphs.map((paragraph, index) => (
                            <div 
                                key={index} 
                                className={`paragraph-card ${activeSection === index ? 'active' : ''}`}
                                onClick={() => setActiveSection(index)}
                            >
                                <div className="paragraph-number">
                                    <span>{index + 1}</span>
                                </div>
                                <div className="paragraph-content">
                                    <p>{paragraph.content}</p>
                                    <div className="paragraph-highlight">
                                        <Star size={16} />
                                        <span>{paragraph.highlight}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="foreword-signature">
                        <div className="signature-card">
                            <div className="signature-content">
                                <p className="signature-name">{t('foreword.commissionerName')}</p>
                                <p className="signature-title">{t('foreword.commissionerTitle')}</p>
                                <div className="signature-date">
                                    <Calendar size={16} />
                                    <span>2nd Edition - 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foreword;