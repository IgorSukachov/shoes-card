let img = document.getElementById('img')
    let colorLightGreen = document.getElementById('lightgreen')
    let colorBlue = document.getElementById('blue')
    let colorRed = document.getElementById('red')
    let colorLightBlue = document.getElementById('lightblue')
    let colorGrey = document.getElementById('grey')

    colorLightGreen.addEventListener('click', () => {
        img.src = './img01.png'
    })

    colorBlue.addEventListener('click', () => {
        img.src = './img02.png'
    })

    colorRed.addEventListener('click', () => {
        img.src = './img05.png'
    })

    colorLightBlue.addEventListener('click', () => {
        img.src = './img04.png'
    })

    colorGrey.addEventListener('click', () => {
        img.src = './img03.png'
    })