// @ts-nocheck
// there are soome problems idk how to solve it

function RenderHeaders({ siteQuery }: any) {
  return (
    <div className="mt-5 grid grid-cols-2 justify-items-center">
      {/* req headers */}
      <div>
        <h2 className="capitalize">req headers</h2>
        <hr className="mt-2 mb-4 opacity-75" />
        <ul>
          {Object.entries(siteQuery.data.request).map(([key, value], index) => {
            return (
              <li className="font-mono max-w-sm" key={index}>
                <span className="text-green-400">{key}: </span>
                <span className="text-indigo-300">{value}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2 className="capitalize">res Headers</h2>
        <hr className="mt-2 mb-4 opacity-75" />
        <ul>
          {Object.entries(siteQuery.data.response).map(
            ([key, value], index) => {
              return (
                <li className="font-mono max-w-sm" key={index}>
                  <span className="text-green-400">{key}: </span>
                  <span className="text-indigo-300">{value}</span>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}
export default RenderHeaders;
