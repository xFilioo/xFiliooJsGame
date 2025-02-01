document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    numbers = numbers.sort(() => Math.random() - 0.5);
    let sequence = [...numbers];
    let currentIndex = 0;

    cards.forEach((card, index) => {
        card.textContent = numbers[index];
        card.dataset.value = numbers[index];
    });

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.add("hidden");
            card.addEventListener("click", handleCardClick);
        });
    }, 2000);

    function handleCardClick(event) {
        const card = event.target;
        if (parseInt(card.dataset.value) === Math.min(...sequence)) {
            card.classList.remove("hidden");
            sequence.splice(sequence.indexOf(parseInt(card.dataset.value)), 1);
            if (sequence.length === 0) {
                setTimeout(() => alert("Gratulacje! Wygrałeś!"), 300);
            }
        } else {
            alert("Błąd! Gra skończona.");
            location.reload();
        }
    }
});
