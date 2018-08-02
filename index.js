// import filesystem library
const fs = require('fs');
// import path resolution library
const path = require('path');
// import csvtojson library
const toJson = require('csvtojson');

// create path to input file
const inputPath = path.join(__dirname, '/data/customer-data.csv');

// create path to output file
const outputPath = path.join(__dirname, '/data/JSON.json');

// use csvtojson to process the input file
toJson().fromFile(inputPath).on('error', (err)=>{
    // we have an error, log the error and then exit()
    console.log(err);
    process.exit();
  }).then((jsonObj)=>{
  
  // make sure to "stringify" the json object befire saving
    fs.writeFile( outputPath, JSON.stringify(jsonObj, null, 2), function (err) {
      // check for errors
      if (err) return console.error("An error of type { " + error + " } has occured.");
      // confirm that the job is done and file was written
      console.log('CSV converted to JSON and written to file.');
    });
});
