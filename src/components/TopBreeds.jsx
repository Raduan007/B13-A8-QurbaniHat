const TopBreeds = () => {
  return (
    <div className="space-y-8 px-4 md:px-10 lg:px-20 pt8">

      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Top Breeds
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="p-5 border rounded-xl shadow-sm text-center
        transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl active:scale-95">
          <h3 className="font-bold text-lg">Deshi Cow</h3>
          <p className="text-sm text-gray-600 mt-2">
            Strong local breed, well adapted to Bangladesh climate and highly preferred for Qurbani.
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm  text-center
        transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl active:scale-95">
          <h3 className="font-bold text-lg">Sahiwal</h3>
          <p className="text-sm text-gray-600 mt-2">
            High milk-producing breed with excellent health and strong body structure.
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm  text-center
        transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl active:scale-95">
          <h3 className="font-bold text-lg">Brahman</h3>
          <p className="text-sm text-gray-600 mt-2">
            Heat-resistant and durable breed, widely used in farming and meat production.
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm  text-center
        transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl active:scale-95">
          <h3 className="font-bold text-lg">Black Bengal Goat</h3>
          <p className="text-sm text-gray-600 mt-2">
            Famous Bangladeshi goat breed known for tender meat and high demand in Qurbani.
          </p>
        </div>

      </div>

    </div>
  );
};

export default TopBreeds;