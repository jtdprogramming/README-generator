//README.md Generator - James D. 2021
//Resources: https://www.npmjs.com/package/inquirer 
//           https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
//           https://nodejs.org/api/path.html
//           https://www.tutorialsteacher.com/nodejs/nodejs-module-exports

// import inquirer, fs, path module, markdown-gen 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdownTemplate = require('./markdownTemplate');
// end imports




// user questions array
const questions = [
  //Project title
  {
    type: "input",
    name: "title",
    message: "Please enter the title of your project ",
  },
  //Project description
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project: ",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license",
    choices: [
      new inquirer.Separator(),
      "MIT",
      new inquirer.Separator(),
      "Apache-2.0",
      new inquirer.Separator(),
      "MPL-2.0",
      new inquirer.Separator(),
    ],
  },
  {
    type: "input",
    name: "test",
    message: "Please enter the 'Test' command ",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please enter the names of contributing parties",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Please enter your GitHub username ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your e-mail ",
  },

]
// end questions array


// generate README 
function generateReadMe() {
  inquirer.prompt(questions).then((answers) => {
    writeReadMe(
      "TEST_README.md", markdownTemplate({...answers,})
    );
  });
}

// function to write README file into current directory
// resources: https://nodejs.org/api/path.html

function writeReadMe(name, data) {
  return fs.writeFileSync(path.join(process.cwd(), name), data);
}



// call function upon file init
generateReadMe();