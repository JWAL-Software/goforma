import { useParams, useNavigate } from 'react-router-dom';
import './ProformaEditor.css';

export function ProformaEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = id === 'new';

  return (
    <div className="proforma-editor">
      <div className="editor-header">
        <h1>{isNew ? 'Create New Proforma' : 'Edit Proforma'}</h1>
        <div className="editor-actions">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="btn btn-primary">
            {isNew ? 'Create' : 'Save'}
          </button>
        </div>
      </div>

      <div className="editor-content">
        <div className="editor-section">
          <h2>Basic Information</h2>
          <div className="form-group">
            <label htmlFor="proforma-name">Proforma Name</label>
            <input
              type="text"
              id="proforma-name"
              placeholder="e.g., SaaS Startup Model"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="proforma-description">Description (Optional)</label>
            <textarea
              id="proforma-description"
              placeholder="Describe your proforma..."
              className="form-textarea"
              rows={3}
            />
          </div>
        </div>

        <div className="editor-section">
          <h2>Assumptions</h2>
          <div className="assumptions-grid">
            <div className="form-group">
              <label htmlFor="initial-revenue">Initial Revenue</label>
              <input
                type="number"
                id="initial-revenue"
                placeholder="0"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="growth-rate">Growth Rate (%)</label>
              <input
                type="number"
                id="growth-rate"
                placeholder="0"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="time-horizon">Time Horizon (months)</label>
              <input
                type="number"
                id="time-horizon"
                placeholder="12"
                className="form-input"
              />
            </div>
          </div>
        </div>

        <div className="editor-section">
          <h2>Projections</h2>
          <div className="projections-placeholder">
            <p>Projections will be calculated based on your assumptions.</p>
            <p className="text-muted">
              This section will display charts and tables once assumptions are entered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



