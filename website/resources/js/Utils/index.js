const format = (time) => {
  let formattedTime = time.toString();

  if (time <= 9)
    formattedTime = `0${time}`;

  return formattedTime;
}

export function formatDate() {
  const today = new Date();
  let hours = today.getHours();
  let ampm = 'AM';

  if (hours >= 12) ampm = 'PM';

  const isMidnight = hours % 12 === 0;

  if (isMidnight) hours = 0;
  else hours = hours % 12;

  return `${format(hours)}:${format(today.getMinutes())}:${format(today.getSeconds())}${ampm}`;
}

export function filesize(size) {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}