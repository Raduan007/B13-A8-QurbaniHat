const TopBreeds = () => {
  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold text-center">
        Top Breeds
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        <span className="px-4 py-2 bg-gray-200 rounded-full">Deshi Cow</span>
        <span className="px-4 py-2 bg-gray-200 rounded-full">Sahiwal</span>
        <span className="px-4 py-2 bg-gray-200 rounded-full">Brahman</span>
        <span className="px-4 py-2 bg-gray-200 rounded-full">Goat (Black Bengal)</span>

      </div>

    </div>
  );
};

export default TopBreeds;