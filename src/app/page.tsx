import Banner from "./components/Banner";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TestNav from "./components/TestNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-main-2">
      <Navbar />
      {/* <TestNav /> */}
      <Banner />
      <Form />
    </main>
  );
}
