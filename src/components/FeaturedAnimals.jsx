import AnimalCard from "./AnimalCard";


const FeaturedAnimals = async () => {
const res = await fetch('https://b13-a8-qurbani-hat.vercel.app/data.json',
   { cache: 'no-store',} );
    const animals = await res.json();
    const TopAnimals = animals.slice(0,4);
    
    return (
        <div>
            <h2>Top Animals</h2>
            <div className="grid grid-cols-4">
                {TopAnimals.map (animal => <AnimalCard key={animal.id} animal ={animal} /> )}
            </div>
        </div>
    );
};

export default FeaturedAnimals;