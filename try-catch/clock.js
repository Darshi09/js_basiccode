let s= "04:00:00PM"
let s1= "12:00:00AM"

function clock(s){
    let [h, m, s1] = s.split(":")
    let ampm = s1.slice(2)
    h = parseInt(h)
    if (h === 12) {
        h = 0
    }
    if (ampm === "PM") {
        h += 12
    }
    return `${h.toString().padStart(2, '0')}:${m}:${s1.slice(0, 2)}`
}
console.log(clock(s))
console.log(clock(s1))
console.log(clock("12:00:00PM"))

  