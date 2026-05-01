let random = Math.random()

console.log(random)

if (random < 0.3) {
    document.getElementById('1').style.backgroundColor = "green"
    document.getElementById('2').style.backgroundColor = "skyBlue"
    document.getElementById('3').style.backgroundColor = "grey"
    document.getElementById('4').style.backgroundColor = "brown"
    document.getElementById('5').style.backgroundColor = "yellow"
}


else if (random < 0.5) {
    document.getElementById('1').style.backgroundColor = "red"
    document.getElementById('2').style.backgroundColor = "yellow"
    document.getElementById('3').style.backgroundColor = "green"
    document.getElementById('4').style.backgroundColor = "blue"
    document.getElementById('5').style.backgroundColor = "grey"
}


else if (random < 0.8) {
    document.getElementById('1').style.backgroundColor = "pink"
    document.getElementById('2').style.backgroundColor = "darkGreen"
    document.getElementById('3').style.backgroundColor = "skyBlue"
    document.getElementById('4').style.backgroundColor = "orange"
    document.getElementById('5').style.backgroundColor = "red"
}
    

else {
    document.getElementById('1').style.backgroundColor = "blue"
    document.getElementById('2').style.backgroundColor = "gold"
    document.getElementById('3').style.backgroundColor = "orange"
    document.getElementById('4').style.backgroundColor = "red"
    document.getElementById('5').style.backgroundColor = "pink"
}
    

