export function FetchData(setData, limit, page, key = null, value = null, sortBy = null, order = null) {
  
  let url = 'https://dummyjson.com/users?' +
    `limit=${limit}` +
    `&skip=${((page - 1) * limit)}` +
    (sortBy && order? 
    `&sortBy=${sortBy}&order=${order}` : "") +
    '&select=firstName,lastName,maidenName,age,gender,phone,address';

  if (key && value) {
    url = 'https://dummyjson.com/users/filter?' +
      `key=${key}` +
      `&value=${value}` +
      (sortBy && order? 
      `&sortBy=${sortBy}&order=${order}` : "") +
      `&limit=${limit}` +
      `&skip=${((page - 1) * limit)}` +
      '&select=firstName,lastName,maidenName,age,gender,phone,address';
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      window.dispatchEvent(new Event("fetched"));
      setData(data);
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
      window.dispatchEvent(new Event("fetch failed"));
    });
}
