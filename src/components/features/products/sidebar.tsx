import { SidebarProps } from "@/lib/types";
import React from "react";

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  setCategoriesFilter,
  setRatingFilter,
  ratingFilter,
}) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    if (checked) {
      setCategoriesFilter((prev) => [...prev, name]);
    } else {
      setCategoriesFilter((prev) => prev.filter((item) => item !== name));
    }
  };

  const handleClick = (rating: number) => {
    setRatingFilter(ratingFilter === rating ? 0 : rating);
  };

  const isRatingSelected = (rating: number) => rating === ratingFilter;
  return (
    <aside className="w-full md:w-1/4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
          Categorías:
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div className="flex items-center" key={category}>
              <input
                type="checkbox"
                id={category}
                name={category}
                className="mr-2"
                onChange={handleCategoryChange}
              />
              <label
                htmlFor={category}
                className="text-gray-900 dark:text-gray-300"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
          Rates:
        </h2>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((rating) => (
            <div className="flex items-center" key={rating}>
              <button onClick={() => handleClick(rating)}>
                <span
                  className={`text-yellow-400 dark:text-yellow-300 
                    hover:text-yellow-800 dark:hover:text-yellow-500 
                    ${
                      isRatingSelected(rating)
                        ? "text-yellow-800 dark:text-yellow-500"
                        : ""
                    }
                  `}
                >
                  {"★".repeat(rating) + "☆".repeat(5 - rating)}
                </span>{" "}
                & up
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
