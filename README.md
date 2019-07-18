# EtherysWallet
Draggable - javascript (ReactJs) library for draggable windows.

## Installation

### Packages
```
npm install
```

### Usage
```
import Draggable from 'Draggable';

...

<Draggable props>
  Child components, e.g. div, span, etc.
</Draggable>
```

[PROPS]:
  id { string } : id of draggable window, e.g. "my-id"
  className { string }: class of draggable window, e.g. "my-class"
  style { object }: css styles for draggable window, e.g. { color: "#fff" }
  initPos { object }: window initial position, e.g. { x: 0, y: 0 }
  overlay { html tags }: draggable components, this component will emit onMouseDown event, e.g. <div>My draggable window</div>

### Develop - tests
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
See package.json

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.