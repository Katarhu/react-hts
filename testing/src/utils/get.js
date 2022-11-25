export const get = url => new Promise((resolve, reject) => {
  try {
    fetch(url)
      .then(response => response.json())
      .then(response => resolve(response));
  } catch (error) {
    reject(error);
  }
});
