import { input, container, moreButton, artists } from "./variables.js"

// FUNCTION IF NO SEARCH RESULTS
export const searchError = (data) => {
  let inputValue = input.value

  const artist = artists[Math.floor(Math.random() * artists.length)]

  if (data.artObjects.length === 0) {
    container.insertAdjacentHTML(
      "afterbegin",
      `<p class="empty">Geen resultaten gevonden met <i><u>${inputValue}</u></i>, probeer een naam als <b>${artist}</b>!</p>`
    )
    moreButton.classList.add("displayNone")
  }
}
