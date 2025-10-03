import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';
import { X, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    return (
        <footer className="global-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-menu">
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="/registration" className="footer-link">Registration</a>
                        </li>
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="/income-tax" className="footer-link">Income Tax</a>
                        </li>
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="/vat" className="footer-link">VAT</a>
                        </li>
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="/paye" className="footer-link">PAYE</a>
                        </li>
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="/customs" className="footer-link">Customs</a>
                        </li>
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="/paying-taxes" className="footer-link">Paying Taxes</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Our Social Media</h4>
                    <ul className="social-links">
                        <li>
                            <a href="https://x.com/rrainfo" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon twitter">
                                    <X size={16} />
                                </span>
                                <span className="social-text">rrainfo</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/RwandaRevenueAuthority" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon facebook">
                                    <Facebook size={16} />
                                </span>
                                <span className="social-text">Rwanda Revenue Authority</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/rwandarevenue/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon instagram">
                                    <Instagram size={16} />
                                </span>
                                <span className="social-text">Rwandarevenue</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@rwandarevenueauthority6148" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon youtube">
                                    <Youtube size={16} />
                                </span>
                                <span className="social-text">Rwanda Revenue Authority</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Help & Contacts</h4>
                    <ul className="footer-menu">
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="tel:3004" className="footer-link">3004 (Local Calls)</a>
                        </li>
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="tel:+250788185500" className="footer-link">+250 (0) 788 185 500 (International)</a>
                        </li>
                        <li>
                            <ArrowRight size={16} className="arrow-icon" />
                            <a href="https://ecms.rra.gov.rw/home?lang=en" target="_blank" rel="noopener noreferrer" className="footer-link">Send us a Letter</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright">
                <p>© Rwanda Revenue Authority 2025</p>
            </div>
        </footer>
    );
};

export default Footer;