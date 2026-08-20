import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import UxrDashboard from "./app/UxrDashboard.tsx";
import "./styles/index.css";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

function Root() {
  const route = window.location.hash.toLowerCase();
  return route === '#uxr' || route.startsWith('#uxr/') ? <UxrDashboard /> : <App />;
}

createRoot(document.getElementById("root")!).render(<Root />);
