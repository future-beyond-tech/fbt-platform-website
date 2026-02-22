/**
 * Merges class names with support for conditionals and arrays.
 * Use for responsive and state-based class composition in Tailwind.
 * Falsy values are omitted; strings are joined with spaces.
 */
export function cn(
  ...inputs: (string | undefined | null | false | 0)[]
): string {
  return inputs.filter(Boolean).join(" ");
}
