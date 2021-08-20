export type ElementType<
  T extends ReadonlyArray<unknown>
> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;

// const values = ['A', 'B'] as const;
// type Foo = ElementType<typeof values>; // this is correctly inferred as literal "A" | "B"

/**
 * Enables a Partial on parent and all children recursively.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
