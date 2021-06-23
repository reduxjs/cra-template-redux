# Contributing

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.

## Development workflow

```sh
yarn
```
To get started with the project, run `yarn` in the root directory to install the required dependencies for each package.

```sh
yarn start
```

To run the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```sh
yarn lint --fix
```

To fix formatting errors.

### Project structure

**Consistency is key**, this is the base structure we want all our projects to follow, whatever you need to add to it so it better suits your needs stick to it 100%, be consistent!

Folder by folder this is what we put in each top level directory:

- `app` - miscellaneous stuff that applies to the entirety of the app. Singletons, utility functions, services, store config.
- `assets` - multimedia files that you need.
- `components` - reusable components like buttons, links, cards, modals...
- `features` - here we shall put a folder for each top level feature of the app, for instance, if we offer a counter like we do in the example there should be a `counter` folder here containing the following files at least:
  * `Counter.js` - the React component that will be shown to the user and associated to the route. It should follow these basic guidelines (the linter will help you with the rest):
    - First the component. Always functional and logic handled with hooks. Don't do `export const`, just `const`.
    - Then styles declared using [`makeStyles`](https://material-ui.com/styles/basics/#hook-api).
    - Component export as `default`.
  * `counterAPI.js` - functions to call the API. **It should not export a class with static methods**, just functions. These functions should be declared using `baseService` so error handling is kept consistent.
  * `counterSlice.js` - redux module for this feature. This file should more or less resemble the following structure:
    - Declare the initial state as a constant.
    - Declare all async actions using `createAsyncThunk`.
    - Declare the slice with all sync actions handled in `reducers` and async actions handled in `extraReducers` with `builder` notation.
    - Export all synchronous actions as named exports.
    - Base selector as plain arrow function.
    - Declare and export specific memoized selectors.
    - Export the reducer as default.
  
  Should there be any dependencies exclusive to the `Counter` component, be it components you only use here or you just want to split the component because it's getting too large then consider a structure similar to that of fractal.

  If there is a feature like `error` or `status` in the example, hence, that does not need any particular UI, do feel free to omit the component.
- `hooks` - reusable hooks, similar in concept to the `components` folder.
- `localization` - handle i18n here.
- `theme` - read [this documentation](https://material-ui.com/customization/theming/) to get your nails done

### Branching policies

These are the branches we use and ask you to adhere to:

- `dev`: Active development branch, when creating a `feature` branch start here
- `staging`: This branch is the one you update once or twice per sprint and your customer will test the code present within it
- `master`: Latest stable code - accessible to end users (production)

- `feat/<feature>#<card_no>`: A feature that's wip. Make a PR with it to dev when ready. Always use snake case for the feature description - **delete branch after merged!**
- `fix/<desc>#<card_no>`: Bug fix that's not urgent, it will be merged to dev - **delete branch after merged!**
- `hotfix/<desc>#<card_no>`: Urgent bug fix, merged directly to master (production) - **delete branch after merged!**

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

We use [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code.

> **Is the linter bullying you?** We're sorry but it's there for a reason, try to comply with it as much as humanly possible. If you think you run into an edge case and want to disable it add a comment nearby so we know why and whoever reviews the PR can propose alternatives if they can think of any.

Our pre-commit hooks verify that the linter passes when committing.

### Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters are passing.

## Code of Conduct

### Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

### Our Standards

Examples of behavior that contributes to a positive environment for our community include:

- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
- Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

- The use of sexualized language or imagery, and sexual attention or
  advances of any kind
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or email
  address, without their explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

### Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
