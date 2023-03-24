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
import Welcome from "./features/auth/SideBar";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import ErrorPage from "./error-page";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path="/" element={<Layout />}>
      {/* public routes */}
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />

      {/* Protected Routes */}
      <Route element={<PersistLogin />}>
        <Route
          element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
        >
          <Route element={<Prefetch />}>
            <Route path="dash">
              {/* <Route element={<Welcome />} /> */}
              <Route index element={<DashLayout />} />
              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                }
              >
                <Route path="users">
                  <Route index element={<UsersList />} />
                  <Route path=":id" element={<EditUser />} />
                  <Route path="new" element={<NewUserForm />} />
                </Route>
              </Route>

              <Route path="notes">
                <Route index element={<NotesList />} />
                <Route path=":id" element={<EditNote />} />
                <Route path="new" element={<NewNote />} />
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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           { index: true, element: <Public /> },
//           {
//             errorElement: <ErrorPage />,
//             path: "login",
//             element: <Login />,
//           },
//           {
//             errorElement: <ErrorPage />,
//             element: <PersistLogin />,
//             children: [
//               {
//                 errorElement: <ErrorPage />,
//                 element: (
//                   <RequireAuth allowedRoles={[...Object.values(ROLES)]} />
//                 ),
//                 children: [
//                   {
//                     errorElement: <ErrorPage />,
//                     element: <Prefetch />,
//                     children: [
//                       {
//                         errorElement: <ErrorPage />,
//                         path: "dash",
//                         element: <DashLayout />,
//                         children: [
//                           {
//                             errorElement: <ErrorPage />,
//                             index: true,
//                             element: <Welcome />,
//                           },
//                           {
//                             errorElement: <ErrorPage />,
//                             element: (
//                               <RequireAuth
//                                 allowedRoles={[ROLES.Manager, ROLES.Admin]}
//                               />
//                             ),
//                             children: [
//                               {
//                                 errorElement: <ErrorPage />,
//                                 path: "users",
//                                 children: [
//                                   {
//                                     errorElement: <ErrorPage />,
//                                     index: true,
//                                     element: <UsersList />,
//                                   },
//                                   {
//                                     errorElement: <ErrorPage />,
//                                     element: <EditUser />,
//                                     path: ":id",
//                                   },
//                                   {
//                                     errorElement: <ErrorPage />,
//                                     element: <NewUserForm />,
//                                     path: "new",
//                                   },
//                                 ],
//                               },
//                               {
//                                 errorElement: <ErrorPage />,
//                                 path: "notes",
//                                 children: [
//                                   {
//                                     errorElement: <ErrorPage />,
//                                     index: true,
//                                     element: <NotesList />,
//                                   },
//                                   {
//                                     errorElement: <ErrorPage />,
//                                     element: <EditNote />,
//                                     path: ":id",
//                                   },
//                                   {
//                                     errorElement: <ErrorPage />,
//                                     element: <NewNote />,
//                                     path: "new",
//                                   },
//                                 ],
//                               },
//                             ],
//                           },
//                         ],
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);

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
