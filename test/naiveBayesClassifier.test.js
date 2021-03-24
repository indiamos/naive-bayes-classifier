var wish = require('wish');
var { classify, welcomeMessage } = require('../src/naiveBayesClassifier');

describe('naiveBayesClassifier', () => {
  it('classifies', () => {
    var classified = classify(['d', 'g', 'e', 'dm']);

    wish(classified.easy === 2.023094827160494);
    wish(classified.medium === 1.855758613168724);
    wish(classified.hard === 1.855758613168724);
  });

  it('classifies more', () => {
    var classified = classify([
      'f#m7',
      'a',
      'dadd9',
      'dmaj7',
      'bm',
      'bm7',
      'd',
      'f#m',
    ]);
    wish(classified.easy === 1.3433333333333333);
    wish(classified.medium === 1.5060259259259259);
    wish(classified.hard === 1.6884223991769547);
  });

  it('classifies again', () => {
    var classified = classify(['d', 'g', 'e', 'dm']);
    wish(classified.easy === 2.023094827160494);
    wish(classified.medium === 1.855758613168724);
    wish(classified.hard === 1.855758613168724);
  });

  it('sets welcome message', () => {
    wish(welcomeMessage() === 'Welcome to naiveBayesClassifier.js!');
  });

  // it('label probabilities', ()=> {
  //   wish(labelProbabilities.get('easy') === 0.3333333333333333);
  //   wish(labelProbabilities.get('medium') === 0.3333333333333333);
  //   wish(labelProbabilities.get('hard') === 0.3333333333333333);
  // });
});
