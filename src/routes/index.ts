import { Router } from "express"

import { productsRoutes } from "./productsRoutes"
import { tablesRoutes } from "./tableRoutes"

const routes = Router()
routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)

export { routes }