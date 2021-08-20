import {
  parse,
  colorToRgba,
  getContrastRatio,
  getLuminance,
  fade,
  rgbaToColor,
  lighten,
  colorToHexStr,
  darken,
  emphasize,
  colorToHsla,
  colorToHslaStr,
} from './Color';
import { CSS_COLORS } from './CssColor';

describe('Color', () => {
  describe('parse', () => {
    it('should parse "red"', () => {
      const c = parse('red');
      expect(c).toEqual(CSS_COLORS.red);
    });
    it('should parse #rgb', () => {
      const c = parse('#f00');
      expect(c).toEqual(CSS_COLORS.red);
    });
    it('should parse #rgba', () => {
      const c = parse('#f00f');
      expect(c).toEqual(CSS_COLORS.red);
    });
    it('should parse #rrggbb', () => {
      const c = parse('#ff0000');
      expect(c).toEqual(CSS_COLORS.red);
    });
    it('should parse #rrggbbaa', () => {
      const c = parse('#ff0000ff');
      expect(c).toEqual(CSS_COLORS.red);
    });
    it('should parse rgb(r,g,b)', () => {
      const c = parse('rgb(255,0,0)');
      expect(c).toEqual(CSS_COLORS.red);
    });
    it('should parse rgba(r,g,b,a)', () => {
      const c = parse('rgb(255,0,0)');
      expect(c).toEqual(CSS_COLORS.red);
    });
    it('should parse hsl(h,s,l)', () => {
      const c = parse('hsl(0,100%,50%)');
      expect(c).toEqual(CSS_COLORS.red);
    });
    it('should parse hsla(h,s,l,a)', () => {
      const c = parse('hsla(0,100%,50%,1.0)');
      expect(c).toEqual(CSS_COLORS.red);
    });
  });

  describe('colorToHsla', () => {
    it('should decompose h,s,l', () => {
      const str = 'hsl(0,100%,50%)';
      const hsl = parse(str) ?? 0;
      expect(colorToHsla(hsl)).toEqual([0, 1, 0.5, 1]);
      expect(colorToHslaStr(hsl)).toEqual(str);
    });
    it('should decompose h,s,l,a', () => {
      const str = 'hsla(0,100%,50%,0.8)';
      const hsl = parse(str) ?? 0;
      expect(colorToHsla(hsl)).toEqual([0, 1, 0.5, 0.8]);
      expect(colorToHslaStr(hsl)).toEqual(str);
    });
  });

  describe('colorToRgba', () => {
    it('should decompose red correctly', () => {
      const [r, g, b, a] = colorToRgba(CSS_COLORS.red);
      expect(r).toEqual(255);
      expect(g).toEqual(0);
      expect(b).toEqual(0);
      expect(a).toEqual(255);
    });
    it('should decompose green correctly', () => {
      const [r, g, b, a] = colorToRgba(parse('#00ff00') ?? 0);
      expect(r).toEqual(0);
      expect(g).toEqual(255);
      expect(b).toEqual(0);
      expect(a).toEqual(255);
    });
    it('should decompose blue correctly', () => {
      const [r, g, b, a] = colorToRgba(parse('#0000ff') ?? 0);
      expect(r).toEqual(0);
      expect(g).toEqual(0);
      expect(b).toEqual(255);
      expect(a).toEqual(255);
    });
    it('should decompose alpha correctly', () => {
      const [r, g, b, a] = colorToRgba(parse('#0000ff00') ?? 0);
      expect(r).toEqual(0);
      expect(g).toEqual(0);
      expect(b).toEqual(255);
      expect(a).toEqual(0);
    });
  });

  describe('recomposeColor', () => {
    it('should decompose color correctly', () => {
      const r = rgbaToColor([255, 0, 0, 255]);
      const d2 = colorToRgba(r);

      expect(d2[0]).toEqual(255);
      expect(d2[1]).toEqual(0);
      expect(d2[2]).toEqual(0);
      expect(d2[3]).toEqual(255);

      const d1 = colorToRgba(CSS_COLORS.red);
      expect(d1).toEqual(d2);
    });
  });

  describe('getLuminance', () => {
    it('should return 0 - 1', () => {
      expect(getLuminance(CSS_COLORS.black)).toEqual(0);
      expect(getLuminance(CSS_COLORS.red)).toBeCloseTo(0.213);
      expect(getLuminance(CSS_COLORS.white)).toEqual(1);
    });
  });

  describe('getContrastRatio', () => {
    it('should return 1 - 21', () => {
      const c1 = getContrastRatio(CSS_COLORS.black, CSS_COLORS.white);
      expect(c1).toBeCloseTo(21);
      const c2 = getContrastRatio(CSS_COLORS.black, CSS_COLORS.black);
      expect(c2).toBeCloseTo(1);
      const foreground = parse('#000000') ?? 0;
      const background = parse('#b0b0b0') ?? 0;
      const c3 = getContrastRatio(foreground, background);
      expect(c3).toBeCloseTo(9.68, 2);
    });
  });

  describe('fade', () => {
    it('should set the alpha channel of the color', () => {
      const value = fade(CSS_COLORS.red, 128 / 255);
      const expected = parse('#ff000080');
      expect(value).toEqual(expected);
    });
  });

  describe('ligthen', () => {
    it('should return same color if impossible to make lighter', () => {
      expect(colorToHexStr(lighten(CSS_COLORS.white, 1))).toEqual('#ffffffff');
    });
    it('should reteurn a ligther value', () => {
      expect(colorToHexStr(lighten(CSS_COLORS.black, 0.01))).toEqual(
        '#030303ff'
      );
      expect(colorToHexStr(lighten(CSS_COLORS.black, 0.02))).toEqual(
        '#050505ff'
      );
      expect(colorToHexStr(lighten(CSS_COLORS.black, 0.04))).toEqual(
        '#0a0a0aff'
      );
      expect(colorToHexStr(lighten(CSS_COLORS.black, 0.08))).toEqual(
        '#141414ff'
      );
      expect(colorToHexStr(lighten(CSS_COLORS.black, 0.16))).toEqual(
        '#292929ff'
      );
      expect(colorToHexStr(lighten(CSS_COLORS.black, 0.32))).toEqual(
        '#525252ff'
      );
      expect(colorToHexStr(lighten(CSS_COLORS.black, 0.64))).toEqual(
        '#a3a3a3ff'
      );
      expect(colorToHexStr(lighten(CSS_COLORS.black, 1))).toEqual('#ffffffff');
    });
  });
  describe('darken', () => {
    it('should return same color if impossible to make darker', () => {
      expect(colorToHexStr(darken(CSS_COLORS.black, 1))).toEqual('#000000ff');
    });
    it('should return a darker value', () => {
      expect(colorToHexStr(darken(CSS_COLORS.white, 0.01))).toEqual(
        '#fcfcfcff'
      );
      expect(colorToHexStr(darken(CSS_COLORS.white, 0.02))).toEqual(
        '#fafafaff'
      );
      expect(colorToHexStr(darken(CSS_COLORS.white, 0.04))).toEqual(
        '#f5f5f5ff'
      );
      expect(colorToHexStr(darken(CSS_COLORS.white, 0.08))).toEqual(
        '#ebebebff'
      );
      expect(colorToHexStr(darken(CSS_COLORS.white, 0.16))).toEqual(
        '#d6d6d6ff'
      );
      expect(colorToHexStr(darken(CSS_COLORS.white, 0.32))).toEqual(
        '#adadadff'
      );
      expect(colorToHexStr(darken(CSS_COLORS.white, 0.64))).toEqual(
        '#5c5c5cff'
      );
      expect(colorToHexStr(darken(CSS_COLORS.white, 1))).toEqual('#000000ff');
    });
  });
  describe('emphasize', () => {
    it('should lighten a dark color', () => {
      const l1 = getLuminance(CSS_COLORS.black);
      const l2 = getLuminance(emphasize(CSS_COLORS.black));
      expect(l1).toBeLessThan(l2);
    });
    it('should darken a light color', () => {
      const l1 = getLuminance(CSS_COLORS.white);
      const l2 = getLuminance(emphasize(CSS_COLORS.white));
      expect(l1).toBeGreaterThan(l2);
    });
  });
});
