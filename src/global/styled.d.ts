import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: "#fff";
      gray: {
        100: "#e1e1e6";
        300: "#c4c4cc";
        400: "#8d8d99";
        600: "#323238";
        700: "#29292e";
        800: "#202024";
        900: "#121214";
      };
      green: {
        500: "#00875f";
      };
    };
  }
}
