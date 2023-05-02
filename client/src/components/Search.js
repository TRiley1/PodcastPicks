const Search = ({searchHome}) => {

    const handleOnChange = (event) => {
        searchHome(event.target.value)
    }


    return ( 
        <input onChange = {handleOnChange} placeholder = "Search..." />
     );
}
 
export default Search;