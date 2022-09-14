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
    songItem.insertAdjacentHTML("afterbegin", `<li>${dados.song  + ' - ' + dados.artist}</li>`);
    //insertAdjacentHTML is used to insert elements on the webpage
  },
};

const musicForm = document.querySelector('form'); //gets the HTML element

//gets the submission
musicForm.addEventListener('submit', function musicPostController(eventInfo){
  eventInfo.preventDefault(); //'preventDefault' stops the reload default event

  const songName = document.querySelector('.song-name');
  const artistName = document.querySelector('.artist-name');

  songList.createList({artist: songName.value, song: artistName.value});

  //clears the input after the value is submited
  songName.value = '';
  artistName.value = '';
})

