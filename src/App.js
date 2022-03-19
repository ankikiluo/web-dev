import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
// import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import HomeScreen from "./components/Tuiter/home-screen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/Tuiter/ProfileScreen";
import EditProfile from "./components/Tuiter/EditProfile";
import React from "react";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Link to="/labs">
                    Labs
                </Link> |
                <Link to="/hello">
                    Hello world
                </Link> |
                <Link to="/tuiter/home">
                    Tuiter Home
                </Link> |
                <Link to="/tuiter/explore">
                    Tuiter Explore
                </Link> |
                <Link to="/tuiter/profile">
                    Tuiter Profile
                </Link>
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index path="home"
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            <Route path="edit-profile"
                                   element={<EditProfile/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
