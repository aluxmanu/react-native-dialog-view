# react-native-dialog-view

react-native-dialog-view

## Installation

```sh
npm install react-native-dialog-view
```

or

```sh
yarn add react-native-dialog-view
```

## Packages

| Package                                                                                | Version   |
| -------------------------------------------------------------------------------------- | --------- |
| [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) | `^3.2.0`  |
| [react-native-portal](https://github.com/gorhom/react-native-portal).                  | `^1.0.14` |

## Setup

Add the `DialogViewProvider` to your App.ts files

```js
// ...

<Provider store={store}>
  <DialogViewProvider>
    <NavigationProvider>
      <MainNavigator />
    </NavigationProvider>
  </DialogViewProvider>
</Provider>
```

## Usage

```js
import { DialogViewView } from 'react-native-dialog-view';

// ...

<DialogViewView
    visible={isVisible}
    animationTime={300} // default
    hideModal={hideModal}
>
    <YourDesignedModal/>
</DialogView>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
