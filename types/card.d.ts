import { type VariantProps } from "class-variance-authority";

/**
 * @description Enables variant props to be required by the Card component.
 *
 * cva offers the VariantProps helper to extract variant types.
 *
 * cva doesn't offer a built-in solution for setting required variants.
 *
 * Instead, cva recommends using TypeScript's Utility Types
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html
 */

declare type Type_Card = VariantProps<typeof cardStyles>;

declare type Type_CardSize = "sm" | "md" | "lg";

declare type Type_CardPosition = "left" | "center" | "center_sm" | "right";
