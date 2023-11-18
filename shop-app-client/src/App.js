import { BrowserRouter, Route, Routes } from 'react-router-dom';
import kid_banner from './components/Assets/banner_kids.png';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import { LayoutNoSidebar } from './components/Layout';
import Cart from './pages/user/Cart/Cart';
import Product from './pages/user/Product/Product';
import ShopCategory from './pages/user/ShopCategory/ShopCategory';
import { publicRoutes } from './routes';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/men' element={<><ShopCategory banner={men_banner} category="men" /><LayoutNoSidebar /></>}/>
          <Route path='/women' element={<><ShopCategory banner={women_banner} category="women" /><LayoutNoSidebar /></>}/>
          <Route path='/kid' element={<><ShopCategory banner={kid_banner} category="kid" /><LayoutNoSidebar /></>}/>
          <Route path="/product" element={<><Product /><LayoutNoSidebar /></>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<><Cart /><LayoutNoSidebar /></>}/>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            const Layout = route.layout
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
