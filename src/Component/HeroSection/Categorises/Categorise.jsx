import React from "react";

const Categorise = ({ categorise }) => {
  const { name } = categorise;

  return (
    <>
      <div className="btn bg-transparent border-transparent text-black shadow-none">
          <h4 className="text-lg">{name}</h4>
      </div>
    </>
  );
};

export default Categorise;
