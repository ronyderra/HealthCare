import { useState, useEffect } from "react";
import axios from "axios";
import socket from "./socket";
import './App.css';

const App = () => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4000/number/`, { content });
    setContent("");
  };

  useEffect(async () => {
    socket.on("calcFinished", async (array) => {
      console.log('Socket Works:' + array)
    })
  }, []);

  return (
    <div className="center" >
      <form onSubmit={onSubmit}>
        <label>choose a number:
          <input
            type={'number'}
            value={content}
            onChange={(e) => setContent(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;


