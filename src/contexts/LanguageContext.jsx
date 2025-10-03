import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Get language from localStorage or default to English
    const savedLanguage = localStorage.getItem('tax-handbook-language');
    return savedLanguage || 'en';
  });

  const languages = {
    en: { name: 'English', flag: '🇬🇧', code: 'en' }, // England/UK flag for English
    fr: { name: 'Français', flag: '🇫🇷', code: 'fr' }, // France flag for French
    rw: { name: 'Kinyarwanda', flag: '🇷🇼', code: 'rw' } // Rwanda flag for Kinyarwanda
  };

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('tax-handbook-language', languageCode);
    // Update document language for accessibility
    document.documentElement.lang = languageCode;
  };

  useEffect(() => {
    // Set initial document language
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    changeLanguage,
    languages,
    currentLanguageInfo: languages[currentLanguage]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
