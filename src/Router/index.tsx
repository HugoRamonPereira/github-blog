import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blog } from '../views/blog';
import { MainLayout } from '../layouts/main-layout';
import { Post } from '../views/post';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Blog />} />
          <Route path='/post/:id' element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
