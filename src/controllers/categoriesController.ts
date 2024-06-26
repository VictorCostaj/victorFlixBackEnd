// src/controllers/categories-controller.ts

import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { categoryService } from "../services/categoryService";

const categoriesController = {
  //GET /Categories
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query);

    try {
      const paginatedCategories = await categoryService.findAllPaginated(
        page,
        perPage
      );

      return res.json(paginatedCategories);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /CATEGORIES/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const category = await categoryService.findByIdWithCourses(id); //CategorySerive - montado em services
      return res.json(category);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};

export { categoriesController };
