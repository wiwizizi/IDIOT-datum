let curr = new Date
let week = []

for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i

    const options = {
      //  weekday: "long",
        //year: "numeric",
        month: "numeric",
        day: "numeric",
    };
    let day = new Date(curr.setDate(first)).toLocaleString('de-DE', options)

    week.push(day)
}
console.log(week)