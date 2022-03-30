import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {
    // let [whatsHappening, setWhatsHappening] = useState('');
    const [newTuit, setNewTuit] = useState('');

    const dispatch = useDispatch();
    return (
        <>
            <div className="wd-post-padding-top-12px">
                <textarea className="form-control" placeholder="What's happening" value={newTuit.tuit}
                          onChange={(e) =>
                              // setNewTuit(e.target.value)}>
                              setNewTuit({...newTuit, tuit: e.target.value})}>
                </textarea>
            </div>
            <div className="wd-post-padding-top-12px row wd-padding-left-16px">
                <div className="col-10 p-0">
                    <i className="col-1 fa-regular fa-image"/>
                    <i className="col-1 fa fa-chart-line"/>
                    <i className="col-1 fa-regular fa-face-smile"/>
                    <i className="col-1 fa-regular fa-calendar"/>
                </div>
                <div className="col-2">
                    <button className="float-end btn btn-primary btn-block rounded-pill"
                            onClick={() => createTuit(dispatch, newTuit)}>Tuit</button>
                </div>
            </div>
            <br/>
        </>
    );
}
export default WhatsHappening;
