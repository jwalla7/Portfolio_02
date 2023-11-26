import { type VariantProps } from "class-variance-authority";
import { buttonWithLabelStyles } from "../components/ui/button/ButtonWithLabel/buttonWithLabelStyles";

/**
 * @description Enables variant props to be required by the ButtonWithLabel component.
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

declare type Type_ButtonWithLabel = VariantProps<typeof buttonWithLabelStyles>;
