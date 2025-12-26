import { Link } from 'react-router-dom';
import './Templates.css';

export function Templates() {
  // Placeholder templates - will be replaced with actual data
  const templates = [
    {
      id: '1',
      name: 'SaaS Startup',
      description: 'Template for software-as-a-service startups with subscription revenue',
      category: 'Technology',
    },
    {
      id: '2',
      name: 'E-commerce Business',
      description: 'Template for online retail businesses with product sales',
      category: 'Retail',
    },
    {
      id: '3',
      name: 'Service Business',
      description: 'Template for service-based businesses with hourly/project billing',
      category: 'Services',
    },
  ];

  return (
    <div className="templates">
      <div className="templates-header">
        <h1>Templates</h1>
        <p className="templates-subtitle">
          Start with a pre-built template or create your own from scratch
        </p>
      </div>

      <div className="templates-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <div className="template-card-header">
              <h3>{template.name}</h3>
              <span className="template-category">{template.category}</span>
            </div>
            <p className="template-description">{template.description}</p>
            <div className="template-card-actions">
              <Link
                to={`/proforma/new?template=${template.id}`}
                className="btn btn-primary"
              >
                Use Template
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="templates-footer">
        <Link to="/proforma/new" className="btn btn-secondary">
          Create from Scratch
        </Link>
      </div>
    </div>
  );
}



