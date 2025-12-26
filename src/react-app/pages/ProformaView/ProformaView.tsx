import { useParams, useNavigate, Link } from 'react-router-dom';
import './ProformaView.css';

export function ProformaView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Placeholder data - will be replaced with actual data fetching
  const proforma = {
    id: id || '1',
    name: 'SaaS Startup Model',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  };

  return (
    <div className="proforma-view">
      <div className="view-header">
        <div>
          <h1>{proforma.name}</h1>
          <p className="view-meta">
            Last updated {new Date(proforma.updatedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="view-actions">
          <Link
            to={`/proforma/${id}/edit`}
            className="btn btn-secondary"
          >
            Edit
          </Link>
          <button className="btn btn-secondary">
            Export PDF
          </button>
          <button className="btn btn-secondary">
            Export Excel
          </button>
        </div>
      </div>

      <div className="view-content">
        <div className="view-section">
          <h2>Summary</h2>
          <div className="summary-grid">
            <div className="summary-card">
              <h3>Total Revenue</h3>
              <p className="summary-value">$0</p>
            </div>
            <div className="summary-card">
              <h3>Total Expenses</h3>
              <p className="summary-value">$0</p>
            </div>
            <div className="summary-card">
              <h3>Net Income</h3>
              <p className="summary-value">$0</p>
            </div>
            <div className="summary-card">
              <h3>Break Even</h3>
              <p className="summary-value">N/A</p>
            </div>
          </div>
        </div>

        <div className="view-section">
          <h2>Assumptions</h2>
          <div className="assumptions-display">
            <p className="text-muted">
              Assumptions will be displayed here once the proforma is configured.
            </p>
          </div>
        </div>

        <div className="view-section">
          <h2>Projections</h2>
          <div className="projections-display">
            <p className="text-muted">
              Projections and charts will be displayed here once calculations are performed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



