import Challenge from "@/types";
import CategoryChip from "@/components/CategoryChip";
import Link from "next/link";
import { FaArrowLeft, FaFlag, FaClock, FaChartLine } from "react-icons/fa";

async function getData(id: string) {
  const res = await fetch(`http://localhost:1323/api/v1/challenges/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ChallengeById({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const challenge: Challenge = JSON.parse(await getData(id));

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <div className="mb-6">
        <Link
          href="/challenges"
          className="hover:text-rowdy-dark-blue flex items-center text-rowdy-blue transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Challenges
        </Link>
      </div>

      {/* Challenge header */}
      <div className="rounded-t-xl bg-rowdy-light-blue p-6 shadow-md">
        <h1 className="text-serif mb-4 text-4xl font-bold">{challenge.name}</h1>

        <div className="mb-4 flex flex-wrap gap-2">
          {challenge.categories?.map((category, idx) => (
            <CategoryChip
              key={category.toLowerCase() + idx}
              id={category.toLowerCase()}
              title={category}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 text-lg md:grid-cols-2">
          <div className="flex items-center">
            <FaChartLine className="mr-2 text-rowdy-blue" />
            <span>Difficulty: </span>
            <span className="ml-2 font-semibold">
              {challenge.difficulty ?? "Unknown"}
            </span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2 text-rowdy-blue" />
            <span>Expected Time: </span>
            <span className="ml-2 font-semibold">
              {challenge.expectedTime ?? "Unknown"} minutes
            </span>
          </div>
          {challenge.points && (
            <div className="flex items-center">
              <FaFlag className="mr-2 text-rowdy-blue" />
              <span>Points: </span>
              <span className="ml-2 font-semibold">{challenge.points}</span>
            </div>
          )}
        </div>
      </div>

      {/* Challenge content */}
      <div className="mb-6 rounded-b-xl bg-white p-6 shadow-md">
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Description</h2>
          <div className="prose max-w-none">
            {challenge.description ? (
              <p>{challenge.description}</p>
            ) : (
              <p className="italic text-gray-500">No description available</p>
            )}
          </div>
        </div>

        {/* Flag submission section */}
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Submit Flag</h2>
          <div className="rounded-lg bg-gray-50 p-4">
            <form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="flag"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Flag
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="flag"
                    name="flag"
                    placeholder="Enter flag (e.g., flag{...})"
                    className="flex-grow rounded-l-md border border-gray-300 px-4 py-2 focus:border-rowdy-blue focus:ring-rowdy-blue"
                  />
                  <button
                    type="submit"
                    className="hover:bg-rowdy-dark-blue rounded-r-md bg-rowdy-blue px-4 py-2 font-bold text-white transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
