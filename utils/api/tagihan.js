import { API_BASE_URL, TAGIHAN } from '/config/config';

function fetchTagihanSPP(callback) {
  const mahasiswaId = getApp().globalData.mahasiswaId;

  const postData = {
    "mahasiswaId": mahasiswaId
  };

  my.request({
    url: `${API_BASE_URL}${TAGIHAN.SPP}`,
    method: 'POST',
    data: postData,
    headers: {
      'Content-Type': 'application/json',
    },
    success: (res) => {
      if (res.status === 200) {
        callback(null, res.data);
      } else {
        console.error('Error fetching Tagihan SPP:', res);
        callback(new Error('Failed to fetch Tagihan SPP'), null);
      }
    },
    fail: (err) => {
      console.error('Request failed:', err);
      callback(err, null);
    }
  });
}

export default {
  fetchTagihanSPP,
};
