document.addEventListener('DOMContentLoaded', () => {
    const carList = document.getElementById('car-list');
    const filterFuelType = document.getElementById('filter-fuel-type');
    const filterModel = document.getElementById('filter-model');
    const filterManufacturedYear = document.getElementById('filter-manufactured-year');
    const resetFilters = document.getElementById('reset-filters');

    function displayCars(cars) {
        carList.innerHTML = '';
        cars.forEach((car, index) => {
            const carItem = document.createElement('div');
            carItem.className = 'car-item';
            carItem.innerHTML = `
                ${car.photos ? `<img src="${car.photos}" alt="Car Photo">` : '<img src="default-image.png" alt="Default Image">'}
                <div class="details">
                    <h3>${car.model || 'Unknown Model'} (${car.manufacturedYear || 'Unknown Year'})</h3>
                    <p><strong>Registration Number:</strong> ${car.registrationNumber || 'Unknown'}</p>
                    <p><strong>Price:</strong> $${car.price || 'N/A'}</p>
                    <p><strong>Color:</strong> ${car.color || 'Unknown'}</p>
                    <p><strong>Seats:</strong> ${car.seatCount || 'N/A'}</p>
                    <p><strong>Fuel Type:</strong> ${car.fuelType || 'Unknown'}</p>
                    <p><strong>Insurance Date:</strong> ${car.insuranceDate || 'N/A'}</p>
                    <p><strong>Last Oil Change (km):</strong> ${car.lastOilChange || 'N/A'}</p>
                    <p><strong>Description:</strong> ${car.description || 'N/A'}</p>
                    <p><strong>RC Book Copy:</strong> ${car.rcBookCopy || 'N/A'}</p>
                    <p><strong>Modified Details:</strong> ${car.modifiedDetails || 'N/A'}</p>
                    <p><strong>Extra Remarks:</strong> ${car.extraRemarks || 'N/A'}</p>
                    <button class="btn btn-delete" data-index="${index}">Delete</button>
                </div>
            `;
            carList.appendChild(carItem);
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.btn-delete').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                deleteCar(index);
            });
        });
    }

    function filterCars() {
        const fuelType = filterFuelType.value;
        const model = filterModel.value.toLowerCase();
        const manufacturedYear = filterManufacturedYear.value;

        let cars = JSON.parse(localStorage.getItem('cars')) || [];

        if (fuelType !== 'All') {
            cars = cars.filter(car => car.fuelType === fuelType);
        }

        if (model) {
            cars = cars.filter(car => car.model.toLowerCase().includes(model));
        }

        if (manufacturedYear) {
            cars = cars.filter(car => car.manufacturedYear == manufacturedYear);
        }

        displayCars(cars);
    }

    function deleteCar(index) {
        let cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.splice(index, 1); // Remove the car at the specified index
        localStorage.setItem('cars', JSON.stringify(cars)); // Update localStorage
        filterCars(); // Refresh the car list display
    }

    filterFuelType.addEventListener('change', filterCars);
    filterModel.addEventListener('input', filterCars);
    filterManufacturedYear.addEventListener('input', filterCars);
    resetFilters.addEventListener('click', () => {
        filterFuelType.value = 'All';
        filterModel.value = '';
        filterManufacturedYear.value = '';
        filterCars();
    });

    // Initial display
    filterCars();
});
