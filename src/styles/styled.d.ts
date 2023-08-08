import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary_bg_color: string;
      secondary_bg_color: string;
      color_primary: string;
      color_secondary: string;
      color_blue: string;
      color_blue_button: string;
      color_white: string;
      color_dashbord: string;
    },

    colorsInfo: {
      success: string;
      info: string;
      error: string;
      warning: string;
    }
  }
}