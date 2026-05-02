"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AnimalCard from "@/components/AnimalCard";
import PageLoader from "@/components/PageLoader";
import { authClient } from "@/lib/auth-client";

const AllAnimalsPage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect to signin if not authenticated
    if (!isPending && !session) {
      router.push("/signin");
      return;
    }

    // Fetch animals only if authenticated
    if (session) {
      fetchAnimals();
    }
  }, [session, isPending, router]);

  const fetchAnimals = async () => {
    try {
      const res = await fetch(
        "https://b13-a8-qurbani-hat.vercel.app/data.json",
        { cache: "no-store" }
      );
      const data = await res.json();
      setAnimals(data);
    } catch (error) {
      console.error("Failed to fetch animals:", error);
    } finally {
      setLoading(false);
    }
  };

  // Show loading while checking authentication
  if (isPending || loading) {
    return <PageLoader />;
  }

  // Don't render if not authenticated (will redirect)
  if (!session) {
    return null;
  }

  return (
    <PageLoader>
      <div className="px-4 md:px-0">

        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-500">
            Find Your Perfect Animal
          </h1>

          <p className="mt-4 opacity-80 text-gray-500">
            Browse healthy, verified animals for Qurbani and farming needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 md:px-0">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

      </div>
    </PageLoader>
  );
};

export default AllAnimalsPage;