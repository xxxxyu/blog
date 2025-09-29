// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find all <article> elements
    const articles = document.querySelectorAll('article');
    
    // Loop through each article
    articles.forEach(article => {
        // Get all direct children of the article
        const directChildren = article.children;
        
        // Add the class to each direct child
        Array.from(directChildren).forEach(child => {
            if (!child.classList.contains('full-width')) { // Skip full width children
                child.classList.add('half-width');
            }
        });
    });
});