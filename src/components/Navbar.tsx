import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar rounded-lg bg-base-300 px-8 py-2">
      <Link href={"/"}>
        <a className="btn link btn-ghost link-accent text-xl normal-case no-underline">
          Home
        </a>
      </Link>
    </div>
  );
}
export default Navbar;
