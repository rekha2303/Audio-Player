document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;
var songIndex =["Channa-Ve.mp3", "Phulkari.mp3" , "Rahogi-Meri.mp3" , "Sip-Sip-2-1.mp3" , "Subaah-Jatt-Da-1.mp3" ,"Subaah-Jatt-Da-1(1).mp3"];
function startplayer() 
{
 player = document.getElementById('audio');
 player.controls = false;
}

function play_aud() 
{
 player.play();
} 
function pause_aud() 
{
 player.pause();
}
function stop_aud() 
{
 player.pause();
 player.currentTime = 0;
}
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}

/* function next()
{
	currentSong = currentSong + 1 %songs.length;
	loadSong();
}
	
function previous()
{
	currentSong--;
	currentSong  = (currentSong < 0) ? songs.length-1 : currentSong;
	loadSong();
}
*/
	
	songIndex = 0;
	function nextSong() {
  songIndex++;
  if (songIndex > 1) {
    songIndex = 0;
  };
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];
  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];
  playing = true;
  play_aud();
}
	