import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function PreviousSearches() {
    const searches=[ 'pizza', 'burger', 'cookies', 'juice', 'briyani', 'salad','ice cream', 'lasanga', 'pudding', 'soup']
  return (
    <div className="previous-searches section">
    <h2>Previous Searches</h2>
    <div className="previous-searches-container">
    { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s" }}className="search-item">
    
    {search}
    
    
    </div>))}
    
    <div className="search-box">
     {/*<input type="text" placeholder="Search..." />*/}
     <button className="btn">
     <Link to="http://127.0.0.1:5500/food-app/src/components/indes.html"><button className="btn">Search</button></Link>
      <FontAwesomeIcon icon={faSearch} />
     </button>
    </div>
    </div> 
    </div>
    )
  }
  
  
  
  
  
  
  
  
  //   <div class = "meal-search-box">
  //         <input type = "text" class = "search-control" placeholder="Enter a recipe" id = "search-input"/>
  //         <button type = "submit" class = "search-btn btn" id = "search-btn">
  //           <i class = "fas fa-search"></i>
  //         </button>
//   </div>
//   <div class = "meal-result">
      
//       <div id= "meal">
//         {/*<!-- meal item -->
//         <!-- <div class = "meal-item">
//           <div class = "meal-img">
//             <img src = "food.jpg" alt = "food">
//           </div>
//           <div class = "meal-name">
//             <h3>Potato Chips</h3>
//             <a href = "#" class = "recipe-btn">Get Recipe</a>
//           </div>
//         </div> -->
// <!-- end of meal item -->*/}
//       </div>
//   </div>
//   <div>
//   <div class = "meal-details">
//     <button type = "button" class = "btn recipe-close-btn" id = "recipe-close-btn">
//     <i class = "fas fa-times"></i>
//   </button>
//     <div class = "meal-details-content">

//     </div>
//   </div>
//   <script src = "script.js"></script>
//   </div>








// <div class = "container">
// <div class = "meal-wrapper">
//   <div class = "meal-search">
    

//     <div class = "meal-search-box">
//       <input type = "text" class = "search-control" placeholder="Enter an ingredient" id = "search-input"/>
//       <button type = "submit" class = "search-btn btn" id = "search-btn">
//         <i class = "fas fa-search"></i>
//       </button>
//     </div>
//   </div>

//   <div class = "meal-result">
   
//     <div id= "meal">
      
//     </div>
//   </div>


//   <div class = "meal-details">
    
//     <button type = "button" class = "btn recipe-close-btn" id = "recipe-close-btn">
//       <i class = "fas fa-times"></i>
//     </button>

   
//     <div class = "meal-details-content">
      
//     </div>
//   </div>
// </div>
// </div>



// <script src = "script.js"></script>