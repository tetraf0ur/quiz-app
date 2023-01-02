const convertMillisecondsToHoursAndMinutes = (milliseconds: number) => {
  const millisecondsToMinutes = milliseconds / 1000 / 60;
  const hours = Math.floor(millisecondsToMinutes / 60);
  const minutes = Math.floor(millisecondsToMinutes % 60);

  return { hours, minutes };
};

export { convertMillisecondsToHoursAndMinutes };
