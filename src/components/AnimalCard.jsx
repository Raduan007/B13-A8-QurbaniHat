import { Card } from "@heroui/react";
import Image from "next/image";

const AnimalCard = ({ animal }) => {
  return (
    <Card className="p-3">
      <div className="border">
        <Image
          src={animal.image}
          height={200}
          width={200}
          alt={animal.type}
          className="rounded-lg object-cover"
        />
           <div className="flex text-center justify-evenly items-center">
            <h2 className="mt-2 font-bold">{animal.name}</h2>
           <p>{animal.price}</p>
           </div>
           <h2>{animal.description}</h2>
           <div className="text-center">
           <button className="">View Details</button>
           </div>
      </div>
    </Card>
  );
};

export default AnimalCard;