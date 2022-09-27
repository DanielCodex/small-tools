/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import Container from "../components/Container";
import Card from "../components/githubRepo/Card";
import urlPretty from "../utils/urlPretty";
import HeartLoading from "../components/HeartLoading";

function GithubRepo() {
  const repoQuery = useQuery(["repo"], async () => {
    // just for getting loading status
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let response = await fetch("https://api.github.com/users/danielcodex");
    let data = await response.json();
    return data;
  });

  console.log(repoQuery.data);
  if (repoQuery.isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <HeartLoading />
      </div>
    );
  }

  if (repoQuery.isError) {
    return <span>Error:{repoQuery.error as JSX.Element}</span>;
  }

  return (
    <Container>
      <h1 className="text-center text-2xl">
        Hello {repoQuery.isFetching ? "..." : null}
      </h1>
      {/* Card */}
      <Card
        avatar={repoQuery.data?.avatar_url}
        login={repoQuery.data?.login}
        blog={urlPretty(repoQuery.data?.blog)}
        followers={repoQuery.data?.followers}
        following={repoQuery.data?.following}
        twitter_username={repoQuery.data?.twitter_username}
      />
    </Container>
  );
}
export default GithubRepo;
