export const fetchStallById = async(id) => {
  try {
    const stallById = await fetch(`http://localhost:5000/stall/${id}`);
    const stall = await stallById.json();
    console.log(stallById)
    console.log(stall)
    return stall;
  }catch(error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};