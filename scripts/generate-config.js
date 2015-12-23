var fs = require('fs');
var colors = require('colors');

var testCount = 30;

//--- Configurations: Styles
var sizes = [
  'x-large',
  'large',
  'middle',
  'small',
  'x-small'
];

var typefaces = [
  'typeface-droidserif',
  'typeface-opensans',
  'typeface-robotocondensed',
  'typeface-robotoslab',
  'typeface-sourcecodepro',
  'typeface-ubtunu'
];

var colors = [
  'red',
  'green',
  'orange',
  'black',
  'white',
  'blue',
  'aqua',
  'purple',
  'fleshA',
  'fleshB',
  'fleshC'
];

//--- Configurations: HTML
var htmlTypeConfigs = [
  {
    instruction: 'Which typeface is more legible?',
    html: 'html/typography/mixed.html'
  },
  {
    instruction: 'Which typeface is better suited for scientific numbering?', html: 'html/typography/numbers.html'
  },
  {
    instruction: 'Which typeface has better legibility?',
    html: 'html/typography/text.html'
  }
];

var htmlColorConfigs = {
    instructions: [
      'Which color better represents the occurance of an error?',
      'Which color could represent an orang, such as a liver, a heart or a lung?',
      'Which color might represent a computer tomography, an ultrasound examination or an x-ray image?',
      'Which color suggests that something did succeed?',
      'Which color suggests that there might possibily be something wrong?',
      'Which color does represent that nothing is okay?',
      'Which color might represent something that can be true or false?'
    ],
    html: 'html/colors/color.html'
}


//--- Main
var generateConfig = function(callback) {
  var configArray = [];

  // Generate typeface configs
  for(var i=0; i < testCount/2; i++) {
    var tempTypefaces = typefaces.slice();
    var indexA = Math.round(Math.random() * (typefaces.length-1));
    var typefaceA = tempTypefaces.splice(indexA, 1)[0];

    var indexB = Math.round(Math.random() * (typefaces.length-1));
    var typefaceB = tempTypefaces.splice(indexB, 1)[0];

    var indexC = Math.round(Math.random() * (sizes.length-1));
    var size = sizes[indexC];

    var indexD = Math.round(Math.random() * (htmlTypeConfigs.length-1));

    var configObject = {
      instructions:  htmlTypeConfigs[indexD].instruction,
      html: htmlTypeConfigs[indexD].html,
      options: [typefaceA + ' ' + size, typefaceB + ' ' + size ]
    };

    configArray.push( configObject );
  }

  // Generate color configs
  var instructions = htmlColorConfigs.instructions.slice();
  for(var i=0; i < testCount/2; i++) {
    var index0 = Math.round( Math.random() * (instructions.length-1) );
    var instruction = instructions.splice(index0, 1);
    if(instructions.length == 0) {
      var instructions = htmlColorConfigs.instructions.slice();
    }

    var tempColors = colors.slice();
    var indexA = Math.round( Math.random() * (tempColors.length-1) );
    var colorA = tempColors.splice(indexA, 1);
    var indexB = Math.round( Math.random() * (tempColors.length-1) );
    var colorB = tempColors.splice(indexB, 1);

    var configObject = {
      instructions:  instruction,
      html: htmlColorConfigs.html,
      options: [ colorA, colorB ]
    };

    configArray.push( configObject );
  }

  callback(configArray);
};

generateConfig((configArray) => {
  //--- Serialize
  fs.writeFile('../config.json', JSON.stringify(configArray), (err) => {
    if(err) throw err;
    console.log('\nSuccessfully generated config file ✔'.bold.cyan);
  });
});
