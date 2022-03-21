import "../vendor/routie.js"
import { getAndRenderData } from "./getData.js"
import { header } from "./variables.js"

// CHECKING THE HASH
export const handleRoutes = () => {
  routie({
    "": () => {
      getAndRenderData()
    },
    "art/:id": (id) => {
      getAndRenderData(id)
      header.classList.add("nonFixed")
    },
  })
}
