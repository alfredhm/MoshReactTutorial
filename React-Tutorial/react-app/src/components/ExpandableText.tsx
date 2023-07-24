import React, { ReactNode, useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <>
      <div>
        {expanded ? children : children.slice(0, maxChars) + "..."}
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Less" : "More"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
