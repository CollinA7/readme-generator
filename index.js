// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path")

// questions array stores all of the question prompts
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('Please provide a title for the ReadMe file.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project in the README.md?',
        validate: describeInput => {
            if (describeInput) {
                return true;
            } else {
                console.log('Please add a description to the project')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the application?',
        validate: installGuide => {
            if (installGuide) {
                return true;
            } else {
                console.log('please provide instructions for using the generator.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the application?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('please tell the user how to use the application.');
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses are registered with the application?',
        choices: ['Apache 2.0', 'BSD', 'GNU', 'MIT','Mozilla Public 2.0' ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How some one can contribute to your application.',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please explain how to contribute to your project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are some ways to test the application?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('add tests for the application');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Are there any questions the user may have for the application?',
        validate: questionInput => {
            if (questionInput) {
                return true;
            } else {
                console.log('Enter some questions the user might have.')
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your link to your associated Github account.',
        validate: githubLink => {
            if (githubLink) {
                return true;
            } else {
                console.log('Please enter a link to your Github account')
            }
        }
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Generating README...');
        writeToFile("./generated-readme/README.md", generateMarkdown({ ...inquirerResponses }));
    });

}

// Function call to initialize app
init();
