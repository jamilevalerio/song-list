console.log('#ConstruindoCRUD')

//music database

const songList = {
  users: [
    {
      username: 'jamile',
    }
  ],
  posts: [
    {
      id: 1,
      artist: 'rihanna',
      song: 'diamonds'
    }
  ],
  createList(dados) {
    //creats posts in memory (array/object)
    songList.posts.push({
        id: songList.posts.length + 1,
        artist: dados.artist,
        song: dados.song
    })
    //creates post on HTML
    const songItem = document.querySelector('.song-list');
    songItem.insertAdjacentHTML("afterbegin", `<li>${dados.song}</li>`);
    //insertAdjacentHTML is used to insert elements on the webpage
  },
};
songList.createList({artist: 'beyoncé' , song: 'haunted'});
console.log(songList.posts);

const musicForm = document.querySelector('form'); //gets the HTML element

//gets the submission
musicForm.addEventListener('submit', function musicPostController(eventInfo){
  eventInfo.preventDefault(); //'preventDefault' stops the reload default event
  
  const songName = document.querySelector('.song-name');

  songName.value = ''; //clears the input after the value is submited
})

