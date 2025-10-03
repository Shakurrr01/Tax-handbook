import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Monitor, AlertTriangle, Smartphone, Laptop, Globe } from 'lucide-react';

const EisUnified = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "Electronic Invoicing System (EIS) / EBMs",
            description: "Complete guide to Electronic Invoicing System including explanation, implementation, and compliance requirements",
            sections: [
                {
                    id: 'explanation',
                    title: 'EIS/EBMs Explanation',
                    icon: <Monitor size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "What is the Electronic Invoicing System?"
                        },
                        {
                            type: "paragraph",
                            text: "The Electronic Invoicing System (EIS) formerly known as EBM (Electronic Billing Machine) refers to various methods of printing RRA certified invoices and sending sales data to RRA in real-time. EIS is not a type of tax, but helps to improve bookkeeping and Value Added Tax (VAT) collection. EIS invoices are required to be provided to buyers for every sales transaction by every registered taxpayer (EBM for all)."
                        },
                        {
                            type: "paragraph",
                            text: "EIS will be used to refer to electronic billing machines (EBMs) as well as software used to print RRA certified invoices (such as VSDC). There are two versions of EBMs. The new EBM version 2.1 (EBM 2.1) and EBM 2.0, both in a form of software now available for taxpayers to install onto desktop or laptop computers."
                        },
                        {
                            type: "heading",
                            text: "What are the benefits of EIS/EBMs?"
                        },
                        {
                            type: "paragraph",
                            text: "There are numerous benefits of EIS/EBMs, both to compliant taxpayers and to the tax administration. These benefits to the taxpayer, to RRA and to Rwanda include:"
                        },
                        {
                            type: "list",
                            items: [
                                "EIS/EBM sales data can be copied and pasted into the 'Sales' tab when completing the VAT annexures, making it quicker and easier for taxpayers to declare and pay VAT",
                                "Improving bookkeeping and stocktaking for taxpayers through using EIS/EBMs to record the exact items and prices being sold",
                                "Simplifying the audit process, reducing the time and interruption of taxpayer's daily operations",
                                "Reducing the potential for tax evasion, ensuring that taxpayers can compete fairly, and increasing the tax revenues for public spending"
                            ]
                        },
                        {
                            type: "heading",
                            text: "Which taxpayers must have EIS/EBMs?"
                        },
                        {
                            type: "paragraph",
                            text: "All registered taxpayers are required to have and use EIS/EBM at each of their sales locations."
                        },
                        {
                            type: "heading",
                            text: "What are various types of EBM2.1 Solutions?"
                        },
                        {
                            type: "paragraph",
                            text: "EBM 2.1 as an upgraded EIS version is available with various solutions where taxpayers may choose the solution that fit best their business operations and sizes. And each solution is available for free of charge."
                        },
                        {
                            type: "list",
                            items: [
                                "EBM Mobile Application: This is solution for micro and small non-VAT registered taxpayers with turnover less than twenty million by the time of application and is installed in smart phone with latest android version and with internal storage capacity from 8GB and above",
                                "EBM2.1 Client Software: EBM2.1 Client Software is for large, medium, small or micro taxpayers either VAT registered or not. Taxpayer must possess a computing device (Desktop, laptop, tablet or POS, PDA) with latest windows version from 10.0.17 and above or android version 8.0 and above",
                                "Online EBM: This is a Web based invoicing solution for micro and small both VAT and non-VAT registered taxpayers selling only services and with turnover less than twenty million by the time of application",
                                "VSDC: Virtual Sales Data Controller: VSDC is for taxpayers having their own private invoicing that adopts both online offline mode and after being certified by RRA, these systems are integrate with EBM system to issue certified sales invoices",
                                "OSDC: Online Sales Data Controller: OSDC Online sales data controller is for taxpayers having their own private invoicing that works only if connected on internet and after being certified by RRA, these systems are integrate with EBM system to issue certified sales invoices"
                            ]
                        }
                    ]
                },
                {
                    id: 'implementation',
                    title: 'Implementation & Usage',
                    icon: <Laptop size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "How can taxpayers obtain EBM 2.1?"
                        },
                        {
                            type: "paragraph",
                            text: "Taxpayers requesting EBM 2.1 must submit an application form, which can be found at https://myrra.rra.gov.rw/basic/login/indexLogin and follow the steps of Login (existing myRRA user) and Sign Up (new MyRRA user)."
                        },
                        {
                            type: "heading",
                            text: "What do I require to obtain EBM 2.1?"
                        },
                        {
                            type: "paragraph",
                            text: "If you would like to obtain EBM 2.1, bring to RRA Headquarters:"
                        },
                        {
                            type: "list",
                            items: [
                                "RDB Business Registration Certificate",
                                "VAT Registration Certificate for VAT registered taxpayers",
                                "If you are the owner of the company, your National ID or Passport",
                                "If you are not the owner of the company, the Power of Attorney and National or Passport of the Owner"
                            ]
                        },
                        {
                            type: "heading",
                            text: "What are the advantages of EBM Version 2.1 (EBM 2.1)?"
                        },
                        {
                            type: "list",
                            items: [
                                "Extracting data automatically from suppliers also with EBM 2.1 and Customs, allowing the taxpayer to also copy and paste into the 'Purchases' and 'VAT Importation' tabs when completing the VAT annexures",
                                "Providing the taxpayer with greater information over their own stock and supply chain",
                                "When an EBM 2.1 taxpayer makes a purchase with another domestic retailer and receives an EBM 2.1 invoice, this purchase will automatically be loaded to the buyer's EBM 2.1 as a purchase",
                                "When an EBM 2.1 taxpayer declares an import at customs, using the same TIN supplied for EBM 2.1, this import will automatically be loaded to the importer's EBM 2.1 as a purchase",
                                "RRA provides free remote technical support for EBM 2.1. The 'Team View'/'Any Desk' function allowing the taxpayer and RRA to work remotely together to fix any problems, without needing to visit RRA offices",
                                "Multiple EBM 2.1 user accounts can be created for one enterprise. These accounts can be created with different user access rights, as required",
                                "EBM 2.1 can be connected to the taxpayer's existing internet connection"
                            ]
                        }
                    ]
                },
                {
                    id: 'penalties',
                    title: 'Penalties & Compliance',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "What are the penalties for a taxpayer who does not have an EIS/EBM, but is required to have?"
                        },
                        {
                            type: "paragraph",
                            text: "A taxpayer who does not have an EIS/EBM for a sales location that requires an EIS/EBM is subject to a penalty of:"
                        },
                        {
                            type: "list",
                            items: [
                                "FRW 200,000 for a first-time offence",
                                "FRW 400,000 for any repeat offences"
                            ]
                        },
                        {
                            type: "heading",
                            text: "What are the penalties for a taxpayer who fails to comply with any other EIS/EBM user obligations?"
                        },
                        {
                            type: "paragraph",
                            text: "A VAT taxpayer who fails to comply with any other five EIS/EBM user obligations, including indicating the true name of the goods, notify RRA of EIS/EBM failure and refraining from deleting invoices inappropriately, is subject to a penalty of:"
                        },
                        {
                            type: "list",
                            items: [
                                "FRW 200,000 for a first-time offence",
                                "FRW 400,000 for any repeat offences"
                            ]
                        },
                        {
                            type: "heading",
                            text: "What are the penalties for a taxpayer who has an EBM but fails to issue an EIS/EBM invoice?"
                        },
                        {
                            type: "paragraph",
                            text: "A VAT taxpayer who has an operational EIS/EBM but fails to issue an EIS/EBM invoice when required is subject to a penalty of:"
                        },
                        {
                            type: "list",
                            items: [
                                "Ten (10) times the value of the evaded VAT for a first-time offence",
                                "Twenty (20) times the value of the evaded VAT for any repeat offences"
                            ]
                        },
                        {
                            type: "paragraph",
                            text: "A non-VAT taxpayer who has an operational EIS/EBM but fails to issue an EIS/EBM invoice when required is subject to a penalty of:"
                        },
                        {
                            type: "list",
                            items: [
                                "Twice (2) times the value of the transaction",
                                "Four (4) times the value of the transaction for any repeat offences"
                            ]
                        },
                        {
                            type: "heading",
                            text: "What other penalties can taxpayers be subject to for non-compliance with EIS/EBM requirements?"
                        },
                        {
                            type: "list",
                            items: [
                                "Closure of business activities for a period of thirty (30) days",
                                "Being barred from bidding for public tenders",
                                "Being named in nationwide newspapers"
                            ]
                        }
                    ]
                }
            ]
        },
        fr: {
            title: "Système de Facturation Électronique (EIS) / EBMs",
            description: "Guide complet du Système de Facturation Électronique incluant l'explication, l'implémentation et les exigences de conformité",
            sections: [
                {
                    id: 'explanation',
                    title: 'Explication EIS/EBMs',
                    icon: <Monitor size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Qu'est-ce que le Système de Facturation Électronique ?"
                        },
                        {
                            type: "paragraph",
                            text: "Le Système de Facturation Électronique (EIS) anciennement connu sous le nom d'EBM (Machine de Facturation Électronique) fait référence à diverses méthodes d'impression de factures certifiées RRA et d'envoi de données de vente à RRA en temps réel."
                        }
                    ]
                },
                {
                    id: 'implementation',
                    title: 'Implémentation et Utilisation',
                    icon: <Laptop size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Comment les contribuables peuvent-ils obtenir EBM 2.1 ?"
                        },
                        {
                            type: "paragraph",
                            text: "Les contribuables demandant EBM 2.1 doivent soumettre un formulaire de demande, qui peut être trouvé à https://myrra.rra.gov.rw/basic/login/indexLogin"
                        }
                    ]
                },
                {
                    id: 'penalties',
                    title: 'Pénalités et Conformité',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Quelles sont les pénalités pour un contribuable qui n'a pas d'EIS/EBM, mais qui est tenu d'en avoir ?"
                        },
                        {
                            type: "list",
                            items: [
                                "200 000 FRW pour une première infraction",
                                "400 000 FRW pour toute récidive"
                            ]
                        }
                    ]
                }
            ]
        },
        rw: {
            title: "Sisiteme y'Icyemezo cya Elektroniki (EIS) / EBMs",
            description: "Ubuyobozi buzuye bw'Sisiteme y'Icyemezo cya Elektroniki harimo gusobanura, gushyira mu bikorwa, n'ibyemezo by'ukurikiza",
            sections: [
                {
                    id: 'explanation',
                    title: 'Gusobanura EIS/EBMs',
                    icon: <Monitor size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Ni iki Sisiteme y'Icyemezo cya Elektroniki ?"
                        },
                        {
                            type: "paragraph",
                            text: "Sisiteme y'Icyemezo cya Elektroniki (EIS) yahamagariwe EBM (Machine y'Icyemezo cya Elektroniki) isobanura uburyo butandukanye bwo gucapa ibyemezo byemewe na RRA no kohereza amakuru y'ubucuruzi kuri RRA mu gihe gikurikira."
                        }
                    ]
                },
                {
                    id: 'implementation',
                    title: 'Gushyira mu bikorwa n\'Ukoresha',
                    icon: <Laptop size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Abakoresha bashobora gute guhabwa EBM 2.1 ?"
                        },
                        {
                            type: "paragraph",
                            text: "Abakoresha basaba EBM 2.1 bagomba gutanga ifishi y'usaba, ishobora kuboneka ku https://myrra.rra.gov.rw/basic/login/indexLogin"
                        }
                    ]
                },
                {
                    id: 'penalties',
                    title: 'Ibihano n\'Kurikiza',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Ni ibihe bihano abakoresha batagira EIS/EBM, ariko bakwiye kugira ?"
                        },
                        {
                            type: "list",
                            items: [
                                "FRW 200,000 ku cyaha cya mbere",
                                "FRW 400,000 ku cyaha cyose cyongera"
                            ]
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
                            <Monitor size={24} />
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
                        The Electronic Invoicing System (EIS) is a crucial component of Rwanda's tax administration, helping to improve bookkeeping, reduce tax evasion, and streamline VAT collection. This comprehensive guide covers everything you need to know about EIS/EBMs, from understanding the system to implementation and compliance requirements.
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
                    <h2 className="content-heading">EBM Solutions</h2>
                    <div className="ebm-solutions">
                        <div className="solution-card">
                            <div className="solution-icon">
                                <Smartphone size={24} />
                            </div>
                            <h3>EBM Mobile App</h3>
                            <p>For micro and small non-VAT registered taxpayers with turnover less than twenty million</p>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">
                                <Laptop size={24} />
                            </div>
                            <h3>EBM2.1 Client Software</h3>
                            <p>For large, medium, small or micro taxpayers either VAT registered or not</p>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">
                                <Globe size={24} />
                            </div>
                            <h3>Online EBM</h3>
                            <p>Web-based invoicing solution for micro and small taxpayers selling only services</p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Support & Resources</h2>
                    <div className="support-resources">
                        <div className="resource-card">
                            <h3>Technical Support</h3>
                            <p>For any questions regarding EIS/EBMs, contact the Tax Control and Operational Support Division within RRA directly by calling 078818 5702.</p>
                        </div>
                        <div className="resource-card">
                            <h3>Training</h3>
                            <p>Visit the RRA EBM 2.1 training centre at RRA HQ for further information and training on EBM 2.1.</p>
                        </div>
                        <div className="resource-card">
                            <h3>Documentation</h3>
                            <p>Client manuals are available in the EBM section of the 'Domestic Tax Services' page on the RRA website.</p>
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

export default EisUnified;