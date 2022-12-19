export function formatDuration(duration: number): string {
  if (duration <= 0) return '00:00';

  const minutesInHour = 60;

  const hours = Math.floor((duration / minutesInHour));
  const minutes = duration - hours * minutesInHour;

  return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}`;
}
