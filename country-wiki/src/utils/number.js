export const readableNumber = (num) => {
  return ('' + num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
