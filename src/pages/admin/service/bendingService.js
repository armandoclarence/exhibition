// bendingService.js
export const fetchBendingExhibitors = () => {
    return fetch('http://localhost:5000/exhitors/bending')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response)
            return response.json();
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
};

