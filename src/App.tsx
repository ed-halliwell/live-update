import { greet } from "./utils/greet";
import { Link } from "./components/Link";
// import { Image } from "./components/Image";

function App(): JSX.Element {
  return (
    <>
      <h1>{greet("World")}</h1>
      <Link isExternal>Words</Link>
    </>
  );
}

export default App;
