import React, { useRef, useState, useEffect } from "react";
import Message from "./Message";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const scroll = useRef();
  return (
    <>
      <main className={style.main}></main>
      <Message />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
