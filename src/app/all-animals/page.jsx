
import PageLoader from "@/components/PageLoader";
import SortAnimals from "@/components/SortAnimals";

const AllAnimalsPage = async () => {
  const res = await fetch(
    "https://b13-a8-qurbani-hat.vercel.app/data.json",
    { cache: "no-store" }
  );
  
  const animals = await res.json();

  return (
    <PageLoader>
      <div className="px-4 md:px-0">

        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-400">
            Find Your Perfect Animal
          </h1>

          <p className="mt-4 opacity-80 text-gray-500">
            Browse healthy, verified animals for QurBani and farming needs.
          </p>
        </div>

         <SortAnimals animals={animals} />
        </div>

   
    </PageLoader>
  );
};

export default AllAnimalsPage;