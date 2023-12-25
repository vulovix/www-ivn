export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const Timestamp = (day: number, month: Month, year: number) => {
  return new Date(Date.UTC(year, month, day));
};
