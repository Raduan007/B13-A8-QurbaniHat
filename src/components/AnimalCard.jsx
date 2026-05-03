import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const AnimalCard = ({ animal }) => {
  return (
    <div className="w-full">
      <Card className="p-3 border rounded-lg shadow-sm space-y-2">

        <div className="relative w-full aspect-square overflow-hidden rounded-lg">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="transition-all duration-300 hover:scale-105 active:scale-95 object-cover"
            sizes="(max-width: 768px) 100vw, 30vw"
          />

          <Chip className="absolute right-2 top-2 px-3">
            {animal.category}
          </Chip>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">{animal.name}</h2>
          <p className="text-gray-600">${animal.price}</p>
        </div>

        <p className="text-sm text-gray-500">
          {animal.description}
        </p>

       <div className="text-center pt-2">
        <Link
       href={`/all-animals/${animal.id}`}
    onClick={() => toast.success("Opening details...")}
           className="inline-block px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        View Details
       </Link>
    </div>

      </Card>
    </div>
  );
};

export default AnimalCard;