# @brunomatosdev/prettier-config

This package provides a shared Prettier configuration for consistent code formatting across projects.

## Installation

To use these Prettier configurations in your project, you can install the package using npm, yarn, pnpm, or bun:

```bash
npm install --save-dev @brunomatosdev/prettier-config
# or
yarn add --dev @brunomatosdev/prettier-config
# or
pnpm add --save-dev @brunomatosdev/prettier-config
# or
bun add --dev @brunomatosdev/prettier-config

Usage

Once the package is installed, a .prettierrc file will be created in the root of your project, extending the shared configuration:

json

// .prettierrc
"@brunomatosdev/prettier-config"

Now, your project will follow the code formatting rules specified in this configuration.
Configuration

This configuration includes the following Prettier settings:

    printWidth: 80
    tabWidth: 2
    singleQuote: true
    trailingComma: "all"
    arrowParens: "always"
    semi: false
    endOfLine: "auto"

Feel free to customize these settings in your local project's .prettierrc file.
Contributing

If you would like to contribute or suggest improvements, feel free to open an issue or submit a pull request on the GitHub repository.
License

This project is licensed under the MIT License - see the LICENSE file for details.

vbnet


This README now includes information about the automatic creation of the `.prettierrc` file and provides instructions on how to use the shared configuration in projects.