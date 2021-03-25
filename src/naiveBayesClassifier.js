const MAGIC_NUMBER = 1.01;

function welcomeMessage() {
  return `Welcome to naiveBayesClassifier.js!`;
}

// songs
const imagine = ["c", "cmaj7", "f", "am", "dm", "g", "e7"];
const somewhereOverTheRainbow = ["c", "em", "f", "g", "am"];
const tooManyCooks = ["c", "g", "f"];
const iWillFollowYouIntoTheDark = ["f", "dm", "bb", "c", "a", "bbm"];
const babyOneMoreTime = ["cm", "g", "bb", "eb", "fm", "ab"];
const creep = ["g", "gsus4", "b", "bsus4", "c", "cmsus4", "cm6"];
const army = ["ab", "ebm7", "dbadd9", "fm7", "bbm", "abmaj7", "ebm"];
const paperBag = [
  "bm7",
  "e",
  "c",
  "g",
  "b7",
  "f",
  "em",
  "a",
  "cmaj7",
  "em7",
  "a7",
  "f7",
  "b",
];
const toxic = [
  "cm",
  "eb",
  "g",
  "cdim",
  "eb7",
  "d7",
  "db7",
  "ab",
  "gmaj7",
  "g7",
];
const bulletproof = ["d#m", "g#", "b", "f#", "g#m", "c#"];
const song11 = [];

var songs = [];
var labels = [];
var labelCounts = [];
var labelProbabilities = [];
var chordCountsInLabels = {};
var probabilityOfChordsInLabels = {};

function train(chords, label) {
  songs.push([label, chords]);
  labels.push(label);

  if (!!Object.keys(labelCounts).includes(label)) {
    labelCounts[label] = labelCounts[label] + 1;
  } else {
    labelCounts[label] = 1;
  }
}

function getNumberOfSongs() {
  return songs.length;
}

function setLabelProbabilities() {
  Object.keys(labelCounts).forEach(function (label) {
    var numberOfSongs = getNumberOfSongs();
    labelProbabilities[label] = labelCounts[label] / numberOfSongs;
  });
}

function setChordCountsInLabels() {
  songs.forEach(function (i) {
    if (chordCountsInLabels[i[0]] === undefined) {
      chordCountsInLabels[i[0]] = {};
    }
    i[1].forEach(function (j) {
      if (chordCountsInLabels[i[0]][j] > 0) {
        chordCountsInLabels[i[0]][j] = chordCountsInLabels[i[0]][j] + 1;
      } else {
        chordCountsInLabels[i[0]][j] = 1;
      }
    });
  });
}

function setProbabilityOfChordsInLabels() {
  probabilityOfChordsInLabels = chordCountsInLabels;
  Object.keys(probabilityOfChordsInLabels).forEach(function (i) {
    Object.keys(probabilityOfChordsInLabels[i]).forEach(function (j) {
      probabilityOfChordsInLabels[i][j] =
        (probabilityOfChordsInLabels[i][j] * 1.0) / songs.length;
    });
  });
}

train(imagine, "easy");
train(somewhereOverTheRainbow, "easy");
train(tooManyCooks, "easy");
train(iWillFollowYouIntoTheDark, "medium");
train(babyOneMoreTime, "medium");
train(creep, "medium");
train(paperBag, "hard");
train(toxic, "hard");
train(bulletproof, "hard");

setLabelProbabilities();
setChordCountsInLabels();
setProbabilityOfChordsInLabels();

function classify(chords) {
  var classified = {};
  Object.keys(labelProbabilities).forEach(function (difficultyLevel) {
    var probabilityOfDifficultyLevel =
      labelProbabilities[difficultyLevel] + MAGIC_NUMBER;

    chords.forEach(function (chord) {
      var probabilityOfChordInDifficultyLevel =
        probabilityOfChordsInLabels[difficultyLevel][chord];

      if (probabilityOfChordInDifficultyLevel === undefined) {
        probabilityOfDifficultyLevel + MAGIC_NUMBER;
      } else {
        probabilityOfDifficultyLevel =
          probabilityOfDifficultyLevel *
          (probabilityOfChordInDifficultyLevel + MAGIC_NUMBER);
      }
    });
    classified[difficultyLevel] = probabilityOfDifficultyLevel;
  });
  return classified;
}

module.exports = { classify, welcomeMessage };
