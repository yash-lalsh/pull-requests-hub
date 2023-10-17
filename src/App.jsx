import { Loader } from "./ui";
import { usePullRequestsApi } from "./hooks";
import { PullRequestCard } from "./components";

function App() {
  const { loading, data: pullRequestsData } = usePullRequestsApi();

  return (
    <div className="main-content">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 max-w-[1000px] 2xl:max-w-[1440px] gap-8 py-16 px-8 sm:px-16">
            {pullRequestsData.map((pr) => {
              return <PullRequestCard key={pr.number} {...pr} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
