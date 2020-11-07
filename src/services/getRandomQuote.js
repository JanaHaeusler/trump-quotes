export default function getRandomQuote() {

    return (
        fetch('http://api.tronalddump.io/random/quote')
        .then((res) => res.json())
    )
}