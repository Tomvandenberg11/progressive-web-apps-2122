let results = 6
const setResult = (value) => {
  results = value
  console.log(value)
}

export { setResult, results }

export const container = document.querySelector(".container")
export const input = document.querySelector("#search")
export const empty = document.querySelector(".empty")
export const moreButton = document.querySelector("button")
export const header = document.querySelector("header")

// ARRAY FOR SEARCH RESULTS
export const artists = [
  "Rembrandt",
  "Vermeer",
  "Hals",
  "Cuyp",
  "Asselijn",
  "Steen",
  "Van Gogh",
]
