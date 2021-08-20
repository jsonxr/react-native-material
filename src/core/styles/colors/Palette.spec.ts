import { parse } from './Color';
import { CSS_COLORS } from './CssColor';
import { createPalette } from './Palette';
import { red } from './hues/red';

describe('Palette', () => {
  describe('createPalette', () => {
    describe('type', () => {
      it('should default to light mode', () => {
        const palette = createPalette();
        expect(palette).toBeTruthy();
        expect(palette.type).toEqual('light');
      });
      it('should allow explicit dark mode', () => {
        const palette = createPalette({ type: 'dark' });
        expect(palette).toBeTruthy();
        expect(palette.type).toEqual('dark');
      });
      it('should allow explicit light mode', () => {
        const palette = createPalette({ type: 'light' });
        expect(palette).toBeTruthy();
        expect(palette.type).toEqual('light');
      });
    });

    describe('augment colors', () => {
      it('should augment primary color', () => {
        const palette = createPalette({ primary: 'red' });
        expect(palette).toBeTruthy();
        expect(palette.primary.main).toEqual(CSS_COLORS.red);
      });

      it('should augment secondary color', () => {
        const palette = createPalette({ secondary: 'red' });
        expect(palette).toBeTruthy();
        expect(palette.secondary.main).toEqual(CSS_COLORS.red);
      });

      it('should augment error color', () => {
        const palette = createPalette({ error: 'red' });
        expect(palette).toBeTruthy();
        expect(palette.error.main).toEqual(CSS_COLORS.red);
      });
      it('should augment info color', () => {
        const palette = createPalette({ info: 'red' });
        expect(palette).toBeTruthy();
        expect(palette.info.main).toEqual(CSS_COLORS.red);
      });
      it('should augment warning color', () => {
        const palette = createPalette({ warning: 'red' });
        expect(palette).toBeTruthy();
        expect(palette.warning.main).toEqual(CSS_COLORS.red);
      });
      it('should augment success color', () => {
        const palette = createPalette({ success: 'red' });
        expect(palette).toBeTruthy();
        expect(palette.success.main).toEqual(CSS_COLORS.red);
      });
    });

    describe('override colors', () => {
      it('should override with color swatch', () => {
        const palette = createPalette({
          primary: { main: 'red', light: 'green', dark: 'blue', text: 'black' },
        });
        expect(palette).toBeTruthy();
        expect(palette.primary.main).toEqual(CSS_COLORS.red);
        expect(palette.primary.light).toEqual(CSS_COLORS.green);
        expect(palette.primary.dark).toEqual(CSS_COLORS.blue);
        expect(palette.primary.text).toEqual(CSS_COLORS.black);
      });
      it('should override with color swatch partial', () => {
        const palette = createPalette({ primary: 'red' });
        expect(palette).toBeTruthy();
        expect(palette.primary.main).toEqual(CSS_COLORS.red);
        expect(palette.primary.light).toBeDefined();
        expect(palette.primary.light).not.toEqual(CSS_COLORS.red);
        expect(palette.primary.dark).toBeDefined();
        expect(palette.primary.dark).not.toEqual(CSS_COLORS.red);
        expect(palette.primary.text).toBeDefined();
        expect(palette.primary.text).not.toEqual(CSS_COLORS.red);
      });
      it('should override with color hue', () => {
        const palette = createPalette({ primary: red });
        expect(palette).toBeTruthy();
        expect(palette.primary.main).toEqual(parse(red[500]));
      });
      it('should override with color number', () => {
        const palette = createPalette({ primary: red[500] });
        expect(palette).toBeTruthy();
        expect(palette.primary.main).toEqual(parse(red[500]));
        expect(palette.primary.light).toBeDefined();
        expect(palette.primary.light).not.toEqual(red[500]);
        expect(palette.primary.dark).toBeDefined();
        expect(palette.primary.dark).not.toEqual(red[500]);
        expect(palette.primary.text).toBeDefined();
        expect(palette.primary.text).not.toEqual(red[500]);
      });
    });

    describe('custom', () => {
      it('should allow custom palette properties', () => {
        const palette = createPalette({
          help: 'blue',
        });
        expect(palette.help).toEqual('blue');
      });
    });
  });

  describe('getContrast(color: ColorType)', () => {
    it('should return dark text if light background', () => {
      const palette = createPalette({
        background: { main: CSS_COLORS.white, text: CSS_COLORS.black },
      });
      const c1 = palette.getContrastText(CSS_COLORS.white);
      expect(c1).toEqual(CSS_COLORS.black);
    });
    it('should return light text if dark background', () => {
      const palette = createPalette({
        background: { main: CSS_COLORS.white, text: CSS_COLORS.black },
      });
      const c2 = palette.getContrastText(CSS_COLORS.black);
      expect(c2).toEqual(CSS_COLORS.white);
    });
  });

  describe('getColor(color: ColorType)', () => {
    it('should return main color of theme if a palette key', () => {
      const palette = createPalette({ primary: CSS_COLORS.red });
      expect(palette.getColor('primary')).toEqual(CSS_COLORS.red);
      palette.getColor('secondary');
    });
    it('should return number if a css color', () => {
      const palette = createPalette({ primary: CSS_COLORS.red });
      expect(palette.getColor('red')).toEqual(CSS_COLORS.red);
    });
  });
});
