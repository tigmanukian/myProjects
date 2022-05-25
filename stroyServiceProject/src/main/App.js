import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/layout';
import ContentPage from '../pages/contentpage';
import Home from '../pages/home';
import './App.scss';

function App() {
  return (
    <div className="ss-app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:folder/:file" element={<ContentPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
