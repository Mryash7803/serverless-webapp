document.addEventListener('DOMContentLoaded', () => {
    // ---- IMPORTANT: PASTE YOUR API URL HERE ----
    const apiUrl = 'https://iax2edbm93.execute-api.ap-south-1.amazonaws.com/default/guestbook-function';
    // -----------------------------------------

    const form = document.getElementById('guestbook-form');
    const entriesList = document.getElementById('entries-list');

    // Function to fetch and display entries
    const fetchEntries = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const entries = await response.json();
            displayEntries(entries);
        } catch (error) {
            console.error("Could not fetch entries:", error);
            entriesList.innerHTML = '<p>Failed to load entries. Please try again later.</p>';
        }
    };

    // Function to render entries in the HTML
    const displayEntries = (entries) => {
        entriesList.innerHTML = ''; // Clear current list

        if (entries.length === 0) {
            entriesList.innerHTML = '<p>No entries yet. Be the first!</p>';
            return;
        }

        entries.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.className = 'entry';

            const nameP = document.createElement('p');
            nameP.className = 'entry-name';
            nameP.textContent = entry.name;

            const messageP = document.createElement('p');
            messageP.className = 'entry-message';
            messageP.textContent = entry.message;
            
            entryDiv.appendChild(nameP);
            entryDiv.appendChild(messageP);

            entriesList.appendChild(entryDiv);
        });
    };

    // Handle form submission
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default page reload

        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');

        const entryData = {
            name: nameInput.value,
            message: messageInput.value
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(entryData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Clear the form and refresh the entries list
            nameInput.value = '';
            messageInput.value = '';
            fetchEntries();

        } catch (error) {
            console.error("Could not add entry:", error);
            alert('Failed to add entry. Please check the console for details.');
        }
    });

    // Initial fetch of entries when the page loads
    fetchEntries();
});