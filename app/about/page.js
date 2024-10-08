"use client";

import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div class="container py-4">

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">About Our Gaming Studio</h1>
        <p class="col-md-8 fs-4">At our gaming studio, we craft immersive and dynamic games that challenge players and create unforgettable experiences. Explore our latest projects and discover what makes us stand out in the gaming industry.</p>
        <button class="btn btn-primary btn-lg" type="button">Explore Games</button>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Innovative Game Design</h2>
          <p>Our team pushes the boundaries of what's possible in gaming, blending stunning visuals with innovative gameplay mechanics. Join us on this journey and be a part of the future of gaming.</p>
          <button class="btn btn-outline-light" type="button">Learn More</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Community Driven</h2>
          <p>We value our player community and constantly strive to improve the gaming experience based on feedback. Dive into our forums or connect with other players to see what's coming next.</p>
          <button class="btn btn-outline-secondary" type="button">Join the Community</button>
        </div>
      </div>
    </div>

    <footer class="pt-3 mt-4 text-body-secondary border-top">
      &copy; 2024 GameStudio
    </footer>
  </div>
    </div>
  );
}