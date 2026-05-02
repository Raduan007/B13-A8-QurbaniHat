import AnimalCard from "./AnimalCard";

const FeaturedAnimals = async () => {
  const res = await fetch(
    "https://b13-a8-qurbani-hat.vercel.app/data.json",
    { cache: "no-store" }
  );

  const animals = await res.json();
  const TopAnimals = animals.slice(0, 4);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 space-y-10">

      {/* TITLE */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-500">
          Find Your Perfect Animal
        </h1>

        <p className="opacity-80 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Browse healthy, verified animals for Qurbani and farming needs.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TopAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

    </div>
  );
};

export default FeaturedAnimals;