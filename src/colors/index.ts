export interface Color {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export interface CommonColors {
  black: string;
  white: string;
}

export const amber: Color = require('./amber');
export const blue: Color = require('./blue');
export const blueGrey: Color = require('./blueGrey');
export const brown: Color = require('./brown');
export const common: CommonColors = require('./common');
export const cyan: Color = require('./cyan');
export const deepOrange: Color = require('./deepOrange');
export const deepPurple: Color = require('./deepPurple');
export const green: Color = require('./green');
export const grey: Color = require('./grey');
export const indigo: Color = require('./indigo');
export const lightBlue: Color = require('./lightBlue');
export const lightGreen: Color = require('./lightGreen');
export const lime: Color = require('./lime');
export const orange: Color = require('./orange');
export const pink: Color = require('./pink');
export const purple: Color = require('./purple');
export const red: Color = require('./red');
export const teal: Color = require('./teal');
export const yellow: Color = require('./yellow');
