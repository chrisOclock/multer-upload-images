import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  const send = (e) => {
    e.preventDefault();
    // console.log("name", name);
    // console.log("file", file);
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);

    const config = {
      method: "post",
      headers: { "content-type": "multipart/form-data" },
      // url: "https://httpbin.org/anything",
      url: "http://localhost:3001/upload",
      data,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        // setName("");
        // setFile("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={send}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                const { value } = e.target;
                setName(value);
              }}
            />
          </div>
          <div>
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              accept=".jpeg"
              onChange={(e) => {
                const tempFile = e.target.files[0];
                setFile(tempFile);
              }}
            />
          </div>
          <button>Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
