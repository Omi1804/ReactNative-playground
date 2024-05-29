import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import {playListData} from './contants';

//These are all music player's functionalities

//thi if whether player is fully loaded or not in the screen
export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = false;
  } finally {
    return isSetup;
  }
}

//this is for add track and repeat the music
export async function addTrack() {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

//These are for basic controls of the music player
// export async function playbackService() {
//   TrackPlayer.addEventListener(Event.RemotePause, () => {
//     TrackPlayer.pause();
//   });
//   TrackPlayer.addEventListener(Event.RemotePlay, () => {
//     TrackPlayer.play();
//   });
//   TrackPlayer.addEventListener(Event.RemoteNext, () => {
//     TrackPlayer.skipToNext();
//   });
//   TrackPlayer.addEventListener(Event.RemotePrevious, () => {
//     TrackPlayer.skipToPrevious();
//   });
// }
