import Head from "next/head";
import { useState } from "react";
import Container from "../components/Container";
import {
  sumOwner,
  Permissions,
  sumGroup,
  sumOther,
} from "../utils/permissions";

function Chmod() {
  const [owner, setOwner] = useState<Permissions>({
    read: "",
    write: "",
    execute: "",
  });

  const [group, setGroup] = useState<Permissions>({
    read: "",
    write: "",
    execute: "",
  });

  const [other, setOther] = useState<Permissions>({
    read: "",
    write: "",
    execute: "",
  });

  return (
    <Container>
      <Head>
        <title>chmod</title>
      </Head>
      <div className="flex h-screen flex-col justify-center gap-10">
        <div className="flex justify-around">
          <div className="border-2 border-green-400/30 bg-base-200 px-8 py-4 shadow-lg">
            <h1 className="mb-2 text-center text-4xl">
              {sumOwner(owner) + sumGroup(group) + sumOther(other)}
            </h1>
            <p className="text-2xl">Octal</p>
          </div>
          <div className="border-2 border-green-400/30 bg-base-200 px-8 py-4 shadow-lg">
            <h1 className="mb-2 text-center text-4xl">---------</h1>
            <p className="text-center text-2xl">Mode</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 rounded-lg border-r-2 border-l-2 border-green-400/30 bg-base-200 px-7 py-2 shadow-lg">
          {/* owner */}
          <div>
            <div className="form-control">
              <h2 className="text-center text-2xl">Owner</h2>
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Read</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="400"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOwner({
                        ...owner,
                        read: e.target.value,
                      });
                    } else {
                      setOwner({ ...owner, read: "" });
                    }
                  }}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Write</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="200"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOwner({
                        ...owner,
                        write: e.target.value,
                      });
                    } else {
                      setOwner({ ...owner, write: "" });
                    }
                    console.log(owner.write);
                  }}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Execute</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="100"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOwner({ ...owner, execute: e.target.value });
                    } else {
                      setOwner({ ...owner, execute: "" });
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* group */}
          <div>
            <div className="form-control">
              <h2 className="text-center text-2xl">Group</h2>
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Read</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="40"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setGroup({ ...group, read: e.target.value });
                    } else {
                      setGroup({ ...group, read: "" });
                    }
                  }}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Write</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="20"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setGroup({ ...group, write: e.target.value });
                    } else {
                      setGroup({ ...group, write: "" });
                    }
                  }}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Execute</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="10"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setGroup({ ...group, execute: e.target.value });
                    } else {
                      setGroup({ ...group, execute: "" });
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* user */}
          <div>
            <div className="form-control">
              <h2 className="text-center text-2xl">Others</h2>
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Read</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="4"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOther({ ...other, read: e.target.value });
                    } else {
                      setOther({ ...other, read: "" });
                    }
                  }}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Write</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="2"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOther({ ...other, write: e.target.value });
                    } else {
                      setOther({ ...other, write: "" });
                    }
                  }}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-xl">Execute</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  value="1"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOther({ ...other, execute: e.target.value });
                    } else {
                      setOther({ ...other, execute: "" });
                    }
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Chmod;
