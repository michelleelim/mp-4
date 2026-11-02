import Link from "next/link";
import ArtworkCard from "@/components/ArtworkCard";
import { getArtworks } from "@/lib/harvard";
import type { Artwork } from "@/components/ArtworkCard";

export const dynamic = "force-dynamic";

export default async function ArtworksPage() {
    let artworks: Artwork[] = [];
    let error = "";

    try {
        artworks = await getArtworks();
    } catch (e) {
        error = "Unable to load artworks. Please try again later.";
        console.error(e);
    }
    return (
        <main>
            <h1>Explore Artworks!</h1>
            <p>Browse through artworks from the Harvard Art Museums!</p>

            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className="artwork-grid">
                    {artworks.map((artwork) => (
                        <ArtworkCard
                            key={artwork.id}
                            artwork={artwork}
                        />
                    ))}
                </div>
            )}
            <Link href="/" className="navlink">Back to Home</Link>
        </main>
    );
}