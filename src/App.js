import { ResetCSS } from "./components/global/resetCSS";
import Layout from "./components/layout";
import Profille from "./components/profile/index";
import GithubProvider from "./provider/github-provider";
import Repositories from "./components/repositories/index";

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profille />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
