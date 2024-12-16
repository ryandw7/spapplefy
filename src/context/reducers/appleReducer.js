
import { mockAppleMusicPlaylists } from "../../mockData";


const initialAppleState = {
    user: {
        status: { loading: false, error: null },
        id: '',
    },
    playlists: {
        status: { loading: false, error: null },
        items: mockAppleMusicPlaylists
    },
    selectedPlaylist: {
        id: '',
        status: { loading: false, error: null },
        tracks: []
    }

};



const appleReducer = (state = initialAppleState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default appleReducer;