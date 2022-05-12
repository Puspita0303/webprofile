let Line =document.getElementById("slogan")
let txts=['a coder', 'a content creator','a fullstack developer','also an IT instruction'];
let speed=50

async function typewriter(txt) {
    for(let i = 0; i < txt.length; i++){
        Line.innerHTML + txt[i];
        await DelayNode(Speed)
    }
}

async function reverseTypewriter(txt) {
    for(let i =  txt.length; i> 0; i--){
        Line.innerHTML = Line.innerHTML.slice(0,-1)
        await delay (speed)
    }
}

async function writeLoop() {
    for(let i = 0; i< txts.length; i++){
        await typewriter(txts[i])
        await delay(1000)
        await reverseTypewriter(txts[i])
        await delay(300)
    }
    writeLoop()
}

function delay(ms) {
    return new Promise((resolve) =>{setTimeout(()=> {resolve()},ms)})
}
writeLoop()



