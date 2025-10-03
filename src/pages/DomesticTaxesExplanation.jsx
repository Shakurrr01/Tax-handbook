import { BookOpen, Globe, Smartphone, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';

const DomesticTaxesExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <BookOpen size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Domestic Taxes and E‑Tax</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Overview of domestic tax types, E‑Tax and M‑Declaration, and common issues
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                {/* What are domestic taxes */}
                <section className="content-section">
                    <h2>What are domestic taxes?</h2>
                    <p>Domestic taxes include the following tax types which can each be declared in a similar manner using E‑Tax:</p>
                    <ul>
                        <li>Income Tax, including:
                            <ul>
                                <li>Personal Income Tax (PIT)</li>
                                <li>Corporate Income Tax (CIT)</li>
                            </ul>
                        </li>
                        <li>Pay As You Earn (PAYE)</li>
                        <li>Value Added Tax (VAT)</li>
                        <li>Excise Duty</li>
                        <li>Withholding Taxes (WHT)</li>
                        <li>Gaming Tax</li>
                        <li>Mining Royalty Tax</li>
                        <li>Capital Gains Tax</li>
                        <li>Road Maintenance Levy</li>
                        <li>Tourism Tax</li>
                    </ul>
                    <p>
                        Domestic taxes progressively tax income (PIT, CIT, PAYE and Capital Gains Tax), ensure compliance (WHT), efficiently tax
                        consumption (VAT), deter consumption with negative social impacts (Excise Duty and Gaming Tax), and ensure that all Rwandans
                        share the benefit from the country’s natural resources (Mining Royalty Tax).
                    </p>
                    <p>For more details on the rates and bases of each domestic tax, see their respective chapters in this Tax Handbook.</p>
                </section>

                {/* What is E‑Tax */}
                <section className="content-section">
                    <h2>What is E‑Tax?</h2>
                    <p>
                        E‑Tax is a module-based system to manage domestic taxes operations. This includes an online portal through which all domestic tax types can be declared.
                        RRA has developed the E‑Tax system to make it easier for taxpayers to declare and pay domestic taxes. This Tax Handbook aims to provide all the information
                        necessary for taxpayers to be able declare online.
                    </p>
                </section>

                {/* What is M‑Declaration */}
                <section className="content-section">
                    <h2>What is M‑Declaration?</h2>
                    <p>
                        In certain cases, Income Tax can also be declared on mobile phones using M‑Declaration, see page 128 for more details on declaring Income Tax using M‑Declaration.
                        However, the majority of domestic taxes can only be declared using E‑Tax. Therefore, this chapter focuses on the E‑Tax process.
                    </p>
                </section>

                {/* Benefits */}
                <section className="content-section">
                    <h2>What are the benefits of declaring online using E‑Tax or on mobile phones using M‑Declaration?</h2>
                    <div className="benefits-container">
                        <div className="benefits-grid">
                            {["Declare taxes anytime, from anywhere.", "Avoid travel costs of visiting RRA offices.", "Avoid queuing times at RRA offices."].map((benefit, idx) => (
                                <div key={idx} className="benefit-card">
                                    <div className="benefit-icon"><CheckCircle size={20} /></div>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Register and login */}
                <section className="content-section">
                    <h2>How do taxpayers register and login to E‑Tax?</h2>
                    <p>
                        Access the E‑Tax website at https://etax.rra.gov.rw or through the RRA website https://www.rra.gov.rw and click ‘Pay Domestic taxes here’ on the right of the screen.
                    </p>
                    <p>
                        Taxpayers are automatically registered for E‑Tax when their business is registered with RDB. To login for the first time, taxpayers login through sign up. The system requires taxpayer to fill in ‘TIN’ and ‘Phone Number’ to authenticate the taxpayer who wants to sign up. If the information is the same as the information provided during registration, the system sends the password by SMS and email using the contact details given when register. The taxpayer uses these credentials to ‘Sign up’.
                    </p>
                    <p>Once logged in, the E‑Tax password can be changed by the taxpayer by clicking ‘Get Password?’ on the left of the E‑Tax home screen.</p>
                </section>

                {/* Do not know TIN */}
                <section className="content-section">
                    <h2>What if taxpayers do not know their TIN?</h2>
                    <p>If a taxpayer does not know their TIN, they can visit RRA offices or call the RRA call centre toll-free on 3004.</p>
                    <p>
                        In addition, if an individual taxpayer (i.e., not a company) does not know their TIN, they can visit the RRA website or uses below link: https://etax.rra.gov.rw/nidAssignedTIN/ and click ‘Search for TIN using National ID’.
                    </p>
                    <p>
                        This leads to a screen asking whether the taxpayer registered their TIN using a Rwandan National ID or a Passport. After clicking on the relevant choice, the National ID or Passport Number can be entered, and the associated TIN is displayed by clicking ‘Show TIN’.
                    </p>
                </section>

                {/* Common problems */}
                <section className="content-section">
                    <h2>What are the common problems when using E‑Tax?</h2>
                    <p>
                        There are three main types of problems faced by taxpayers when using E‑Tax, this concern: annexures not validating, particular tax types or tax periods not being available on the ‘Document Details’ screen or declarations not submitting. Potential solutions to these problems are discussed in turn below.
                    </p>

                    <h3>What are the causes of an annexure not validating?</h3>
                    <ul>
                        <li>‘Enable content’ after opening the spreadsheet.</li>
                        <li>Use the required date format (dd/mm/yyyy) for the dates entered and the computer’s settings.</li>
                        <li>Avoid blank cells for rows that have been started.</li>
                        <li>Try using a Windows computer instead of a Mac.</li>
                        <li>Click to ‘Validate’ and save the annexure.</li>
                    </ul>
                    <p>See page 97 for more details on solving these problems.</p>

                    <h3>What if the particular tax type or tax period is not available for declaration?</h3>
                    <p>
                        If the tax type and tax period for the relevant declaration is not available on the ‘Document Details’ screen, the taxpayer can request for it by calling the RRA call centre toll-free or visiting RRA offices.
                    </p>

                    <h3>What are the causes of a declaration not submitting?</h3>
                    <p>
                        When submitting declarations: the annexures must be uploaded, its information equals to the declaration form information, and all certified by clicking in certifying box.
                    </p>
                    <p>
                        If the declaration and annexures information are not equal, either the declaration or the annexures must then be changed until they are equal and accurate, see page 107 for details.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DomesticTaxesExplanation;

