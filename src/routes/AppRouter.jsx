import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Layout
import Layout from "../modules/app/components/Layout.jsx";

// Pages privadas
import DashboardPage from "../modules/app/pages/dashboardPage.jsx";
import Cuartos from "../modules/cuartos/Page/cuartosuser.jsx";
import Permspage from "../modules/permits/page/permsPage.jsx";
import ProductsPage from "../modules/product/pages/productPage.jsx";
import ProvidersPage from "../modules/provider/pages/providerPage.jsx";
import RolePage from "../modules/role/pages/rolePage.jsx";
import UsersPage from "../modules/user/pages/userPage.jsx";

// Pages públicas
import LoginPage from "../modules/app/pages/LoginPage.jsx";
import RegisterPage from "../modules/app/pages/RegisterPage.jsx";

// Seguridad
import Can from "../components/can.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= RUTAS PUBLICAS ================= */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ================= RUTAS PRIVADAS ================= */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Cuartos */}
          <Route path="/cuartos" element={<Cuartos />} />

          {/* Productos */}
          <Route
            path="/productos"
            element={
              <Can permiso="PRODUCTO_LIST" fallback={<Navigate to="/no-autorizado" replace />}>
                <ProductsPage />
              </Can>
            }
          />

          {/* Proveedores */}
          <Route
            path="/proveedores"
            element={
              <Can permiso="PROVEEDOR_LIST" fallback={<Navigate to="/no-autorizado" replace />}>
                <ProvidersPage />
              </Can>
            }
          />

          {/* Usuarios */}
          <Route
            path="/usuarios"
            element={
              <Can permiso="USER_LIST" fallback={<Navigate to="/no-autorizado" replace />}>
                <UsersPage />
              </Can>
            }
          />

          {/* Roles */}
          <Route
            path="/roles"
            element={
              <Can permiso="ROL_LIST" fallback={<Navigate to="/no-autorizado" replace />}>
                <RolePage />
              </Can>
            }
          />

          {/* Permisos */}
          <Route
            path="/perms"
            element={
              <Can permiso="PERMISOS_LIST" fallback={<Navigate to="/no-autorizado" replace />}>
                <Permspage />
              </Can>
            }
          />

        </Route>

        {/* ================= ERROR ================= */}
        <Route path="/no-autorizado" element={<h1>No autorizado</h1>} />

      </Routes>
    </BrowserRouter>
  );
}