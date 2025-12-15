const themeSelector = document.getElementById('theme-selector')
const colorSelectors = document.getElementById('color-selectors')
const customStyleColor = document.getElementsByClassName('color-picker')
const settingsOpenButton = document.getElementById('settings-open-button')
const settings = document.getElementById('settings')
const closeSettingsButton = document.getElementById('close-settings')

if (localStorage.getItem('theme')) {
    themeSelector.value = localStorage.getItem('theme')
    renderTheme()
} else {
    document.body.classList.value = 'default'
}

for (let color of customStyleColor) {
    console.log(color.value)
}

function renderTheme() {
    clearCustomStyles()
    colorSelectors.style.display = ''
     if(themeSelector.value === 'custom-theme') {
        colorSelectors.style.display = 'block'
        document.body.classList.value = ''
        document.body.classList.add(themeSelector.value)
        localStorage.setItem('theme', themeSelector.value)
        if (localStorage.getItem('primary-color')) {
            renderCustomTheme()
        }
    } else if (themeSelector.value !== 'default') {
        document.body.classList.value = ''
        document.body.classList.add(themeSelector.value)
        localStorage.setItem('theme', themeSelector.value)
    }  else {
        document.body.classList.value = 'default'
        localStorage.removeItem('theme')
    }
}

function renderCustomTheme() {
    for (const color of customStyleColor) {
        let currentColor = ''
        if (color.name === 'secondary-color') {
            currentColor = localStorage.getItem(color.name)
            document.body.style.setProperty(`--${color.name}`, currentColor)
            document.body.style.setProperty(`--${color.name}-transparent`, `${currentColor}d2`)
            color.value = currentColor
        } else {
            currentColor = localStorage.getItem(color.name)
            document.body.style.setProperty(`--${color.name}`, currentColor)
            color.value = currentColor
        }
    }
}

function editCustomTheme() {
    for (const color of customStyleColor) {
        if (color.name === 'secondary-color') {
            localStorage.setItem(color.name, color.value)
            document.body.style.setProperty(`--${color.name}`, color.value)
            document.body.style.setProperty(`--${color.name}-transparent`, `${color.value}d2`)
        } else {
            localStorage.setItem(color.name, color.value)
            document.body.style.setProperty(`--${color.name}`, color.value)
        }
    }
}

function clearCustomStyles() {
    for (const color of customStyleColor) {
        document.body.style.setProperty(`--${color.name}`, '')
        document.body.style.setProperty(`--${color.name}-transparent`, '')
    }
}

function openSettings() {
    settings.style.display = 'flex'
}

function closeSettings() {
    settings.style.display = 'none'
}

for (const color of customStyleColor) {
    color.addEventListener('change', editCustomTheme)
}

themeSelector.addEventListener('change', renderTheme)

closeSettingsButton.addEventListener('click', closeSettings)

settingsOpenButton.addEventListener('click', openSettings)