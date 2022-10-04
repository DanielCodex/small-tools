import Container from "../components/Container";

function GradientBorder() {
  return (
    <Container>
      <div className="flex h-screen items-center justify-center">
        <button
          className="text-8xl"
          style={{
            background:
              "linear-gradient(#212121, #212121) padding-box, linear-gradient(98deg, darkblue, orange) border-box",
            borderWidth: "6px",
            borderStyle: "solid",
            borderColor: "transparent",
            borderImageSlice: "1",
            padding: "15px",
            borderRadius: "5px"
          }}
        >
          Click me
        </button>
      </div>
    </Container>
  );
}

export default GradientBorder;
