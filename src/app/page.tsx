import Banner from "./components/Banner";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-main-2">
      <Navbar />
      <Banner />
      <Form />
      {/* <Modal /> */}
    </main>
  );
}
