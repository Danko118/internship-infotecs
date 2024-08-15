function FetchData(setData, limit, page) {
  fetch(
    'https://dummyjson.com/users?'+
    'limit='+limit+'&'+
    'skip='+ ((page - 1) * limit) + 
    '&select=firstName,lastName,maidenName,age,gender,phone,address')
    .then(response => response.json())
    .then(data => {
      window.dispatchEvent(new Event("fetched"))
      setData(data)
      // !!Remove in dev
      console.log(data)
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
      window.dispatchEvent(new Event("fetch failed"))
    });
}

export default FetchData;