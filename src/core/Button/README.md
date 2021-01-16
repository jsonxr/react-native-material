# Button

## Properties

```javascript
children?: ReactNode;
color?: ButtonColor;
disabled?: boolean;
disableElevation?: boolean;
endIcon?: any;
href?: string;
size?: ButtonSize;
startIcon?: any;
style?: ViewStyle;
textStyle?: TextStyle;
title?: string;
variant?: ButtonVariant;
// Events
onPress?: () => void;
```
## MuiTheme

```javascript
createMuiTheme((theme: Theme) => {
  components: {
    MuiButton: {
      defaultProps: {

      },
      styleOverrides: {
        root: {},
        text: {},
        contained: {},
        small: {},
      },
    },
  }
})
```
