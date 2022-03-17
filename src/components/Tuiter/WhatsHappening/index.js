import {useDispatch} from "react-redux";
import React, {useState} from "react";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
                     type: 'create-tuit',
                     tuit: whatsHappening
                 });
    }
    return (
        <>
            <div className="wd-post-padding-top-12px">
                <textarea className="form-control" placeholder="What's happening" value={whatsHappening}
                          onChange={(event) =>
                              setWhatsHappening(event.target.value)}>
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
                    <button className="float-right btn btn-primary btn-block rounded-pill" onClick={tuitClickHandler}>Tuit</button>
                </div>
            </div>
            <br/>
        </>
    );
}
export default WhatsHappening;
