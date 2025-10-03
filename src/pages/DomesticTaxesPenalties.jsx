import { AlertTriangle, FileText, CheckCircle } from 'lucide-react';

const DomesticTaxesPenalties = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <AlertTriangle size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Domestic Taxes Penalties and Fines</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Common penalties and fines across domestic taxes, with examples
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Overview</h2>
                    <p>
                        There are penalties and fines for certain offences that are similar for the majority of domestic taxes. The penalties and fines for these offenses are explained in turn below.
                        For penalties and fines that are relevant to specific tax types, see their respective chapters in this Tax Handbook.
                    </p>
                    <p>If a taxpayer makes a voluntary self, the penalties and interest described in this section are waived.</p>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for late declaration and late payment?</h2>
                    <p>A taxpayer who has failed to submit a tax declaration and payment within the required deadline must still declare and pay, and is subject to:</p>
                    <ul>
                        <li>Fine for late payment, depending on the period:
                            <ul>
                                <li>20% of the tax due if the time limit has not been exceeded by 30 days</li>
                                <li>40% of the tax due if the time limit has been exceeded by 30 days but not by 60 days</li>
                                <li>60% of the tax due if the time limit has been exceeded by 60 days</li>
                            </ul>
                        </li>
                        <li>Interest for late payment:
                            <ul>
                                <li>0.5% if delay does not exceed 6 months</li>
                                <li>1% if delay exceeds 6 months but not more than 12 months</li>
                                <li>1.5% if delay exceeds 12 months</li>
                            </ul>
                        </li>
                        <li>Fixed administrative fine:
                            <ul>
                                <li>FRW 50,000 for annual turnover below FRW 20,000,000</li>
                                <li>FRW 300,000 for annual turnover above FRW 20,000,000, a public institution or a non-profit making organization</li>
                                <li>FRW 500,000 for ‘large’ taxpayers</li>
                            </ul>
                        </li>
                    </ul>

                    <div className="example-card">
                        <h3>Example 10</h3>
                        <p>
                            Ubumwe declared monthly VAT for January 2024 late (declared 25th Feb 2024 instead of by 15th Feb). VAT Due: FRW 80,000; small taxpayer; first late filing.
                            Penalties: 20% of FRW 80,000 = FRW 16,000; interest 0.5% × 1 month = FRW 400; administrative fine = FRW 50,000. Total in addition to tax due: FRW 66,400.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What are the penalties if tax due is declared on time but paid late?</h2>
                    <ul>
                        <li>Fine for late payment: 5% (≤30 days), 10% (≤60 days), 30% (&gt;60 days)</li>
                        <li>Interest for late payment: 0.5%, 1%, or 1.5% per bands above</li>
                        <li>Fixed administrative fine for late filing: FRW 50,000 / 300,000 / 500,000 by category</li>
                    </ul>
                    <p>Administrative fines double for a second late filing and triple for the third and subsequent offenses of the same tax type if repeated within five years.</p>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for a taxpayer who declares less than the correct tax due?</h2>
                    <p>The penalties for under-declaration depend on whether the taxpayer rectifies their own tax declaration or whether RRA finds the understatement.</p>
                    <ul>
                        <li>RRA finds understatement ≥10% and ≤20% of correct amount → 10% fine + late payment interest</li>
                        <li>RRA finds understatement &gt;20% of correct amount → 20% fine + 1.5% monthly interest (late payment interest rules apply)</li>
                        <li>Self-reassessment after deadline but before audit notification → 5%, 10%, or 30% fine per lateness bands above</li>
                    </ul>
                    <div className="example-card">
                        <h3>Example 11</h3>
                        <p>
                            Immaculée declared PAYE of FRW 125,000 but correct amount was FRW 165,000. Understatement = 24.2%.
                            She pays the FRW 40,000 difference + 1.5% monthly interest for 4 months (FRW 2,400) + 20% fine (FRW 8,000) = FRW 10,400 in penalties and interest.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Rules concerning interest, fixed administrative fines and repeat offenders</h2>
                    <p>
                        Interest is non-compounding (charged only on principal tax due). Interest is charged from the first day after the tax should have been paid until the day of payment (inclusive).
                        Every started month counts as a full month. Interest cannot exceed 100% of the original tax due.
                    </p>
                    <p>
                        If an offence is repeated on another occasion within two years, the fixed administrative fine is doubled. If repeated on any other occasions within two years, the fixed administrative fine is quadrupled.
                        Taxpayers are informed by RRA whether they are categorised as small, medium or large taxpayers.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Payment allocation order</h2>
                    <p>When a taxpayer makes a payment after penalties and interest are due, the allocation order is:</p>
                    <ol>
                        <li>Principal tax</li>
                        <li>Penalties</li>
                        <li>Interests</li>
                    </ol>
                </section>
            </div>
        </div>
    );
};

export default DomesticTaxesPenalties;

