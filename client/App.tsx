import React from "react";
import Feeds from "./components/Feeds/Feeds";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Feeds />
      </div>
    </RecoilRoot>
  );
}

export default App;
