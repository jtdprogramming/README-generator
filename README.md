# The README.md Generator
Project repository: [README-generator](https://github.com/jtdprogramming/README-generator)

Video: [Demo](https://drive.google.com/file/d/1bFVNnq7NlPUtsYEPTTVbBA_q3uJ30x1o/view?usp=sharing)
* * *

## Purpose
Utilize the Node.js library Inquirer to rapidly generate a professional and fully functional README.md via user input from the terminal.

## Usage
Assuming prior installation of NodeJS, the user can invoke the application by entering the following the the command line:
```
node index.js 
```
The user will be prompted to answer several project related questions.

![Demo1](https://github.com/jtdprogramming/README-generator/blob/main/images/screencap1.png)

Once the responses have been completed the application will generate a README.md file based on the responses. The default filename is "GENERATED_README.md"

![Demo2](https://github.com/jtdprogramming/README-generator/blob/main/images/screencap2.png)

## Built With
- Javascript
- Node JS Inquirer Package
* * *

## Application Goals
```
- Generate high-quality, professional README.md
- Include the following input-based modular content:
  Project Title
  Description
  License type chosen from a list of options - include badge of selection
  Table of Contents
  Installation guide
  Testing guide
  Usage guide
  Contributing Authors
  Questions/Contact/Github link

```
* * *

### Contributors
[James](https://github.com/jtdprogramming) 

### Resources
- https://www.npmjs.com/package/inquirer 
- https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
- https://nodejs.org/api/path.html
- https://www.tutorialsteacher.com/nodejs/nodejs-module-exports