/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import Container from "../components/Container";
import Card from "../components/githubRepo/Card";
import urlPretty from "../utils/urlPretty";
import HeartLoading from "../components/HeartLoading";
import { ChangeEvent, useState } from "react";

function GithubRepo() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  const repoQuery = useQuery(["repo"], async () => {
    // just for getting loading status
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let response = await fetch("https://api.github.com/users/danielcodex");
    let data = await response.json();
    return data;
  });

  const submitQuery = (event: React.SyntheticEvent) => {
    setQuery(data);
    console.log(query);
    event.preventDefault();
  };

  const handleData = (event: ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
    console.log(data);
  };

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
    <Container tw="flex flex-col gap-5">
      <h1 className="mt-2 rounded-lg bg-base-300 px-4 py-2 text-center text-2xl">
        Search For Github User {repoQuery.isFetching ? "..." : null}
      </h1>

      <form className="flex justify-center" onSubmit={submitQuery}>
        <input
          type="text"
          placeholder="Search For User ..."
          className="input input-bordered input-primary w-full max-w-md"
          value={data}
          onChange={handleData}
        />
        <button className="btn btn-outline btn-primary ml-2" type="submit">
          Submit
        </button>
      </form>

      {/* Card */}
      <div className="flex h-[500px] flex-col justify-center">
        <Card
          avatar={repoQuery.data?.avatar_url}
          login={repoQuery.data?.login}
          blog={urlPretty(repoQuery.data?.blog)}
          followers={repoQuery.data?.followers}
          following={repoQuery.data?.following}
          twitter_username={repoQuery.data?.twitter_username}
        />
      </div>
    </Container>
  );
}
export default GithubRepo;
