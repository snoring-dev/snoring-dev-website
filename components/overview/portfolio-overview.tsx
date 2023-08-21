/* eslint-disable @next/next/no-img-element */
import Container from "../container";

function PortfolioOverview() {
  return (
    <div className="bg-[#F6F7FC] w-full pb-24">
      <Container>
        <div className="flex items-center justify-center">
          <p className="font-semibold text-3xl border-b border-gray-200 text-black px-10 pb-2 mt-8">
            Portfolio
          </p>
        </div>
        <div className="grid grid-flow-row grid-cols-12 gap-6 mt-16">
          <div className="col-span-1 lg:col-span-4 w-full flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://res.cloudinary.com/mjemmoudi/image/upload/v1689092884/hostify-app/jww52goxjooppyhz6bdl.jpg"
                  alt="Project name"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Project name!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam adipisci vitae placeat error, dolorum numquam sequi, aut minima quisquam, magnam dolores sapiente nulla. Assumenda, qui alias? Hic consectetur adipisci distinctio</p>
                <div className="card-actions justify-end mt-6">
                  <button className="btn">Discover</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4 w-full flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://res.cloudinary.com/mjemmoudi/image/upload/v1689091107/hostify-app/lx9aruq5e2f63noo2lcl.jpg"
                  alt="Project name"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Project name!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam adipisci vitae placeat error, dolorum numquam sequi, aut minima quisquam, magnam dolores sapiente nulla. Assumenda, qui alias? Hic consectetur adipisci distinctio</p>
                <div className="card-actions justify-end mt-6">
                  <button className="btn">Discover</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4 w-full flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://res.cloudinary.com/mjemmoudi/image/upload/v1689092919/hostify-app/koduupjvygs7lxf68ohs.jpg"
                  alt="Project name"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Project name!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam adipisci vitae placeat error, dolorum numquam sequi, aut minima quisquam, magnam dolores sapiente nulla. Assumenda, qui alias? Hic consectetur adipisci distinctio</p>
                <div className="card-actions justify-end mt-6">
                  <button className="btn">Discover</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PortfolioOverview;
