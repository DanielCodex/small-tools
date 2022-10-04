interface httpFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  site: string;
  handleData: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function HttpForm({handleSubmit, site, handleData}: httpFormProps) {
  return (
    <form className={`mt-5 flex justify-center`} onSubmit={handleSubmit}>
      <input
        type="text"
        name="repo"
        placeholder="Enter A Site Url e.x danielcodex.com"
        className="input input-bordered input-accent w-full max-w-md"
        value={site}
        onChange={handleData}
      />
      <button className="btn btn-outline btn-accent ml-2" type="submit">
        Submit
      </button>
    </form>
  );
}

export default HttpForm;
