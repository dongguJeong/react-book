import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api.ts";
import { Category } from "../models/category.model.ts";

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;
      const categoryWidthAll = [
        {
          category_id: null,
          category_name: "전체",
        },
        ...category,
      ];
      setCategory(categoryWidthAll);
    });
  }, []);

  return { category };
};
