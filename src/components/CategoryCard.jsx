// src/components/CategoryCard.js
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{category.strCategory}</h2>
        <p className="text-gray-600 text-sm">
          {category.strCategoryDescription.substring(0, 80)}...
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
