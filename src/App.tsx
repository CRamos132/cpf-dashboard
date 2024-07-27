import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Router from "~/router";
import { Header } from "./components/atoms/Header";
import { ConfirmationModalContextProvider } from "./contexts/ConfirmationModalContext";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

function App() {
  return (
    <ConfirmationModalContextProvider>
      <QueryClientProvider client={queryClient}>
        <Header>
          <h1>Caju Front Teste</h1>
        </Header>
        <ToastContainer />
        <Router />
      </QueryClientProvider>
    </ConfirmationModalContextProvider>
  );
}

export default App;
