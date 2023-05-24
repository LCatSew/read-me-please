const generateMarkdown = ({title, motivation, build, problem, learn, installation, challenges, usage, collaborators, assets, tutorials, ruLicense, licenseLink, ruBadge, ruCollab, ruTests, tests, github, email}) => {
    //the following three sections come together to render the license section
    function renderLicenseBadge() {
        if (ruBadge) { 
            return `
## Badges

![License: ${licenseLink}](https://img.shields.io/badge/${licenseLink}-yellow.svg)`; //the return is spaced/indented this way because otherwise it would not render properly in the md file
        } else {
            return '';
        }
    }

    
    function renderLicenseLink() {
        if (ruLicense) {
            return `${licenseLink}`;
        } else {
            return '';
        }
    }


    function renderLicenseSection() {
        const licenseBadge = renderLicenseBadge();
        const licenseLink = renderLicenseLink();
    
        if (licenseBadge || licenseLink) {
            return `
## License

https://opensource.org/licenses/${licenseLink}
${licenseBadge}

`;//the return is spaced/indented this way because otherwise it would not render properly in the md file
        } else {
            return '';
        }
    }
//this is the end of the license section

//the following function renders collaboration section
    function renderCollabSection() {
        if (ruCollab) {
            return `
## Contributing

${collaborators}    

${assets}    

${tutorials}
`;//the return is spaced/indented this way because otherwise it would not render properly in the md file
        } else {
            return '';
        }
    }
    //this is the end of the collab section

    //the following function renders the tests section
    function renderTestSection() {
        if (ruTests) {
            return `
## Tests

${tests}

`;//the return is spaced/indented this way because otherwise it would not render properly in the md file
        } else {
            return '';
        }
    }
    //this is the end of the test section


    //the following 3 functions generates sections in the table of contents based on user confirmations
    //collab section in table of contents
    function renderCollabTOC() {
        if (ruCollab) {
            return `
- [Contributing](#contributing)
`
        } else {
            return '';
        }
    }
    //tests section in the table of contents
    function renderTestsTOC() {
        if (ruTests) {
            return `
- [Tests](#tests)
`
        } else {
            return '';
        }
    }
    //license section in the table of contents
    function renderlicenseTOC() {
        if (ruLicense) {
            return `
- [License](#license)
`
        } else {
            return '';
        }
    }
    //this is the end of the table of contents functions


    //the following generates the README.md structure
return `# ${title}

## Description
    
- ${motivation}
- ${build}
- ${problem}
- ${learn}
- ${challenges}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderCollabTOC()}
${renderTestsTOC()}
${renderlicenseTOC()}
- [Questions](#questions)


## Installation

${installation}

## Usage

${usage}

${renderCollabSection()}

${renderTestSection()}

${renderLicenseSection()}

## Questions 

To view my Github profile, follow this link: https://github.com/${github}

If you have any questions, concerns, or recommendations, you may contact me at ${email}  


`}
;

module.exports = generateMarkdown;