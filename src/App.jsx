import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, RedirectPage, Page404 } from './pages';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:alias" element={<RedirectPage />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
