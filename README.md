
# Readme Markdown Generator

### Table of Contents
> * [Installation](#installation)
> * [Usage](#Usage)
> * [About](#about)
> * [Resources](#resources)

The application will be invoked by using the following command:

    node index.js

## Installation

`git clone` the repo.

Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:

  * [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.

The application will start by running `node index.js` in the command line.

Answer the prompts in your command line to generate the README.

After answering all the prompts, your README file will be named 'README.md' and will be ready for you at the root of the repo.


## Usage

<!-- ![Gif demo of README-generator](readme-demo.gif) -->

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts. The README will also include badges for your GitHub repo.

Finally, `fs.writeFile` is used to generate your project's README.md file.

## Resources

UCSD Full-Stack BootCamp

