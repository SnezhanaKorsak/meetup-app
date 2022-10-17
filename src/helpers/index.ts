export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (time: string) => {
  return new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

export const getWeekArr = (day: Date): string[] => {
  const startDay = new Date(day).valueOf();

  const arr = [];
  for (let i = 0; i < 7; i++) {
    arr.push(startDay + 24 * 3600 * 1000 * i);
  }

  return arr.map((day) => new Date(day).toISOString().split('T')[0]);
};

export const getDateWithTime = (time: string, date: Date | null) => {
  const timeOffset = Math.abs(new Date().getTimezoneOffset());
  const hours = +time.split(':')[0] + timeOffset / 60;
  const minutes = time.split(':')[1];
  const dateTime = date ? date.setHours(+hours, +minutes, 0) : '';

  return new Date(dateTime).toISOString();
};
