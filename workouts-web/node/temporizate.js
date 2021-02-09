const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * 22 * * 4', function () {
    console.log('Execute task 1!', new Date().getSeconds())
})

setTimeout(function () {

    task1.cancel()
    console.log('Cancel task')
}, 2000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 22
rule.second = 30

const task2 = schedule.scheduleJob(task1, function () {
    console.log('Execute task 2!', new Date().getSeconds())

})