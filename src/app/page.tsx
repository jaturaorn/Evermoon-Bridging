import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

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
