document.addEventListener('DOMContentLoaded',function(){
    fetcthItems();
});

function fetcthItems(){
    // const token = localStorage.getItem('accessToken');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNTQyNTAyLCJpYXQiOjE3MDI1NDIyMDIsImp0aSI6ImIwMWFjYTZkMWRhOTRiNGJhM2Y0ZDBlNzRkMjk1NGE3IiwidXNlcl9pZCI6MX0.O1yZjJiDao9Q_jz8_zHzq-Xg1KI81xh2uX8qpgOr47A';
    fetch('http://127.0.0.1:8000/apia/item/',
    {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    }
    )
        .then(response => response.json())
        .then(data => displayItems(data))
        .catch(error => console.error('Error:'. error));
}

function displayItems(items){
    const itemsContainer = document.getElementById('items')
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6');
        itemElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        `;
        itemsContainer.appendChild(itemElement)
    });
}