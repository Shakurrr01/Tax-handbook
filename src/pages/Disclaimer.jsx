import { FileText } from 'lucide-react';

const Disclaimer = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Disclaimer & Legal Information</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Important legal notices, copyright information, and acknowledgments for the Rwanda Tax Handbook
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="page-content">
                {/* Legal Disclaimer Section */}
                <div className="content-section">
                    <h2>Legal Disclaimer</h2>
                    <div className="disclaimer-notice warning">
                        <div className="notice-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                <line x1="12" y1="9" x2="12" y2="13"/>
                                <line x1="12" y1="17" x2="12.01" y2="17"/>
                            </svg>
                        </div>
                        <div className="notice-content">
                            <h3>Important Notice</h3>
                            <p>
                                This information is strictly for the purpose of guidance to our stakeholders and is subject to change on amendment of tax legislation and any other regulations governing tax administration.
                            </p>
                            <p>
                                The information in this handbook is updated in the online version, as and when required.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright Information */}
                <div className="content-section">
                    <h2>Copyright Information</h2>
                    <div className="copyright-card">
                        <div className="copyright-header">
                            <div className="copyright-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                                </svg>
                            </div>
                            <div className="copyright-content">
                                <h3>Rwanda Revenue Authority</h3>
                                <div className="copyright-details">
                                    <div className="copyright-item">
                                        <span className="copyright-label">© 2025</span>
                                        <span className="copyright-text">All rights reserved</span>
                                    </div>
                                    <div className="copyright-item">
                                        <span className="copyright-label">First Published:</span>
                                        <span className="copyright-text">2018</span>
                                    </div>
                                    <div className="copyright-item">
                                        <span className="copyright-label">Second Edition:</span>
                                        <span className="copyright-text">2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Authorship Information */}
                <div className="content-section">
                    <h2>Authorship & Contributors</h2>
                    
                    <div className="authors-grid">
                        <div className="author-card principal">
                            <div className="author-header">
                                <div className="author-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                </div>
                                <div className="author-badge">Principal Author</div>
                            </div>
                            <div className="author-content">
                                <h3>Alasdair Mackintosh</h3>
                                <p>Tax Policy Advisor</p>
                            </div>
                        </div>

                        <div className="author-card co-author">
                            <div className="author-header">
                                <div className="author-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                </div>
                                <div className="author-badge">Co-Author</div>
                            </div>
                            <div className="author-content">
                                <h3>Dr. Christopher Nell</h3>
                                <p>Local Government Taxes and Fees Chapter</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Validation Team */}
                <div className="content-section">
                    <h2>Validation Team</h2>
                    <div className="team-section">
                        <div className="team-card principal-team">
                            <div className="team-header">
                                <div className="team-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                </div>
                                <h3>Principal Validation Team</h3>
                            </div>
                            <div className="team-members">
                                <div className="member-list">
                                    {[
                                        "Agnes Kanyangeyo", "Drocelle Mukashyaka", "William Musoni", 
                                        "Denis Mukama", "Victor Uwayezu", "Consolé Munyankindi", 
                                        "Gerard Abiyingoma", "Jeanne Mujawayezu", "Harshil Parekh", 
                                        "Aline Shumbusho", "Claude Kagaba", "Egide Musafiri", 
                                        "Ernest Karasira", "Kieran Byrne", "Assumpta Mukabaranga"
                                    ].map((member, index) => (
                                        <div key={index} className="member-item">
                                            <div className="member-dot"></div>
                                            <span>{member}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="team-card review-team">
                            <div className="team-header">
                                <div className="team-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14,2 14,8 20,8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10,9 9,9 8,9"/>
                                    </svg>
                                </div>
                                <h3>Updated and Reviewed By</h3>
                            </div>
                            <div className="team-members">
                                <div className="member-list">
                                    {[
                                        "Naphtal Hakizimana", "Victor Uwayezu", "Claudien Uzabakiliho", 
                                        "Marc Nshimiye", "Eraste Hitiyaremye"
                                    ].map((member, index) => (
                                        <div key={index} className="member-item">
                                            <div className="member-dot"></div>
                                            <span>{member}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="content-section">
                    <h2>Contact Information</h2>
                    <div className="contact-card">
                        <div className="contact-header">
                            <div className="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </div>
                            <h3>Rwanda Revenue Authority</h3>
                        </div>
                        <div className="contact-info">
                            <p>For questions or clarifications regarding this handbook, please contact the Rwanda Revenue Authority through official channels.</p>
                            <div className="contact-actions">
                                <a href="#" className="contact-link">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    Contact RRA
                                </a>
                                <a href="#" className="contact-link">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                                    </svg>
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;

