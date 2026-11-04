# 13. JavaScript Modules

## Overview

JavaScript Modules help developers organize code into separate, reusable files. Instead of writing an entire application in one file, we can divide functionality into smaller modules and connect them using imports and exports.

This module covers ES Modules and demonstrates how to organize JavaScript code using practical examples.

## Topics Covered

* Introduction to JavaScript Modules
* Why Modules are important
* Named Exports and Imports
* Default Exports and Imports
* Importing Multiple Modules
* Renaming Imports and Exports
* Module Organization
* Building a Practical Application using Modules

## Project Structure

```text
13-Modules/
│
├── README.md
├── package.json
│
└── src/
    ├── 01-NamedExports.js
    ├── 02-DefaultExports.js
    ├── 03-MultipleImports.js
    ├── 04-RenamingImports.js
    ├── 05-ModuleOrganization.js
    ├── 06-PracticalModuleApplication.js
    │
    ├── productService.js
    └── userService.js
```

## Files Description

| File                               | Description                                                |
| ---------------------------------- | ---------------------------------------------------------- |
| `01-NamedExports.js`               | Demonstrates named exports and imports.                    |
| `02-DefaultExports.js`             | Demonstrates default exports and imports.                  |
| `03-MultipleImports.js`            | Imports functions from multiple modules.                   |
| `04-RenamingImports.js`            | Demonstrates aliasing imports and exports.                 |
| `05-ModuleOrganization.js`         | Organizes application functionality into separate modules. |
| `06-PracticalModuleApplication.js` | Builds a small e-commerce application using modules.       |
| `productService.js`                | Contains reusable product-related functions.               |
| `userService.js`                   | Contains user-related information and functions.           |

## Learning Outcomes

After completing this module, I can:

* Understand how JavaScript modules work.
* Export functions and data from JavaScript files.
* Import named and default exports.
* Import multiple functions from different modules.
* Rename imported and exported members.
* Organize application code into reusable modules.
* Build a small application using multiple JavaScript modules.

## Practical Use Cases

JavaScript modules are commonly used in:

* E-commerce applications
* User authentication systems
* Product management systems
* Dashboard applications
* Frontend applications built with React
* Backend applications built with Node.js

## Interview Concepts

* What are JavaScript Modules?
* What is the difference between Named Exports and Default Exports?
* What is the purpose of `import` and `export`?
* How can we import multiple functions from a file?
* How can we rename an imported function?
* What is the difference between CommonJS and ES Modules?
* Why is modular code easier to maintain?

## Technologies Used

* JavaScript (ES6+)
* Node.js
* ES Modules

## How to Run

Run individual programs from the repository root directory:

```bash
node 13-Modules/src/01-NamedExports.js
```

Replace the filename to execute another example.

## Learning Approach

This module was completed through practical examples using product and user data. Each concept was implemented in separate JavaScript files to understand how modules work in real-world applications.
