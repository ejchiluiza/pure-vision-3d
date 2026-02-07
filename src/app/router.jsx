import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail"; // Nueva importación
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <Home /> },
      { path: "nosotros", element: <About /> },
      { path: "servicios", element: <Services /> },
      { path: "proyectos", element: <Projects /> },
      { path: "proyectos/:id", element: <ProjectDetail /> }, // Ruta dinámica añadida
      { path: "contacto", element: <Contact /> },
    ],
  },
]);