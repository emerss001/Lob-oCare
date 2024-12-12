// Função para buscar horários disponíveis
async function fetchAvailableSlots() {
    const dateInput = document.getElementById("data");
    const serviceInput = document.getElementById("servico");
    const timeSlotsContainer = document.getElementById("time-slots-container");

    const date = dateInput.value;
    const service = serviceInput.value;

    if (!date || !service) {
        return;
    }

    try {
        const response = await fetch(
            `https://lobao-care-backend.onrender.com/get-times?date=${date}&service=${service}`
        );

        if (!response.ok) {
            throw new Error("Falha ao buscar horários disponíveis");
        }

        const availableSlots = await response.json();
        // Limpa os horários existentes
        timeSlotsContainer.innerHTML = "";

        // Adiciona novos horários
        availableSlots.forEach((slot) => {
            const timeSlot = document.createElement("div");
            timeSlot.className = "time-slot";
            timeSlot.innerHTML = `
                <input type="radio" id="time-${slot.time}" name="time-slot.time" value="${slot.time}" />
                <label for="time-${slot.time}">${slot.time}</label>
            `;
            timeSlotsContainer.appendChild(timeSlot);
        });
    } catch (error) {
        console.error("Erro ao buscar horários disponíveis:", error);
        timeSlotsContainer.innerHTML =
            "<p>Erro ao carregar horários disponíveis. Por favor, tente novamente mais tarde.</p>";
    }
}

// Adiciona event listeners aos campos de data e serviço
document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("data");
    const serviceInput = document.getElementById("servico");

    dateInput.addEventListener("change", fetchAvailableSlots);
    serviceInput.addEventListener("change", fetchAvailableSlots);

    // Define a data mínima como hoje
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
});
