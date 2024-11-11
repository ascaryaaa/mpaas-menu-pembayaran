import { fetchTagihanSPP } from '/utils/api/tagihan.js';
import currency from '/utils/formatter/currency.js';

Page({
  data: {
    tagihanList: [],
    loading: true,
    error: null,
  },

  onLoad() {
    this.loadTagihanSPP();
  },

  loadTagihanSPP() {
    const self = this;
    self.setData({ loading: true, error: null });

    fetchTagihanSPP((err, data) => {
      if (err) {
        self.setData({
          error: 'Failed to load Tagihan SPP',
          loading: false
        });
      } else {
        const formattedData = data.map(item => ({
          ...item,
          nominal: currency.formatRupiah(item.nominal)
        }));
        self.setData({
          tagihanList: formattedData,
          loading: false
        });
      }
    });
  }
});
