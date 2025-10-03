import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DollarSign, FileText, AlertTriangle, Package, Factory } from 'lucide-react';

const ExciseUnified = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "Excise Duty",
            description: "Complete guide to Excise Duty including explanation, declaration process, and compliance requirements",
            sections: [
                {
                    id: 'explanation',
                    title: 'Excise Duty Explanation',
                    icon: <DollarSign size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "What is Excise Duty?"
                        },
                        {
                            type: "paragraph",
                            text: "Excise Duty is a tax applied to specific products. This means that it is able to discourage consumption with negative social impacts. This can reduce the costs of healthcare and policing, whilst raising significant revenues for further government spending. As Excise Duties are charged on the consumption of certain products, it is also referred to as a 'excise tax'."
                        },
                        {
                            type: "heading",
                            text: "Who must register for Excise Duty?"
                        },
                        {
                            type: "paragraph",
                            text: "Any manufacturer or importer of a product that is subject to Excise Duty by the law is required to declare and pay Excise Duty. There is no threshold on company size for Excise Duty. A taxpayer who manufactures taxable products must declare and pay Excise Duty regardless of the size of the business."
                        },
                        {
                            type: "heading",
                            text: "What are the obligations of taxpayers registered for Excise Duty?"
                        },
                        {
                            type: "paragraph",
                            text: "The obligations of Excise Duty registered taxpayers are detailed in Chapter 2, section one of the Law Nº 011/2025 Of 27/05/2025 Establishing the Excise Duty. Excise Duty registered taxpayers must:"
                        },
                        {
                            type: "list",
                            items: [
                                "Keeping registers",
                                "Affixing a tax stamp on a taxable product",
                                "Submission to the Tax Administration of a reconciliation statement on the usage of tax stamps",
                                "Keeping books of accounts"
                            ]
                        },
                        {
                            type: "heading",
                            text: "Who pays Excise Duty?"
                        },
                        {
                            type: "paragraph",
                            text: "Excise Duty is paid by the manufacturer or importer of the taxable products. However, it is expected that these costs will be passed onto consumers in the form of higher selling prices."
                        },
                        {
                            type: "heading",
                            text: "What are the valuation methods of Excise Duty?"
                        },
                        {
                            type: "paragraph",
                            text: "The rates of excise duties can be charged on a 'specific', 'ad valorem' or 'mixed' basis as follows:"
                        },
                        {
                            type: "list",
                            items: [
                                "A specific Excise Duty charges a certain amount of tax per unit of the product. For example, Excise Duty is charged on premium oil in Rwanda at a rate of FRW 183 per litre",
                                "An ad valorem Excise Duty charges a percentage of the taxable value of the product. For example, Excise Duty is charged on beer in Rwanda at 65% of the taxable value",
                                "A mixed Excise Duty charges both a certain amount of tax per unit and as a percentage of the taxable value of the product. For example, Excise Duty is charged on cigarettes in Rwanda at a rate of 36% of the retail price in addition to FRW 230 per pack of 20 individual cigarettes"
                            ]
                        }
                    ]
                },
                {
                    id: 'declaration',
                    title: 'Excise Duty Declaration Process',
                    icon: <FileText size={20} />,
                    content: [
                        {
                            type: "paragraph",
                            text: "The declaration process for Excise Duty is similar to other domestic taxes. Follow the step-by-step guide below to complete your Excise Duty declaration."
                        },
                        {
                            type: "heading",
                            text: "Annexures"
                        },
                        {
                            type: "paragraph",
                            text: "Firstly, download the Excise Duty Annexures from the E-Tax website. The Excise Annexure file has two tabs."
                        },
                        {
                            type: "heading",
                            text: "Raw Materials Tab"
                        },
                        {
                            type: "paragraph",
                            text: "This tab is applicable for all taxpayers to record their register of raw materials used in the manufacturing of taxable products during the tax period."
                        },
                        {
                            type: "paragraph",
                            text: "Each raw material used for production of each product on each date is required to have its own row in the annex. For example, if two raw materials are used to produce two separate products on eight days of production, then (2 * 2 * 8 = 32) 32 rows are required in the annexure."
                        },
                        {
                            type: "heading",
                            text: "Excise Tab"
                        },
                        {
                            type: "paragraph",
                            text: "This tab is applicable for all taxpayers to record their sales of taxable products sold during the tax period. There are different Excise tabs for cigarette, telephone and for other excisable products. The information to complete in each tab is almost similar."
                        },
                        {
                            type: "paragraph",
                            text: "Each product type sold on each date for each specific unit price is required to have its own row in the annex. For example, if two different sized products of the same brand are sold on the same day, these are required to have two separate rows."
                        },
                        {
                            type: "heading",
                            text: "Excise Declaration"
                        },
                        {
                            type: "paragraph",
                            text: "Once all the Excise Duty annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the Excise Duty declaration."
                        },
                        {
                            type: "paragraph",
                            text: "The Excise Duty declaration requires similar data to the Excise Duty Annexures that have previously been completed. The important distinction is that in the Excise Duty declaration, the total combined values for all transactions during that tax period must be entered."
                        }
                    ]
                },
                {
                    id: 'compliance',
                    title: 'Compliance & Penalties',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "When is the deadline to declare and pay Excise Duty?"
                        },
                        {
                            type: "paragraph",
                            text: "Excise Duty is declared on a monthly basis and must be declared and paid within five days after the end of each tax period."
                        },
                        {
                            type: "heading",
                            text: "What are the exemptions for Excise Duty?"
                        },
                        {
                            type: "paragraph",
                            text: "The following goods are exempt from Excise Duty:"
                        },
                        {
                            type: "list",
                            items: [
                                "Goods for charitable organizations",
                                "Vehicles assembled in Rwanda",
                                "One personal vehicles of a returning Rwandan diplomat",
                                "One vehicle of a Rwandan returnee or any other person returning back from a foreign country who fulfils exemption conditions set forth under the Customs Law",
                                "Minibus and bus that can carry not less than 14 persons, lorries and single cabin pickups manufactured to carry goods, refrigerating vehicles, tourist vehicles, ambulances and vehicles designed for persons with disabilities",
                                "Products which are specifically manufactured for export",
                                "Products which are sold to duty free shops and other specific persons legally determined"
                            ]
                        },
                        {
                            type: "heading",
                            text: "Penalties for Non-Compliance"
                        },
                        {
                            type: "paragraph",
                            text: "A domestic producer or importer who does not keep stamp registers, records or related documents, or stamp reconciliation statements is subject to an administrative fine between one million Rwandan francs (FRW 1,000,000) and two million Rwandan francs (FRW 2,000,000)."
                        },
                        {
                            type: "paragraph",
                            text: "A domestic producer or importer of products who does not affix tax stamps to appropriate products, affixes tax stamps incorrectly, or sells products which are subject to excise duty without tax stamps is, upon conviction, subject to a fine of between one million Rwandan francs (FRW 1,000,000) and two million Rwandan francs (FRW 2,000,000) or to imprisonment for a term of six (6) months to one (1) year."
                        }
                    ]
                }
            ]
        },
        fr: {
            title: "Droits d'Accise",
            description: "Guide complet des Droits d'Accise incluant l'explication, le processus de déclaration et les exigences de conformité",
            sections: [
                {
                    id: 'explanation',
                    title: 'Explication des Droits d\'Accise',
                    icon: <DollarSign size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Qu'est-ce que les Droits d'Accise ?"
                        },
                        {
                            type: "paragraph",
                            text: "Les Droits d'Accise sont un impôt appliqué à des produits spécifiques. Cela signifie qu'ils peuvent décourager la consommation avec des impacts sociaux négatifs."
                        }
                    ]
                },
                {
                    id: 'declaration',
                    title: 'Processus de Déclaration des Droits d\'Accise',
                    icon: <FileText size={20} />,
                    content: [
                        {
                            type: "paragraph",
                            text: "Le processus de déclaration pour les Droits d'Accise est similaire aux autres impôts domestiques. Suivez le guide étape par étape ci-dessous pour compléter votre déclaration de Droits d'Accise."
                        }
                    ]
                },
                {
                    id: 'compliance',
                    title: 'Conformité et Pénalités',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Quand est l'échéance pour déclarer et payer les Droits d'Accise ?"
                        },
                        {
                            type: "paragraph",
                            text: "Les Droits d'Accise sont déclarés sur une base mensuelle et doivent être déclarés et payés dans les cinq jours suivant la fin de chaque période fiscale."
                        }
                    ]
                }
            ]
        },
        rw: {
            title: "Umusoro w'Ubucuruzi",
            description: "Ubuyobozi buzuye bw'Umusoro w'Ubucuruzi harimo gusobanura, uburyo bwo kwemeza, n'ibyemezo by'ukurikiza",
            sections: [
                {
                    id: 'explanation',
                    title: 'Gusobanura Umusoro w\'Ubucuruzi',
                    icon: <DollarSign size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Ni iki Umusoro w'Ubucuruzi ?"
                        },
                        {
                            type: "paragraph",
                            text: "Umusoro w'Ubucuruzi ni umusoro wakoreshwa ku bicuruzwa bitandukanye. Ibyo bisobanura ko ushobora guhagarika kurya ibintu bifite ingaruka mbi ku mibereho y'abantu."
                        }
                    ]
                },
                {
                    id: 'declaration',
                    title: 'Uburyo bwo Kwemeza Umusoro w\'Ubucuruzi',
                    icon: <FileText size={20} />,
                    content: [
                        {
                            type: "paragraph",
                            text: "Uburyo bwo kwemeza Umusoro w'Ubucuruzi ni nk'ubundi musoro wo mu Rwanda. Kurikira ubuyobozi bukurikirana amabwiriza hepfo kugira ngo wuzuze ibyemezo byawe by'Umusoro w'Ubucuruzi."
                        }
                    ]
                },
                {
                    id: 'compliance',
                    title: 'Kurikiza n\'Ibihano',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Ni ryari igihe cyo kwemeza no kwishyura Umusoro w'Ubucuruzi ?"
                        },
                        {
                            type: "paragraph",
                            text: "Umusoro w'Ubucuruzi wemezwa buri kwezi kandi ugomba kwemezwa no kwishyurwa mu minsi itanu nyuma y'igihe cy'umusoro."
                        }
                    ]
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
                            <DollarSign size={24} />
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
                        Excise Duty is a specialized tax applied to specific products to discourage consumption with negative social impacts. This comprehensive guide covers everything you need to know about Excise Duty in Rwanda, from understanding the basics to completing declarations and maintaining compliance.
                    </p>
                </div>

                {currentContent.sections.map((section, sectionIndex) => (
                    <section key={sectionIndex} className="content-section">
                        <div className="section-header">
                            <div className="section-icon">
                                {section.icon}
                            </div>
                            <h2 className="content-heading">{section.title}</h2>
                        </div>

                        <div className="section-content">
                            {section.content.map((item, itemIndex) => {
                                if (item.type === 'paragraph') {
                                    return <p key={itemIndex} className="content-paragraph">{item.text}</p>;
                                } else if (item.type === 'heading') {
                                    return <h3 key={itemIndex} className="content-subheading">{item.text}</h3>;
                                } else if (item.type === 'list') {
                                    return (
                                        <ul key={itemIndex} className="content-list">
                                            {item.items.map((listItem, listIndex) => (
                                                <li key={listIndex} className="content-list-item">{listItem}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </section>
                ))}

                <section className="content-section">
                    <h2 className="content-heading">Tax Stamps</h2>
                    <div className="tax-stamps-info">
                        <div className="stamp-card">
                            <div className="stamp-icon">
                                <Package size={24} />
                            </div>
                            <h3>What are tax stamps?</h3>
                            <p>A tax stamp is a sign affixed on some products subject to Excise Duty to show retailers and consumers that excise duty has been paid. The products requiring tax stamps are cigarettes (each pack of 20 cigarettes), wines and liquors (each bottle).</p>
                        </div>
                        <div className="stamp-card">
                            <div className="stamp-icon">
                                <Factory size={24} />
                            </div>
                            <h3>How to obtain tax stamps?</h3>
                            <p>Tax stamps can be purchased (at cost price) from RRA. Call 3004 for details on purchasing tax stamps.</p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Declaration Methods</h2>
                    <div className="declaration-methods">
                        <div className="method-card">
                            <div className="method-icon">
                                <FileText size={24} />
                            </div>
                            <h3>E-Tax Portal</h3>
                            <p>Online tax declaration system for comprehensive Excise Duty management</p>
                            <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="method-link">
                                Access E-Tax →
                            </a>
                        </div>
                        <div className="method-card">
                            <div className="method-icon">
                                <Package size={24} />
                            </div>
                            <h3>Annexures</h3>
                            <p>Download and complete Excise Duty annexures for detailed transaction reporting</p>
                            <span className="method-info">Available through E-Tax portal</span>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Related Sections</h2>
                    <div className="related-sections">
                        <a href="/other-taxes" className="related-section-card">
                            <h3>Other Taxes</h3>
                            <p>Back to main other taxes section</p>
                        </a>
                        <a href="/vat-unified" className="related-section-card">
                            <h3>VAT</h3>
                            <p>Value Added Tax information</p>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ExciseUnified;