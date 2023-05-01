const Podcast = ({show}) => {

    if (!show) return

    return ( 
        <>
            <img src={show.images[2].url} />
            <h5>{show.name}</h5>
        </>
     );
}
 
export default Podcast;