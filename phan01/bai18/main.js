var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
   };
function updateRecords(id, albumTitle, artist, tracks) {
    var keyCollection = Object.keys(collection);
    var result = 0;
    for(var i = 0; i < keyCollection.length; i++) {
        if(keyCollection[i] == id) {
            if((typeof albumTitle == 'string') && (typeof artist == 'string')) {
                collection[id].albumTitle = albumTitle;
                collection[id].artist = artist;
                console.log(typeof collection[id].tracks)
                if(collection[id].tracks?.length) {
                    collection[id].tracks = collection[id].tracks.concat(tracks);
                }
                else if((collection[id].tracks) == undefined) {
                    collection[id].tracks = tracks;
                }
                else{
                    delete collection[id].tracks;
                }
            }
            else {
                alert("Giá trị nhập vào cho albumTitle và artist phải là chuỗi");
            }
            result++;
        }
    }
    if(result == 0) {
        alert("Không tồn tại id này");
    }
    console.log(collection);
}

updateRecords(2548, 'Album title name', 'artist name', ['arr1', 'arr2']);