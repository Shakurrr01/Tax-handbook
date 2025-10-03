import { ClipboardList, FileSpreadsheet, Upload, CheckCircle, AlertTriangle } from 'lucide-react';

const DomesticTaxesGuide = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <ClipboardList size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Step-by-Step guide to declaring domestic taxes</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                From logging into E‑Tax to submitting declarations and understanding penalties
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                {/* Step 1 */}
                <section className="content-section">
                    <h2>Step 1: Log-in to E‑Tax</h2>
                    <div className="step-card">
                        <p>
                            Access the E‑Tax website at https://etax.rra.gov.rw or through the RRA website https://www.rra.gov.rw and clicking on ‘Pay Domestic taxes here’ on the right of the screen.
                        </p>
                        <p>Login using the TIN and E‑Tax password.</p>
                        <p>
                            See page 94 if the TIN is not known. If a taxpayer does not know their password, it can be reset by clicking ‘Get Password?’ on the E‑Tax system login and receiving a new password by SMS and email to the address used when registering.
                        </p>
                    </div>
                </section>

                {/* Step 2 */}
                <section className="content-section">
                    <h2>Step 2: Download, complete, validate and save annexures</h2>
                    <div className="step-card">
                        <p>After logging in, the E‑Tax home page is loaded.</p>
                        <p>
                            The first step of declaring domestic taxes is to download, complete and save the annexures of that tax type. To download annexures, hover the mouse over ‘Annexure Downloads’ on the top-right hand side of the E‑Tax homepage, and click on the applicable tax type to download the annexures.
                        </p>
                        <p>
                            This will start a download of a spreadsheet file which can be opened in Microsoft Excel or other spreadsheet software. The annexures differ depending upon the tax type. Annexures have an ‘Instructions’ tab and at least one other tab to be completed. Only the tabs that are relevant to the taxpayer in that tax period need to be completed. Each relevant tab must be completed, validated and saved separately.
                        </p>

                        <div className="example-card">
                            <h3>Example 3</h3>
                            <p>
                                For VAT, the annexure is titled ‘VatAnnexure_1.1.xlsm’. The VAT annexure has six tabs: Instructions, Sales, Purchases, VAT Importation, Deductible VAT Reverse and VAT Retained.
                            </p>
                        </div>

                        <h3>There are five important things to note when completing annexures</h3>
                        <ul>
                            <li>Enabling Content</li>
                            <li>Date Format</li>
                            <li>Blank Cells</li>
                            <li>Mac computers</li>
                            <li>Validating and Saving</li>
                        </ul>

                        <h4>Enabling Content</h4>
                        <p>
                            The first thing that must always be done after opening the spreadsheet is to enable the active content. Without enabling content, it is not possible to validate or save the annexures. The process of enabling content varies depending upon the spreadsheet software.
                        </p>

                        <div className="example-card">
                            <h4>Example 4</h4>
                            <p>
                                To enable content using Microsoft Excel 2007, when the document opens click ‘Options’ on the ‘Security Warning’ at the top of the screen. In the resulting ‘Security Alert – Macros & ActiveX’ box that opens, click to ‘Enable this content’ then ‘OK’.
                            </p>
                        </div>

                        <h4>Date Format</h4>
                        <p>
                            In order to validate the annexure, all dates must be entered in the required format of dd/mm/yyyy. However, it is also important to note that the annexures will not validate if the date settings of the computer are also not in the format of dd/mm/yyyy. The process of changing the date format of the computer varies depending on the operating system; E‑Tax is set to English (UK).
                        </p>

                        <div className="example-card">
                            <h4>Example 5</h4>
                            <p>
                                To change the date settings on Windows 7, click: Control Panel → Clock, Language and Region → Region and Language → Change the date, time or number format → Format: English (United Kingdom) → Short Date: dd/MM/yyyy.
                            </p>
                        </div>

                        <h4>Blank Cells</h4>
                        <p>
                            If any data is entered in a row, then that row must be completed before validating. In addition, the majority of columns cannot be left empty.
                        </p>
                        <div className="example-card">
                            <h4>Example 6</h4>
                            <p>
                                Rukundo is completing the Sales tab of the VAT Annexure. In one particular transaction, there are no Exempt Sales. In order to validate and save correctly, Rukundo must enter ‘0’ in the ‘Exempted Sales Amount’ column instead of leaving it empty.
                            </p>
                        </div>

                        <h4>Mac computers</h4>
                        <p>
                            The E‑Tax system is not yet fully compatible with Apple Mac computers. If the taxpayer is using a Mac computer and the annexure is failing to validate and save, despite enabling the content, using the correct date format and avoiding blank cells, there may be an issue with compatibility. Try again using a Windows computer.
                        </p>

                        <h4>Validating and Saving</h4>
                        <p>
                            For each tab, once all data is entered for the tax period, click the validate button within the excel spreadsheet. This will check that all data is entered in the required formats. If this is the case, it will automatically save a text file under the folder C:/RRA on the user’s local machine. If any of the format rules are violated, it will alert an error message and the file will not be created.
                        </p>
                        <p>Even after the file is created, any changes can still be made. Clicking validate again will overwrite the previous file.</p>
                    </div>
                </section>

                {/* Step 3 */}
                <section className="content-section">
                    <h2>Step 3: Select and complete the declaration form</h2>
                    <div className="step-card">
                        <p>
                            After all the relevant annexures have been downloaded, completed, validated and saved, the declaration form can be completed. Log back into E‑Tax and access the homepage.
                        </p>
                        <p>
                            Hover the mouse over ‘Tax Declaration’ in the left side of the E‑Tax homepage, and then click on ‘New Declaration’. To revise previously submitted declarations, click on ‘Submitted Declarations’.
                        </p>
                        <p>Without changing the type, year or tax type, click ‘Submit’ to continue to the ‘Document Details’ page.</p>
                        <p>
                            The ‘Document Details’ page lists all un-submitted tax declarations. To enter a tax declaration, click on the document number of the relevant tax type and tax period. Ensure the correct tax type and tax period is chosen.
                        </p>
                        <p>
                            If a tax type or period is not available, request for it to be added by visiting RRA offices or calling the RRA Call Centre toll-free on 3004.
                        </p>

                        <div className="example-card">
                            <h3>Example 7</h3>
                            <p>
                                Amahoro enters the details of her monthly VAT declaration. After entering the details in the white boxes, she clicks ‘save’ and the VAT due is calculated automatically.
                            </p>
                        </div>
                        <p>After saving and checking that the fields entered were correct, click ‘Continue with Upload Annexures’.</p>
                    </div>
                </section>

                {/* Step 4 */}
                <section className="content-section">
                    <h2>Step 4: Upload annexures, compare with the declaration form and submit</h2>
                    <div className="step-card">
                        <p>
                            Upload the previously validated and saved annexures as evidence. Each annexure tab is uploaded separately.
                        </p>
                        <div className="example-card">
                            <h3>Example 8</h3>
                            <p>
                                Amahoro uploads ‘Sales’, ‘Local Purchase’, ‘VAT Importation’ and ‘VAT Retained’ annexures as required. She has no ‘Deductible VAT Reverse’ to declare in this tax period, so this annexure is not uploaded.
                            </p>
                        </div>
                        <p>
                            For each applicable annexure, click ‘Upload’, then ‘Choose File’. Annexures are saved in the C:\RRA folder. Click ‘Submit’ and repeat for all relevant annexures. After uploading, click ‘Compare with Declaration’.
                        </p>
                        <p>
                            If the declaration and annexures are equal, certify and click ‘Submit’. If they are not equal, either the declaration or the annexures must be changed until they are equal and accurate. Modify the declaration or delete and re-upload corrected annexures as needed, then submit.
                        </p>

                        <div className="example-card">
                            <h3>Example 9</h3>
                            <p>Amahoro certifies and submits the VAT declaration. The acknowledgement screen appears after successful submission.</p>
                        </div>

                        <p>For more details on acknowledgement receipts and paying taxes due, see page 436.</p>
                    </div>
                </section>

                {/* End of guide */}
            </div>
        </div>
    );
};

export default DomesticTaxesGuide;

