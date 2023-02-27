import CheifCard from "./CheifCard"
export default function CheifSection() {
  const cheifs=[

    {
      name: "K.Damodharan",
      img:  "/foodchef/cheff1.jpg",
      recipesCount: "10",
      cuisine: "Indian",
    },
    
    {
      name: "Sanjeev Kapoor",
      img:  "/foodchef/cheff2.jpg",
      recipesCount: "07",
      cuisine: "Indian",
    },
    
    {
      name: "Venkatesh bhat",
      img: "/foodchef/cheff3.jpg",
      recipesCount: "08",
      cuisine: "Indian",
    },
    
    {
      name: "Manish Mehrotra",
      img: "/foodchef/cheff4.jpg",
      recipesCount: "07",
      cuisine: "Indian",
    },
    
    {
      name: "Vikas Khanna",
      img: "/foodchef/cheff5.jpg",
      recipesCount: "06",
      cuisine: "Indian",
    },
    
    {
      name: "Ranveer Brar",
      img: "/foodchef/cheff6.jpg",
      recipesCount: "05",
      cuisine: "Indian"
    }
  ]
  return (
    <div className="section cheifs">
    <h1 className="title">Our Top Chefs</h1>
    <div className="top-cheifs-container">
  {/*  <CheifCard/>
    <CheifCard/>
    <CheifCard/>
    <CheifCard/>
    <CheifCard/>
  <CheifCard/>*/}
  { cheifs.map(cheif => <CheifCard key={cheif.name}  cheif={cheif}  /> )} 
  
  
  </div>
  </div>
  )
}

// <img src={imagcheife} />