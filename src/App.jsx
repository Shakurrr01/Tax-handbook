import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import RRAInfo from './pages/RRAInfo';
import Definitions from './pages/Definitions';
import Acronyms from './pages/Acronyms';
import LawsRulings from './pages/LawsRulings';
import Obligations from './pages/Obligations';
import Audits from './pages/Audits';
import Refunds from './pages/Refunds';
import Appeals from './pages/Appeals';
import DebtManagement from './pages/DebtManagement';
import Certificates from './pages/Certificates';
import VATReward from './pages/VATReward';
import CommunicateRRA from './pages/CommunicateRRA';
import OnlineRequests from './pages/OnlineRequests';
import MotorVehicle from './pages/MotorVehicle';
import MyRRA from './pages/MyRRA';
import Registration from './pages/Registration';
import DomesticTaxes from './pages/DomesticTaxes';
import DomesticTaxesExplanation from './pages/DomesticTaxesExplanation';
import DomesticTaxesGuide from './pages/DomesticTaxesGuide';
import DomesticTaxesPenalties from './pages/DomesticTaxesPenalties';
import IncomeTax from './pages/IncomeTax';
import VAT from './pages/VAT';
import ExciseDuty from './pages/ExciseDuty';
import ExciseDutyExplanation from './pages/ExciseDutyExplanation';
import ExciseDutyDeclaration from './pages/ExciseDutyDeclaration';
import WithholdingTaxes from './pages/WithholdingTaxes';
import WithholdingTaxesExplanation from './pages/WithholdingTaxesExplanation';
import WithholdingTaxesDeclaration from './pages/WithholdingTaxesDeclaration';
import GamingTaxes from './pages/GamingTaxes';
import RegistrationExplanation from './pages/RegistrationExplanation';
import RegistrationGuide from './pages/RegistrationGuide';
import GamingTaxesExplanation from './pages/GamingTaxesExplanation';
import GamingTaxesDeclaration from './pages/GamingTaxesDeclaration';
import GamingTaxesPenalties from './pages/GamingTaxesPenalties';
import MiningRoyaltyExplanation from './pages/MiningRoyaltyExplanation';
import MiningRoyaltyDeclaration from './pages/MiningRoyaltyDeclaration';
import CapitalGainsTax from './pages/CapitalGainsTax';
import CapitalGainsTaxExplanation from './pages/CapitalGainsTaxExplanation';
import CapitalGainsTaxDeclaration from './pages/CapitalGainsTaxDeclaration';
import LocalGovernmentTaxes from './pages/LocalGovernmentTaxes';
import LocalGovernmentTaxesExplanation from './pages/LocalGovernmentTaxesExplanation';
import ImmovablePropertyTax from './pages/ImmovablePropertyTax';
import TradingLicenseTax from './pages/TradingLicenseTax';
import RentalIncomeTax from './pages/RentalIncomeTax';
import RoadMaintenanceExplanation from './pages/RoadMaintenanceExplanation';
import RoadMaintenanceDeclaration from './pages/RoadMaintenanceDeclaration';
import TourismTaxExplanation from './pages/TourismTaxExplanation';
import TourismTaxDeclaration from './pages/TourismTaxDeclaration';
import Customs from './pages/Customs';
import PayingTaxes from './pages/PayingTaxes';
import Deregistration from './pages/Deregistration';
import SearchResults from './pages/SearchResults';
import './App.css';

