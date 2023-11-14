function rollDice() {
    const dots = document.querySelectorAll('.dot');
    
    
    dots.forEach(dot => dot.style.display = 'none');
    
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    
    for (let i = 0; i < randomNumber; i++) {
        dots[i].style.display = 'block';
    }
}
