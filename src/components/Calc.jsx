import React from "react";

export default function Calc({ v1, v2 }) {
  const result = v1 + v2;

  return (
    <div>
      Sum of {v1} and {v2} is {result}
    </div>
  );
}
