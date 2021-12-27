// function to generate README markdown
function markdownTemplate(answers) {
  // push user answers into markdown template
  return `# ${answers.title}

  ## Description
  ${answers.description}
  * * *
  ## Table of Contents 
  - [Description](#description)
  - [Usage](#usage)
  - [License](#license)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Questions](#questions)
  - [Contributing](#contributing)
  * * *

  ### Usage
  \`\`\`
  ${answers.usage}
  \`\`\`
  * * *

  ### License
  Click the badge for additional information about our license
  [![License:${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
  * * *

  ### Installation 
  Enter the following in the command line to install ${answers.title}:
  \`\`\`
  ${answers.install}
  \`\`\`
  * * *
  
  ## Testing
  Enter the following in the command line to test ${answers.title}:
  \`\`\`
  ${answers.test} 
  \`\`\`
  * * *

  ### Questions
  If you have any questions or comments, please contact the ${answers.title} team via e-mail: ${answers.email}
  
  To see more of my work visit my Github at https://github.com/${answers.gitHub}
  * * *
  ### Contributing
  ${answers.contributors}
  `
  };

// reference: https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
// export
module.exports = markdownTemplate;