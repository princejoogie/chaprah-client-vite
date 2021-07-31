# Vite Boilerplate

## Features

1. Pre-commit checks

   - [Husky](https://github.com/typicode/husky) is configured together with [lint-staged](https://github.com/okonet/lint-staged) to provide checks and enforce formatting before pushing to a repository. This ensures that source code is formatted the same way even if there are other developers contirbuting to a project.

2. Component Generators

   - [Plop](https://plopjs.com/documentation/#getting-started) comes preconfigured too, to help generate pages, components, and stores. Generators are a way to enforce consistent structure in a project.

3. Automatic Routes

   - Together with Plop, when generating pages, you will be asked for the route and other route related questions and will automatically add those settings in the apps' routes.

4. Auth Persistence

   - Auth persistence is configured given that the a jwtToken, and refreshToken is returned as a payload in a signin api route. All api calls are inside `./src/apis` folder and are easily configured.

5. State Management
   - You may expect redux to be the state management solution for this boilerplate but I personally don't like using redux and would rather use Context API which already comes with react. To level things up in the other hand, Context API is used together with [MobX](https://mobx.js.org/README.html) which is a simple and scalable state management solution.

Prince Carlo Jugilon
