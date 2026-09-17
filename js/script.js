const visitorCountElement = document.getElementById("visitor-count");

const apiUrl = "https://uh03fm7fnf.execute-api.us-east-1.amazonaws.com/visitors";

async function updateVisitorCount() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        visitorCountElement.textContent = data.count;
    } catch (error) {
        console.error("Unable to load visitor count:", error);
        visitorCountElement.textContent = "Unavailable";
    }
}

updateVisitorCount();