import React from "react";
import Box from "./components/boxes";
import Footer from "./components/footer";

export default function App() {

    const box = [1,2,3,4,5,6,7,8,9];
    const boxes = box.map(() => {
        return <Box />;
    });
    return (
      <div className="container">
          <h1>TicTaeToe Game</h1>
          <div className="board">
            {boxes}
          </div>
          <Footer />
      </div>

    )
}
