export async function getArtworks() {
    const apiKey = process.env.HARVARD_API_KEY;

    if (!apiKey) {
        throw new Error("Harvard API key is missing");
    }

    // looks for 10 artworks with images
    const response = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=10&hasimage=1`, {cache: "no-store"}
    );

    if (!response.ok) {
        throw new Error(`Harvard API error: ${response.status}`);
    }

    const data = await response.json();
    return data.records;
}