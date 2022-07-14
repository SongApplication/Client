import { SongModel } from "../SongModel";

const initialState = {
    songsArr: []
}


type Action =  { type: 'ADD_SONG', payload: SongModel } | { type: 'DELETE_SONG', payload: string } | { type: 'EDIT_SONG', payload:{id:string,s:SongModel} } | { type: 'GET_SONGS', payload: SongModel[] }



export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case "GET_SONGS":
            return {
                ...state,
                songsArr: action.payload,
            };
        case "ADD_SONG":
            console.log("reducer"+action.payload.genre)
            return {
                ...state,
                songsArr: [...state.songsArr, action.payload]
                
            }
        case "EDIT_SONG":
            let ind: number = state.songsArr.findIndex((item: SongModel) => item.id == action.payload.id);
            let arr: any = state.songsArr;
            arr[ind] = action.payload.s;
            return {
                ...state,
                songsArr: [...arr]
            };

        case "DELETE_SONG":
            return {
                ...state,
                songsArr: state.songsArr.filter((song: SongModel) => song.id !== action.payload)
            }


        default:
            return { ...state };

    }
}