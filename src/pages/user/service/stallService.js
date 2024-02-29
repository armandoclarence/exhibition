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

export const fetchStalls = async() => {
  try {
    const stallById = await fetch(`http://localhost:5000/stall/all`);
    const stall = await stallById.json();
    return stall;
  }catch(error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};