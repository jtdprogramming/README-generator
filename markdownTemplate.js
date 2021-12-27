// function to generate README markdown

function markdownTemplate(answers) {
  // title
  return `# ${answers.title}

  ## Description
  ${answers.description}
  * * *
  ## Table of Contents 
  - [Name](#name)
  - [License](#license)
  - [Description](#description)
  - [Installation](#install)
  - [Test](#test)
  - [GitHub](#gitHub)
  - [Email](#email)
  - [Contributing Authors](#contributors)
  * * *

  ## License
  [![License:${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
  

  ## Installation 
  Type the following command to install the application: ${answers.install}

  ## Test
  To test the program enter the following command in the terminal ${answers.test} 
  * * *

  ## Questions
  If you have any question please feel free to email me at ${answers.email}
  
  Check out more project on my Github at https://github.com/${answers.gitHub}
  
  ## Contributing Authors
  ${answers.contributors}
  `
  };

// reference: https://www.tutorialsteacher.com/nodejs/nodejs-module-exports

module.exports = markdownTemplate;