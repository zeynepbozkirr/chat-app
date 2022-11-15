import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/chat";
// import { auth } from "./firebase";

const style = {
  container: ` max-w-[728px] mx-auto text-center`,
  sectionContainer: ` flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  return (
    <div className={style.container}>
      <section className={style.sectionContainer}>
        <Navbar />
        <Chat />
      </section>
    </div>
  );
}

export default App;
