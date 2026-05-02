import Image from "next/image";

const AnimalDetailsCard = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://b13-a8-qurbani-hat.vercel.app/data.json",
    { cache: "no-store" }
  );

  const animals = await res.json();

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return (
      <div className="text-center p-10 text-red-500">
        Animal not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

        <div className="relative w-full aspect-square md:aspect-auto md:h-full h-72">
          <Image
            src={animal.image}
            fill
            alt={animal.name}
            className="object-cover"
          />
        </div>

        <div className="p-4 md:p-6 space-y-4">

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {animal.name}
          </h1>

          <p className="text-gray-500 text-sm md:text-base">
            {animal.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">

            <p><span className="font-semibold">Type:</span> {animal.type}</p>
            <p><span className="font-semibold">Breed:</span> {animal.breed}</p>
            <p><span className="font-semibold">Age:</span> {animal.age} years</p>
            <p><span className="font-semibold">Weight:</span> {animal.weight} kg</p>
            <p><span className="font-semibold">Location:</span> {animal.location}</p>
            <p><span className="font-semibold">Category:</span> {animal.category}</p>

          </div>

          <div className="pt-4">
            <span className="text-2xl md:text-3xl font-bold text-green-600">
              $ {animal.price}
            </span>
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-lg hover:scale-105 transition">
            Buy Now
          </button>

        </div>

      </div>
    </div>
  );
};

export default AnimalDetailsCard;