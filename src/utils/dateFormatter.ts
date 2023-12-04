export function dateFormatter(date: string) {
  const [year, month, day] = date.slice(0, 10).split('-');

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
