import { useCallback, useEffect, useState, useRef } from "react";

import "./App.css";

function App() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAallowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);

  
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (charAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "1234567890";
    if (specialAllowed) str += "{};.,~!@#$%^&*|?><()";

    for (var i = 1; i < length; i++) {
      var r = Math.floor(Math.random() * str.length);
      pass += str.charAt(r);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [length, charAllowed, numAllowed, specialAllowed, passwordGenrator]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div
        className="
           w-full bg-gray-400 max-w-md 
           mx-auto 
           px-5
           py-10
           flex
           flex-col
           gap-8
           mt-40
           rounded-lg
          "
      >
        <h1 className="text-white text-4xl text-center font-semibold underline">
          Password Genrator
        </h1>

        <div className="input-box flex gap-6">
          <input
            type="text"
            placeholder="password"
            readOnly
            value={password}
            style={{ width: "100%", height: "40px" }}
            className="px-3"
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="rounded-s"
            style={{
              backgroundColor: "blue",
              height: "40px",
              width: "100px",
              color: "white",
            }}
          >
            Copy
          </button>
        </div>

        <input
          type="range"
          min={8}
          max={100}
          value={length}
          className=""
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length : {length}</label>

        <div className="row flex justify-between">
          <p>Number Allowed</p>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prv) => !prv);
            }}
          />
        </div>
        <div className="row flex justify-between">
          <p>Charcter Allowed</p>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAallowed((prv) => !prv)}
          />
        </div>

        <div className="row flex justify-between">
          <p>Special Allowed</p>
          <input
            type="checkbox"
            defaultChecked={specialAllowed}
            onChange={() => setSpecialAllowed((prv) => !prv)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
