# Zonky

This project is a simple React app for the Zonky api. Visit it at https://fakeyou.github.io/zonky.

## Description

This app shows the latest loans from the Zonky marketplace. You can sort them by duration, amount, rating and time remaining. Opening a single loan will show a more detailed view of the loan itself.

For this app we are using React [Hooks](https://reactjs.org/docs/hooks-intro.html) to create more concise components. We are making heavy use of `useEffect` and `useState` to make our components dynamic.

For api communication we created custom `useLoan` and `useLoans` hooks (found in `/src/hooks/loans`). These hooks could be used in any component to grab information from the api.

Testing is done using Jest and [react-testing-library](https://github.com/kentcdodds/react-testing-library/).

## Installation & testing

```
yarn
yarn start
yarn test
```

## Deploying

This project is deployed on Github Pages. To update the app you can run `yarn build` and push the 
changes to the repo. Github Pages will reflect the changes in ~2 minutes.

Github Pages do not allow dynamic routing which we need for React Router. As a workaround we are using its `404` functionality. Github will send any routes that can't be mapped to a html file to your `404.html` file. In this file we can grab to the current path and redirect the user to the root with a redirect parameter. In our app we grab this parameter and setup the router to match.

i.e.

1. user visits https://fakeyou.github.io/zonky/loans/12345
2. Github shows the `404.html` page because there is no `zonky/loans/12345/index.html`
3. we redirect the user to `fakeyou.github.io/?redirect=/zonky/loans/12345`
4. our app reads the `?redirect=` parameter during boot
5. `/zonky/loans/12345` is pushed the router history