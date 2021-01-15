//import { getThemeProps } from '@material-ui/styles';
import { Components } from './components';
import getThemeProps from './getThemeProps/getThemeProps';
import { useTheme } from './useTheme';

export interface ThemeWithProps<Components> {
  components?: {
    [K in keyof Components]: { defaultProps?: Partial<Components[K]> };
  };
}

export default function useThemeProps<Props>({
  props: inputProps,
  name,
}: {
  props: Props;
  name: string;
}): Props {
  const props = { ...inputProps };
  const theme = useTheme();
  return getThemeProps({
    theme,
    name,
    props,
  });
}
