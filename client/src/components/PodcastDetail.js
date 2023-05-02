import { useParams } from "react-router-dom";
import EpisodeList from "./EpisodeList";

const PodcastDetail = () => {

    let {id} = useParams()

    return ( 
        <>
            <h6>More detail on your podcast</h6>
            <EpisodeList />
        </>
     );
}
 
export default PodcastDetail;