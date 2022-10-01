import Head from "next/head";
import { useState } from "react";
import Container from "../components/Container";
import {
  sumOwner,
  Permissions,
  sumGroup,
  sumOther,
  modeCalculator,
} from "../utils/permissions";

function Chmod() {
  const [owner, setOwner] = useState<Permissions>({
    octalRead: "",
    octalWrite: "",
    octalExecute: "",
    modeRread: "",
    modeWrite: "",
    modeExecute: "",
  });

  const [group, setGroup] = useState<Permissions>({
    octalRead: "",
    octalWrite: "",
    octalExecute: "",
    modeRread: "",
    modeWrite: "",
    modeExecute: "",
  });

  const [other, setOther] = useState<Permissions>({
    octalRead: "",
    octalWrite: "",
    octalExecute: "",
    modeRread: "",
    modeWrite: "",
    modeExecute: "",
  });

  return (
    <Container>
      <Head>
        <title>chmod</title>
      </Head>
      <div className="flex h-screen flex-col justify-center gap-10">
        <h1 className="text-center text-5xl capitalize text-green-400">
          Chmod calculator 😎
        </h1>

        <div className="flex justify-around">
          <div className="border-2 border-green-400/30 px-8 py-4 rounded-md shadow-lg bg-base-200">
            <h1 className="mb-2 text-center text-4xl">
              {sumOwner(owner) + sumGroup(group) + sumOther(other)}
            </h1>
            <p className="text-2xl text-center">Octal</p>
          </div>
          <div className="border-2 border-green-400/30 px-8 py-4 rounded-md bg-base-200">
            <h1 className="mb-2 text-center text-4xl">
              {modeCalculator(owner, group, other)}
            </h1>
            <p className="text-2xl text-center">Mode</p>
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
                        octalRead: e.target.value,
                      });
                    } else {
                      setOwner({ ...owner, octalRead: "", modeRread: "" });
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
                        octalWrite: e.target.value,
                      });
                    } else {
                      setOwner({ ...owner, octalWrite: "" });
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
                  value="100"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOwner({ ...owner, octalExecute: e.target.value });
                    } else {
                      setOwner({ ...owner, octalExecute: "" });
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
                      setGroup({ ...group, octalRead: e.target.value });
                    } else {
                      setGroup({ ...group, octalRead: "" });
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
                      setGroup({ ...group, octalWrite: e.target.value });
                    } else {
                      setGroup({ ...group, octalWrite: "" });
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
                      setGroup({ ...group, octalExecute: e.target.value });
                    } else {
                      setGroup({ ...group, octalExecute: "" });
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
                      setOther({ ...other, octalRead: e.target.value });
                    } else {
                      setOther({ ...other, octalRead: "" });
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
                      setOther({ ...other, octalWrite: e.target.value });
                    } else {
                      setOther({ ...other, octalWrite: "" });
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
                      setOther({ ...other, octalExecute: e.target.value });
                    } else {
                      setOther({ ...other, octalExecute: "" });
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
