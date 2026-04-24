import { createTheme } from '@rneui/themed';

export const palette = {
  black: '#000000',
  white: '#FFFFFF',
  grey0: '#404040',
  grey1: '#E5E5E5',
  grey2: '#F5F5F5',
  grey3: '#FAFAFA',
};

export const appTheme = createTheme({
  components: {
    Text: {
      style: {
        fontSize: 15,
      },
    },
    ListItemTitle: {
      style: {
        fontSize: 15,
      },
    },
    ListItemSubtitle: {
      style: {
        fontSize: 15,
      },
    },
    Input: {
      placeholderTextColor: palette.grey0,
      inputStyle: {
        fontSize: 15,
        fontWeight: '500',
        color: palette.black,
      },
      inputContainerStyle: {
        backgroundColor: palette.grey2,
        borderColor: palette.grey1,
        borderWidth: 1,
        borderRadius: 9999,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
    },
  },
});
