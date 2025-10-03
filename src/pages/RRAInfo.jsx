import { Phone, Mail, MapPin, Globe, Clock, Users } from 'lucide-react';

const RRAInfo = () => {
  const contactInfo = {
    headquarters: {
      address: "KN 3 Rd, Kigali, Rwanda",
      phone: "+250 788 386 220",
      email: "info@rra.gov.rw",
      website: "https://www.rra.gov.rw"
    },
    callCenter: {
      phone: "3004",
      description: "Toll-free call center for all inquiries"
    },
    offices: [
      {
        name: "Kigali Tax Centre",
        address: "KN 3 Rd, Kigali",
        phone: "+250 788 386 220"
      },
      {
        name: "Huye Tax Centre",
        address: "Huye District",
        phone: "+250 788 386 221"
      },
      {
        name: "Musanze Tax Centre",
        address: "Musanze District",
        phone: "+250 788 386 222"
      }
    ]
  };

  const departments = [
    {
      name: "Domestic Taxes",
      description: "Handles all domestic tax operations including Income Tax, VAT, PAYE, and Excise Duty",
      contact: "+250 788 386 230"
    },
    {
      name: "Customs",
      description: "Manages import/export procedures, customs duties, and border operations",
      contact: "+250 788 386 240"
    },
    {
      name: "Registration",
      description: "Handles business registration, TIN issuance, and tax type registration",
      contact: "+250 788 386 250"
    },
    {
      name: "Audit",
      description: "Conducts tax audits and compliance verification",
      contact: "+250 788 386 260"
    },
    {
      name: "Debt Management",
      description: "Manages tax arrears, payment plans, and debt collection",
      contact: "+250 788 386 270"
    }
  ];

  const services = [
    {
      name: "E-Tax System",
      description: "Online tax declaration and payment system",
      url: "https://etax.rra.gov.rw"
    },
    {
      name: "LGT System",
      description: "Local Government Taxes declaration system",
      url: "https://localgov.rra.gov.rw"
    },
    {
      name: "M-Declaration",
      description: "Mobile phone tax declaration service",
      note: "Dial *800# to access"
    },
    {
      name: "RRA Website",
      description: "Official website with comprehensive information",
      url: "https://www.rra.gov.rw"
    }
  ];

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Users size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">RRA Information</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Contact information, organizational structure, and services provided by Rwanda Revenue Authority
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Overview Section */}
        <section className="content-section">
          <h2>About RRA</h2>
          <div className="info-card">
            <div className="info-icon">
              <Users size={24} />
            </div>
            <div className="info-content">
              <p>
                Rwanda Revenue Authority (RRA) is the government agency responsible for tax administration 
                in Rwanda. Our mission is to collect taxes efficiently and fairly, while providing excellent 
                service to taxpayers and contributing to Rwanda's development.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="content-section">
          <h2>Contact Information</h2>
          
          <div className="contact-grid">
            <div className="contact-card primary">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <h3>Headquarters</h3>
              <div className="contact-details">
                <p><strong>Address:</strong> {contactInfo.headquarters.address}</p>
                <p><strong>Phone:</strong> {contactInfo.headquarters.phone}</p>
                <p><strong>Email:</strong> {contactInfo.headquarters.email}</p>
                <p><strong>Website:</strong> {contactInfo.headquarters.website}</p>
              </div>
            </div>

            <div className="contact-card accent">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <h3>Call Center</h3>
              <div className="contact-details">
                <p><strong>Toll-free:</strong> {contactInfo.callCenter.phone}</p>
                <p>{contactInfo.callCenter.description}</p>
              </div>
            </div>
          </div>

          <h3>Regional Offices</h3>
          <div className="offices-grid">
            {contactInfo.offices.map((office, index) => (
              <div key={index} className="office-card">
                <h4>{office.name}</h4>
                <p><strong>Address:</strong> {office.address}</p>
                <p><strong>Phone:</strong> {office.phone}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Departments Section */}
        <section className="content-section">
          <h2>Departments</h2>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
                <div className="department-contact">
                  <Phone size={16} />
                  <span>{dept.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="content-section">
          <h2>Digital Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                {service.url ? (
                  <a 
                    href={service.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    <Globe size={16} />
                    Access Service
                  </a>
                ) : (
                  <span className="service-note">{service.note}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Operating Hours Section */}
        <section className="content-section">
          <h2>Operating Hours</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <div className="hours-icon">
                <Clock size={24} />
              </div>
              <h3>Office Hours</h3>
              <div className="hours-details">
                <p><strong>Monday - Friday:</strong> 7:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 8:00 AM - 12:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            <div className="hours-card">
              <div className="hours-icon">
                <Globe size={24} />
              </div>
              <h3>Online Services</h3>
              <div className="hours-details">
                <p><strong>E-Tax System:</strong> 24/7</p>
                <p><strong>M-Declaration:</strong> 24/7</p>
                <p><strong>LGT System:</strong> 24/7</p>
              </div>
            </div>
          </div>
        </section>


        {/* Important Notice Section */}
        <section className="content-section">
          <div className="notice-card info">
            <div className="notice-icon">
              <Phone size={24} />
            </div>
            <div className="notice-content">
              <h3>Need Help?</h3>
              <p>
                For any questions about taxes, registration, or RRA services, please contact our 
                call center at <strong>3004</strong> (toll-free) or visit any of our offices. 
                Our staff is ready to assist you with all your tax-related needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RRAInfo;
