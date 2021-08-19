// /* EXERCISE 3
//    TODO: In the following code, implement an enum type called Season that represents
//    the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so
//    you can pass in the season by referencing an item in the enum, for example
//    Season.Fall, instead of the literal string "Fall". */

// function whichMonths(season) {
//     let monthsInSeason: string;
//     switch (season) {
//         case "Fall":
//             monthsInSeason = "September to November";
//             break;
//         case "Winter":
//             monthsInSeason = "December to February";
//             break;
//         case "Spring":
//             monthsInSeason = "March to May";
//             break;
//         case "Summer":
//             monthsInSeason = "June to August";
//     }
//     return monthsInSeason;
// }

// console.log(whichMonths("Fall"));

enum Season {
	Fall,
	Winter,
	Spring,
	Summer
}

function whichMonths(season: Season): string {
	let monthsInSeason: string;

	switch(season){
		case Season.Fall:
			monthsInSeason = "September to November";
			break;
		case Season.Winter:
			monthsInSeason = "December to February";
			break;
		case Season.Spring:
			monthsInSeason = "March to May";
			break;
		case Season.Summer:
			monthsInSeason = "June to August";
			break;
		default:
			monthsInSeason = "error";
			break;
	}

	return monthsInSeason;
}

console.log(whichMonths(Season.Fall));
console.log(whichMonths(Season.Spring));
