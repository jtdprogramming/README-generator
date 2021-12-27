//README.md Generator - James D. 2021
//Resources: https://www.npmjs.com/package/inquirer 
//           https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
//           https://nodejs.org/api/path.html
//           https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import inquirer, fs, path module, markdown-gen 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdownTemplate = require('./markdownTemplate');
// end imports

// user questions array
const questions = [
  // title
  {
    type: "input",
    name: "title",
    message: "Please enter the title of your project ",
  },
  // description
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project: ",
  },
  // license list
  {
    type: "list",
    name: "license",
    message: "Please select a license to include: ",
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
  // installation
  {
    type: "input",
    name: "install",
    message: "Please enter the installation command: ",
  },
  // testing
  {
    type: "input",
    name: "test",
    message: "Please enter the test command: ",
  },
  // usage
  {
    type: "input",
    name: "usage",
    message: "Please enter instructions on the usage of the application: ",
  },
  // contributors
  {
    type: "input",
    name: "contributors",
    message: "Please enter instructions on how to contribute to this project: ",
  },
  // GitHub
  {
    type: "input",
    name: "gitHub",
    message: "Please enter your GitHub username: ",
  },
  // email
  {
    type: "input",
    name: "email",
    message: "Please enter your e-mail: ",
  },
]
// end questions array


// generate README 
function generateReadMe() {
  inquirer.prompt(questions).then((answers) => {
    writeReadMe(
      "GENERATED_README.md", markdownTemplate({...answers,})
    );
  });
}


// function to write README file into current directory 
// resources: https://nodejs.org/api/path.html
function writeReadMe(name, data) {
  return fs.writeFileSync(path.join(process.cwd(), name), data);
}

// run function upon file init
generateReadMe();