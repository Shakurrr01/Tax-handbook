import {
  X,
  ChevronDown,
  ChevronRight,
  Home,
  BookOpen,
  Library,
  Type,
  Scale,
  BarChart3,
  Search,
  DollarSign,
  Gavel,
  CreditCard,
  FileText,
  Gift,
  Mail,
  Smartphone,
  Car,
  User,
  ClipboardList,
  AlertTriangle,
  Calculator,
  Calendar,
  Monitor,
  Receipt,
  RefreshCw,
  FileSpreadsheet,
  Shield,
  HelpCircle,
  Building,
  Globe
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);
  const [expandedSections, setExpandedSections] = useState({
    'home': true,
    'core-taxes-declarations': false,
    'registration-processes': false,
    'other-taxes-entities': false,
    'customs': false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigationItems = [
    {
      id: 'home',
      title: 'Home / Dashboard',
      items: [
        { path: '/', label: 'Home', bold: true },
      ]
    },
    {
      id: 'introduction-basics',
      title: 'Introduction & Basics',
      items: [
        { path: '/introduction', label: 'Introduction', icon: <BookOpen size={14} /> },
      ]
    },
    {
      id: 'core-taxes-declarations',
      title: 'Core Taxes & Declarations',
      items: [
        { path: '/domestic-taxes', label: 'Domestic Taxes', icon: <FileText size={14} /> },
        { path: '/core-taxes', label: 'Core Taxes', icon: <DollarSign size={14} /> },
      ]
    },
    {
      id: 'registration-processes',
      title: 'Registration & Processes',
      items: [
        { path: '/registration', label: 'Registration', icon: <User size={14} /> },
        { path: '/paying-taxes', label: 'Paying Taxes', icon: <CreditCard size={14} /> },
      ]
    },
    {
      id: 'other-taxes-entities',
      title: 'Other Taxes & Entities',
      items: [
        { path: '/other-taxes', label: 'Other Taxes', icon: <Building size={14} /> },
        { path: '/local-government-taxes-explanation', label: 'Decentralised Entities', icon: <Building size={14} /> },
        { path: '/excise-duty-explanation', label: 'Excise Duty', icon: <DollarSign size={14} /> },
      ]
    },
    {
      id: 'customs',
      title: 'Customs',
      items: [
        { path: '/customs', label: 'Customs Hub', icon: <Globe size={14} /> },
        { path: '/customs-explanation', label: 'Customs Explanation', icon: <BookOpen size={14} /> },
        { path: '/customs-duties', label: 'Customs Duties', icon: <FileSpreadsheet size={14} /> },
      ]
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <nav className="sidebar-nav">
          <div className="sidebar-close-section">
            <button className="close-button" onClick={onClose}>
              <X size={16} />
            </button>
          </div>
          {navigationItems.map((section) => (
            <div key={section.id} className="nav-section">
              <button
                className="section-header"
                onClick={() => toggleSection(section.id)}
              >
                <span className="text-xs font-medium text-gray-700">{section.title}</span>
                {expandedSections[section.id] ? (
                  <ChevronDown size={12} />
                ) : (
                  <ChevronRight size={12} />
                )}
              </button>

              {expandedSections[section.id] && (
                <ul
                  className={`nav-items ${expandedSections[section.id] ? 'open' : ''}`}
                  style={{
                    maxHeight: expandedSections[section.id] ? '800px' : '0',
                    overflow: expandedSections[section.id] ? 'visible' : 'hidden'
                  }}
                >
                  {section.items.map((item) => (
                    <li key={item.path || item.href}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`nav-item ${isActive(item.path)}`}
                        >
                          {item.icon ? (
                            <span className="nav-icon">{item.icon}</span>
                          ) : (
                            <span className="nav-icon" />
                          )}
                          <span className={`nav-label text-xs${item.bold ? ' bold' : ''}`}>{item.label}</span>
                          <span className="external-icon text-xs">↗</span>
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className={`nav-item ${isActive(item.path)}`}
                          onClick={onClose}
                        >
                          {item.icon ? (
                            <span className="nav-icon">{item.icon}</span>
                          ) : (
                            <span className="nav-icon" />
                          )}
                          <span className={`nav-label text-xs${item.bold ? ' bold' : ''}`}>{item.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
