import React, { useEffect, useState } from "react";
import Categorise from "./Categorise";

const Categorises = () => {
  const [categorises, setCategorises] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategorises(data));
  }, []);

  return (
    <div className="sticky top-12 bg-white overflow-hidden rounded-4xl border border-black mb-6">
      <div className="p-3 flex items-center justify-center gap-2">
        {categorises.map((categorise) => (
          <Categorise categorise={categorise} />
        ))}
      </div>
    </div>
  );
};

export default Categorises;
