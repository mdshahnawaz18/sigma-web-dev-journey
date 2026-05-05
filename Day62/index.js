let a = "Crazy "
let b = "Amazing "
let c = "Fire "

let d = "Engine "
let e = "Foods "
let f = "Garments "

let g = "Bros🛒"
let h = "Limited🌍"
let i = "Hub🖥️"

let random = Math.random()

console.log("Random No. : ", random)

if (random < 0.31) {
    if (random < 0.04) {
        console.log(a.concat(d, g))
    }
    else if (random < 0.05) {
        console.log(a.concat(d, h))
    }
    else if (random < 0.06) {
        console.log(a.concat(d, i))
    }
    else if (random < 0.08) {
        console.log(a.concat(e, g))
    }
    else if (random < 0.10) {
        console.log(a.concat(e, h))
    }
    else if (random < 0.14) {
        console.log(a.concat(e, i))
    }
    else if (random < 0.18) {
        console.log(a.concat(f, g))
    }
    else if (random < 0.24) {
        console.log(a.concat(f, h))
    }
    else {
        console.log(a.concat(f, i))
    }

}
else if (random < 0.61) {
    if (random < 0.34) {
        console.log(b.concat(d, g))
    }
    else if (random < 0.36) {
        console.log(b.concat(d, h))
    }
    else if (random < 0.38) {
        console.log(b.concat(d, i))
    }
    else if (random < 0.42) {
        console.log(b.concat(e, g))
    }
    else if (random < 0.48) {
        console.log(b.concat(e, h))
    }
    else if (random < 0.50) {
        console.log(b.concat(e, i))
    }
    else if (random < 0.54) {
        console.log(b.concat(f, g))
    }
    else if (random < 0.56) {
        console.log(b.concat(f, h))
    }
    else {
        console.log(b.concat(f, i))
    }

}
else {
    if (random < 0.62) {
        console.log(c.concat(d, g))
    }
    else if (random < 0.65) {
        console.log(c.concat(d, h))
    }
    else if (random < 0.68) {
        console.log(c.concat(d, i))
    }
    else if (random < 0.74) {
        console.log(c.concat(e, g))
    }
    else if (random < 0.80) {
        console.log(c.concat(e, h))
    }
    else if (random < 0.84) {
        console.log(c.concat(e, i))
    }
    else if (random < 0.88) {
        console.log(c.concat(f, g))
    }
    else if (random < 0.90) {
        console.log(c.concat(f, h))
    }
    else {
        console.log(c.concat(f, i))
    }

}