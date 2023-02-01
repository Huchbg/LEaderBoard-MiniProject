/*const temlate = document
  .querySelector("[data-temlate-player]")
  .content.cloneNode(true).children[0]*/

let arrayOfPlayers = []
const firstNameInput = document.querySelector("#FirstNameInput")
const lastNameInput = document.querySelector("#LastNameInput")
const coutryInput = document.querySelector("#CountryInput")
const scoreInput = document.querySelector("#ScoreInput")
const onErrP = document.querySelector(".OnError")
const PlayerDiv = document.querySelector(".dynamicDiv")

const Addbtn = document.querySelector(".addPlayerBtn")

Addbtn.addEventListener("click", () => {
  if (CheckForErr()) {
    onErrP.textContent = ""
    const newUser = {}
    const [firstValue, lastValue, coutryValue, scoreValue] = GetInfo()
    const fullName = firstValue + " " + lastValue
    const actualScore = parseInt(scoreValue)
    newUser.FullName = fullName
    newUser.coutry = coutryValue
    newUser.score = actualScore
    newUser.date = getDate()

    arrayOfPlayers.push(newUser)
    displayUsers()
  } else {
    onErrP.textContent =
      "The score should be a number ,and all fields are requared!"
  }
  firstNameInput.value = ""
  lastNameInput.value = ""
  coutryInput.value = ""
  scoreInput.value = ""
})

function SortArray() {
  arrayOfPlayers.sort((a, b) => {
    if (a.score > b.score) {
      return -1
    }
    if (a.score < b.score) {
      return 1
    }
    return 0
  })
}

function displayUsers() {
  PlayerDiv.innerHTML = ""
  SortArray()

  for (const User of arrayOfPlayers) {
    const temlate = document
      .querySelector("[data-temlate-player]")
      .content.cloneNode(true).children[0]

    const NameP = temlate.querySelector(".Name")
    const DateP = temlate.querySelector(".dateP")
    const CoutryP = temlate.querySelector(".countryP")
    const ScoreP = temlate.querySelector(".scoreP")
    const deleteBTN = temlate.querySelector(".delete")
    const addBtn = temlate.querySelector(".addScoreBTN")
    const takeBtn = temlate.querySelector(".takeScoreBTN")

    NameP.textContent = User.FullName
    DateP.textContent = User.date
    CoutryP.textContent = User.coutry
    ScoreP.textContent = User.score
    addBtn.addEventListener("click", () => {
      User.score += 5
      displayUsers()
    })
    takeBtn.addEventListener("click", () => {
      User.score -= 5
      displayUsers()
    })
    deleteBTN.addEventListener("click", () => {
      let newArr = []
      for (let i = 0; i < arrayOfPlayers.length; i++) {
        if (arrayOfPlayers[i] != User) {
          newArr.push(arrayOfPlayers[i])
        }
      }
      arrayOfPlayers = newArr
      displayUsers()
    })
    PlayerDiv.appendChild(temlate)
  }
}

function CheckForErr() {
  const firstValue = firstNameInput.value
  const lastValue = lastNameInput.value
  const coutryValue = coutryInput.value
  const scoreValue = scoreInput.value
  if (
    firstValue != "" &&
    lastValue != "" &&
    coutryValue != "" &&
    scoreValue != ""
  ) {
    const noContinut = isNaN(scoreValue)
    if (noContinut) {
      return false
    }

    return true
  } else {
    return false
  }
}

function GetInfo() {
  const firstValue = firstNameInput.value
  const lastValue = lastNameInput.value
  const coutryValue = coutryInput.value
  const scoreValue = scoreInput.value
  return [firstValue, lastValue, coutryValue, scoreValue]
}

function getDate() {
  const now = new Date()
  let monthNum = now.getMonth()
  if (monthNum == 0) {
    monthNum = "jan"
  } else if (monthNum == 1) {
    monthNum = "feb"
  } else if (monthNum == 2) {
    monthNum = "march"
  } else if (monthNum == 3) {
    monthNum = "apr"
  } else if (monthNum == 4) {
    monthNum = "may"
  } else if (monthNum == 5) {
    monthNum = "june"
  } else if (monthNum == 6) {
    monthNum = "july"
  } else if (monthNum == 7) {
    monthNum = "aug"
  } else if (monthNum == 8) {
    monthNum = "sep"
  } else if (monthNum == 9) {
    monthNum = "oct"
  } else if (monthNum == 10) {
    monthNum = "nov"
  } else if (monthNum == 11) {
    monthNum = "dec"
  }
  let day = now.getDate()
  if (day < 10) {
    day = "0" + day
  }
  const year = now.getFullYear()
  let hour = now.getHours()
  if (hour < 10) {
    hour = "0" + hour
  }
  let minutes = now.getMinutes()
  if (minutes < 10) {
    minutes = "0" + minutes
  }

  return `${monthNum} ${day},${year} ${hour}:${minutes}`
}
