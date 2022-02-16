import { format, subDays, startOfMonth, endOfMonth, subMonths } from 'date-fns'

const dayOfWeekStr = [ "日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜" ];

export class Day {
    date:Date
    number:number
    dayOfWeek:string
    rokuyo:string

    constructor(date, rokuyo) {
        this.date = date
        this.number = date.getDate();
        this.dayOfWeek = dayOfWeekStr[date.getDay()];
        this.rokuyo = rokuyo;
    }
}

export class Month {
    value:string
    count:number

    constructor(value, count) {
        this.value = value;
        this.count = count;
    }
}

export function fromDays(days:Day[]):Month[] {
    const monthes :Month[] = []
    let current = days[0].date
    const last = days[days.length - 1].date


    try {
        while (current !== last) {
            const currentYear = current.getFullYear()
            const currentMonth = current.getMonth()
            if (currentYear >= last.getFullYear() && currentMonth >= last.getMonth()) {
                monthes.push(new Month(format(current, 'yyyy年MM月'), last.getDate() - current.getDay() + 1))
                current = last
            } else {
                let count = endOfMonth(current).getDate() - current.getDay() + 1;
                monthes.push(new Month(format(current, 'yyyy年MM月'), count))
                current = subDays(current, - count)
            }
        }
    } catch (e) {
        console.log(e)
    }
    for (let i in monthes) {
        console.log(monthes[i].value + ':' + monthes[i].count)
    }

    return [
        new Month('2022年1月',6),
        new Month('2022年2月',28),
        new Month('2022年3月',31),
        new Month('2022年4月',25)
    ]
}

export function genDays(num:number) :Day[] {
    const days :Day[] = []
    const now = new Date()
    for (var i = 0; i < num; i++) {
        let it = subDays(now, -i)
        days.push(new Day(it,'大安'))
    }
    return days
}