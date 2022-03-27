# date-templates
 Some templates for Dates like the Date in one hour or at midnight
 The methods should be pretty selfexplaining if you have codecompletion in you IDE, but here are some examples:

```js
const dates = require('date-templates')

console.log(dates.format(dates.now())) // Get current Date and format it
console.log(dates.format(dates.in(1000))) // Get Date in 1000ms and format it
console.log(dates.format(dates.in(dates.seconds(2)))) // Get Date in 2 seconds and format it
console.log(dates.format(dates.midnight())) // Get Date at midnight and format it

console.log(dates.formatCustom(dates.now(), 'DD/MM/YYYY HH:mm:ss')) // Get current Date and format it using a custom template
console.log(dates.format(dates.tomorrow(dates.at('15:00:00')))) // Get Date tomorrow at 15:00:00 and format it
```