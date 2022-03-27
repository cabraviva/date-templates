const dates = {
    now: () => new Date(),
    in: (time) => new Date(dates.now().getTime() + time),
    seconds: (seconds) => 1000 * seconds,
    minutes: (minutes) => dates.seconds(60 * minutes),
    hours: (hours) => dates.minutes(60 * hours),
    days: (days) => dates.hours(24 * days),
    weeks: (weeks) => dates.days(7 * weeks),
    months: (months) => dates.days(30 * months),
    years: (years) => dates.days(365 * years),
    tomorrow: () => {
        let date = new Date()
        date.setDate(date.getDate() + 1)
        return date
    },
    yesterday: () => {
        let date = new Date()
        date.setDate(date.getDate() - 1)
        return date
    },
    today: () => dates.now(),
    midnight: () => new Date(dates.now().getFullYear(), dates.now().getMonth(), dates.now().getDate()),
    format: (date, dayBeforeMonth = true) => {
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        if (dayBeforeMonth) {
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
        } else {
            return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
        }
    },
    formatCustom: (date, template) => {
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        return template.replace('DD', day).replace('MM', month).replace('YYYY', year).replace('HH', hours).replace('mm', minutes).replace('ss', seconds)
    },
    at: (time) => {
        const xtime = {
            hour: time.replace(/(\d+):(\d+):(\d+)/, '$1'),
            minute: time.replace(/(\d+):(\d+):(\d+)/, '$2'),
            second: time.replace(/(\d+):(\d+):(\d+)/, '$3')
        }

        let date = new Date()
        date.setHours(xtime.hour)
        date.setMinutes(xtime.minute)
        date.setSeconds(xtime.second)
        return date
    }
}

module.exports = dates