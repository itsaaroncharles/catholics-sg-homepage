import { useEffect, useState } from "react";
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
  const [route, setRoute] = useState(window.location.hash.toLowerCase());
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.toLowerCase());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return route === '#uxr' || route.startsWith('#uxr/') ? <UxrDashboard /> : <App />;
}

createRoot(document.getElementById("root")!).render(<Root />);
