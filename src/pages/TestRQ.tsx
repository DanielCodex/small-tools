/* eslint-disable @next/next/no-img-element */

import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useState } from "react";
import Container from "../components/Container";

interface queryType {
  data: string;
  check: boolean;
}

function TestRQ() {
  const [query, setQuery] = useState<queryType>({
    data: "",
    check: false
  });

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    if (query.data.trim().length !== 0) {
      console.log("you wrote somthing");
      setQuery({...query, check: true})
    } else {
      console.log("input value is empty");
      setQuery({...query, check: false})
    }
  };

  return (
    <Container>
      <div className="flex h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-center text-5xl">{query.data}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type here"
            className="focus: w-full max-w-xs rounded-md border-2 border-green-400/30 bg-transparent px-8 py-4 text-4xl outline-green-400 focus:border-green-400 focus:outline-none"
            value={query.data}
            onChange={(event) => {
              setQuery({ ...query, data: event.target.value });
            }}
          />
          <div className="form-control flex w-[200px] items-stretch justify-center">
            <label className="label cursor-pointer">
              <span className="label-text text-2xl">Tick me by code</span>
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                checked={Boolean(query.check)}
                onChange={() => setQuery({...query, check: !query.check})}
              />
            </label>
          </div>
          {/* <button type="submit" className="btn btn-outline btn-accent">
            click me
          </button> */}
        </form>
      </div>
    </Container>
  );
}
export default TestRQ;
