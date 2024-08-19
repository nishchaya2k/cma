import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Contacts from "./pages/Contacts";
import ChartsMaps from "./pages/ChartsMaps";
import { Provider } from "react-redux";
import { store, persistor } from "./store/Store";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";

// Create a client for React Query
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Contacts />,
      },
      {
        path: "/charts_maps",
        element: <ChartsMaps />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <PersistGate loading={null} persistor={persistor} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
