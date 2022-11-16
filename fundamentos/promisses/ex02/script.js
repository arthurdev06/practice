

async function doSubmit() {
  const lyricsResult = document.getElementById("lyricsResult");
  const artist = document.getElementById("artist");
  const song = document.getElementById("song");

  lyricsResult.innerHTML =
    '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';

  //async await
  try {
    const lyricsResponse = await findLyrics(artist.value, song.value);
    const data = await lyricsResponse.json();
    if (data.lyrics) {
      lyricsResult.innerHTML = data.lyrics;
    } else {
      lyricsResult.innerHTML = data.error;
    }
  } catch (err) {
    console.log(err);
  }
}
