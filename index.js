//README.md Generator - James D. 2021
//Resources: https://www.npmjs.com/package/inquirer 
//           https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
//           https://nodejs.org/api/path.html

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
    message: "What is the title of your project?",
  },
  //Project description
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project: ",
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