import { Globe, Shield, AlertTriangle, FileText, Building, Users, Clock, Scale, Network } from 'lucide-react';

const ExchangeInfo = () => {
    const eoirRequirements = [
        'Bank account information',
        'Legal and beneficial ownership records',
        'Accounting and financial documentation'
    ];

    const taxpayerObligations = [
        'Maintain complete and accurate financial records',
        'Keep ownership records up to date',
        'Identify beneficial owners',
        'Ensure records are available for sharing with partner jurisdictions'
    ];

    const nonComplianceConsequences = [
        'Fines and penalties',
        'Legal action',
        'Criminal prosecution',
        'Administrative sanctions'
    ];

    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <Network size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Exchange of Information</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Rwanda's commitment to international tax transparency and cooperation through EOIR and AEOI standards
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                {/* Overview Section */}
                <section className="content-section">
                    <h2>Overview</h2>
                    <div className="info-card">
                        <div className="info-icon">
                            <Globe size={24} />
                        </div>
                        <div className="info-content">
                            <p>
                                In 2017, Rwanda joined the international crusade against tax evasion and fraud by becoming a member of
                                Global Forum on Transparency and Exchange of Information for Tax purposes and acceded to the convention
                                on Mutual Administrative Assistance in Tax Matters as amended by the 2010 Protocol on 11 August 2021.
                                This section discusses the Exchange of Information on Request (EOIR) and Automatic Exchange of Information (AEOI).
                            </p>
                        </div>
                    </div>
                </section>

                {/* EOIR Section */}
                <section className="content-section">
                    <h2>Exchange of Information on Request (EOIR)</h2>
                    <div className="eoir-container">
                        <div className="eoir-overview">
                            <div className="eoir-header">
                                <Shield size={24} />
                                <h3>What is EOIR?</h3>
                            </div>
                            <p>
                                Rwanda implemented the Exchange of Information on Request (EOIR) standard of the Global Forum that allows
                                tax authorities to request specific financial and legal information from other countries to support audits
                                and investigations and ensure compliance with tax laws.
                            </p>
                        </div>

                        <div className="eoir-requirements">
                            <h3>What is required to the EOIR partner countries?</h3>
                            <p>Country partner of EOIR is required to provide partner jurisdictions with access to:</p>
                            <div className="requirements-grid">
                                {eoirRequirements.map((requirement, index) => (
                                    <div key={index} className="requirement-card">
                                        <div className="requirement-icon">
                                            <FileText size={20} />
                                        </div>
                                        <span>{requirement}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="note">
                                Partner jurisdictions of Rwanda are also required to avail the above-mentioned information for Rwanda to access them.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Taxpayer Impact Section */}
                <section className="content-section">
                    <h2>Impact on Taxpayers and Entities</h2>
                    <div className="impact-container">
                        <div className="impact-overview">
                            <div className="impact-header">
                                <Users size={24} />
                                <h3>What does this mean for taxpayers and entities?</h3>
                            </div>
                            <p>
                                All individuals, businesses, and legal entities must maintain complete and accurate financial and ownership
                                records, including the identity of beneficial owners. These records may be shared with other partner
                                jurisdictions upon request, so as they can share the same information with Rwanda upon request.
                            </p>
                        </div>

                        <div className="obligations-section">
                            <h3>Taxpayer Obligations</h3>
                            <div className="obligations-grid">
                                {taxpayerObligations.map((obligation, index) => (
                                    <div key={index} className="obligation-card">
                                        <div className="obligation-icon">
                                            <FileText size={20} />
                                        </div>
                                        <span>{obligation}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Non-Compliance Consequences */}
                <section className="content-section">
                    <h2>EOIR Non-Compliance Consequences</h2>
                    <div className="consequences-container">
                        <div className="consequences-header">
                            <AlertTriangle size={24} />
                            <h3>What are EOIR Non-compliance consequences to taxpayers?</h3>
                        </div>
                        <p>
                            Failure to provide required information or intentional non-disclosure may result in fines, legal action,
                            or criminal prosecution, in accordance with the Tax Procedure Law.
                        </p>
                        <div className="consequences-grid">
                            {nonComplianceConsequences.map((consequence, index) => (
                                <div key={index} className="consequence-card">
                                    <div className="consequence-icon">
                                        <Scale size={20} />
                                    </div>
                                    <span>{consequence}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AEOI Section */}
                <section className="content-section">
                    <h2>Automatic Exchange of Information (AEOI)</h2>
                    <div className="aeoi-container">
                        <div className="aeoi-overview">
                            <div className="aeoi-header">
                                <Building size={24} />
                                <h3>What is AEOI?</h3>
                            </div>
                            <p>
                                It is a country commitment to implementing the Automatic Exchange of Information (AEOI) standard under
                                the OECD's Common Reporting Standard (CRS). This allows for the annual automatic exchange of financial
                                account information between jurisdictions.
                            </p>
                        </div>

                        <div className="aeoi-requirements">
                            <h3>Financial Institution Requirements</h3>
                            <div className="requirement-card">
                                <div className="requirement-icon">
                                    <Clock size={20} />
                                </div>
                                <div className="requirement-content">
                                    <p>
                                        All financial institutions in Rwanda must report information on financial accounts held by non-residents
                                        through the AEOI portal, not later than 30 April each year.
                                    </p>
                                    <div className="timeline-badge">
                                        First data exchange: September 2025
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aeoi-consequences">
                            <h3>AEOI Non-Compliance Consequences</h3>
                            <div className="notice-card warning">
                                <div className="notice-icon">
                                    <AlertTriangle size={24} />
                                </div>
                                <div className="notice-content">
                                    <h4>Consequences for Financial Institutions</h4>
                                    <p>
                                        The Tax Administration is vested with powers to impose administrative sanctions for the faults provided for under the relevant legislation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Important Notice */}
                <section className="content-section">
                    <div className="notice-card info">
                        <div className="notice-icon">
                            <Globe size={24} />
                        </div>
                        <div className="notice-content">
                            <h3>Important Notice</h3>
                            <p>
                                Rwanda's participation in international tax information exchange demonstrates our commitment to global
                                tax transparency and cooperation. All taxpayers and financial institutions must ensure full compliance
                                with these international standards to avoid penalties and maintain Rwanda's reputation in the global
                                tax community.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ExchangeInfo;