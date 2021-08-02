const artists = [
    {
      first: 'René',
      last: 'Magritte'
    },
    {
      first: 'Chaim',
      last: 'Soutine'
    },
    {
      first: 'Henri',
      last: 'Matisse'
    }
  ];

function printArray(input){
    i = 0;
    while(i <input.length){
        console.log(input[i]);
        i++;
    }
}

printArray(artists);