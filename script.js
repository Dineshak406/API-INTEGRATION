* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f0f2f5;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.header {
    background: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 20px;
}

.user-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.user-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.user-card:hover {
    transform: translateY(-5px);
}

.user-card h3 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.user-card p {
    color: #666;
    margin: 5px 0;
}

.loading {
    text-align: center;
    padding: 20px;
    font-size: 20px;
    color: #666;
}

@media (max-width: 600px) {
    .user-grid {
        grid-template-columns: 1fr;
    }
}