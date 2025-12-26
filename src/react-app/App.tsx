import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { ProformaEditor } from './pages/ProformaEditor/ProformaEditor';
import { ProformaView } from './pages/ProformaView/ProformaView';
import { Templates } from './pages/Templates/Templates';
import { Settings } from './pages/Settings/Settings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="proforma/new" element={<ProformaEditor />} />
          <Route path="proforma/:id" element={<ProformaView />} />
          <Route path="proforma/:id/edit" element={<ProformaEditor />} />
          <Route path="templates" element={<Templates />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
