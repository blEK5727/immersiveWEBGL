import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./Build/Build/CTIN583.loader.js",
  dataUrl: "./Build/Build/CTIN583.data",
  frameworkUrl: "./Build/Build/CTIN583.framework.js",
  codeUrl: "./Build/Build/CTIN583.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>Esther's World</h1>
      </div>
    </div>
  );
}

export default App;