export const fetchStock = stock => (
  $.ajax({
    method: 'GET',
    url: '/api/stocks',
    data: { stock }
  })
);