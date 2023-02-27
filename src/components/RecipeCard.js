import Customimg from "./Customimg"

export default function RecipeCard({recipe}) {
  return (
    <div className="recipe-card">
     <Customimg imgSrc= {recipe.image} pt="65%" />
     <div className="recipe-card-info">
          <img className="auther-img" src= {recipe.authorImg} alt="" />
          <p className="recipe-title"> {recipe.title}</p>
          <p className="recipe-desc">An empty stomach is an devil's playground...</p>
          {/*<a className="view-btn" href="#!">VIEW RECIPE</a>*/}
     </div>
    </div>
  )
}
