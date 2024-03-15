import Banner from "./components/Banner";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-main-2">
      <Navbar />
      <Banner />
      <Form />
    </main>
  );
}
