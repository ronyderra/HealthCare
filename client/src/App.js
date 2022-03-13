import React, { useState } from "react";
import axios from "axios";
import './App.css';


const App = () => {

  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(`http://localhost:4000/number/`, {
      content,
    });
    console.log(res.data)
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>choose a number</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default App;


