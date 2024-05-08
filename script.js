document.addEventListener('DOMContentLoaded', function() {
    const typingDemo = document.getElementById('typingDemo');
    const mainContent = document.getElementById('mainContent');

    typingDemo.addEventListener('animationend', function() {
        setTimeout(function() {
            typingDemo.classList.add('hidden');
            typingDemo.remove();
            mainContent.classList.remove('hidden');
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('input', calculateComparison);
            });
        }, 1500); 
    });
});



function calculateComparison() {
    const carCost = parseFloat(document.getElementById('carCost').value);
    const petrol = parseFloat(document.getElementById('petrol').value);
    const carCostSoCar = parseFloat(document.getElementById('carCostSoCar').value);
    const mileage = parseFloat(document.getElementById('mileage').value);
    const insurance = parseFloat(document.getElementById('insurance').value);

    const rentalTotal = carCost + petrol;
    const socarTotal = carCostSoCar + (mileage ) + insurance;

    let resultText = '';
    let betterOption = '';

    if (rentalTotal < socarTotal) {
        resultText = `You will save MYR ${(socarTotal - rentalTotal).toFixed(2)} by choosing Rental.`;
        betterOption = 'Rental is a better option.';
    } else if (rentalTotal > socarTotal) {
        resultText = `You will save MYR ${(rentalTotal - socarTotal).toFixed(2)} more by choosing SoCar.`;
        betterOption = 'SoCar is a better option.';
    } else {
        resultText = 'Both options cost the same.';
        betterOption = 'Just listen to Azhan';
    }

    document.getElementById('result').innerHTML = `
        <div>
            <p>${resultText}</p>
            <p>${betterOption}</p>
        </div>
    `;
}
