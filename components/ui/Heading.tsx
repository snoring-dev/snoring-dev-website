import React from "react";

type Props = {
  title: string;
  uppercase?: boolean;
};

function Heading({ title, uppercase = false }: Props) {
  return (
    <div className="mt-4 mb-6 border-b-4 border-black">
      <p
        className={`text-2xl font-semibold text-left text-black ${
          uppercase ? "uppercase" : ""
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default Heading;
