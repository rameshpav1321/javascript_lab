const findTheOldest = function (peoples) {
    const maxAge = peoples.reduce((maxi, people) => {
        let yearOfDeath = 0;
        if (people.yearOfDeath) { yearOfDeath = people.yearOfDeath; }
        else { yearOfDeath = (new Date()).getFullYear(); }
        return Math.max(maxi, yearOfDeath - people.yearOfBirth);

    }, 0)
    let ans = {}
    peoples.forEach(people => {
        let yearOfDeath = 0;
        if (people.yearOfDeath) { yearOfDeath = people.yearOfDeath; }
        else { yearOfDeath = (new Date()).getFullYear() }
        if (yearOfDeath - people.yearOfBirth == maxAge) { ans = people; }
    })
    return ans
};

// Do not edit below this line
module.exports = findTheOldest;
