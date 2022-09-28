/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import Container from "../components/Container";
import Card from "../components/githubRepo/Card";
import urlPretty from "../utils/urlPretty";
import { ChangeEvent, useState } from "react";
import { Dna } from "react-loader-spinner";

function GithubRepo() {
  const [user, setUser] = useState("");
  const [query, setQuery] = useState("");

  const repoQuery = useQuery(
    ["repo", query],
    async () => {
      // just for getting loading status
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let response = await fetch(`https://api.github.com/users/${query}`);
      let data = await response.json();
      return data;
    },
    {
      onError: (error) => {
        console.log("fetch was not successful", error);
        alert("there on user with that name")
      },
    }
  );
  const submitQuery = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setQuery(user);
  };

  const handleData = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  if (repoQuery.isError) {
    console.log("we are not here");
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
          name="repo"
          placeholder="Search For User ..."
          className="input input-bordered input-primary w-full max-w-md"
          value={user}
          onChange={handleData}
        />
        <button className="btn btn-outline btn-primary ml-2" type="submit">
          Submit
        </button>
      </form>


      {/* Card */}
      {repoQuery.isLoading ?  (
        <div className="flex h-[500px] flex-col items-center justify-center">
          <Dna
            height="100"
            width="100"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <span className="text-2xl ">Waiting for query</span>
        </div>
      ) : (
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
      )}
    </Container>
  );
}
export default GithubRepo;
