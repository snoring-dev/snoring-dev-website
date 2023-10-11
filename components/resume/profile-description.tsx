import React from "react";
import Heading from "../ui/Heading";

interface Props {
  title: string;
  data: string;
}

function ProfileDescription({ title, data }: Props) {
  return (
    <section className="m-6 lg:m-0 lg:mt-20 lg:mb-20">
      <Heading title={title} uppercase />
      <div className={"flex flex-col space-y-2 prose max-w-full"}>
        {data.split("\n").map((chunk, index) => (
          <p key={index}>{chunk}</p>
        ))}
      </div>
    </section>
  );
}

export default ProfileDescription;
