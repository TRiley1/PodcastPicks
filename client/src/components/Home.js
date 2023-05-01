import OurPicks from "./OurPicks";
import TopPicks from "./TopPicks";

const Home = ({shows}) => {
    return ( 
        <>
            <h1>Home</h1>
            <OurPicks shows = {shows}/>
            <TopPicks shows = {shows}/>
        </>
     );
}
 
export default Home;