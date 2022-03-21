import { addResults } from "./addResults.js"
import { searchError } from "./searchError.js"
import { empty, moreButton, container } from "./variables.js"

// CHECKING IF HASH HAS ID
export const render = (data, id) => {
  if (!id) {
    collection(data)
  } else {
    item(data, id)
    moreButton.classList.add("displayNone")
  }
}

// FUNCTION FOR LOADING ALL COLLECTIONS
export const collection = (data) => {
  empty.classList.add("displayNone")
  moreButton.classList.remove("displayNone")
  container.innerHTML = ""

  searchError(data)

  let count = 0
  moreButton.addEventListener("click", () => {
    count++
    addResults(count)
  })

  data.artObjects.reverse().map((art) => {
    const img = art.webImage.url.slice(0, -3) + "=s1000"
    moreButton.classList.remove("displayNone")

    if (art.webImage.img !== null) {
      container.insertAdjacentHTML(
        "afterbegin",
        `
            <a href="#art/${art.id}">
                <article style="background-image: url('${img}')">
                    <div>
                        <h3>${art.title}</h3>
                        <p>${art.principalOrFirstMaker}</p>
                    </div>
                </article>
            </a>
        `
      )
    }
  })
}

// FUNCTION FOR LOADING SINGLE ART APP
const item = (data, id) => {
  container.innerHTML = ""
  const section = document.createElement("section")
  section.classList.add("singleArt")

  const result = data.artObjects.filter((item) => item.id === id)

  const link = result.map((item) => item.links.web)

  const imgObject = result.map((item) => item.webImage)
  const itemImg = imgObject.map((item) => item.url.slice(0, -3) + "=s1000")

  const itemTitle = result.map((item) => item.title)
  const itemLongTitle = result.map((item) => item.longTitle)

  const linkie = window.location.origin + window.location.pathname

  section.innerHTML = ` 
      <a href="${linkie}">Terug</a>
      <div>
        <h3>${itemTitle}</h3>
        <img src="${itemImg}"/>
        <p>${itemLongTitle[0]}</p>
        <a href="${link}" target="_blanc">Bekijk hier meer over dit kunstwerk.</a>
      </div>
    `
  container.insertAdjacentElement("afterbegin", section)
}
