# Draggable
Javascript (ReactJs) library for draggable windows.

## Installation

### Packages
```
npm install
```

### Usage
```
import Draggable from 'Draggable';

...

<Draggable [props]>
  Child components, e.g. div, span, etc.
</Draggable>
```

#### Available properties:
  * type
    - WINDOW_CUSTOM
    - WINDOW_DEFAULT
    - WINDOW_DEFAULT_WITH_BUTTON
    - WINDOW_DRAGGABLE_TOPBAR
    - WINDOW_DRAGGABLE_TOPBAR_WITH_BUTTON
  * id : id of draggable window, e.g. "my-id"
  * className : class of draggable window, e.g. "my-class"
  * style : css styles for draggable window, e.g. color: "#fff"
  * initPos : window initial position (If you don't specify initPos, the Draggable window will appear in the middle of the browser window), e.g. x: 0, y: 0
  * overlay : draggable components, this component will emit onMouseDown event, e.g. \<div>My draggable window\</div>

### Development
```
$ npm run dev
```

### Production
```
$ npm run build
```

## Built With
* [ReactJs](https://reactjs.org/)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)

## Dependencies
See [package.json](package.json)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
