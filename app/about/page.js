"use client";

import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <h2 className="text-center text-bg-warning m-2 p-2">
        About Us
      </h2>
      <div className="container m-2 border border-warning text-center">
        <h4>About Us</h4>
        <p>We are a company focused on delivering quality products and services.</p>
      </div>
    </div>
  );
}