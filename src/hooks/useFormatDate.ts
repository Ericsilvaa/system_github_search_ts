// posso criar enums
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
export const useDateFormat = (date: string): string => {
  const [year, month, day] = date.split('T')[0].split('-')
  const formatDate = new Date(`${month}/${day}/${year}`)



  return (`${formatDate.getDate()} ${meses[formatDate.getMonth()]} ${formatDate.getFullYear()}`);
}

// 2021-06-17T17:42:28Z