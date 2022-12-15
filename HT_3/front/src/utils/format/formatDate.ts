export function formatDate(date: string): string {
  let splitDate: string[];

  if (date.match(/[0-9]*\/[0-9]*\/[0-9]*/) != null) splitDate = date.split('/');
  else if (date.match(/[0-9]*\.[0-9]*\.[0-9]*/) != null) return date;
  else { return '00.00.00' }

  let [day, month, year] = splitDate;

  if (!isNaN(+day)) day = +day > 9 ? day : '0' + day;
  if (!isNaN(+month)) month = +month > 9 ? month : '0' + month;

  return `${day}.${month}.${year}`;
}
