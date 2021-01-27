export function getProductData({
  search,
  frontPrice,
  backPrice,
  sort,
  queryReset,
}) {
  let query = '';
  // if (page) query += `&page=${page}`;
  // if (mainCate) query += `&mainCate=${mainCate}`;
  // if (detailCate) query += `&detailCate=${detailCate}`;
  if (search) query += `search=${search}`;
  if (sort) query += `&sort=${sort}`;
  if (frontPrice || backPrice)
    query += `&frontPrice=${frontPrice}&backPrice=${backPrice}`;
  if (queryReset) query = '';

  const url = `http://35.194.203.197/search_name.php?${query}`;
  const request = new Request(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  });

  return fetch(request)
    .then((response) => response.json())
    .then((data) => data);
}
