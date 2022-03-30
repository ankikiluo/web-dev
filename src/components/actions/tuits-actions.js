import * as service from '../services/tuits-service';
export const UPDATE_TUIT_THUMB_UP = 'UPDATE_TUIT_THUMB_UP';
export const UPDATE_TUIT_THUMB_DOWN = 'UPDATE_TUIT_THUMB_DOWN';
export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT_LIKE = 'UPDATE_TUIT_LIKE';
export const DELETE_TUIT = 'DELETE_TUIT';
export const createTuit = async (dispatch, tuit) => {
    const newTuit = await service.createTuit(tuit);
    console.log(newTuit)
    dispatch({
                 type: CREATE_TUIT,
                 newTuit
             });
}
export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
                 type: FIND_ALL_TUITS,
                 tuits
             });
}
export const updateTuitLike = async (dispatch, tuit) => {
    const response = await service.updateTuit(tuit);
    dispatch({
                 type: UPDATE_TUIT_LIKE,
                 tuit
             });
}
export const updateTuitThumbUp = async (dispatch, tuit) => {
    const response = await service.updateTuit(tuit);
    dispatch({
                 type: UPDATE_TUIT_THUMB_UP,
                 tuit
             });
}
export const updateTuitThumbDown = async (dispatch, tuit) => {
    const response = await service.updateTuit(tuit);
    dispatch({
                 type: UPDATE_TUIT_THUMB_DOWN,
                 tuit
             });
}
export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    dispatch({
                 type: DELETE_TUIT,
                 tuit
             })
}