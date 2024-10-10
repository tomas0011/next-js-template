import {NextUIProvider} from "@nextui-org/system";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <NextUIProvider className="flex flex-col gap-4">
      <Navbar/>
      <Landing/>
      <Footer/>
    </NextUIProvider>
  );
}
