import AnimalCard from "@/components/AnimalCard";

const AllAnimalsPage = async () => {
const res = await fetch('https://b13-a8-qurbani-hat.vercel.app/data.json',
   { cache: 'no-store',} );
    const animals = await res.json();
   
    return (
            <div className="">
            <div className="text-center  ">
                <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 ">
            Find Your Perfect Animal
             </h1>
           <p className="mt-4 opacity-80  text-gray-500">
               Browse healthy, verified animals for Qurbani and farming needs.
           </p>
            </div>
               <div class="">
                {animals.map (animal => <AnimalCard key={animal.id} animal ={animal} /> )}
            </div>
        </div>
    );
};

export default AllAnimalsPage;