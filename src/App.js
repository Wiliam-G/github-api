import Layout from "./components/layout";
import Profille from "./components/profile/index";
import NoSearch from "./components/no-search";
import Repositories from "./components/repositories/index";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
        {githubState.loading ? (
          <p>Loading</p> ) : (
            <>
            <Profille />
            <Repositories />
          </>
          )}
        
        </>
      ) : (
        <NoSearch />
  
      )}
    </Layout>
  );
};

export default App;
