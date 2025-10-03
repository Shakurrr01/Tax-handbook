import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const RealRegimeDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Real Regime Income Tax using E-Tax",
      content: [
        {
          type: "paragraph",
          text: "Real Regime Income Tax must be declared using E-Tax."
        },
        {
          type: "paragraph",
          text: "The declaration process for Real Regime using E-Tax is similar to other domestic taxes, as explained on page 97. The process is similar whether the tax type is PIT or CIT."
        },
        {
          type: "paragraph",
          text: "Firstly, download the Real Regime annexures from the E-Tax website, see page 97 for more detail on downloading annexures. The taxpayer must choose the relevant PIT or CIT annexure, but the details required are the same."
        },
        {
          type: "paragraph",
          text: "However, in addition to the annexures, three additional documents are required to be submitted. These are the:"
        },
        {
          type: "list",
          items: [
            "Profit and Loss Account",
            "Balance Sheet", 
            "Company Representative"
          ]
        },
        {
          type: "paragraph",
          text: "In addition, if the taxpayer's annual turnover is above FRW 600,000,000, the 'Certified Financial Statements' annexure must also be uploaded by approved certifying audit firm and then being available on taxpayer's side by RRA tax system. For more details on these additional documents, see page 141."
        },
        {
          type: "paragraph",
          text: "From FY 2025, taxpayers filing for income tax are required to provide the following (if any) through E-Tax, online requests menu, CIT/PIT requests:"
        },
        {
          type: "list",
          items: [
            "Extension of financial reports submission",
            "Exemption of certifying the financial statements",
            "Disclaim the tax incentive to be benefited"
          ]
        },
        {
          type: "paragraph",
          text: "Additionally, taxpayers with uncontrolled expenses (i.e., expenses not supported by EBM receipts, customs declarations, or WHT-supported transactions) are required to record these daily in e-Tax under Income Tax Preparation > Daily Capture of Uncontrolled Expenses > Add Transaction."
        },
        {
          type: "heading",
          text: "Annexures"
        },
        {
          type: "paragraph",
          text: "The Real Regime annexure file has eleven (11) tabs. All tabs need to be completed, validated and saved if applicable to the taxpayer in that tax period. See page 97 if there are any problems when validating annexures."
        },
        {
          type: "heading",
          text: "Depreciation Table Tab"
        },
        {
          type: "paragraph",
          text: "This tab refers to the depreciation that is allowed to be deducted, see page 137 for more details."
        },
        {
          type: "paragraph",
          text: "Buildings, equipment, heavy machinery and intangible assets that have been purchased from a third party must be listed as individual rows."
        },
        {
          type: "paragraph",
          text: "Computers and accessories, information and communication systems, software products and data equipment can be pooled and entered as a single row."
        },
        {
          type: "paragraph",
          text: "All other depreciable business assets (that have not otherwise been mentioned) can be pooled and entered as a single row."
        },
        {
          type: "list",
          items: [
            "Description – Enter a description of the depreciable assets owned by the business.",
            "Book Value Beginning of Period – Enter the book value of any assets that were already owned by the business at the beginning of the tax period. The book value includes any depreciation from previous tax periods.",
            "Acquisition During the Period – Enter the cost price of any assets that were purchased by the business during the tax period.",
            "Disposition During the Period – Enter the book value of any assets that were sold or disposed of by the business during the tax period.",
            "Rate – Enter the rate of depreciation for the type of business assets, without the percentage symbol. For example, depreciation of 10% should be entered as '10'.",
            "Depreciation Allowance for the Period – Enter the value of depreciation allowed to be deducted. This should equal ('Book Value Beginning of Period' + 'Acquisition During the Period' – 'Disposition During the Period') multiplied by 'Rate'.",
            "Book Value End of the Period – Enter the book value of any assets at the end of the tax period. This should equal ('Book Value Beginning of Period' + 'Acquisition During the Period' – 'Disposition During the Period') – 'Depreciation Allowance for the Period'."
          ]
        },
        {
          type: "heading",
          text: "Tax Discounts Tab"
        },
        {
          type: "paragraph",
          text: "This tab refers to tax discounts allowed for within the Law on investment promotion and facilitation and Law establishing taxes on income. Each type of tax discount requires a separate row."
        },
        {
          type: "list",
          items: [
            "Allowance Type – Select the type of tax discount.",
            "Amount on which to Apply Allowances – Enter the amount on which the discount is applied.",
            "Rate Used – Enter the rate of the tax discount.",
            "Amount of Allowance – Enter the amount of the discount allowed to be deducted. This should equal 'Amount on which to Apply Allowances' multiplied by 'Rate Used'%."
          ]
        },
        {
          type: "heading",
          text: "Withholding Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayers who have had tax withheld and paid on their behalf during the tax period. This includes WHT 15%, WHT 3%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% on imports which is included in the 'Withholding 5%' tab."
        },
        {
          type: "paragraph",
          text: "The details required to enter the withholding tab are the same as described on page 153."
        },
        {
          type: "heading",
          text: "Withholding 5% Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayer who has paid withholding tax on imports of 5% (WHT 5%) during the tax period. This does not include any other types of withholding tax, which must be declared in the 'Withholding' tab."
        },
        {
          type: "paragraph",
          text: "The details required to enter the withholding 5% tab are the same as described on page 152."
        },
        {
          type: "heading",
          text: "Debtors Tab"
        },
        {
          type: "paragraph",
          text: "This tab refers to any debts or loans that are owed to the taxpayer in terms of their business. This does not include personal debts owed to the taxpayer as an individual. Each debt requires a separate row."
        },
        {
          type: "list",
          items: [
            "TIN of the Debtor – Enter the TIN of the taxpayer who owes the debt, if applicable.",
            "Debtor's Name – Enter the taxpayer's name who owes the debt, if applicable, or the name of the individual if not.",
            "Description – Enter a brief description of the context and terms of the debt.",
            "Date of Liability (dd/mm/yyyy) – Enter the date that the debt began, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.",
            "Amount Owed – Enter the amount of the debt that is owed by the debtor, including any interest."
          ]
        },
        {
          type: "heading",
          text: "Creditors Tab"
        },
        {
          type: "paragraph",
          text: "This tab refers to any debts or loans that are owed by the taxpayer in terms of their business. This does not include personal debts owed by the taxpayer as an individual. Each credit requires a separate row."
        },
        {
          type: "list",
          items: [
            "TIN of the Creditor – Enter the TIN of the taxpayer who is owed the debt, if applicable.",
            "Creditor's Name – Enter the taxpayer's name, if applicable, or the name of the individual who is owed the debt.",
            "Description – Enter a brief description of the context and terms of the debt.",
            "Date of Liability (dd/mm/yyyy) – Enter the date that the debt began, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.",
            "Amount Owed – Enter the amount of the debt that is owed to the creditor, including any interest."
          ]
        },
        {
          type: "heading",
          text: "Related Party Transactions Tab"
        },
        {
          type: "paragraph",
          text: "This tab must be completed, saved and uploaded by all taxpayers. This is particularly applicable to any taxpayer who has made transactions with any 'related persons', see page 140 for more details. Each transaction requires a separate row."
        },
        {
          type: "paragraph",
          text: "It is important to note that this tab must be completed, saved and uploaded even if there are no applicable transactions. If this is the case, complete a single row entering 'None' for all columns, with the exception of 'Date of transaction (dd/mm/yyyy)' and 'Amount paid' where the final date of the tax year, eg. '31/12/2017' and '0' should be entered respectively."
        },
        {
          type: "list",
          items: [
            "TIN – Supplier TIN if any",
            "Taxpayer Name – Enter supplier name",
            "Tax Period (Year) – Enter the year in which the related transaction happened",
            "Tax Type Desc – Enter CIT or PIT",
            "Name of related person – Enter the name of the person that qualify the transaction to be transfer pricing",
            "Nature of relationship – Enter the relationship type between the client and related person",
            "Country of tax residence – Enter the name of the country where related person resides",
            "Country of incorporation (Where applicable) – Enter the name of the country where the supply is incorporated",
            "Description of transactions (including transfers if any) – Select one of the options from the proposed list in accordance with the transaction",
            "Aggregate value of transactions from related persons ie. Inbound Transactions (Frw**) – Enter the aggregate value of the transaction in FRW",
            "Aggregate value of transactions to related persons ie. Outbound Transactions (Frw**) – Enter the aggregate value of the transaction in FRW",
            "Transfer pricing adjustment (if any) – Percentage () for which transfer pricing documentation has been prepared – Enter a figure without % sign. For example, enter 10 instead of 10%",
            "TP method – Select one of the options from the proposed list in accordance with the transaction",
            "Key Financial Items - Select one of the options from the proposed list in accordance with the transaction",
            "Rwandan Taxpayer – Enter the name of the Rwandan resident taxpayer",
            "Holding Company (Consolidated) FRW",
            "Transactions of capital nature with a connected person",
            "TP method**** for transactions in Column Q -Select one of the options from the proposed list in accordance with the transaction",
            "Value of disposal transactions in column R - Mode of payment for transactions in columns I, J, S"
          ]
        },
        {
          type: "heading",
          text: "Ledger Account"
        },
        {
          type: "list",
          items: [
            "Nature of goods/services – Select one of the options from the proposed list in accordance with the transaction",
            "Category - Select one of the options from the proposed list in accordance with the transaction after selecting nature of goods/services",
            "Suppliers Name – Enter the supplier's name",
            "Country of Origin – Enter the country where goods/services were purchased",
            "Value of goods/services - Enter the value of goods or services",
            "Internal reference – Enter the internal transaction reference recorded in internal books of accounts or internal accounts system for easy reference",
            "Payment mode/reference – Enter the payment channel used to settle the transaction payment",
            "Related rows – Enter declaration form row reference number on which the expense related to transaction will affect for each transaction."
          ]
        },
        {
          type: "heading",
          text: "Real Regime Declaration Form"
        },
        {
          type: "paragraph",
          text: "After all applicable and required Real Regime Annexures been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the Real Regime declaration, see page 103 for more detail on selecting the relevant declaration. The taxpayer must choose the relevant PIT or CIT declaration, but the details required are similar."
        },
        {
          type: "paragraph",
          text: "The Real Regime declaration form requires data on:"
        },
        {
          type: "list",
          items: [
            "Sales/Annual sales – Enter the total income generated by activities within the core operating activities of the business, i.e., the turnover or total sales.",
            "Cost of Goods/Service Sold – Enter the total of all costs used to produce goods or services which gave been sold. This can be calculated as: Cost of Goods Sold = Opening Stock + Purchases – Closing Stock.",
            "Opening Stock – Enter the cost of inventory at the start of the tax period. Enter the figure equals or less than the closing stock of the last year. For new taxpayer into real regime, enter le closing stock of the last year.",
            "Purchases supported by EBM/DMC/WOP – Enter the cost of all inventory purchased during the tax period supported by the relevant document.",
            "Closing Stock – Enter the cost of all inventory at the end of the tax period. Taxpayers with EBM must use the corresponding value in EBM.",
            "Operating Expenses with EBM/DMC/WOP –Enter the total of all expenses associated with the general, sales, and administrative functions of an entity supported by relevant documents. See page' 135 for more details on deductible and not tax-deductible expenses.",
            "Expenses related to the Salaries and Wages – Enter the cost of the employment as per Pay As You Earn (PAYE) declaration of the period. The system rejects the entered value greater than the amount declared on PAYE.",
            "Expenses supported by the Withholding _ Enter the value of transaction supported by declared Withholdings within the period under declaration.",
            "Expenses not requiring EBM or DMC as Supporting Document – Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.",
            "Operating Expenses – The system auto-sums the expenses above.",
            "Depreciation – Enter the total depreciation on business assets during the tax period. See page 137 for the calculation of depreciation. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.",
            "Expenses – PIT only – Enter the total of both 'Operating Expenses' and 'Depreciation' as described above.",
            "Employment Income – PIT only – Enter the total employment income received by the taxpayer.",
            "Investment Income – Enter the total investment income. This includes all payments in cash or in kind in the form of interest, dividends or royalties. In the majority of cases, this will already have been paid as a Withholding Tax, but must still be declared, and then claimed back.",
            "Transport Income – PIT only – Enter the total motor vehicle transport income, excluding any that has been declared separately through M-Declaration. See page 147 for more details on declaring motor vehicle transport income through M-Declaration.",
            "Non-Operating and Extraordinary Income – Enter the total income generated by activities outside of the core operating activities of a business and that are unlikely to recur in the foreseeable future.",
            "Revenue Surplus for Specified Entities Exempted from CIT – Only CIT- Enter the surplus from CIT exempted entities.",
            "Rental Income – CIT only – Enter the total income received in cash or in kind from the rental or leasing of machinery, equipment, land, buildings and livestock.",
            "Employment Deductions – PIT only – Enter any exempt employment income, if this amount has also been included in the 'Employment Income' field. See page 189 for more details on exempt employment income.",
            "Investment Expenses – Enter any expenses relating to maintenance or ownership with the objective of earning future investment income in the form of interest, dividend, royalty or rent. This includes carrying charges and interest expenses. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.",
            "Transport Expenses – PIT only – Enter any expenses relating to motor vehicle transport income, if they have not been included in the 'Expenses' field.",
            "Non-Operating and Extraordinary Expenses – Enter the total expenses incurred by activities outside of the core operating activities of a business and that are unlikely to recur in the foreseeable future. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.",
            "Non-Operating and Extra Ordinary Expenses – Enter expenses incurred to gain Non-Operating and Extra Ordinary Income. However, these expenses cannot be greater than the income generated.",
            "Training and Research Expenses – Enter the total training and research expenses that are incurred for the direct purpose of the business. This does not include any purchases or improvements of immovable property or exploration assets. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.",
            "Accelerated depreciation (Investment Allowances) – Enter the total investment allowances available to registered investors only. Refer to the Law on investment promotion and facilitation for details. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.",
            "Bad Debts – Enter the total deduction allowed for bad debts. A deduction is only allowed if the following criteria are met: loan amount corresponding to the debt was previously declared as income, the debt is written off in the books of the taxpayer, for debts of FRW 3,000,000 or more, the taxpayer has taken all possible steps in pursing payment and has shown proof that the debtor is insolvent, for debts less than FRW 3,000,000, the taxpayer has taken all possible steps in pursuing payment over a period of three years. If any value entered, remember to attach also the court decision in 'Upload annexure'",
            "Rental Expenses – CIT only – Enter the total deduction allowed for rental income from machinery, equipment, land and livestock. The deduction can include: 10% of the rental income as wear-and-tear expense, Interest paid on loans to purchase the rented items, Depreciation expenses equivalent to 5% annually of the cost price of the rented items.",
            "Reintegration of Expenses Not Tax Deductible – Enter any expenses that are not tax deductible, if this amount has also been included in the 'Expenses' field. See page 135 for more details for the types of expenses that are not tax deductible.",
            "Depreciation Adjustments (+/-) – Enter the difference between the depreciation entered in the 'Depreciation' field, and the depreciation basis allowed, if applicable. See page 137 for more details on the depreciation basis.",
            "Fiscal Loss Carried Forward from Previous periods– Enter the total deduction allowed for losses declared, but not yet deducted, in the previous five (5) tax periods. Losses can be deducted against profits, with earlier losses being deducted before later losses.",
            "Non-Taxable Dividends Received – CIT only – Enter the total income of dividends received by the taxpayer, that have already had tax withheld and paid on their behalf.",
            "Tax Discounts – Enter any tax discounts allowed for the taxpayer. The types of tax discounts allowed are subject to change in the Investment Code, see the Rwanda Development Board (RDB) for the latest versions of these laws.",
            "Agricultural and Livestock Activities Exempted Turnover – Enter the value of income from this sector. This value must be less than FRW 12,000,000.",
            "Income Accrued from Saving and Employees Share Scheme – Refer to the tax incentive as per Law establishing Taxes on Income.",
            "RDB domestic tax investment incentives (investment code) & RRA discount (Income tax law) – Refer to the Law on investment promotion and facilitation and Law establishing Taxes on Income.",
            "Foreign Tax Credit – Enter any tax that has been paid on income derived from taxable activities performed abroad that can be substantiated with proof.",
            "Quarterly Prepayments – This field is automatically filled with the Instalment Quarterly Prepayments (IQP) that the taxpayer has already paid corresponding to this tax period.",
            "Withholding on Imports – Enter any tax that has been withheld on imports (WHT 5%) and paid on behalf of the taxpayer during the tax period.",
            "Withholding on Public Supplies – Enter any tax that has been withheld on public supplies (WHT 3%) and paid on behalf of the taxpayer during the tax period.",
            "Withholding on Other Payments – Enter any tax that has been withheld on other payments and paid on behalf of the taxpayer during the tax period.",
            "Withholding on payments (PAYE) – PIT only – Enter any Pay As You Earn (PAYE) that has been withheld and paid on behalf of the taxpayer during the tax period.",
            "Overpayment from Previous Periods – Do not fill this row."
          ]
        },
        {
          type: "paragraph",
          text: "Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically."
        },
        {
          type: "heading",
          text: "Example 23"
        },
        {
          type: "paragraph",
          text: "An example Real Regime PIT declaration form is entered below. The total PIT due to be paid with this declaration is FRW 2,325,515."
        },
        {
          type: "paragraph",
          text: "After saving the declaration form, upload the annexures and then compare with the Real Regime declaration form, see page 107 for more detail on uploading annexures and comparing with declaration forms."
        },
        {
          type: "paragraph",
          text: "It is important to note that the following annexures must be uploaded with all Real Regime declarations:"
        },
        {
          type: "list",
          items: [
            "Balance Sheet Annexure",
            "Profit & Loss A/c Annexure",
            "Company Representative",
            "Related Party Transactions (Transfer Pricing tab)"
          ]
        },
        {
          type: "paragraph",
          text: "In addition, if the taxpayer's annual turnover is above FRW 600,000,000, the 'Certified Financial Statements' annexure must also be uploaded by the approved professional from audit firm on behalf of the taxpayer. See page 139 for more details on these documents. Finally, all relevant annexures must also be uploaded."
        },
        {
          type: "heading",
          text: "Example 24"
        },
        {
          type: "paragraph",
          text: "Continuing the example of the declaration above, the comparison between this declaration form and the uploaded annexures is shown below. As all the comparison values are equal, and all the mandatory annexures uploaded, the declaration can be certified and submitted."
        },
        {
          type: "paragraph",
          text: "Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load."
        },
        {
          type: "paragraph",
          text: "Click to 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. See page 437 for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines."
        },
        {
          type: "heading",
          text: "Real Regime Declaration Form Calculation Summary"
        },
        {
          type: "list",
          items: [
            "Gross Profit = Business Income/Sales – Cost of Goods Sold",
            "Net Operating Income or Loss = Gross Profit – Total Expenses and Depreciation",
            "Total Income = Net Operating Income or Loss + Additional Income",
            "Total Deductions = Additional Expenses + Investment Allowance + Bad Debts",
            "Net Income = Total Income - Total Deductions",
            "Taxable Income = Net Income + Reintegration of Non-Deductible Expenses + Depreciation Adjustments + Loss Carried Forward from Previous Five Tax Periods - Non-Taxable Dividend Received",
            "CIT / PIT payable = (Taxable Income * CIT / PIT tax rates) – All Tax Discounts",
            "Total Credits = Foreign Tax Credit + Quarterly Prepayments + All Withholdings",
            "Net Tax Due = CIT / PIT Payable – Total Credits – Overpayments from Previous Periods"
          ]
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <div className="page-container">
      <h1 className="professional-main-title">{currentContent.title}</h1>
      
      <div className="content-section">
        {currentContent.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index} className="content-paragraph">{item.text}</p>;
          } else if (item.type === 'heading') {
            return <h2 key={index} className="content-heading">{item.text}</h2>;
          } else if (item.type === 'list') {
            return (
              <ul key={index} className="content-list">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="content-list-item">{listItem}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default RealRegimeDeclaration;