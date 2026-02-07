import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        {/* Aquí se renderizarán las páginas dinámicamente */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;