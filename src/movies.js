// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Bonus Iteration 1, clean the array of directors
function getAllUniqueDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) return 0;
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const validMovies = moviesArray.filter(
    (movie) => typeof movie.score === "number"
  );
  const total = validMovies.reduce((sum, movie) => sum + movie.score, 0);
  const average = total / moviesArray.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  if (!dramas.length) return 0;
  const total = dramas.reduce((sum, movie) => sum + (movie.score || 0), 0);
  const average = total / dramas.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sorted = [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);
  titles.sort();
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const duration = movie.duration;
    let minutes = 0;

    const hoursMatch = duration.match(/(\d+)h/);
    const minsMatch = duration.match(/(\d+)min/);

    if (hoursMatch) minutes += parseInt(hoursMatch[1]) * 60;
    if (minsMatch) minutes += parseInt(minsMatch[1]);

    return { ...movie, duration: minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;
  if (moviesArray.length === 1) {
    return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
  }

  const yearStats = {};
  moviesArray.forEach((movie) => {
    if (!yearStats[movie.year]) {
      yearStats[movie.year] = { total: 0, count: 0 };
    }
    yearStats[movie.year].total += movie.score;
    yearStats[movie.year].count += 1;
  });

  let bestYear = null;
  let bestAvg = -Infinity;

  for (const year in yearStats) {
    const avg = yearStats[year].total / yearStats[year].count;
    if (
      avg > bestAvg ||
      (avg === bestAvg && parseInt(year) < parseInt(bestYear))
    ) {
      bestYear = year;
      bestAvg = avg;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(
    1
  )}`;
}
