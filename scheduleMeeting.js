/*
Функция scheduleMeeting(..) должна получать время начала встречи (строка "чч:мм" в 24-часовом формате) и её продолжительность (в минутах).
Функция должна вернуть true, если встреча приходится полностью на рабочий день (в соответствии с временем, заданным в dayStart и dayEnd);
если встреча выходит за рамки рабочего дня, возвращается false.

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    //..TODO..
}

*/

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    const dStart = getDateObj(dayStart),
        dEnd = getDateObj(dayEnd),
        mStart = getDateObj(startTime),
        mEnd = new Date(+mStart + durationMinutes * 6e4);

    function getDateObj(day) {
        const date = new Date(),
            parts = day.split(":");

        date.setHours(+parts.shift());
        date.setMinutes(+parts.shift());
        return date;
    }

    console.log(mStart >= dStart && mEnd <= dEnd);
    return mStart >= dStart && mEnd <= dEnd;
}

scheduleMeeting("7:00", 15);
scheduleMeeting("07:15", 30);
scheduleMeeting("7:30", 30);
scheduleMeeting("11:30", 60);
scheduleMeeting("17:00", 45);
scheduleMeeting("17:30", 30);
scheduleMeeting("18:00", 15);
