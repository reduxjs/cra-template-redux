# cra-template-spacedev

[![Node.js Package](https://github.com/SpaceUY/cra-template-spacedev/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/SpaceUY/cra-template-spacedev/actions/workflows/npm-publish.yml)

The official template used by SpaceDev for [Create React App](https://github.com/facebook/create-react-app)

## Usage

```sh
npx create-react-app my-app --template @space-uy/cra-template-spacedev
```

## What this includes

We tried to include all the libraries we use in all our projects and some more to improve performance, developer experience and user experience.

Here are the libraries and extras we included:

* [`redux`](https://redux.js.org/) + [`@reduxjs/toolkit`](https://redux-toolkit.js.org/usage/usage-guide) + [`redux-persist`](https://www.npmjs.com/package/redux-persist)
* [`apisauce`](https://www.npmjs.com/package/apisauce) + [`axios-cache-adapter`](https://www.npmjs.com/package/axios-cache-adapter) so you can query your api with a slightly improved `axios` and configurable caching
* [`react-router`](https://github.com/ReactTraining/react-router) and [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
* [`status` and `error`](https://kb.spacedev.uy/books/redux/page/global-error-and-status-management-in-redux) slices for global error handling
* [`useImageUpload`](https://kb.spacedev.uy/books/file-upload-s3/page/web) so you can upload your images without even thinking
* Styling and theming 💅 with [`@material-ui/core`](https://material-ui.com/)
* `useMountEffect` because `useEffect` without dependencies is not descriptive enough.
* i18n with [`react-i18next`](https://medium.com/@tariqul.islam.rony/internationalization-localization-with-react-js-65d6f6badd56)
* `commitlint` and `eslint` run automatically before each commit through `husky`
* `bitbucket-pipelines` to run linting and deploy the app

### How do I structure my project?

Just follow the examples in all the features. `CONTRIBUTING.md` has a more detailed explanation.

If you have reusable components you need put them in the `components` folder.

If you have a new `feature`, be it a `redux` slice for something alone or maybe it has a screen that you'll later navigate to, put it in the `features` folder. See how the `counter` feature is mapped to a folder called the same way with the component inside it and its redux slice and api helpers?

When you have strings you need to show in your UI they go in `localization/en.json` because if you later want to translate the app you'll be ready to do that without any major hassle. An example of how to access those strings can be found in the `counter/Counter.js` component.

When you begin, update your theme to match your app. Read [this](https://material-ui.com/customization/theming/) to know how.

In the `app` folder there are shared files only, there is the `redux` store configuration, the `apisauce` client configuration and global services like the `fileUpload` function.

### How do I style my components?

```js
const MyComponent = () => {
  const classes = useStyles();
};

const useStyles = makeStyles((theme) => ({
  self: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  // ...more styles...
}));
```

Read [this link](https://material-ui.com/styles/basics/) for details.

### Making API requests

Follow these steps:

1. Update the `REACT_APP_API_URL` variable in the `.env` file
2. Use the `makeApiCall` higher order function in your api files like the following snippet

```js
import makeApiCall from 'app/makeApiCall';

// the following does a post request to your server to the
// baseUrl + 'something' with the data variable as its body
const fetchSomethingFromTheApi = makeApiCall((client, data) => client.post('something', data));
```

### How do I upload files?

The `useImageUpload` hook or the others you can find to upload other types of files in [our knowledge base](https://kb.spacedev.uy/books/file-upload-s3/page/web) work like so:

```js
const [progress, handleUpload] = useImageUpload(onValueChange);
```

Think of that `onValueChange` function it receives as what would be `(value) => setFieldValue('coverUrl', value)` in formik.

Since we recommend you use formik but we can't use hooks inside the formik context we recommend you make a separate component to call this hook and get that function as a prop.

Other than that, all you need to do is to have you api client properly setup and the `POST /storage` endpoint configured like it is [in our other knowledge base article](https://kb.spacedev.uy/books/file-upload-s3/page/nestjs-generic-storage-module).

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
