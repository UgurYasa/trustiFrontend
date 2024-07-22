import Header from "./components/Header";
import Slider from "./components/Slider";
export default function App() {
  return (
    <div className="flex flex-col xl:min-h-screen h-auto">
      <Header />
      <Slider/>
    </div>
  );
}
