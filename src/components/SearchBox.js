
const SearchBox = ({onSearchChange}) => {
  return (
    <div>
      <input className= 'pa3 w-25' type="search" placeholder="search robot" onChange={onSearchChange}/>
    </div>
  )
} 

export default SearchBox;