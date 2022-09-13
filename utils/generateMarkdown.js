// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # <Your-Project-Title>

  ## Description

  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

  

  ## Table of Contents (Optional)



  ## Installation

  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

  ## Usage

  ## Credits

  List your collaborators, if any, with links to their GitHub profiles.

  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

  If you followed tutorials, include links to those here as well.

  ## License

  ---

  ## Badges

  

  ## Features

  If your project has a lot of features, list them here.

  ## How to Contribute



  ## Tests

`;
};

module.exports = generateMarkdown;
