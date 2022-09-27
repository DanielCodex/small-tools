import type { NextPage } from "next";
import Link from "next/link";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <h1 className="text-center text-2xl font-bold capitalize">
        Link to apps
      </h1>
      <div className="mt-5 flex flex-wrap gap-5">
        <Link href={"/githubRepo"}>
          <a className="link link-primary text-xl capitalize decoration-orange-400/30 underline-offset-2">
            1. github repo
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
