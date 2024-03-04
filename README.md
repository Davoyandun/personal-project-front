# Del @gro

This is the frontend part of the Del @gro. It was built using React, TypeScript and love. It is a web application that allows users know Del @gro's company and their products.

- **note** : Be careful, an API that is not definitive is currently being used to display the products.When this is ready, it will proceed to connect with the final API and hide the secrets.


## Getting Started 🚀

first of all, you need to clone the repository and install the dependencies.

### Clone the repository

```bash
git clone https://github.com/Davoyandun/personal-project-front.git
cd personal-project-front

```
### Prerequisites 📋

What things you need to install the software and how to install them.

- Node.js version 20.11.0. You can download it from [Node.js official](https://nodejs.org/).
- npm (comes with Node.js).
- A code editor like [VSCode](https://code.visualstudio.com/).


### Installation 🔧

To install the dependencies, run the following command:

```bash
npm install
```
#### Environment Variables

This projectis no using environment variables, but if you want to use it, you can create a `.env` file in the root directory of the project. 



## Running the project 🚀

To run the project, use the following command:

```bash
npm run dev
```

## Running the linter ⚙️

To run the linter, use the following command:
  
  ```bash
  npm run lint
  ```

## Running the tests ⚙️

To run the tests, use the following command:
  
  ```bash
  npm run test
  ```

## Project Structure 📁

The project structure is based on the Next.js framework. 

```plaintext
src/
|-- __test__/                           # Contains all test files
|-- app/                                # Core application logic and state
|   |-- productos/                      # Product logic, including state and UI
|   |-- globals.css                     # Global CSS styles
|   |-- icon.tsx                        # Reusable icon components
|   |-- layout.tsx                      # Common layout component
|   |-- page.tsx                        # Page component
|-- assets/                             # Static files like images and fonts
|-- components/                         # Reusable components
|   |-- features/                       # Specific feature components
|   |   |-- home/                       # Home page components
|   |   |   |-- aboutUs.tsx             # About us section
|   |   |   |-- infiniteGallery.tsx     # Infinite image gallery component
|   |   |   |-- introSection.tsx        # Introduction section
|   |   |   `-- providersSection.tsx    # Providers section
|   |   `-- products/                   # Product specific components
|   |-- layout/                         # Layout related components
|   |   `-- navbar.tsx                  # Navigation bar component
|   `-- theme/                          # Theming components and logic
|       |-- buttonToggleDark.tsx        # Button to toggle dark theme
|       `-- theme-provider.tsx          # Theme provider component
`-- ui/                                 # UI only components

```

## Best Practices 📌

- **TypeScript**: We use TypeScript to ensure that our code is type-safe and to provide a better development experience.
- **React Hooks**: We use hooks to manage state and side effects in our components.
- **Reusable Components**: We strive to create reusable components that can be used across the application.
- **Accessibility**: We make sure that our components are accessible to all users.
- **Responsive Design**: We make sure that our components look good on all screen sizes.
- **Testing**: We write tests for our components to ensure that they work as expected.
- **Code Quality**: We use ESLint to ensure that our code is clean and consistent.

## Design Patterns 📌

- **Composite Pattern**: We use the composite pattern to create a tree structure of components.
- **Context Pattern**: We use the context pattern to manage global state in our application.
- **Reactivity**: We use reactivity to update the UI when the state changes.


## Commits Convention

We use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) convention to ensure that all commits are easy to read and release notes are easy to generate.

### Commit Message Format

Each commit message consists of a header, a body, and a footer. The header has a special format that includes a type, an optional scope, and a subject:

```
<type>[ticket]: <subject>

```

The header is mandatory and the scope of the header is optional.
example: 
  
```
feat[Final-1]: fist commit
```

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit



## Built with 🛠️

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - A library for testing React components.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and static web applications.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.


- [And love ❤️](https://www.youtube.com/watch?v=KXw8CRapg7k)

## Hello, thanks for reading this far. I hope you like it. 🎁

