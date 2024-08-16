export function FetchData(setData, limit, page) {
  fetch(
    'https://dummyjson.com/users?'+
    'limit='+limit+'&'+
    'skip='+ ((page - 1) * limit) + 
    '&select=firstName,lastName,maidenName,age,gender,phone,address')
    .then(response => response.json())
    .then(data => {
      window.dispatchEvent(new Event("fetched"))
      setData(data)
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
      window.dispatchEvent(new Event("fetch failed"))
    });
}

export function FetchFilterData(setData, limit, page, key, value) {
  fetch(
    'https://dummyjson.com/users/filter?'+
    'key=' + key + '&' + 
    'value=' + value + '&' + 
    'limit='+limit + '&' + 
    'skip='+ ((page - 1) * limit) + '&' + 
    'select=firstName,lastName,maidenName,age,gender,phone,address')
    .then(response => response.json())
    .then(data => {
      window.dispatchEvent(new Event("fetched"))
      setData(data)
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
      window.dispatchEvent(new Event("fetch failed"))
    });
}
