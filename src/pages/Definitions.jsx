import { useState } from 'react';
import { BookOpen, FileText, CreditCard, Calendar, AlertTriangle, CheckCircle, DollarSign, Building, User, Calculator, Clock, TrendingUp, Shield, RefreshCw, Package, Coins, Star } from 'lucide-react';

const Definitions = () => {
  const [favorites, setFavorites] = useState(new Set());

  const definitions = [
    {
      term: "Taxpayer",
      definition: "Any individual, legal entity (company, organisation, institution) or association of individuals (cooperative) subject to tax under Rwandan tax laws. Each must have a TIN.",
      icon: User,
      category: "Core Concepts",
      importance: "high"
    },
    {
      term: "TIN",
      definition: "Taxpayer Identification Number - unique reference for all RRA interactions. No taxpayer should have more than one TIN per business.",
      icon: Building,
      category: "Core Concepts",
      importance: "high"
    },
    {
      term: "Registration",
      definition: "Two types: business/individual registration for TIN, and tax type registration when requirements are met.",
      icon: FileText,
      category: "Process Steps",
      importance: "medium"
    },
    {
      term: "Declaration",
      definition: "Tax filing submission each period containing all required information, annexures, and forms for tax calculation.",
      icon: Calculator,
      category: "Process Steps",
      importance: "high"
    },
    {
      term: "Payment",
      definition: "Tax payment to correct RRA account using the reference number received after declaration.",
      icon: CreditCard,
      category: "Process Steps",
      importance: "high"
    },
    {
      term: "Tax Period",
      definition: "Time period the declaration refers to, varying by tax type. Not the same as deadline or declaration date.",
      icon: Calendar,
      category: "Timing & Deadlines",
      importance: "medium"
    },
    {
      term: "Deadline",
      definition: "Date by which declarations and payments must be submitted to avoid penalties. Filing period between tax period end and deadline.",
      icon: Clock,
      category: "Timing & Deadlines",
      importance: "high"
    },
    {
      term: "Transaction",
      definition: "Any payment or exchange of goods/services being bought or sold.",
      icon: TrendingUp,
      category: "Business Terms",
      importance: "medium"
    },
    {
      term: "Annexures",
      definition: "Additional spreadsheets with separate tabs for different transaction aspects during declaration.",
      icon: FileText,
      category: "Process Steps",
      importance: "medium"
    },
    {
      term: "Declaration Form",
      definition: "Key information submission with totals of all relevant transactions during the tax period.",
      icon: FileText,
      category: "Process Steps",
      importance: "high"
    },
    {
      term: "Turnover",
      definition: "Total value of sales in a tax period (revenue, business income, total sales). Not the same as profit.",
      icon: TrendingUp,
      category: "Business Terms",
      importance: "medium"
    },
    {
      term: "Compliance",
      definition: "Fulfilling all tax obligations: registering, declaring accurately, paying on time. Non-compliance leads to penalties.",
      icon: CheckCircle,
      category: "Legal & Compliance",
      importance: "high"
    },
    {
      term: "Arrears",
      definition: "Amounts owed to RRA including unpaid taxes after deadline, penalties, fines, and interests.",
      icon: AlertTriangle,
      category: "Legal & Compliance",
      importance: "medium"
    },
    {
      term: "Refunds",
      definition: "VAT amounts owed by RRA to taxpayers (tax credits for other types). Received as cash or credit notes.",
      icon: RefreshCw,
      category: "Financial Terms",
      importance: "medium"
    },
    {
      term: "Consignment",
      definition: "Group of goods declared together when importing/exporting (container load, truck load).",
      icon: Package,
      category: "Trade & Customs",
      importance: "low"
    },
    {
      term: "FRW",
      definition: "Rwandan Francs - currency for all declarations and payments unless otherwise specified.",
      icon: Coins,
      category: "Financial Terms",
      importance: "medium"
    }
  ];


  const toggleFavorite = (term) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(term)) {
      newFavorites.delete(term);
    } else {
      newFavorites.add(term);
    }
    setFavorites(newFavorites);
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'high': return '#1e40af'; // RRA Blue
      case 'medium': return '#eab308'; // RRA Yellow
      case 'low': return '#16a34a'; // RRA Green
      default: return '#6b7280';
    }
  };

  const getImportanceLabel = (importance) => {
    switch (importance) {
      case 'high': return 'Critical';
      case 'medium': return 'Important';
      case 'low': return 'Reference';
      default: return 'Standard';
    }
  };

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <BookOpen size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Tax Definitions</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Comprehensive glossary of essential terms and concepts in Rwandan tax administration
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="definitions-content">


        {/* Definitions Grid */}
        <div className="definitions-grid">
          {definitions.map((item, index) => {
            const IconComponent = item.icon;
            const isFavorite = favorites.has(item.term);

            return (
              <div key={index} className="definition-card">
                <div className="definition-header">
                  <div className="definition-icon">
                    <IconComponent size={20} />
                  </div>
                  <div className="definition-meta">
                    <div className="importance-badge" style={{ backgroundColor: getImportanceColor(item.importance) }}>
                      {getImportanceLabel(item.importance)}
                    </div>
                    <button
                      className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                      onClick={() => toggleFavorite(item.term)}
                      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Star size={14} fill={isFavorite ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                <div className="definition-content">
                  <h3 className="definition-term">{item.term}</h3>
                  <p className="definition-text">{item.definition}</p>
                </div>

                <div className="definition-footer">
                  <span className="category-tag">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>


        {/* Favorites Section */}
        {favorites.size > 0 && (
          <div className="favorites-section">
            <h2>Your Favorites</h2>
            <div className="favorites-list">
              {Array.from(favorites).map(term => {
                const definition = definitions.find(def => def.term === term);
                if (!definition) return null;
                const IconComponent = definition.icon;

                return (
                  <div key={term} className="favorite-item">
                    <IconComponent size={16} />
                    <span className="favorite-term">{term}</span>
                    <button
                      className="remove-favorite"
                      onClick={() => toggleFavorite(term)}
                      title="Remove from favorites"
                    >
                      ×
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Definitions;
