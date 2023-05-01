const Podcast = ({show}) => {
    return ( 
        <>
            <h5>I'm a podcast</h5>
            <img src={show.images[2].url} />
            <h5>{show.name}</h5>
        </>
     );
}
 
export default Podcast;