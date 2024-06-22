import Layout from "./components/ui/layout";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import Goals from "./components/goals";
import HealthStats from "./components/healthStats/healthStats";
import Schedule from "./components/schedule";
import { SleepTracking } from "./components/sleepTracking";
import SelfWorkTracking from "./components/selfWorkTracking";

function App() {
  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        <div className='md:col-span-3'>
          <HealthStats />
          <Goals />
        </div>
        <div className='mt-5'>
          <Schedule />
          <div className='mt-5'>
            <SelfWorkTracking />
          </div>
        </div>
      </div>
      <div className='my-5'>
        <SleepTracking />
      </div>
    </Layout>
  );
}

export default App;
