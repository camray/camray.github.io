(function() {
  var types = {
    adjective: [
      'proactive',
      'robust',
      'client-centric',
      'mission critical',
      'seamless',
      'beta',
      'bleeding edge',
      'streamlined',
      'real-time',
      'responsive',
      'skeuomorphic',
      'social',
      'viral',
      'granular',
      'next generation',
      'crowdsourced',
      'customer-centric',
      'lean',
      'next generation',
      'cross-platform',
    ],
    noun: [
      'alignment',
      'buzzwords',
      'clear goals',
      'disruptive innovation',
      'empowerment',
      'exit strategies',
      'functional training',
      'face time',
      'globalization',
      'a holistic approach',
      'impact',
      'milestone',
      'organic growth',
      'paradigms',
      'paradigm shifts',
      'sea change',
      'survival strategies',
      'sustainability',
      'synergy',
      'synergy', // It's that important
      'wellness',
      'win-win scenarios',
      'analytics',
      'bandwidth',
      'best practices',
      'brands',
      'cloud computing',
      'content marketing',
      'core competency',
      'enterprise',
      'event horizons',
      'free values',
      'fulfilment issues',
      'guard rails',
      'logistics',
      'quick-wins',
      'win-wins',
      'return on investment',
      'social currency',
      'solutions',
      'sustainability',
      'startups',
      'strategies',
      'touchpoints',
      'added value',
      'visibility',
      'aggregator',
      'agile',
      'ajax',
      'algorithms',
      'back-ends',
      'big data',
      'blogs',
      'clickthroughs',
      'the cloud',
      'content management',
      'cms',
      'data science',
      'design pattern',
      'devops',
      'digital divide',
      'digital rights management',
      'disruptive technology',
      'e-learning',
      'engine',
      'framework',
      'fuzzy logic',
      'html5',
      'immersion',
      'innovation',
      'mashup',
      'mobile',
      'modularity',
      'nanotechnology',
      'an MVP',
      'paas',
      'podcasts',
      'portals',
      'saas',
      'workflows',
      'rest services',
      'valuation',
      'scalability',
      'microservices',
      'churn rates',
      'conversion rates',
      'angel investing',
      'seed capital',
      'incubators',
      'IPO',
      'PoC',
      'Valuation',
      'NodeJS',
      'functional programming',
      'traction',
      'viral mechanics',

    ],
    verb: [
      'growing',
      'impacting',
      'leveraging',
      'relaying',
      'spining-up',
      'streamlining',
      'deep diving',
      'downsizing',
      'enabling',
      'integrating',
      'leveraging',
      'offshoring',
      'socializing',
      'teeing off',
      'benchmarking',
      'collaborating',
      'crowdsourcing',
      'data mining',
      'tagging',
      'virtualizing',
      '3-d printing',
      'pivoting',
      'deep diving'
    ]
  },
  used = {
    noun: [],
    adjective: [],
    verb: []
  };

  /*
   * Chooses a random buzzword of type, then checks to see if it was used already.
   * If so, recursively picks another until a free one has been chosen.
   */
  var buzzword = function(kind) {
    var word;

    // Don't get an error of that kind of word doesn't exist.
    if (!types.hasOwnProperty(kind)) {
      return '';
    }

    // If we've used all the words, empty the array and feel free to use them again.
    if (types[kind].length >= used[kind].length) {
      used[kind] = [];
    }

    // Get random word
    word = types[kind][Math.floor(Math.random()*types[kind].length)];

    // Ensure word was not used
    if (used[kind].indexOf(word) === -1) {
      used[kind].push(word);
      return word;
    }

    // But if it was, grab another.
    return buzzword(kind);
  };

  var init = function() {
    var sentence = 'Providing ' + buzzword('noun') + ' to ' + buzzword('adjective') + ' ' + buzzword('noun') + ' by ' + buzzword('verb') + ' ' + buzzword('noun') + '.';
    var h3 = document.getElementById('business-model');
    h3.innerText = sentence;
  };

  init();

}());
