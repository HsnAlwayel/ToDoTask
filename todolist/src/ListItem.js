import React from "react";
import "./App.css";

function List() {
  return (
    <div className="list-item row jc-space-between">
      <span>item text</span>
      <button>Remove</button>
    </div>
  );
}

export default List;
