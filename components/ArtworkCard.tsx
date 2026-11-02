export type Artwork = {
    id: number;
    title: string | null;
    dated: string;
    primaryimageurl: string | null;
};

export default function ArtworkCard(props: { artwork: Artwork }) {
    return (
        <div className="artwork-card">
            <h2>{props.artwork.title || "Untitled Artwork"}</h2>
            <p>Date: {props.artwork.dated}</p>

            {/*display image not available if artwork doesn't have primaryimageurl*/}
            {props.artwork.primaryimageurl ? (
                <img
                    src={props.artwork.primaryimageurl}
                    alt={props.artwork.title || "United Artwork"}
                    width={250}
                />
            ) : (
                <p>Image not available</p>
            )}
        </div>
    );
}