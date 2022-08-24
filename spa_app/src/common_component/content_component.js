import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FriendsComponent from '../pages_component/friends_component';
import HelpComponent from '../pages_component/help';
import HomeComponent from '../pages_component/home_component';

function ContentComponent() {
    // render based on routes
    return (
        <main>
            <div className="container px-4 py-5">
                <Routes>
                    <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
                    <Route path='/friends' element={<FriendsComponent></FriendsComponent>}></Route>
                    <Route path='/help' element={<HelpComponent></HelpComponent>}></Route>
                </Routes>
            </div>
        </main>
    );
}

export default ContentComponent;