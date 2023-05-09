import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <div className="my-container">
        <h2 className="text-4xl font-semibold text-center mt-5">Our Popular Product : {coffees.length}</h2>
        <div className="md:grid md:grid-cols-2 mt-8 gap-4">
          {
            coffees.map(coffee => <CoffeeCard 
              key={coffee._id}
              coffee={coffee}
              setCoffees={setCoffees}
              coffees={coffees}
            ></CoffeeCard>)
          }
        </div>
    </div>
  )
}

export default App
