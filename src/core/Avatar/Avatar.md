# Avatar

## default
```javascript
import { Avatar } from '@jsonxr/material-ui'

const App = () => <Avatar />
```


## text
```html
<Avatar text="A" />
```
```html
<Avatar>A</Avatar>
```

## icon
```html
<Avatar icon="folder" />
```
```javascript
import { FolderIcon } from '@jsonxr/material-ui/icons';

const App = () => (
  <Avatar>
    <FolderIcon />
  </Avatar>
);
```

## image
```javascript
const source = require('../../../assets/images/avatars/1.jpg');

<Avatar image={source} />
```
```javascript
import { Image } from '@react-native';
const source = require('../../../assets/images/avatars/1.jpg');

const App = () => (
  <Avatar>
    <Image image={source} />
  </Avatar>
);
```

## color
```html
<Avatar color="primary" text="p" />
<Avatar color="secondary" text="s" />
<Avatar color="red" text="r" />
<Avatar color="#ff0000" text="h" />
<Avatar color="#f00" text="h" />
<Avatar color="rgb(255, 0, 0)" text="b" />
<Avatar color="rgba(0, 0, 0, 0.87)" text="a" />
```

## styles
```javascript
const styles = {
  root: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
}

const App = () => <Avatar styles={styles} text="s" />
```

## theme
```javascript
const theme = createMuiTheme({
  components:
    MuiButton: {
      styleOverrides: {
        root: {},
        image: {},
        text: {},
      },
      variants: {
        contained: {},
        outlined: {},
      },
    }
});

const App = () => <Avatar styles={styles} text="s" />
```
