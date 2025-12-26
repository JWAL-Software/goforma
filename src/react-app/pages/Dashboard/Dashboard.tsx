import { Link } from 'react-router-dom';
import './Dashboard.css';

export function Dashboard() {
  // Placeholder data - will be replaced with actual data fetching
  const recentProformas = [
    { id: '1', name: 'SaaS Startup Model', updatedAt: '2024-01-15' },
    { id: '2', name: 'E-commerce Projection', updatedAt: '2024-01-10' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <Link to="/proforma/new" className="btn btn-primary">
          Create New Proforma
        </Link>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Proformas</h3>
          <p className="stat-value">{recentProformas.length}</p>
        </div>
        <div className="stat-card">
          <h3>Active Projects</h3>
          <p className="stat-value">{recentProformas.length}</p>
        </div>
        <div className="stat-card">
          <h3>Last Updated</h3>
          <p className="stat-value">Today</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Recent Proformas</h2>
        {recentProformas.length > 0 ? (
          <div className="proforma-list">
            {recentProformas.map((proforma) => (
              <Link
                key={proforma.id}
                to={`/proforma/${proforma.id}`}
                className="proforma-card"
              >
                <h3>{proforma.name}</h3>
                <p className="proforma-meta">
                  Updated {new Date(proforma.updatedAt).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No proformas yet. Create your first one to get started!</p>
            <Link to="/proforma/new" className="btn btn-primary">
              Create Proforma
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}



