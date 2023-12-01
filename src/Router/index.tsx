import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blog } from '../views/blog';
import { MainLayout } from '../layouts/main-layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
