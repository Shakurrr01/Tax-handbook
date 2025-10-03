import { BookOpen, BarChart3, Calculator, Info } from 'lucide-react';

const IncomeTaxExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <BookOpen size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Income Tax (PIT and CIT)</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">Explanation of Income Tax, regimes, deadlines and IQP</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is Income Tax?</h2>
                    <p>
                        Income Tax is a tax on income resulting from business, self-employment and investment activities. Income Tax ensures that all businesses benefiting from Rwanda’s infrastructure, security and prosperity contribute their fair share towards the nation’s development.
                    </p>
                    <p>
                        Income Tax includes both Personal Income Tax (PIT) and Corporate Income Tax (CIT). The process of declaring these two tax types is similar so they are combined in this chapter of the Tax Handbook. A taxpayer only has to declare one of these two tax types.
                    </p>
                    <p>
                        Income Tax has different ‘regimes’ available for taxpayers of different levels of income. There is also Motor Vehicle Income Tax available to taxpayers who receive motor vehicle transport income. These options make the process of declaring and paying Income Tax simpler for lower Income taxpayers, including being able to declare on mobile phones using M‑Declaration.
                    </p>
                    <p>
                        The main declaration of Income Tax is submitted on an annual basis. Instalment Quarterly Prepayments (IQP) are also declared and paid each quarter based on the annual declaration. This helps taxpayers to smooth out their tax obligations over the year.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the differences between PIT and CIT?</h2>
                    <p>
                        PIT is for individual traders and unincorporated businesses, whilst CIT is for companies. The rates of PIT and CIT are the same for all types of Income Tax regimes with the exception of ‘Real Regime’ (see page 124 for more details).
                    </p>
                    <p>
                        This Tax Handbook will refer to ‘Income Tax’ if the information applies to both PIT and CIT. If the information is specific to only one tax type, the Tax Handbook will refer to ‘PIT’ or ‘CIT’ separately.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for Income Tax?</h2>
                    <p>
                        Any taxpayer who receives taxable income during the tax period must register for Income Tax. Taxpayers are automatically registered for the relevant tax type when registering their business with RDB.
                    </p>
                    <p>
                        Taxpayers must register their business with RDB within seven days of beginning taxable activities or establishing the company (see page 126 for more details on business registration). Whether they are registered for PIT or CIT depends upon the type of business.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is taxable income?</h2>
                    <p>Taxable income includes all income sourced in Rwanda resulting from business, employment or investment activities and activities performed abroad by a resident of Rwanda. This includes:</p>
                    <ul>
                        <li>services and employment;</li>
                        <li>activities of a crafts person, singer, artist and a player;</li>
                        <li>sports, cultural and leisure activities;</li>
                        <li>activities carried out by a non-resident in Rwanda through a permanent establishment in Rwanda;</li>
                        <li>use, sale, lease and free transfer of business movable assets;</li>
                        <li>sale, lease and free transfer of immovable assets allocated to the business;</li>
                        <li>agricultural, fishing and forestry activities;</li>
                        <li>usufruct and other rights attached to immovable assets and their sale if such rights are allocated to the business;</li>
                        <li>investments in shares of companies;</li>
                        <li>direct or indirect sale or transfer of shares or debentures; change of profits into shares that increases the capital of partners, except for financial institution with paid‑up capital below the minimum requirement set by the National bank of Rwanda;</li>
                        <li>distribution of profits among partners;</li>
                        <li>lending, deposits and other similar income‑generating activities;</li>
                        <li>transfer, sale and lease of intellectual property;</li>
                        <li>digital services;</li>
                        <li>gaming activities</li>
                        <li>any other income generating activity.</li>
                    </ul>
                    <p>Note that payment made by a resident of Rwanda for a service consumed abroad is not subject to withholding tax.</p>
                </section>

                <section className="content-section">
                    <h2>Which taxpayers are exempt from Income Tax?</h2>
                    <p>Taxpayers that are exempt from Income Tax are not required to declare and pay Income Tax. Taxpayers that are exempt from Income Tax includes:</p>
                    <ul>
                        <li>The Government of Rwanda</li>
                        <li>The City of Kigali</li>
                        <li>The district</li>
                        <li>The National Bank of Rwanda</li>
                        <li>Organisations that carry out only faith‑oriented activities, humanitarian, charitable, scientific or educational character unless the revenue received exceeds the corresponding expenses or if those entities conduct a business</li>
                        <li>International organisations or agencies of technical cooperation if such exemption is provided for by international agreements or an agreement concluded between these organisations and the Government of Rwanda</li>
                        <li>Qualified pension funds</li>
                        <li>Public institution in charge of social security</li>
                        <li>Development Bank of Rwanda</li>
                        <li>Agaciro Development Fund Corporate Trust</li>
                        <li>Business Development Fund limited, “BDF Ltd”</li>
                        <li>Special purpose vehicle, unless the revenue received exceeds the corresponding expenses</li>
                        <li>Common benefit foundations</li>
                        <li>Resident trustee for income earned by a foreign trust</li>
                    </ul>
                    <p>
                        However, they are required to submit their financial statements on E‑Tax by the 31st of March after the tax period or three (3) months following specific tax period granted to taxpayers by MINECOFIN.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the exemptions for agricultural income?</h2>
                    <p>Income below FRW 12,000,000 resulting from agricultural and livestock activities is exempt from Income Tax. It is important to note that only the income above the threshold is taxable.</p>
                    <div className="example-card">
                        <h3>Example 12</h3>
                        <p>
                            Amahoro is a farmer. In one tax period, she earns income of FRW 25,000,000 resulting from agricultural and livestock activities. Only the income above the threshold is taxable.
                        </p>
                        <p><strong>Taxable income:</strong> FRW 25,000,000 – FRW 12,000,000 = FRW 13,000,000</p>
                        <p>Amahoro must declare and pay Income Tax on this FRW 13,000,000 as normal.</p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What other incentives are available for Income Tax?</h2>
                    <p>
                        There are additional exemptions or discounts that can be applied if the taxpayer fulfils certain criteria. The types of tax discounts allowed are subject to the Law on investment promotion and facilitation and Law establishing Taxes on Income. See the Rwanda Development Board (RDB) and RRA websites for the latest versions of these laws.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the different Income Tax regimes?</h2>
                    <p>
                        Income Tax has three ‘regimes’ available for taxpayers of different amounts of annual turnover. These make the process of declaring and paying Income Tax simpler for lower income taxpayers.
                    </p>
                    <div className="diagram-container">
                        <div className="diagram-title">
                            <h3>Turnover thresholds and regimes</h3>
                        </div>
                        <div className="business-types-diagram">
                            <div className="business-type">
                                <div className="type-header"><h4>FRW 2,000,000 – FRW 12,000,000</h4></div>
                                <div className="type-requirements"><div className="requirement-item">Flat Tax</div></div>
                            </div>
                            <div className="business-type">
                                <div className="type-header"><h4>FRW 12,000,001 – FRW 20,000,000</h4></div>
                                <div className="type-requirements"><div className="requirement-item">Lump Sum</div></div>
                            </div>
                            <div className="business-type">
                                <div className="type-header"><h4>Above FRW 20,000,000</h4></div>
                                <div className="type-requirements"><div className="requirement-item">Real Regime</div></div>
                            </div>
                        </div>
                    </div>
                    <p>However, for small businesses with an annual turnover below FRW 20,000,000 have an option to file income tax under simplified regime.</p>
                    <p>
                        In addition to these regimes, there is also a different option available for taxpayers earning motor vehicle transport income. This is referred to as Motor Vehicle Income Tax (see page 128 for more details).
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Flat Tax regime?</h2>
                    <p>The Flat Tax regime is available to taxpayers with an annual turnover between FRW 2,000,000 and FRW 12,000,000. The taxpayer must pay a specific ‘Flat’ amount of annual tax due depending upon their annual turnover:</p>
                    <div className="documents-container">
                        <div className="document-category">
                            <h3>Annual Tax Due</h3>
                            <div className="document-list">
                                {[
                                    'FRW 2,000,000 – FRW 4,000,000 → FRW 60,000',
                                    'FRW 4,000,001 – FRW 7,000,000 → FRW 120,000',
                                    'FRW 7,000,001 – FRW 10,000,000 → FRW 210,000',
                                    'FRW 10,000,001 – FRW 12,000,000 → FRW 300,000',
                                ].map((row, idx) => (
                                    <div key={idx} className="document-item"><Calculator size={16} /><span>{row}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p>Note: taxpayers with annual turnover below FRW 2,000,000 must submit their Income Tax declaration but are not required to pay Income Tax.</p>
                    <p>Flat Tax regime can be declared using M‑Declaration or E‑Tax (see page 144 and 149 respectively).</p>
                    <div className="example-card">
                        <h3>Example 13</h3>
                        <p>Rukundo has a business fixing bikes. Annual turnover: FRW 8,750,500 → Annual Flat Tax due: FRW 210,000.</p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What is the Lump Sum Income Tax?</h2>
                    <p>The Lump Sum regime is available to taxpayers with an annual turnover between FRW 12,000,001 and FRW 20,000,000. The taxpayer must pay a specific ‘Lump Sum’ tax due equal to 3% of their annual turnover.</p>
                    <p>Lump Sum regime can be declared using M‑Declaration or E‑Tax (see page 144 and 151 respectively).</p>
                    <div className="example-card">
                        <h3>Example 14</h3>
                        <p>Ubumwe Ltd turnover: FRW 17,400,200 → Lump Sum due: FRW 17,400,200 × 3% = FRW 522,006.</p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What is the Real Regime Income Tax?</h2>
                    <p>
                        The Real Regime is required for all taxpayers with an annual turnover above FRW 20,000,000, as well as all liberal professions. Any taxpayer may opt into the Real Regime but cannot change this decision for three years from informing RRA.
                    </p>
                    <p>The Real Regime rate applies to profit (not turnover) allowing deduction of expenses and allowances.</p>
                    <p>The tax rate for CIT is a uniform 28% on profit. The PIT rate is progressive:</p>
                    <div className="documents-container">
                        <div className="document-category">
                            <h3>PIT Marginal Rates</h3>
                            <div className="document-list">
                                {[
                                    'FRW 0 – FRW 720,000 → 0%',
                                    'FRW 720,001 – FRW 1,200,000 → 10%',
                                    'FRW 1,200,001 – FRW 2,400,000 → 20%',
                                    'Above FRW 2,400,000 → 30%'
                                ].map((row, idx) => (
                                    <div key={idx} className="document-item"><BarChart3 size={16} /><span>{row}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p>
                        These are marginal rates. The first FRW 720,000 is taxed at 0%, the next FRW 480,000 at 10%, the next FRW 1,200,000 at 20% and the remainder at 30%.
                    </p>
                    <div className="example-card">
                        <h3>Example 15</h3>
                        <p>Turnover FRW 62,000,000; deductible expenses and allowances FRW 54,000,000 → profit FRW 8,000,000.</p>
                        <p>PIT due = 0 + 48,000 + 240,000 + 1,680,000 = FRW 1,968,000.</p>
                    </div>
                    <p>Real Regime can only be declared using E‑Tax (see page 158).</p>
                    <p>Small taxpayers opting to pay tax on actual profit may use a simplified accounting method recording daily sales, purchases, and all monetary transactions.</p>
                </section>

                <section className="content-section">
                    <h2>What is the Motor Vehicle Income Tax?</h2>
                    <p>
                        Available to taxpayers who receive motor vehicle transport income. Taxpayers may pay a flat amount per quarter depending upon vehicle type, or declare according to Real Regime.
                    </p>
                    <p>
                        Declared via M‑Declaration or E‑Tax. See page 145 for M‑Declaration. Same process for Motor Vehicle IQP. Other non‑transport income must be declared separately.
                    </p>
                    <div className="example-card">
                        <h3>Example 16</h3>
                        <p>
                            Rukundo has shop income (FRW 15,000,000) and bus transport income (FRW 5,000,000). He declares Lump Sum for shop income and Motor Vehicle Income Tax for the bus.
                        </p>
                        <p>Quarterly tax per seat: e.g., FRW 3,000 × seats. New owned moto vehicle does not pay quarters in the first year of its acquisition.</p>
                    </div>
                    <div className="example-card">
                        <h3>Example 17</h3>
                        <p>Bus with 18 seats → FRW 3,000 × 18 = FRW 54,000 per quarter.</p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What is M‑Declaration?</h2>
                    <p>
                        M‑Declaration is a mobile phone‑based system allowing certain tax services including Income Tax, Motor Vehicle Income Tax, Local Government taxes and fees, and some EBM services. The process differs slightly by regime (see pages 144 and 147).
                    </p>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay Income Tax?</h2>
                    <p>Annual declaration for the calendar year (1 Jan – 31 Dec) is due by 31st March of the following year.</p>
                    <div className="example-card">
                        <h3>Example 18</h3>
                        <p>Declare and pay 2019 PIT by 31st March 2020.</p>
                    </div>
                    <p>
                        CIT taxpayers may request a different 12‑month tax period. Continue declaring and paying as normal until approval. IQPs are due by 30th June, 30th September and 31st December.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is Instalment Quarterly Prepayments (IQPs)?</h2>
                    <p>
                        In addition to the annual declaration, IQPs are declared and paid by 30th June, 30th September and 31st December. If 30th June falls on holidays/weekends, deadline is previous working day.
                    </p>
                    <p>
                        Quarterly prepayment = (Tax paid for previous annual tax period ÷ turnover of same period) × current quarterly turnover.
                    </p>
                    <p>IQP can be declared with M‑Declaration or E‑Tax; only E‑Tax can deduct WHT paid within the preceding quarter.</p>
                    <div className="example-card">
                        <h3>Example 19</h3>
                        <p>
                            Prior annual tax FRW 540,000 on turnover FRW 18,000,000. Current quarter turnover FRW 9,000,000 (Apr–Jun 2024). IQP2 = (540,000 / 18,000,000) × 9,000,000 = FRW 270,000.
                        </p>
                        <p>WHT 5% of FRW 50,000 paid in May 2024 is deducted: 270,000 – 50,000 = FRW 220,000 due by 30th September 2024.</p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What if tax is withheld on behalf of the taxpayer?</h2>
                    <p>Tax types that may be withheld and paid on behalf include: WHT 15%, WHT 3%, WHT 5% (imports), PAYE, Mining Royalty Tax, Capital Gain (10%).</p>
                    <p>
                        Withholder must provide in the annexure the whithholdee details (TIN, invoice number, date, amount withheld) so the withholdee can claim the withheld amount as advance tax. Claimable only when declaring using E‑Tax.
                    </p>
                    <p>If this results in a tax credit situation, see page 48 for details.</p>
                </section>

                <section className="content-section">
                    <h2>When do taxpayers declare Capital Gains Tax instead?</h2>
                    <p>
                        Capital gain tax is charged on the direct or indirect sale or transfer of shares, licenses, debt instruments, options, guarantees and similar assets. Capital gain = selling price minus acquisition value. The tax rate on capital gain is ten percent (10%) payable within 15 days following the month of sale or transfer.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default IncomeTaxExplanation;

