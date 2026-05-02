"use client";

import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const AnimalCard = ({ animal }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="p-3 border rounded-lg shadow-sm space-y-2 min-h-[340px] flex items-center justify-center">

      {/* SINGLE CENTER SPINNER */}
      {loading ? (
        <TailSpin
          height="80"
          width="80"
          color="#1d4ed8"
          ariaLabel="loading"
        />
      ) : (
        <div className="w-full space-y-2">

          {/* IMAGE */}
          <div className="relative w-full aspect-square overflow-hidden rounded-lg">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover transition duration-300 hover:scale-105"
            />

            <Chip className="absolute right-2 top-2 px-3">
              {animal.category}
            </Chip>
          </div>

          {/* NAME + PRICE */}
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg">{animal.name}</h2>
            <p className="text-gray-600">${animal.price}</p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-500">
            {animal.description}
          </p>

          {/* BUTTON */}
          <div className="text-center pt-2">
            <Link
              href={`/all-animals/${animal.id}`}
              className="inline-block px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-md transition hover:scale-105"
            >
              View Details
            </Link>
          </div>

        </div>
      )}

    </Card>
  );
};

export default AnimalCard;