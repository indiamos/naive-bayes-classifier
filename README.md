# Naive Bayes Classifier

## Source

This exercise is adapted from chapters 6 and 7 of _Refactoring JavaScript: Turning Bad Code into Good Code_ by Evan Burchard (O’Reilly Media, 2017).

- Commercial edition: https://learning.oreilly.com/library/view/refactoring-javascript/9781491964910/
- Public site: https://refactoringjs.com/

## How to run the tests, such as they are

Run
`npm test`

## How to format the files

This repo includes Prettier, to keep things tidy. If you don't want to [set up your editor to run Prettier for you](https://prettier.io/docs/en/editors.html), you can use it from the command line with

`npm run pretty`

## What is this code supposed to do?

From chapter 6 of the book:

> We will be dealing with code that is messy, undertested, and does something cool.…
>
> The first part that is cool is that if you have interest, but lack experience, in machine learning, we’re using a particular algorithm [that] is fairly simple and still very powerful. It’s called a Naive Bayes Classifier (NBC). You can use it to classify things based on previous knowledge. A spam filter is a frequently cited example. An NBC has two basic steps. First, you give it data that you already know how a human would classify (e.g., “These 35 subject lines are from spam emails”). That is called “training” the algorithm. Then, you give it a new piece of data and ask it what category that data likely fits into (e.g., “Here is the subject line of an email we just received. Is it spam or not?”).
>
> The second cool thing (if you’re into playing music at all) is that our specific application of the algorithm will use chords in songs along with their difficulty as training data. Following that, we can feed it the chords of other songs, and it will automatically characterize its difficulty for us. At the end of these two chapters, we’ll make some tweaks to have the algorithm guess at whether a segment of text is understandable or not (with the assumption that we understand English, but not Japanese).
>
> …the basis of the entire program is just multiplying and comparing different sets of numbers.…
>
> BUT I DON’T KNOW ANYTHING ABOUT MUSIC!
>
> That’s okay. This won’t be technical as far as music goes. All you need to know is that to play songs (on guitar, for example), you usually need to know some chords, which are a bunch of notes put together.
>
> If you plucked a guitar string or hit a piano key, you’d be playing a note. And if you strum multiple strings or hit multiple piano keys (playing multiple notes at once), you’d be playing a chord. Some chords are harder to play than others.
>
> Music can be complicated, but for our purposes, songs are simply made up of chords, and how difficult the chords are to play determines how difficult it is to play the song overall.
