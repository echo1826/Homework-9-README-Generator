// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': {
      return `https://img.shields.io/badge/license-MIT-green`;
    }
    case 'Unlicense': {
      return `https://img.shields.io/badge/license-Unlicense-blue.svg`;
    }
    case 'Affero General Public License': {
      return `https://img.shields.io/badge/License-AGPL%20v3-blue.svg`;
    }
    case 'General Public License': {
      return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
    }
    case 'Lesser General Public License': {
      return `https://img.shields.io/badge/License-LGPL%20v3-blue.svg`;
    }
    case 'Mozilla Public License': {
      return `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
    }
    case 'Apache License': {
      return `https://img.shields.io/badge/license-Apache--3.0-blue`;
    }
    case 'Boost Software License': {
      return `https://img.shields.io/badge/License-Boost%201.0-lightblue.svg`
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': {
      return `https://choosealicense.com/licenses/mit/`;
    }
    case 'Unlicense': {
      return `https://choosealicense.com/licenses/unlicense/`;
    }
    case 'Affero General Public License': {
      return `https://choosealicense.com/licenses/agpl-3.0/`;
    }
    case 'General Public License': {
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    }
    case 'Lesser General Public License': {
      return `https://choosealicense.com/licenses/lgpl-3.0/`;
    }
    case 'Mozilla Public License': {
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    }
    case 'Apache License': {
      return `https://choosealicense.com/licenses/apache-2.0/`;
    }
    case 'Boost Software License': {
      return `https://choosealicense.com/licenses/bsl-1.0/`
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT': {
      return `This application is covered under the MIT License.`;
    }
    case 'Unlicense': {
      return `This application is covered under the Unlicense.`;
    }
    case 'Affero General Public License': {
      return `This application is covered under the Affero General Public License.`;
    }
    case 'General Public License': {
      return `This application is covered under the General Public License`;
    }
    case 'Lesser General Public License': {
      return `This application is covered under the Lesser General Public License.`;
    }
    case 'Mozilla Public License': {
      return `This application is covered under the Mozzilla Public License.`;
    }
    case 'Apache License': {
      return `This application is covered under the Apache License.`;
    }
    case 'Boost Software License': {
      return `This application is covered under the Boost Software License.`
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseLink = renderLicenseLink(data.license);
  let licenseNotice = renderLicenseSection(data.license);
  let licenseBadge = renderLicenseBadge(data.license);
  // console.log(contentsHeaders);
  return `# ${data.title}\n![License: ${data.license}](${licenseBadge})\n# Table of Contents\n1.[Description](#description)<br>2.[Installation](#installation)<br>3.[Usage](#usage)<br>4.[License](#license)<br>5.[Contribute](#contributing)<br>
  6.[Testing](#tests)<br>7.[Questions](#questions) <br>
  \n\n# Description\n\n${data.description} <br>\n\n# Installation\n\n${data.installation} <br>\n
  \n# Usage\n\n${data.usage} <br>\n\n# License\n\n${licenseNotice}<br>\n[License](${licenseLink})\n\n# Contributing\n\n${data.contribute} <br>\n\n# Tests\n\n${data.testing} <br>\n\n# Questions\n\nIf you would like to reach out to me
  with questions, please contact me at <${data.email}>. You can check out more of my projects at <https://github.com/${data.github}>`;
}

module.exports = generateMarkdown;