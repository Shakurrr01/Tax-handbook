import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
// import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';
// import './LanguageSelector.css';

const Header = ({ onMenuClick, searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="menu-button" onClick={onMenuClick}>
            <Menu size={24} />
          </button>
          <Link to="/" className="logo">
            <div className="logo-content">
              <img
                src="/images/rra-logo.png"
                alt="RRA Logo"
                className="logo-image"
              />
            </div>
          </Link>
        </div>

        <div className="header-center">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
              <input
                type="text"
                placeholder={t('header.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="clear-search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button type="submit" className="search-button">
              {t('header.searchButton')}
            </button>
          </form>
        </div>

        <div className="header-right">
          <div className="header-actions">
            {/* <LanguageSelector /> */}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
