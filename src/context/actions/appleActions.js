import useAppContext from "../context";
import { setSelectedPlaylist } from "./appActions";
export const useAppleActions = () => {
    const { dispatch } = useAppContext();

    const setSelectedApplePlaylist = (playlist) => {
        setSelectedPlaylist(dispatch, 'apple', playlist)
    }

    return setSelectedApplePlaylist()
}
