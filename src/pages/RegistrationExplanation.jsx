import { FileText, Building, Users, Shield, Clock, CheckCircle, MapPin, Mail, ExternalLink } from 'lucide-react';

const RegistrationExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Registration</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Overview of institutions that register taxpayers and when RRA provides TINs directly
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                {/* How can businesses register */}
                <section className="content-section">
                    <h2>How can businesses register as taxpayers and get a TIN?</h2>
                    <div className="info-card">
                        <div className="info-icon">
                            <FileText size={24} />
                        </div>
                        <div className="info-content">
                            <p>
                                Business registration in Rwanda is carried out by the Office of the Registrar General (ORG) within the Rwanda Development Board (RDB).
                                This is carried out online on the RDB portal rather than RRA in order to facilitate the aftercare and investment promotion facilities that RDB offers.
                                The RDB, RCA, and RRA computer systems are integrated to ensure a smooth registration process that provides a single, unique Taxpayer Identification Number (TIN)
                                and a clear understanding of the taxpayer’s obligations.
                            </p>
                            <p>
                                According to the World Bank Ease of Doing Business Index 2019, Rwanda was the simplest and fastest country in East Africa in which to start a business.
                                This Tax Handbook tries to promote this further, with a basic guide to business registration. For further questions visit the RDB website at
                                https://rdb.rw/ or contact RDB directly at:
                            </p>
                            <div className="contact-details" style={{ marginTop: '0.75rem' }}>
                                <div className="contact-item"><Building size={18} /> <span>Rwanda Development Board (RDB)</span></div>
                                <div className="contact-item"><MapPin size={18} /> <span>KN 5 Rd, KG 9 Ave, Kigali, Rwanda</span></div>
                                <div className="contact-item"><span>P.O. Box 6239</span></div>
                                <div className="contact-item"><span>Tel (Local): 1415</span></div>
                                <div className="contact-item"><span>Tel (International): +250 727775170</span></div>
                                <div className="contact-item"><Mail size={18} /> <span>Email: info@rdb.rw</span></div>
                                <div className="contact-item"><ExternalLink size={18} /> <span>Website: https://rdb.rw/</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Which institution registers taxpayers?</h2>
                    <div className="info-card">
                        <div className="info-icon">
                            <Building size={24} />
                        </div>
                        <div className="info-content">
                            <p>
                                Taxpayers receive a unique Taxpayer Identification Number (TIN) when registering their business with
                                Rwanda Development Board (RDB) for all businesses, and Rwanda Cooperatives Agency (RCA) for cooperatives.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>When does RRA register taxpayers directly?</h2>
                    <div className="info-card">
                        <div className="info-icon">
                            <Shield size={24} />
                        </div>
                        <div className="info-content">
                            <p>However, there are also circumstances where RRA registers taxpayers and provides them with TINs directly:</p>
                            <ul>
                                <li>Local Government Taxes (LGT) and fees</li>
                                <li>Non-business registration, for example for:
                                    <ul>
                                        <li>Motor vehicle ownership</li>
                                        <li>Tax Clearance Certificates (TCCs)</li>
                                        <li>Non-governmental organisations (NGOs), after approval from Rwanda Governance Board (RGB)</li>
                                        <li>Government institutions and projects</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Important notes</h2>
                    <div className="info-card">
                        <div className="info-icon">
                            <Users size={24} />
                        </div>
                        <div className="info-content">
                            <p>
                                As the processes are separate, this Tax Handbook focuses on business registration with RDB in this section.
                                For cooperatives registration, visit any RCA office. For more details on registering for Local Government
                                Taxes (LGT) and fees, see page 357.
                            </p>
                            <p>
                                For all non-business registration purposes, visit any RRA office with a Rwanda National ID or a Passport.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits of registration */}
                <section className="content-section">
                    <h2>What are the benefits of business registration?</h2>
                    <div className="benefits-container">
                        <p>As well as being a legal requirement, there are many advantages to registering as a business. These include:</p>
                        <div className="benefits-grid">
                            {["Ensuring the business benefits from the protections provided by business laws, such as limited liability",
                                "Improving access to credit from financial institutions",
                                "Inspiring trust in customers with proof of being a registered business"].map((benefit, idx) => (
                                    <div key={idx} className="benefit-card">
                                        <div className="benefit-icon"><CheckCircle size={20} /></div>
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>

                {/* Limited liability */}
                <section className="content-section">
                    <h2>What is limited liability?</h2>
                    <div className="info-card">
                        <div className="info-icon">
                            <Shield size={24} />
                        </div>
                        <div className="info-content">
                            <p>
                                Liability refers to the responsibility for any debts that are owed by the business. One of the advantages of registering a business as a company,
                                as opposed to an individual enterprise, is that all debts incurred by the company are the responsibility of the company; they are not the legal liability
                                of the shareholders or the directors. In this way, the liability of the people who run the company is said to be ‘limited’. They are not responsible for all the debts
                                of the company, only to the extent of the stake they have in the company (see page 78 for more details).
                            </p>
                        </div>
                    </div>
                </section>

                {/* When must register */}
                <section className="content-section">
                    <h2>When must a business be registered?</h2>
                    <div className="requirement-card">
                        <div className="requirement-icon"><Clock size={24} /></div>
                        <div className="requirement-content">
                            <h3>Registration Deadline</h3>
                            <p>A business must register with the Register General when the business is established.</p>
                        </div>
                    </div>
                </section>

                {/* RDB Business Registration system */}
                <section className="content-section">
                    <h2>What is the RDB Business Registration system?</h2>
                    <div className="system-info">
                        <p>
                            RDB has developed the business registration system to make it easier for taxpayers to register their business. The RDB system is an online portal through which all businesses are registered.
                        </p>
                        <p>
                            It is important to note that although all business registrations go through the RDB system, this can still be done with the help of RDB staff at RDB offices. Similarly, Business Development Fund (BDF) staff are also trained to help taxpayers register their businesses at BDF offices.
                        </p>
                        <p>
                            Nevertheless, there are many advantages for taxpayers to register online. This Tax Handbook aims to provide all the information necessary for taxpayers to be able to register online.
                            Any questions during the registration process can be answered by calling the RDB call centre toll-free on 1415.
                        </p>
                    </div>
                </section>

                {/* Cost */}
                <section className="content-section">
                    <h2>How much does it cost to register a business?</h2>
                    <div className="cost-info">
                        <div className="cost-card free">
                            <h3>Free Registration</h3>
                            <p>It is free to register a business in Rwanda. It is free to register online and at RDB and BDF offices.</p>
                        </div>
                        <div className="cost-card paid">
                            <h3>Paid Services</h3>
                            <p>Some private internet cafés also offer assistance with business registration and can charge a fee for this service.</p>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="content-section">
                    <h2>What are the different categories of businesses?</h2>
                    <div className="business-categories">
                        <div className="category-card">
                            <h3>Domestic Company</h3>
                            <p>For domestic companies or for subsidiaries of foreign companies.</p>
                        </div>
                        <div className="category-card">
                            <h3>Individual Enterprise</h3>
                            <p>For sole traders or partnerships and is the simplest way to start and conduct business in Rwanda. ‘Enterprise’ typically refers to a business whose turnover is less than FRW 10,000 per day.</p>
                        </div>
                        <div className="category-card">
                            <h3>Foreign Company</h3>
                            <p>For companies which already exist and are registered in a foreign country that are undertaking business in Rwanda. This does not include domestic subsidiaries of foreign companies.</p>
                        </div>
                    </div>
                </section>

                {/* Domestic types */}
                <section className="content-section">
                    <h2>What are the different types of ‘Domestic’ company?</h2>
                    <div className="company-types">
                        {[
                            { type: 'Limited by shares', description: 'Most common business type, suitable for most profit-oriented businesses' },
                            { type: 'Limited by guarantee', description: 'Suitable for non-profit organisations and charities' },
                            { type: 'Limited by shares and guarantee', description: 'Rare business type, requires consultation with RDB' },
                            { type: 'Unlimited', description: 'Rare business type, requires consultation with RDB' }
                        ].map((companyType, index) => (
                            <div key={index} className="company-type-card">
                                <h3>{companyType.type}</h3>
                                <p>{companyType.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="company-requirements">
                        <h3>Registration Requirements</h3>
                        <p>Companies limited by shares must register a chairman of the board, a managing director and at least one shareholder. However, these can all be the same person.</p>
                    </div>
                </section>

                {/* Documents */}
                <section className="content-section">
                    <h2>What documents are needed to register a business?</h2>
                    <p>The requirements for registering vary depending on the category of business. These must be scanned and attached whilst completing the business registration application.</p>
                    <div className="documents-container">
                        <div className="document-category">
                            <h3>‘Domestic’ Company</h3>
                            <div className="document-list">
                                {[
                                    'Rwanda National ID or Passport (for all shareholders, directors, company secretaries, accountants)',
                                    'Notarised articles of association (if applicable)',
                                    'Notarised company resolution to open a subsidiary company (if a subsidiary)',
                                    'Notarised certificate of incorporation issued by the registration company in the country of incorporation (if a foreign subsidiary)'
                                ].map((doc, index) => (
                                    <div key={index} className="document-item">
                                        <FileText size={16} />
                                        <span>{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="document-category">
                            <h3>Individual ‘Enterprise’</h3>
                            <div className="document-list">
                                {['Rwanda National ID or Passport'].map((doc, index) => (
                                    <div key={index} className="document-item">
                                        <FileText size={16} />
                                        <span>{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="document-category">
                            <h3>‘Foreign’ Company</h3>
                            <div className="document-list">
                                {[
                                    'Rwanda National ID or Passport (for all shareholders, directors, company secretaries, accountants residing in Rwanda)',
                                    'Notarised power of attorney to present the company in Rwanda',
                                    'Notarised articles of association',
                                    'Notarised certificate of incorporation issued by the registration institution in the country of incorporation',
                                    'Notarised company resolution to open a branch in Rwanda'
                                ].map((doc, index) => (
                                    <div key={index} className="document-item">
                                        <FileText size={16} />
                                        <span>{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Business Activity */}
                <section className="content-section">
                    <h2>How should the type of ‘Business Activity’ be chosen?</h2>
                    <div className="activity-info">
                        <p>
                            The RDB business registration system asks taxpayers to identify the type of business activities that they plan to conduct. This is not binding; taxpayers can at any time carry out business activities that they do not include here.
                        </p>
                        <p>
                            However, it is important that this ‘Business Activity’ category is completed as accurately as possible when registering. This uses the International Standard Industrial Classification (ISIC), also used by the National Institute of Statistics (NISR), The National Bank of Rwanda (BNR) and the Ministry of Finance (MINECOFIN) to improve statistics and policy making.
                        </p>
                        <div className="activity-process">
                            <h3>Selection Process</h3>
                            <ol>
                                <li>Choose the broad sector first</li>
                                <li>Choose the more specific activity within that sector</li>
                                <li>Select as many different activities as intended</li>
                                <li>Choose one as the main business activity (largest share of value added)</li>
                            </ol>
                        </div>
                        <div className="example-card">
                            <h3>Example 1</h3>
                            <p>
                                <strong>Amahoro's Butchery Business:</strong> She intends to buy livestock and process the meat. She expects to sell to other shops as well as directly to consumers.
                            </p>
                            <ul>
                                <li>Processing meat: 'C1010 - Processing and preserving of meat' (Manufacture sector)</li>
                                <li>Wholesale to shops: 'G4630 – Wholesale of food, beverages and tobacco'</li>
                                <li>Retail to customers: 'G4721 – Retail sale of food in specialised stores'</li>
                            </ul>
                            <p><strong>Main Activity:</strong> Processing of meat (greatest value added)</p>
                        </div>
                    </div>
                </section>

                {/* Tax types registration */}
                <section className="content-section">
                    <h2>How do taxpayers register for different tax types?</h2>
                    <div className="tax-registration">
                        <div className="automatic-registration">
                            <h3>Automatic Registration</h3>
                            <ul>
                                <li><strong>Income Tax:</strong> All businesses are immediately registered for Income Tax (PIT for individual businesses or CIT for companies).</li>
                                <li><strong>Trading License Tax:</strong> All businesses must register for Trading License Tax. Businesses registered by RDB are automatically registered on Trading License Tax which is exempted for two years from registration date.</li>
                            </ul>
                        </div>
                        <div className="conditional-registration">
                            <h3>Conditional Registration</h3>
                            <div className="conditional-item">
                                <h4>VAT Registration</h4>
                                <p>Path: 'General Info' → 'Request for Value Added Tax' → 'Would you like to request for VAT Certificate?' → 'Yes' → Enter expected turnover amount.</p>
                            </div>
                            <div className="conditional-item">
                                <h4>PAYE Registration</h4>
                                <p>Path: 'Employment Info' → 'Does the company have employees?' → 'Yes' → Enter required details.</p>
                            </div>
                        </div>
                        <div className="additional-registration">
                            <h3>Additional Tax Types</h3>
                            <p>To register for any other tax types, or to register for any additional tax types in the future, call the RRA call centre on 3004 or visit any RRA office.</p>
                        </div>
                    </div>
                </section>

                {/* Start declaring */}
                <section className="content-section">
                    <h2>When must taxpayers start declaring and paying taxes?</h2>
                    <div className="timeline-info">
                        <div className="timeline-card">
                            <Clock size={24} />
                            <div className="timeline-content">
                                <h3>Declaration Requirements</h3>
                                <p>Tax declarations for all registered tax types must be submitted for tax periods from the date the taxpayer was registered.</p>
                                <p>Even if there is no business activity within the first, or subsequent, tax periods, the declarations must still be submitted to avoid penalties.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Example 2 */}
                <section className="content-section">
                    <h2>Example 2</h2>
                    <div className="example-card">
                        <p>
                            <strong>Rukundo's Retail Shop:</strong> Rukundo is starting a private business of a retail shop. He is starting the business himself using his own capital and with no staff, partners or shareholders. He expects a daily turnover of approximately FRW 20,000, equivalent to an annual turnover of approximately FRW 8,000,000.
                        </p>
                        <p>
                            He wants to be protected by limited liability. Rukundo selects a ‘domestic’ business, with the company category ‘private’, the type ‘limited by shares’ and his position as ‘managing director’.
                        </p>
                        <p>
                            On the share info tab, he lists himself as the only shareholder. On the members of the board tab, he enters himself as the only member of the board. On the business activity tab, he enters the business sector as ‘G – Wholesale or Retail Trade; Repair of Motor Vehicles and Motorcycles’ and then chooses ‘G4711 – Retail sale in non-specialised stores with food, beverages or tobacco predominating’.
                        </p>
                        <p>
                            As his annual turnover is expected to be below FRW 20,000,000, he does not have to request for a VAT certificate. As he has no employees, he does not register for PAYE.
                            Rukundo is automatically registered for Personal Income Tax (PIT), which must be declared and paid on an annual basis by 31st March of the following year, and Trading License Tax which must be declared and paid after the expiration of exemption period of two years from registration date.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RegistrationExplanation;

