// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, motivation, build, problem, learn, installation, challenges, usage, collaborators, assets, tutorials, ruLicense, licenseLink, ruBadge, ruCollab}) => {
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

!(https://opensource.org/licenses/${licenseLink})
${licenseBadge}

`;//the return is spaced/indented this way because otherwise it would not render properly in the md file
        } else {
            return '';
        }
    }

//the following function renderins collaboration section

    function renderCollabSection() {
        if (ruCollab) {
            return `
## Credits

${collaborators}    

${assets}    

${tutorials}
`;//the return is spaced/indented this way because otherwise it would not render properly in the md file
        } else {
            return '';
        }
    }
    //the following generates the README.md structure
return `# ${title}

## Description
    
- ${motivation}
- ${build}
- ${problem}
- ${learn}
- ${challenges}

## Installation

${installation}

## Usage

${usage}

${renderCollabSection()}

${renderLicenseSection()}

`}
;

module.exports = generateMarkdown;