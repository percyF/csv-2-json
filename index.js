// import filesystem library
const fs = require('fs');
// import csvtojson library
const toJson = require('csvtojson');

//create path to input file
const inputPath='./data/customer-data.csv';

//create path to output file
const outputPath='./data/JSON.json';

// use csvtojson to process the input file
toJson().fromFile(inputPath).then((jsonObj)=>{
  // make sure to "stringify"nthe json object befire saving
    fs.writeFile( outputPath, JSON.stringify(jsonObj, null, 2), function (err) {
      // check for errors
      if (err) return console.error("An error of type { " + error + " } has occured.");
      // confirm that the job is done and file was written
      console.log('CSV converted to JSON and written to file.');
    });
});
