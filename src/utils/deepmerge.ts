export function isPlainObject(item: any) {
  return item && typeof item === 'object' && item.constructor === Object;
}

export function deepmerge<T extends {}, U extends {}>(
  target: T,
  source: U,
  options = { clone: true }
): T & U {
  const output = options.clone ? { ...target } : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject((source as any)[key]) && key in target) {
        (output as any)[key] = deepmerge(
          (target as any)[key],
          (source as any)[key],
          options
        );
      } else {
        (output as any)[key] = (source as any)[key];
      }
    });
  }

  return output as T & U;
}
