export function fetchStallById(id) {
  return fetch(`http://localhost:5000/stall/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}