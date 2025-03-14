import React from "react";

const Tag = ({ tag }: { tag: String }) => {
  return (
    <div className="min-w-5 w-fit px-2 border-1 border-brown-border rounded-full">
      <p className="text-sm">{tag}</p>
    </div>
  );
};

export default Tag;
