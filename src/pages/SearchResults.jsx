const SearchResults = ({ searchQuery }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Search Results</h1>
        <p className="page-subtitle">
          Search results for: "{searchQuery}"
        </p>
      </div>
      <div className="page-content">
        <section className="content-section">
          <h2>Search Functionality</h2>
          <p>Search functionality will be implemented to help users find specific tax information.</p>
        </section>
      </div>
    </div>
  );
};

export default SearchResults;
