/* eslint-disable linebreak-style */
/* eslint-disable quotes */

export const DATA_SPLIT_EVENT = {
  query:
    "search from file '/Data_Penjualan/data_penjualan.csv' into test; \r\n extract using split _event ',' as NoPesanan, StatusPesanan, AlasanPembatalan from test into test2;",
  user: "dika_tama",
  userQueryID: 28106,
  advanceMode: true,
  title: "Untitled",
  model:
    '{"id":"3b1a93b6-41d6-4bfc-a5dc-492eaead7a2a","offsetX":0,"offsetY":0,"zoom":100,"gridSize":0,"links":[],"nodes":[{"items":[]},{"command":[]}]}',
};

export const DATA_WRONG_QUERY = {
  query: "search from file '/Data_Penjualan/data_penjualan.csv'",
  user: "dika_tama",
  userQueryID: 28106,
  advanceMode: true,
  title: "Untitled",
  model:
    '{"id":"3b1a93b6-41d6-4bfc-a5dc-492eaead7a2a","offsetX":0,"offsetY":0,"zoom":100,"gridSize":0,"links":[],"nodes":[{"items":[]},{"command":[]}]}',
};
