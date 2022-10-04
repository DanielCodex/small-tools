import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import HttpForm from "../components/httpReqRes/httpForm";
import RenderHeaders from "../components/httpReqRes/RenderHeaders";
import { Dna } from "react-loader-spinner";
import urlPretty from "../utils/urlPretty";
import isValidUrl from "../utils/isValidUrl";

function HttpHeaders() {
  const [site, setSite] = useState("");
  const [query, setQuery] = useState("");

  const siteQuery = useQuery(
    ["site", query],
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let response = await fetch(`/api/httpHeaders?site=${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Bad Request");
      }

      let data = await response.json();

      return data;
    },
    { enabled: !!query, refetchOnWindowFocus: false }
  );

  const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSite(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(isValidUrl(site) ? urlPretty(site) : "");
    console.log(query);
  };

  return (
    <Container>
      <Navbar />
      <div className="mt-5 flex h-[70px] justify-center text-5xl">
        <h1 className="animate-text bg-gradient-to-r from-indigo-500 via-green-500 to-indigo-500 bg-clip-text capitalize text-transparent">
          http req and res headers
        </h1>
      </div>
      <HttpForm
        handleData={handleData}
        handleSubmit={handleSubmit}
        site={site}
      />

      {siteQuery.data ? (
        <RenderHeaders siteQuery={siteQuery} />
      ) : siteQuery.isError ? (
        <div className="flex h-[500px] items-center justify-center">
          <span className="text-5xl text-green-400">Error</span>
        </div>
      ) : siteQuery.isLoading && !siteQuery.isFetching ? (
        <div className="flex h-[500px] flex-col items-center justify-center gap-5">
          <span className="text-9xl">☝️</span>
          <span className="text-4xl capitalize">Enter a url</span>
        </div>
      ) : (
        <div className="flex h-[500px] items-center justify-center">
          <Dna
            visible={true}
            height="90"
            width="90"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
    </Container>
  );
}

export default HttpHeaders;
