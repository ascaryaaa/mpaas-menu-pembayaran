function formatRupiah(amount) {
  if (typeof amount !== 'number') return amount;

  const formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `Rp.${formatted},-`;
}

export default {
  formatRupiah
};
