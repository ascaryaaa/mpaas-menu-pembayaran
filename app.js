App({
  globalData: {
    mahasiswaId: null,
    ipAddress: "string",
    universityId: null,
  },
  onLaunch(options) {
    var app = this;
    app.globalData.mahasiswaId = 1;
    app.globalData.universityId = 1;
  },
});
