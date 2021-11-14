// packages
const inquirer = require("inquirer");
const fs = require('fs');
const licenseList = [
    'Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License','BSD 2-Clause License','Eclipse Public License 1.0','GNU GPL v3','The Hippocratic License 2.1','The Hippocratic License 3.0','IBM Public License Version 1.0','ISC License (ISC)','The MIT License','Mozilla Public License 2.0','Attribution License (BY)','Open Database License (ODbL)','Public Domain Dedication and License (PDDL)','The Perl License','The Artistic License 2.0','SIL Open Font License 1.1','The Unlicense','The Do What the Fuck You Want to Public License','The zlib/libpng License']
    
const licenseRender = [
    '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)  ','[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)','[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)','[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)','[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)','[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)','[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)','[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)','[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)','[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)','[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)','[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)','[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)','[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)','[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)','[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)','[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)','[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)','[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)','[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)','[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)']
// questions/forms
const inquirerData = [
    ['Project Title:','title', 'input'],
    ['License:','license', 'list', licenseList],
    ['Documentation: "add commas(,) to create a list"','documentation', 'input'],
    ['Terms of service:', 'terms', 'input'],
    ['About:','about', 'input'],
    ['Resorces:','resources', 'input'],
]

// creates the readme file
const writeToFile = (data) => (`
# ${data.title} 

${data.license}

### Table of Contents

> * [Documentation](#documentation)
> * [Terms of service](#terms-of-service)
> * [About](#about)
> * [Resources](#resources)

## Documentation

${data.documentation}

## Terms of service

${data.terms}

## About

${data.about}

## Resources

${data.resources}

`)       
        
    // gather inquirer data
const promptUser = () => {
    let promptlist = []
    for (let i = 0; i < inquirerData.length; i++) {
        const element = inquirerData[i];
        if(element[2] == 'list'){
            let object = {
                type: element[2],
                name: element[1],
                message: element[0],
                choices: element[3]
            }
            promptlist.push(object)
        } else {
            let object = {
                type: element[2],
                name: element[1],
                message: element[0],
            }
            promptlist.push(object)
        }
        
    } 
       
    return inquirer.prompt(promptlist)
};

const init = () => {
    promptUser()
    .then((data) => {
        let x = data.documentation.split(',')
        let y = ``
        x.forEach(element => {
            let z = `- ${element}\n`
            y += z
        });
        data.documentation = y
        for (let i = 0; i < licenseList.length; i++) {
            const element = licenseList[i];
            if(data.license == licenseList[i]){data.license = licenseRender[i]}
        }
        return data
    }) 
    .then((data) => {
        fs.writeFileSync('README.md', writeToFile(data))
    })
    .catch((err) => console.error(err));
};

// initialization
init();
