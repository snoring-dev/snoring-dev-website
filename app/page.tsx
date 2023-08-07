import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src="https://res.cloudinary.com/mjemmoudi/image/upload/v1691423058/personal/IMG_4035.jpg"
            alt="Shoes"
            width={400}
            height={450}
            className="object-fill object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Jemmoudi Mohammed
          </h2>
          <p>A passionate frontend Developper!</p>
          <div className="card-actions justify-end pt-2">
            <div className="badge badge-primary">React.js</div>
            <div className="badge badge-info">Next.js</div>
          </div>
        </div>
      </div>
    </div>
  );
}
