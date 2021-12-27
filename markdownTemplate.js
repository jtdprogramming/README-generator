// function to generate README markdown

function markdownTemplate(answers) {
  // push user answers into markdown template
  return `#Project: ${answers.title}

  ## Description
  ${answers.description}
  * * *
  ## Table of Contents 
  - [Project](#project)
  - [License](#license)
  - [Description](#description)
  - [Installation](#install)
  - [Test](#test)
  - [Questions](#questions)
  - [GitHub](#gitHub)
  - [Email](#email)
  - [Contributing](#contributors)
  * * *

  ## License
  [![License:${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
  * * *

  ## Installation 
  Enter the following in the command line to install the application:
  \`\`\`${answers.install}\`\`\`
  * * *
  ## Test
  Enter the following in the command line to test the application:
  \`\`\` ${answers.test} \`\`\`
  * * *

  ## Questions
  If you have any question I can be reached at ${answers.email}
  
  To see more of my work visit my Github at https://github.com/${answers.gitHub}
  * * *
  ## Contributing
  ${answers.contributors}
  `
  };

// reference: https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
// export
module.exports = markdownTemplate;