const getDayOfTheWeek = (year, month, day) => {
    let dayCode = Math.floor(year%100/12);
    //Look at the remainder of this division
    dayCode += (year%100)%12;
    //How many 4s fit in that remainder
    dayCode += Math.floor(two/4);
    //Add the day of the month
    dayCode += day;
    //Add the month code
    dayCode += monthCode(month);

    //check for leap year if January or February
    if (month == "January" || month == "February") {
        if (isLeapYear(year)) {
            dayCode -= 1;
        }
    }

    //check for centuries
    dayCode += adjustForCentury(year);

    //then mod dayCode by 7
    dayCode = dayCode%7;
    //what's the day of the week?
    return dayWeek(dayCode);

};

//make helper functions as well

const adjustForCentury = (year) => {
    const century = Math.floor(year/100);
    if (century == 16) {
        return 6;
    } else if (century == 17) {
        return 4;
    } else if (century == 18) {
        return 2;
    } else if (century == 20) {
        return 6;
    } else if (century == 21) {
        return 4;
    } else {
        return 0;
    }
}

const isLeapYear = (year) => {
    //returns true if the year is a leap year
    if (year%4 == 0) {
        return true;
    }
}

const monthCode = (month) => {
    if (month == "April" || month == "July") {
        return 0;
    } else if (month == "January" || month == "October") {
        return 1;
    } else if (month == "May") {
        return 2;
    } else if (month == "August") {
        return 3;
    } else if (month == "February" || month == "March" || month == "November") {
        return 4;
    } else if (month == "June") {
        return 5;
    } else {
        return 6;
    }
}

const dayWeek = (dayCode) => {
    const weekday = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    return weekday[dayCode];
}

const makeCalender = () => {

    const daysInMonth = {
        1: {
            month: "January",
            numberOfDays: 31,
        },
        2: {
            month: "February",
            numberOfDays: 28,
        },
        3: {
            month: "March",
            numberOfDays: 31,
        },
        4: {
            month: "April",
            numberOfDays: 30,
        },
        5: {
            month: "May",
            numberOfDays: 31,
        },
        6: {
            month: "June",
            numberOfDays: 30,
        },
        7: {
            month: "July",
            numberOfDays: 31,
        },
        8: {
            month: "August",
            numberOfDays: 31,
        },
        9: {
            month: "September",
            numberOfDays: 30,
        },
        10: {
            month: "October",
            numberOfDays: 31,
        },
        11: {
            month: "November",
            numberOfDays: 30,
        },
        12: {
            month: "December",
            numberOfDays: 31,
        },
    }

    let day = null;

    for (let i = 1; i <= 12; i++) {
        day = 1;
        while (day <= daysInMonth[i].numberOfDays) {
            console.log(`${i}-${day}-2022 is a ${getDayOfTheWeek(2022, daysInMonth[i].month, day)}.`);
            day++;
        }
    }

}

module.exports = { getDayOfTheWeek, makeCalender };