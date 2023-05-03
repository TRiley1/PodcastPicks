const Search = ({searchHome}) => {

    const handleOnChange = (event) => {
        searchHome(event.target.value)
    }


    return ( 
        <input onChange = {handleOnChange} placeholder = "Search..." className="search-bar"/>
     );
}
 
export default Search;