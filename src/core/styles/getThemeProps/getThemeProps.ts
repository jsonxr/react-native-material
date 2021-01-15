export default function getThemeProps<Theme, Props>({
  theme,
  name,
  props,
}: {
  theme?: Theme;
  name: string;
  props: Props;
}): Props {
  // default props don't exist on the theme for component
  const defaultProps = (theme as any)?.components?.[name]?.defaultProps;
  if (!defaultProps) {
    return props;
  }

  // if the prop doesn't exist, set the value from default
  for (const propName in defaultProps) {
    if ((props as any)[propName] === undefined) {
      (props as any)[propName] = (defaultProps as any)[propName];
    }
  }

  return props;
}
