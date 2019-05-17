# Boilerplate for web app

**Code base including:**

* [webpack](https://webpack.js.org/) -> bundling 📦
* [react](https://reactjs.org/) -> UI ⚛️
* [styled-components](https://www.styled-components.com/) -> styling 💅
* [redux](https://redux.js.org/) -> app state 🧘
* [react.i18next](https://react.i18next.com/) -> i18n 🌐
* [react-router](https://reacttraining.com/react-router/web/guides/quick-start) -> routing 🧭
* [jest](https://jestjs.io/) -> test 📐
* [eslint](https://eslint.org/) -> lint ✨

__*bonus*:__
* [blueprints](https://github.com/SpencerCDixon/redux-cli) -> components generator 🏭
* [elevation](https://material.io/design/environment/elevation.html) -> box-shadow function based on Material's elevation system 👥
* [iA-Fonts](https://github.com/iaolo/iA-Fonts) -> variable font changing its spacing and shape from thin to bold via params (and not font-weight) ⚖️
* [fluid typography](https://css-tricks.com/snippets/css/fluid-typography/) -> typo resized in function of very screen width, and not by media queries steps 🌊


## Commands

#### Install

```bash
yarn
```

#### start

```bash
yarn start
```

#### test

```bash
yarn test
```

#### analyze
Give informations about the bundle's size.

```bash
yarn analyze
```

## Atomic design

For the components, the files organization follows the [atomic design](http://atomicdesign.bradfrost.com/chapter-2/).

----

![tell me why](https://media.giphy.com/media/dSpDWBy3T1XW0/giphy.gif)

1. With **React**, components are your building blocks for your app.

2. It allows a more intuitive organization in your components. When you start to do this way, you gonna re apply the same schema for each like minded component.

3. It implies that the components' hierarchy can be easily represented and respected. atom > molecule > organism > screen.

4. A component of lower rank shouldn't use another from higher ranks. If it does so, maybe the component should be simplified with its extra logic placed outside of it, or maybe the component will have to be rethink and/or upranked. ¯\\\_(ツ)\_/¯

5. this way, you can easily scale up your app, or even removing the unwanted code, without impacting too much its surrounding.

The components are divided like so:
1. The primary component, **atom**, should be the simplest, without (that much) logic, and can be reused all over the app. (ie: button, title, card ...).

2. Then comes the **molecule**. It can be composed by multiples atoms, but its size and general purpose is higher than the atom.

3. The **organism** starts to have more significant logic in itself for your app (ie: a signup form). It can be single-use, but is not a page on itself (what about if you want to move your signup form with minimum alteration on your page ?).

4. finally, the **screen**. From the atomic design, it is a composition of *page* and *template*. This one is so the place where you put your blocks, pipe the logic needed for your view and children components, if not done by subsidiaries organisms.


----

<img src="https://media.giphy.com/media/3o6Mbegp3JcwKKC2cw/giphy.gif" alt="repetitive" width="30%" height="30%">


## Blueprints

Blueprints allow you to generate component's folder with its main common files with one command.

For using blueprints, the package `redux-cli` has to be installed globally.

*It is an old package, it is named redux, but it doesn't have to be used in redux application. Another blueprint system may be used later.*


The blueprints follow the atomic design too, and will generate base code for your components like so.

For generating an atom's component, in terminal write:
```bash
redux g atom Button
```

*For molecule,organism and screen, just replace "atom" in bash code by those.*

Inside `/src/components/atoms` it will create the folder Button, containing:
```
/Button
  /__tests__
    - Button.test.jsx
  - Button.component.jsx
  - Button.styled.js
  - index.js
```

Organism and screen will come with an extra container file: `MyCompName.container.js`. This one is for connecting redux, router etc... to your component.

All components aren't meant to be shared in all the application, some are used in only one place. So if you want to generate components inside another component, add the path of it at the end of the command:

```bash
redux g atom SpecificButton screen/YourScreen
```


## Theme

**Styled-components** allows to share a theming object among your styled components. This object can contain the variable you may need to reuse a multiple times: colors, spacing, proportions etc... The use of this object really depend on your application.

Here, a theming service allows to use multiple themes if needed (default theming, personalized theming from a user, a company ...).

For using it, a theme object has to be added in the theme's map, with its name has key.

For now it is just storing and returning themes, but the **theme** object used by styled-components can be composed of couple of getter, for returning values needed, instead of storing the whole objects with all the possible values.

----
 ## track to scout

* [styled-theming](https://github.com/styled-components/styled-theming) allows a better organization for theming, and can be useful for theming via props string (ie: dark, contained, outlined ...)

* The __build__ isn't functional yet. To test the build locally, the __BrowserRouter__ has to be replaced by a __MemoryRouter__. The build deployed hasn't been tested yet ¯\\\_(ツ)_/¯.

* When a backend may be started and needed, see how to integrate [graphQL](https://graphql.org/learn/).
