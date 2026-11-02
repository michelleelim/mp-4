import Link from "next/link";

export default function Home() {
  return(
      <main className="home">
          <h1>Harvard Art Explorer!</h1>
          <p>Discover beautiful artwork from the Harvard Art Museums!</p>

          <img
              src="/harvard.jpg"
              alt="Harvard Art Museum"
              className="home-image"
          />

          <Link href="/artworks" className="navlink">Explore Artworks</Link>
      </main>
  );
}