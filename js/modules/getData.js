import { input, container, results, empty } from "./variables.js"
import { render } from "./render.js"
import "../modules/search.js"

// FUNCTION FOR RENDERING DATA
export const getAndRenderData = (id) => {
  let inputValue = input.value

  const apiData = {
    url: "https://www.rijksmuseum.nl/api/nl/collection?key=tn2lRhSP&imgonly=true",
    searchVal: inputValue,
    results: results,
  }

  const { url, searchVal } = apiData
  const apiUrl = `${url}&q=${searchVal}&ps=${results}`

  // FETCHING THE DATA
  fetch(apiUrl)
    .then((data) => data.json())
    .then((data) => {
      render(data, id)
    })
    .catch((error) => {
      console.log(error)
      empty.classList.add("displayNone")
      container.insertAdjacentHTML(
        "afterbegin",
        `<p class="empty">Er is een fout opgetreden, probeert het later opnieuw!</p>`
      )
    })
    .finally(() => console.log("loaded"))
}
