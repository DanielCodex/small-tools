import Container from "../components/Container";

function Letter() {
  return (
    <Container>
      <div className="flex h-screen flex-col items-center justify-center text-9xl font-semibold capitalize">
        <h1 className="animate-text bg-gradient-to-r from-indigo-500 via-green-500 to-indigo-500 bg-clip-text text-transparent">
          hello Letter{" "}
        </h1>
      </div>
    </Container>
  );
}
export default Letter;
