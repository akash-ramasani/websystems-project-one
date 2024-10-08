"use client"; // Mark as Client Component

import Navbar from "./components/Navbar"; // Import Navbar
import Image from 'next/image'; // Next.js Image component

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
              className="d-block mx-lg-auto img-fluid rounded"
              alt="Gaming World"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Experience the Future of Gaming with Our Innovative Platforms
            </h1>
            <p className="lead">
              Immerse yourself in the world of cutting-edge gaming with our latest technologies, interactive gameplay, and unparalleled virtual experiences. Our platform brings the most popular games to life with stunning graphics and real-time multiplayer functionality.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Start Playing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}