import { ResetCSS } from "./components/global/resetCSS";
import Layout from "./components/layout";
import Profille from './components/profile/index';
import Repositories from "./components/repositories/index";

function App() {
  return (
    <main>
      <ResetCSS />
        <Layout>
          <Profille />
          <Repositories />
        </Layout>
    </main>
  );
}

export default App;
