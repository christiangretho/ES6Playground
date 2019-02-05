// write a function to retrieve json
// make an ajax request using the 'fetch' function
// https://rallycoding.herokuapp.com/api/music_albums


// function fetchAlbums(){
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }


// async/await Syntax
// async function fetchAlbums(){
//     const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     const json = await res.json()
//     console.log(json);
// }
// fetchAlbums();

// arrow function example
const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    console.log(json);
}
fetchAlbums();