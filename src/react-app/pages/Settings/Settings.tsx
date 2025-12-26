import './Settings.css';

export function Settings() {
  return (
    <div className="settings">
      <div className="settings-header">
        <h1>Settings</h1>
        <p className="settings-subtitle">
          Manage your account preferences and default settings
        </p>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h2>Default Assumptions</h2>
          <div className="form-group">
            <label htmlFor="default-time-horizon">Default Time Horizon (months)</label>
            <input
              type="number"
              id="default-time-horizon"
              defaultValue="12"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="default-projection-period">Default Projection Period</label>
            <select id="default-projection-period" className="form-input">
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>Export Preferences</h2>
          <div className="form-group">
            <label htmlFor="default-export-format">Default Export Format</label>
            <select id="default-export-format" className="form-input">
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>Account</h2>
          <div className="form-group">
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              id="user-email"
              placeholder="user@example.com"
              className="form-input"
            />
          </div>
        </div>

        <div className="settings-actions">
          <button className="btn btn-primary">Save Changes</button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
}



