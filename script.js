// Простий розрахунок щоденної норми води: базова 35 мл на кг помножена на коефіцієнт активності.
document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const activitySelect = document.getElementById('activity');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultEl = document.getElementById('result');

    function formatLiters(l) {
        return `${l.toFixed(2)} л (${Math.round(l * 1000)} мл)`;
    }

    calculateBtn.addEventListener('click', () => {
        const weight = parseFloat(weightInput.value);
        const activity = parseFloat(activitySelect.value);

        if (!weight || weight <= 0 || isNaN(weight)) {
            resultEl.textContent = 'Введіть коректну вагу (кг).';
            return;
        }

        // Базова формула: 35 мл на 1 кг -> 0.035 л/кг
        const baseLiters = weight * 0.035;
        const totalLiters = baseLiters * activity;

        resultEl.textContent = `Рекомендовано: ${formatLiters(totalLiters)}`;
    });

    resetBtn.addEventListener('click', () => {
        weightInput.value = '';
        activitySelect.value = '1';
        resultEl.textContent = '';
    });

    // Дозволити розрахунок Enter на полі ваги
    weightInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            calculateBtn.click();
        }
    });
});