import Disclaimer from './pages/Disclaimer';
import Foreword from './pages/Foreword';
import VDS from './pages/VDS';
import ExchangeInfo from './pages/ExchangeInfo';
import IncomeTaxExplanation from './pages/IncomeTaxExplanation';
import RealRegimeDetails from './pages/RealRegimeDetails';
import MDeclarationFlatLumpIQP from './pages/MDeclarationFlatLumpIQP';
import MDeclarationMotorVehicle from './pages/MDeclarationMotorVehicle';
import FlatTaxDeclaration from './pages/FlatTaxDeclaration';
import LumpSumDeclaration from './pages/LumpSumDeclaration';
import InstalmentPayments from './pages/InstalmentPayments';
import PayeExplanation from './pages/PayeExplanation';
import PayeDeclaration from './pages/PayeDeclaration';
import VatExplanation from './pages/VatExplanation';
import VatDeclaration from './pages/VatDeclaration';
import EisExplanation from './pages/EisExplanation';
import EisPenalties from './pages/EisPenalties';
import LgtRegistration from './pages/LgtRegistration';
import LgtDeclaration from './pages/LgtDeclaration';
import LgtPenalties from './pages/LgtPenalties';
import IntroductionBasics from './pages/IntroductionBasics';
import CoreTaxesDeclarations from './pages/CoreTaxesDeclarations';
import RegistrationProcesses from './pages/RegistrationProcesses';
import OtherTaxesEntities from './pages/OtherTaxesEntities';
import CustomsHub from './pages/CustomsHub';
import DomesticTaxesLanding from './pages/DomesticTaxesLanding';
import CoreTaxesLanding from './pages/CoreTaxesLanding';
import PitCitLanding from './pages/PitCitLanding';
import PayeLanding from './pages/PayeLanding';
import OtherTaxesLanding from './pages/OtherTaxesLanding';
import OtherTaxSubmenuLanding from './pages/OtherTaxSubmenuLanding';
import VatUnified from './pages/VatUnified';
import EisUnified from './pages/EisUnified';
import ExciseUnified from './pages/ExciseUnified';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="main-container">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/foreword" element={<Foreword />} />
                <Route path="/rra-info" element={<RRAInfo />} />
                <Route path="/definitions" element={<Definitions />} />
                <Route path="/acronyms" element={<Acronyms />} />
                <Route path="/laws-rulings" element={<LawsRulings />} />
                <Route path="/obligations" element={<Obligations />} />
                <Route path="/audits" element={<Audits />} />
                <Route path="/refunds" element={<Refunds />} />
                <Route path="/appeals" element={<Appeals />} />
                <Route path="/debt-management" element={<DebtManagement />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/vds" element={<VDS />} />
                <Route path="/vat-reward" element={<VATReward />} />
                <Route path="/communicate-rra" element={<CommunicateRRA />} />
                <Route path="/online-requests" element={<OnlineRequests />} />
                <Route path="/exchange-info" element={<ExchangeInfo />} />
                <Route path="/motor-vehicle" element={<MotorVehicle />} />
                <Route path="/myrra" element={<MyRRA />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/registration-explanation" element={<RegistrationExplanation />} />
                <Route path="/registration-guide" element={<RegistrationGuide />} />
                <Route path="/domestic-taxes" element={<DomesticTaxes />} />
                <Route path="/domestic-taxes-explanation" element={<DomesticTaxesExplanation />} />
                <Route path="/domestic-taxes-guide" element={<DomesticTaxesGuide />} />
                <Route path="/domestic-taxes-penalties" element={<DomesticTaxesPenalties />} />
                <Route path="/income-tax" element={<IncomeTax />} />
                <Route path="/income-tax-explanation" element={<IncomeTaxExplanation />} />
                <Route path="/real-regime-details" element={<RealRegimeDetails />} />
                <Route path="/m-declaration-flat-lump-iqp" element={<MDeclarationFlatLumpIQP />} />
                <Route path="/m-declaration-motor-vehicle" element={<MDeclarationMotorVehicle />} />
                <Route path="/flat-tax-declaration" element={<FlatTaxDeclaration />} />
                <Route path="/lump-sum-declaration" element={<LumpSumDeclaration />} />
                <Route path="/instalment-payments" element={<InstalmentPayments />} />
                <Route path="/paye-explanation" element={<PayeExplanation />} />
                <Route path="/paye-declaration" element={<PayeDeclaration />} />
                <Route path="/vat-explanation" element={<VatExplanation />} />
                <Route path="/vat-declaration" element={<VatDeclaration />} />
                <Route path="/eis-explanation" element={<EisExplanation />} />
                <Route path="/eis-penalties" element={<EisPenalties />} />
                <Route path="/vat" element={<VAT />} />
                <Route path="/excise-duty" element={<ExciseDuty />} />
                <Route path="/excise-duty-explanation" element={<ExciseDutyExplanation />} />
                <Route path="/excise-duty-declaration" element={<ExciseDutyDeclaration />} />
                <Route path="/withholding-taxes" element={<WithholdingTaxes />} />
                <Route path="/withholding-taxes-explanation" element={<WithholdingTaxesExplanation />} />
                <Route path="/withholding-taxes-declaration" element={<WithholdingTaxesDeclaration />} />
                <Route path="/gaming-taxes" element={<GamingTaxes />} />
                <Route path="/gaming-taxes-explanation" element={<GamingTaxesExplanation />} />
                <Route path="/gaming-taxes-declaration" element={<GamingTaxesDeclaration />} />
                <Route path="/gaming-taxes-penalties" element={<GamingTaxesPenalties />} />
                <Route path="/mining-royalty-explanation" element={<MiningRoyaltyExplanation />} />
                <Route path="/mining-royalty-declaration" element={<MiningRoyaltyDeclaration />} />
                <Route path="/capital-gains-tax" element={<CapitalGainsTax />} />
                <Route path="/capital-gains-tax-explanation" element={<CapitalGainsTaxExplanation />} />
                <Route path="/capital-gains-tax-declaration" element={<CapitalGainsTaxDeclaration />} />
                <Route path="/local-government-taxes" element={<LocalGovernmentTaxes />} />
                <Route path="/local-government-taxes-explanation" element={<LocalGovernmentTaxesExplanation />} />
                <Route path="/immovable-property-tax" element={<ImmovablePropertyTax />} />
                <Route path="/trading-license-tax" element={<TradingLicenseTax />} />
                <Route path="/rental-income-tax" element={<RentalIncomeTax />} />
                <Route path="/road-maintenance-explanation" element={<RoadMaintenanceExplanation />} />
                <Route path="/road-maintenance-declaration" element={<RoadMaintenanceDeclaration />} />
                <Route path="/tourism-tax-explanation" element={<TourismTaxExplanation />} />
                <Route path="/tourism-tax-declaration" element={<TourismTaxDeclaration />} />
                <Route path="/customs" element={<CustomsHub />} />
                <Route path="/paying-taxes" element={<PayingTaxes />} />
                <Route path="/deregistration" element={<Deregistration />} />
                <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
                <Route path="/lgt-registration" element={<LgtRegistration />} />
                <Route path="/lgt-declaration" element={<LgtDeclaration />} />
                <Route path="/lgt-penalties" element={<LgtPenalties />} />
                <Route path="/introduction-basics" element={<IntroductionBasics />} />
                <Route path="/core-taxes-declarations" element={<CoreTaxesDeclarations />} />
                <Route path="/registration-processes" element={<RegistrationProcesses />} />
                <Route path="/other-taxes-entities" element={<OtherTaxesEntities />} />
                <Route path="/domestic-taxes" element={<DomesticTaxesLanding />} />
                <Route path="/core-taxes" element={<CoreTaxesLanding />} />
                <Route path="/pit-cit" element={<PitCitLanding />} />
                <Route path="/paye" element={<PayeLanding />} />
                <Route path="/other-taxes" element={<OtherTaxesLanding />} />
                <Route path="/other-tax-submenu" element={<OtherTaxSubmenuLanding />} />
                <Route path="/vat-unified" element={<VatUnified />} />
                <Route path="/eis-unified" element={<EisUnified />} />
                <Route path="/excise-unified" element={<ExciseUnified />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
