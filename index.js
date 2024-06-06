/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './11-appwriteIntro/src/App';
import {name as appName} from './app.json';
// import {playbackService} from './08-SpotifyClone/musicPlayerServices';

AppRegistry.registerComponent(appName, () => App);
// TrackPlayer.registerPlaybackService(() => playbackService);
