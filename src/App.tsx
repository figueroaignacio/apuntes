// Components
import { AppRouter } from "@/components/app-router";
import { BrowserRouter as Router } from "react-router";

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
