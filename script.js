function displayJoke() {
    const audios = ['mixkit-human-male-casual-laugh-411.wav', 'mixkit-happy-child-laughing-2265.wav' , 'woman-laugh-6421.mp3' , 'very-infectious-laughter-meme-117727.mp3']
    const random = Math.floor(Math.random() * audios.length)
    const audio = new Audio(audios[random])
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => document.getElementById("joke").innerHTML = data['joke']);
        audio.play()
        
    
};