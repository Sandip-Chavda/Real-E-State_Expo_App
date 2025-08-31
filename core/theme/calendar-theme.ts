import { COLORS } from './colors';

export const calendarTheme = {
  itemDayContainer: {
    activeDayFiller: {
      backgroundColor: COLORS.primary,
    },
  },
  itemDay: {
    active: () => ({
      container: {
        backgroundColor: COLORS.primary,
      },
      content: {
        color: 'white',
      },
    }),
  },
};
