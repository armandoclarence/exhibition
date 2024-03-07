export const fetchApprovedExhibitors = () => {
    return fetch('http://localhost:5000/exhitors/approved') // replace with the correct URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
};