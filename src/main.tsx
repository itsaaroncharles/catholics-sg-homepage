import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import UxrDashboard from "./app/UxrDashboard.tsx";
import ResearchStory from "./app/ResearchStory.tsx";
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

  if (route === '#research' || route.startsWith('#research/')) return <ResearchStory />;
  if (route === '#uxr' || route.startsWith('#uxr/')) return <UxrDashboard />;
  return <App />;
}

createRoot(document.getElementById("root")!).render(<Root />);
