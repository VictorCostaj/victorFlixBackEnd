// src/services/likeService.ts

// método para criar um novo like no banco de dados:

import { Like } from "../models"

export const likeService = {
  create: async (userId: number, courseId: number) => {
    const like = await Like.create({
      userId,
      courseId
    })

    return like
  }
}