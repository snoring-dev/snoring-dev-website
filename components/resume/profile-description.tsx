import React from "react";
import Heading from "../ui/Heading";

interface Props {
  data: string;
}

function ProfileDescription({ data }: Props) {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title="Profile" uppercase />
      <div className={"flex flex-col space-y-2 prose max-w-full"}>
        {data.split("\n").map((chunk, index) => (
          <p key={index}>{chunk}</p>
        ))}
      </div>
    </section>
  );
}

export default ProfileDescription;
