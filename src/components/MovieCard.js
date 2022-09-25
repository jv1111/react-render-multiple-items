
const MovieCard = ({ movie }) => {
    return (
        <>
            <label>Title</label>
            <h1>{movie.Title}</h1>
            <label>number</label>
            <label>{movie.Number}</label>
        </>
    )
}

export default MovieCard