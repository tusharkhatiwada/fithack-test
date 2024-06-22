import Layout from "./components/ui/layout";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import HealthStats from "./components/healthStats/healthStats";

function App() {
  return (
    <Layout>
      <HealthStats />
    </Layout>
  );
}

export default App;
