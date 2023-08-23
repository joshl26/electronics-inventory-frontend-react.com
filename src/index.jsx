import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import PartsList from "./features/parts/PartsList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import ErrorPage from "./error-page";
import ReactGridLayout from "./components/ReactGridLayout";
import EditPart from "./features/parts/EditPart";
import NewPart from "./features/parts/NewPart";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Pricing from "./components/Pricing";
import ViewPart from "./features/parts/ViewPart";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path="/" element={<Layout />}>
      {/* public routes */}
      <Route index element={<Public />} />
      <Route path="features" element={<Features />} />
      <Route path="plans" element={<Plans />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      {/* Protected Routes */}
      <Route element={<PersistLogin />}>
        <Route
          element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
        >
          <Route element={<Prefetch />}>
            <Route element={<DashLayout />} path="dash">
              <Route index />
              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                }
              >
                <Route path="parts">
                  <Route index element={<PartsList />} />
                  <Route path=":id" element={<ViewPart />}></Route>
                  <Route path=":id">
                    <Route path="edit">
                      <Route index element={<EditPart />} />
                    </Route>
                  </Route>
                  <Route path="new" element={<NewPart />} />
                </Route>
                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>
                <Route path="users">
                  <Route index element={<UsersList />} />
                  <Route path=":id" element={<EditUser />} />
                  <Route path="new" element={<NewUserForm />} />
                </Route>
              </Route>
            </Route>
            {/* End Dash */}
          </Route>
        </Route>
      </Route>
      {/* End Protected Routes */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
