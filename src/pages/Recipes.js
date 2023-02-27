import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
// import script from "../components/script"
export default function Recipes() {
    const recipes =[
        {
        title: "Tacos",
        image: "/img/images food/image/img 1.jpg",
        authorImg: "/foodchef/cheff6.jpg",
        },

        {
            title: "Kebab",
            image: "/img/images food/image/img 2.jpg",
            authorImg: "/foodchef/cheff5.jpg",
        },

        {
            title: "french Fries",
            image: "/img/images food/image/img 3.jpg",
            authorImg: "/foodchef/cheff4.jpg",
        },

        
        {
                title: "Chicken bones",
                image: "/img/images food/image/img 4.jpg",
                authorImg: "/foodchef/cheff3.jpg",
         },

         {
            title: "Dessert",
            image: "/img/images food/image/img 5.jpg",
            authorImg: "/foodchef/cheff2.jpg",
        },

        {
            title: "Noodles",
            image: "/img/images food/image/img 6.jpg",
            authorImg: "/foodchef/cheff1.jpg",
        },
        
        
            
        
    ].sort(()=> Math.random() -0.5)
    


    
  return (
    <div>
     <PreviousSearches />
     <div className="recipes-container">
       {/* <RecipeCard />*/}
       {recipes.map((recipe, index) => (
         <RecipeCard key={index} recipe = {recipe} />

       ))}
        
     </div>
    </div>
  )
}
        
  

        