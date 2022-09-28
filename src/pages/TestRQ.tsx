/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

function TestRQ() {
  const userQuery = useQuery(["user"], async () => {
    const response = await fetch("/api/githubUser?user=DanielCodex");
    const data = await response.json();
    return data;
  });
  return (
    <div>
      <h1>hello TestRq </h1>
      {userQuery.data ? (
        <img src={userQuery.data?.avatar_url} alt="leanring" />
      ) : userQuery.isLoading ? (
        <span>loading ...</span>
      ) : userQuery.isError ? (
        <span>error</span>
      ) : null}
    </div>
  );
}
export default TestRQ;
