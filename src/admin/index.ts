import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { Sequelize } from "sequelize";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminjs = new AdminJS ({
    databases: [Sequelize],
    rootPath: "/admin",
})

export const adminjsRouter = AdminJSExpress.buildRouter(adminjs) // constroi as rotas