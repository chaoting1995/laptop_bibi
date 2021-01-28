export function getProductData({
  search,
  filterBrand,
  frontPrice,
  backPrice,
  sort,
}) {
  let query = '';
  // if (page) query += `&page=${page}`;
  if (search) query += `search=${search}`;
  if (filterBrand === -1) query += `filterBrand=${''}`;
  if (filterBrand !== -1) query += `filterBrand=${filterBrand}`;
  if (sort) query += `&sort=${sort}`;
  if (frontPrice || backPrice)
    query += `&frontPrice=${frontPrice}&backPrice=${backPrice}`;

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
