export function formatDuration(duration: number): string {
    if ( duration <= 0 ) return "00:00";

    const minutesInDay = 24 * 60;

    let hours, minutes;

    hours = Math.floor((duration / 60));
    minutes = duration - hours * 60;

    return `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}`;
}