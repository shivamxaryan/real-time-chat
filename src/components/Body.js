

const Body = () => {
//   const [restaurantList, setrestaurantList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       RESLIST_URL
//     );
//     const json = await data.json();

//     //optional chaining
//     setrestaurantList(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredList(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

  //check online or offline
//   const onlineStatus=useOnlineStatus();
//   if (onlineStatus===false) return <h1>You are Offline. Please check your internet connection!!</h1>;

  //conditional rendering
  return (
    <div className="body-container">
      <div className="filter-card">
        <div className="search-btn">
          {/* <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          /> */}
          <button
            type="submit"
           
          >
            Submit
          </button>
        </div>

        <button
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>
      </div>

      
    </div>
  );
};

export default Body;
