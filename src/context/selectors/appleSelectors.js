import useAppContext from "../context";

//APPLE SELECTORS

export const getAppleUserId = (state) => state.apple.user.id;
export const getAppleUserStatus = (state) => state.apple.user.status;
export const getApplePlaylists = (state) => state.apple.playlists.items;
export const getApplePlaylistsStatus = (state) => state.apple.playlists.status;
export const getAppleSelectedPlaylist = (state) => state.apple.playlists
export const getAppleSelectedPlaylistId = (state) => state.apple.selectedPlaylist.id;
export const getAppleSelectedPlaylistTracks = (state) => state.apple.selectedPlaylist.tracks;
export const getAppleSelectedPlaylistStatus = (state) => state.apple.selectedPlaylist.status;

export const useAppleSelectors = () => {
    const { state } = useAppContext()
    
    const userId = getAppleUserId(state);
    const userStatus = getAppleUserStatus(state);
    const playlists = getApplePlaylists(state);
    const playlistsStatus = getApplePlaylistsStatus(state);
    const selectedPlaylist = getAppleSelectedPlaylist(state);
    const selectedPlaylistId = getAppleSelectedPlaylistId(state);
    const selectedPlaylistTracks = getAppleSelectedPlaylistTracks(state);
    const selectedPlaylistStatus = getAppleSelectedPlaylistStatus(state);

    return { userId, userStatus, playlists, playlistsStatus, selectedPlaylistId, selectedPlaylistTracks, selectedPlaylistStatus, selectedPlaylist }
}