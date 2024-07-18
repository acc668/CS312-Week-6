// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

const tesla = { model: "Model S", topSpeed: 200, topColour: "Red" };
const honda = { model: "Civic", topSpeed: 150, topColour: "Blue" };

ReactDOM.render(
  <table>
    <thead>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{tesla.model}</td>
        <td>{tesla.topSpeed}</td>
        <td>{tesla.topColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{honda.topSpeed}</td>
        <td>{honda.topColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
