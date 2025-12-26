import { Link, Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-header-content">
          <Link to="/" className="logo">
            <h1>GoForma</h1>
          </Link>
          <nav className="layout-nav">
            <Link 
              to="/" 
              className={isActive('/') && !isActive('/proforma') ? 'active' : ''}
            >
              Dashboard
            </Link>
            <Link 
              to="/proforma/new" 
              className={isActive('/proforma') ? 'active' : ''}
            >
              New Proforma
            </Link>
            <Link 
              to="/templates" 
              className={isActive('/templates') ? 'active' : ''}
            >
              Templates
            </Link>
            <Link 
              to="/settings" 
              className={isActive('/settings') ? 'active' : ''}
            >
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
}



