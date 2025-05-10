// Components
import { BrowserRouter as Router } from "react-router";
import { AppRouter } from "./components/app-router";

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
