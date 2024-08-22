document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('car-registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const carData = {
            model: formData.get('model'),
            registrationNumber: formData.get('registration-number'),
            manufacturedYear: formData.get('manufactured-year'),
            price: formData.get('price'),
            color: formData.get('color'),
            seatCount: formData.get('seat-count'),
            fuelType: formData.get('fuel-type'),
            insuranceDate: formData.get('insurance-date'),
            lastOilChange: formData.get('last-oil-change'),
            description: formData.get('description'),
            rcBookCopy: formData.get('rc-book-copy'),
            modifiedDetails: formData.get('modified-details'),
            extraRemarks: formData.get('extra-remarks')
        };

        const photoInput = formData.get('photos');
        if (photoInput) {
            const reader = new FileReader();
            reader.onloadend = function() {
                carData.photos = reader.result; // Base64 string
                saveCarData(carData);
            };
            reader.readAsDataURL(photoInput); // Convert file to Base64
        } else {
            carData.photos = null;
            saveCarData(carData);
        }
    });

    function saveCarData(carData) {
        let cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.push(carData);
        localStorage.setItem('cars', JSON.stringify(cars));
        window.location.href = 'carview.html'; // Redirect to the page displaying cars
    }

    document.getElementById('back-to-home').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to home page
    });
});
