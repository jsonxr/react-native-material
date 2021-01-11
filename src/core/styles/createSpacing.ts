export type SpacingOptions = number | Spacing;

export interface Spacing {
  (): number;
  (value: number): number;
}

const createSpacing = (
  spacingInput: SpacingOptions | undefined = 8
): Spacing => {
  if (typeof spacingInput === 'number') {
    return (value?: number): number => (value ?? 1) * spacingInput;
  }
  return spacingInput;
};
export default createSpacing;
