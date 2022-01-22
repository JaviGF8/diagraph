# Diagraph
  
## Prerequisites <sub><sup>(Note: do not use Yarn for this project)</sup></sub>  
  
- node, v12.18+  
- npm, v6.14+  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Installing

Open your terminal, go to te project folder and install de packages running the following command

```
npm install
```

Now start the development server using

```
npm start
```

When everything is up and running, a new tab will show up in your browser. If not, you could go to:

```
http://localhost:3000/
```

### Testing

To run all the project test run the following command

```
npm test
```

## Code standards and workflow

**JavaScript and TypeScript rules for the project**
 - Use arrow functions instead of the function declaration
 - Import each entity individually, avoid dot-notation. Bad `React.useEffect`, good `useEffect`
 - Non-sharable types and interfaces must be declared at the top of the file
 - Complete typing is required for all functionality
 - Avoid using weak types
 - Each added functionality should contain unit testing
 - Use React functional components, no Class Components
 - Avoid using camel case on classes

**Code style**
The developer needs to install `eslint` for IDE and activate it. ESlint package path is `/node_modules/eslint` with configuration file at `.eslintrc`. The suggestion is to run eslint --fix on safe in your IDE.

**Git**.
*Branch types*
 - `master`- is the branch containing the latest stable code for service. Merges into the "master" branch are being done by a {{ DEFINE WHO }}, only from a release branch, if the release branch has been approved by the {{ DEFINE WHO }}
 - `develop` - contains the latest merged changes in the development process. The code should be merged into developing only after it went via a code review process, all unit tests, and integration tests running successfully
 
 *When coding*
 - `feature/short-description` - branch for feature development (`feature/add-api-endpoint`) 
 - `bugfix/short-description` - branch for bug fixes development discovered after deployemnt (`bugfix/adjust-button`) 

 *Pull requests*
 - If a pull request is not finished and shouldn't be merged mark as [WIP] / WIP/ wip (Work In Progress)
 - Common rules 2 approvals if possible
 - Reject merge if there are unresolved comments
 - Drop approvals after new commits

*Linking tickets*
When developing a new user interface, the frontend team should collaborate with the backend team and link tickets for the same feature - this will make discoveries of blocked development work quicker.
 

### Libs/tools used  
  
- [React](https://facebook.github.io/react/)
- [ESLint](http://eslint.org/)
- [Prettier](https://prettier.io/)
  
## License  
  
To be defined.
 
