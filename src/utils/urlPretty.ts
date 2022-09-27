function urlPretty(url: string | undefined): string {
  if (typeof url === "undefined") {
    return "No blog 😕";
  }
  let remove = url
    .replace(/^https?:\/\//, "") // remove http and https
    .replace(/\//g, "") // if there is any / at the end
    .replace(/www\./g, ""); // remove www. also

  return remove;
}

export default urlPretty;
