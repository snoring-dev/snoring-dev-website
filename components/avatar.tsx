import Image from "next/image";

type Props = {
  source: string;
  alt?: string;
};

function Avatar({ source, alt = '' }: Props) {
  return (
    <div className="avatar">
      <div className="w-36 mask mask-squircle">
        <Image src={source} alt={alt} fill />
      </div>
    </div>
  );
}

export default Avatar;
