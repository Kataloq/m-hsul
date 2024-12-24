document.querySelectorAll('.price-item').forEach(priceItem => {
    const decreaseButtons = priceItem.querySelectorAll('.decrease');
    const increaseButtons = priceItem.querySelectorAll('.increase');
    const priceElement = priceItem.querySelector('.price');
    const priceText = priceElement.innerText; // "1.45 AZN" və ya "17.4 AZN"
    const basePrice = parseFloat(priceText.split(' ')[0]); // Əsas qiymət

    let count = 1;

    // Əlavə funksiyalar
    decreaseButtons.forEach(decreaseButton => {
        decreaseButton.addEventListener('click', () => {
            if (count > 1) {
                count--;
                updatePrice();
            }
        });
    });

    increaseButtons.forEach(increaseButton => {
        increaseButton.addEventListener('click', () => {
            count++;
            updatePrice();
        });
    });

    // Qiyməti yenilə
    function updatePrice() {
        const newPrice = (basePrice * count).toFixed(2) + " AZN";
        priceElement.innerText = newPrice;
    }
});
