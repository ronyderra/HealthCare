import React, { useState } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(`http://localhost:4000/number/`, { content });
    console.log(res.data)
    setContent("");
  };

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


