
const button = document.getElementById('button')
const selectColorInput = document.getElementById('select-color-input')
const modeSelectButton = document.getElementById('modeSelectButton')
let optionsArray = Object.values(modeSelectButton)
const colorBars = Object.values(document.querySelector('.scheme-colors').children)
const hexCodesText = Object.values(document.querySelector('.hex-names-container').children)


fetch("https://www.thecolorapi.com/scheme?hex=000000&format=json&mode=monochrome&count=5")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let colors = data.colors
        console.log(colors)
        let idx = 0
        colors.map(color => {
          let colorHex = color.hex.value
          colorBars[idx].style.backgroundColor = colorHex
          hexCodesText[idx].innerHTML = colorHex
          idx++
        })
      })





button.addEventListener('click', e => {
    let hexColorSelected = selectColorInput.value
    let n = hexColorSelected.slice(1)
    let value

    optionsArray.map(option => {
       if(option.selected) {
         value = option.value
       }
    })
    
    let url = `https://www.thecolorapi.com/scheme?hex=${n}&format=json&mode=${value}&count=5`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let colors = data.colors
        console.log(colors)
        let idx = 0
        colors.map(color => {
          let colorHex = color.hex.value
          colorBars[idx].style.backgroundColor = colorHex
          hexCodesText[idx].innerHTML = colorHex
          idx++
        })
      })
})
    