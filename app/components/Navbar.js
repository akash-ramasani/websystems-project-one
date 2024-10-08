import Link from "next/link";

export default function Header() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav">
          <li className="nav-item">
            <Link href="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}