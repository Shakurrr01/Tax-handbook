import { ClipboardList, FileText, CheckCircle, Building, ExternalLink } from 'lucide-react';

const RegistrationGuide = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <ClipboardList size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Step-by-Step Guide to Business Registration</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Detailed steps for registering a business and obtaining a TIN via RDB
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Step 1: Register on the RDB business registration system</h2>
                    <div className="step-card">
                        <p>
                            Access the RDB business registration system at https://brs.rdb.rw/busregonline
                        </p>
                        <p>The RDB business registration login page is shown below.</p>
                        <p>
                            New users must first register an account by clicking on ‘Register Here’. This leads to the ‘Create New Online User’ screen.
                            Enter the required personal details and click submit to register an account.
                        </p>
                        <p>
                            The RDB system will then send an email to the given email address containing a website link. Click on the link provided to validate and activate this account.
                        </p>
                        <p>
                            Once the account has been activated, return to the RDB business registration system and enter the chosen login details to begin the business registration process.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Step 2: Choose the business category to be registered</h2>
                    <div className="step-card">
                        <p>
                            Once logged in, an initial message advises that if the company already has a unique Taxpayer Identification Number (TIN), then do not use this system to register.
                        </p>
                        <p>
                            If the company does not yet have a TIN, click OK to continue to the business registration system screen below.
                        </p>
                        <p>
                            The business registration system first requires selection of the type of business being registered. See page 79 for more details.
                        </p>
                        <p>
                            Note that the ‘Name Reservation’ option does not register a business, but can be used to reserve a business name for registration in the future.
                        </p>
                        <p>
                            For each of the categories, ‘Your Position’ within the business must be noted. In addition, ‘Domestic’ requires a choice of ‘Company Category’ which can be public or private and ‘Type’.
                            For more details on each of these business types, see pages 79.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Step 3: Complete the business registration application</h2>
                    <div className="step-card">
                        <p>
                            Depending upon the business type selected, the details that must be completed differ slightly. The screen below shows the tabs after selecting a domestic, private, limited by shares company registration.
                        </p>
                        <p>
                            Note that each of the major tabs (‘General Info’, ‘Share Info’ etc.) has separate minor tabs (‘Company Name’, ‘Articles of Association’ etc.) Ensure to complete all tabs before submitting the registration.
                        </p>
                        <p>
                            Once all tabs are completed, click the ‘Preview’ tab to check that all the details entered are correct, before clicking ‘Submit’ to submit the business registration application.
                        </p>
                        <p>
                            After submitting, RDB will validate that the information entered is correct. If this is approved, an SMS will be sent to inform the taxpayer that the application has been sent to RRA to issue a Taxpayer Identification Number (TIN). Once the TIN is issued, another SMS will be sent to inform the taxpayer that his/her business has been registered.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Step 4: Print Certificates</h2>
                    <div className="step-card">
                        <p>
                            After receiving the second SMS, confirming that RDB has validated the business registration application and RRA has issued a TIN, the taxpayer must log back in to the RDB Business Registration system.
                        </p>
                        <p>
                            Once logged in, click on the ‘Certificates’ option on the left-hand side. There are two certificates that must be printed and kept securely.
                        </p>
                        <p>
                            Firstly, choose the ‘Certificate Type’ that matches the application type, for example ‘Domestic’ if the business type that was registered was a domestic company. Once selected, download and print this certificate.
                            Secondly, choose the ‘Certificate Type’ titled ‘Memorandum’ and also download and print this certificate. If there are any other applicable certificates, for example a ‘Value Added Tax’ certificate, then these should also be printed at this stage, see page 56 for more details on certificates.
                        </p>
                        <p>
                            Once registered, the business can operate and declare and pay taxes as normal. The immediate obligations of the taxpayer are explained on page 85.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Step 5: Register, declare and pay all required taxes</h2>
                    <div className="step-card">
                        <p>
                            The taxpayer is automatically registered for Income Tax. Visit RRA offices to register for any additional required taxes, including visiting LGT tax centres immediately to register for Trading License Tax.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RegistrationGuide;

