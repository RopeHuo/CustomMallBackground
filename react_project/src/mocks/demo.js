/* eslint-disable no-unused-vars */
export default ({ fetchMock, delay, mock, toSuccess, toError }) => {
  return {
    '/api/charts/bar1': options => {
      return toSuccess(
        mock([
          { year: '1951 年', "sales|1-100": 100 }, // 1-100 的随机数
          { year: '1952 年', "sales|1-100": 100 },
          { year: '1956 年', "sales|1-100": 100 },
          { year: '1957 年', "sales|1-100": 100 },
          { year: '1958 年', "sales|1-100": 100 },
        ]),
        400
      );
    },
  };
};