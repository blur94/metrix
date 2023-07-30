import dayjs from 'dayjs';

export const calcDaysDiff = (givenDate: Date) => {
  const today = dayjs();
  const isDateExceeded = today.isAfter(givenDate);

  let daysDifference = 0;

  if (isDateExceeded) {
    daysDifference = today.diff(givenDate, "day");
  }

  return daysDifference;
};
