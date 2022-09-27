/* eslint-disable @next/next/no-img-element */
interface Props {
  avatar: string;
  login: string;
  blog: string;
  twitter_username: string;
  followers: string;
  following: string;
}

function Card({
  avatar,
  login,
  blog,
  twitter_username,
  followers,
  following,
}: Props) {
  return (
    <div className="card card-side border-r-2 border-orange-400/30 bg-base-200 shadow-xl">
      <figure>
        <img className="h-[250px] w-[250px]" src={avatar} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-orange-400 underline decoration-orange-400/30 underline-offset-2">
          {login}
        </h2>
        <p className="leading-6">
          <span>Blog: </span>
          {blog ? (
            <a
              className="link link-primary text-orange-400 underline decoration-orange-400/30 underline-offset-1"
              href={blog}
            >
              {blog}
            </a>
          ) : (
            <span className="text-slate-400">No Blog</span>
          )}
          <br />
          <span>Twitter: </span>
          {twitter_username ? (
            <a
              className="link link-primary  text-orange-400 underline decoration-orange-400/30 underline-offset-1"
              href={`https://twitter.com/${twitter_username}`}
            >
              @{twitter_username}
            </a>
          ) : (
            <span>NO twitter</span>
          )}
          <br />
          <span>Followers: </span>
          <span>{followers}</span>
          <br />
          <span>Following: </span>
          <span>{following}</span>
        </p>
        <div className="card-actions justify-end">
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-primary btn btn-outline">
              Github Profile
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
