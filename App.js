import Head from "../compont/Head";
import Note from "../compont/Note";
import Footer from "../compont/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Head />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}
