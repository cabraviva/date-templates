const dates = require('../main.js')

console.log(dates.format(dates.now())) // Get current Date and format it
console.log(dates.format(dates.in(1000))) // Get Date in 1000ms and format it
console.log(dates.format(dates.in(dates.seconds(2)))) // Get Date in 2 seconds and format it
console.log(dates.format(dates.midnight())) // Get Date at midnight and format it

console.log(dates.formatCustom(dates.now(), 'DD/MM/YYYY HH:mm:ss')) // Get current Date and format it using a custom template
console.log(dates.format(dates.tomorrow(dates.at('15:00:00')))) // Get Date tomorrow at 15:00:00 and format it