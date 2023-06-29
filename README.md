# [react-native-dialog-view](https://www.npmjs.com/package/react-native-dialog-view)

The `react-native-dialog-view` is an animated overlay that can help you to display on the screen a pop-up/modal/dialog-view.
This is a more straightforward solution to the react-native-modal. This implementation is a simpler solution for a modal that is not using the react-native-modal and it uses the react-native-reanimated for a simple animation and the react-native-portal to be above everything.
You can display more `DialogView` modals over each other.
Default animation `Slide Up Fade`/`Slide Down Fade`.

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
| [react-native-portal](https://github.com/gorhom/react-native-portal)                   | `^1.0.14` |
| [react-native-screens](https://github.com/software-mansion/react-native-screens)       | `^3.20.0` |

## Setup

Add the `DialogViewProvider` to your App.ts files

```js
import { DialogViewProvider } from 'react-native-dialog-view';

// ...

<Provider store={store}>
  <DialogViewProvider>
    <NavigationProvider>
      <MainNavigator />
    </NavigationProvider>
  </DialogViewProvider>
</Provider>;
```

## Usage

```js
import { DialogView } from 'react-native-dialog-view';

// ...

<DialogView
    visible={isVisible}
    animationTime={300} // default
    hideModal={hideModal}
>
    <YourDesignedModal/>
</DialogView>
```

## Props

| Name            | Required | Type      | Description                                                                          |
| --------------- | -------- | --------- | ------------------------------------------------------------------------------------ |
| visible         | required | boolean   | This variable is used to display the overview                                        |
| children        | required | ReactNode | -                                                                                    |
| animationTime   | optional | number    | This variable is used to set the speed of the entrance/exit animation of the overlay |
| onPressBackdrop | optional | function  | This function is called when the use presses on the overlay                          |
| backdropColor   | optional | string    | This variable is used to change the background color of the overlay                  |
| overlayStyle    | optional | ViewStyle | This prop can be used to change the style of the overlay                             |

## Example

```js
import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DialogView } from 'react-native-dialog-view';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          with:100,
          height:100
        }}
        onPress={() => setIsModalVisible(true)}
      >
        <Text>{Show modal}</Text>
      </TouchableOpacity>
      <DialogView
        visible={isModalVisible}
        backdropColor={'rgba(0, 0, 0, 0.2)'}
        overlayStyle={{ justifyContent: 'center' }}
        onPressBackdrop={() => setIsModalVisible(true)}
      >
        <View style={{
          width: 100,
          height: 100
        }}>
          <Text style={styles.text}>{This is a modal}</Text>
          <TouchableOpacity
            style={{
              with:100,
              height:100
            }}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={styles.text}>{Hide Modal}</Text>
          </TouchableOpacity>
        </View>
      </DialogView>
    </View>
  );
};

export default HomeScreen;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
