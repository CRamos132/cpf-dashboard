import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "~/router";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <ToastContainer />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
