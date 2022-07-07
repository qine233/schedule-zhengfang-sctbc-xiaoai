function scheduleTimer({ parserRes }) {
    let full_weeks = parserRes.map(item => item.weeks).flat()
    full_weeks = full_weeks.sort((a, b) => b - a)
    let max_week = full_weeks[0]
    return {
        totalWeek: max_week,
        startWithSunday: false,
        showWeekend: false,
        forenoon: 4,
        afternoon: 4,
        night: 4,
        sections: [
            {
                section: 1,
                startTime: '09:00',
                endTime: '09:40'
            },
            {
                section: 2,
                startTime: '09:50',
                endTime: '10:30'
            },
            {
                section: 3,
                startTime: '10:45',
                endTime: '11:25'
            },
            {
                section: 4,
                startTime: '11:35',
                endTime: '12:15'
            },
            {
                section: 5,
                startTime: '14:00',
                endTime: '14:40'
            },
            {
                section: 6,
                startTime: '14:50',
                endTime: '15:30'
            },
            {
                section: 7,
                startTime: '15:45',
                endTime: '16:25'
            },
            {
                section: 8,
                startTime: '16:35',
                endTime: '17:15'
            },
            {
                section: 9,
                startTime: '18:30',
                endTime: '19:20'
            },
            {
                section: 10,
                startTime: '19:30',
                endTime: '20:00'
            },
            {
                section: 11,
                startTime: '20:10',
                endTime: '20:50'
            },
            {
                section: 12,
                startTime: '21:00',
                endTime: '21:30'
            }
        ]
    }
}