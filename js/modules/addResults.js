import { results, setResult } from "../modules/variables.js"
import { getAndRenderData } from "./getData.js"

// ADDING RESULTS TO PAGE
export const addResults = () => {
  setResult(results + 4)
  getAndRenderData()
}
