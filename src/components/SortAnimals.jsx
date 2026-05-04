"use client";

import { useState } from "react";
import AnimalCard from "./AnimalCard";

const SortAnimals = ({ animals }) => {
  const [sort, setSort] = useState("");

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div>

      {/* Sort dropdown*/}
      <div className="flex justify-start mt-6">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 border shadow rounded text-black"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/*animals grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

    </div>
  );
};

export default SortAnimals;