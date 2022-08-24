import React from 'react';
import ContentComponent from './common_component/content_component';
import MenuComponent from './common_component/menu_component';
import { BrowserRouter } from "react-router-dom";

function RootComponent() {
    return (
        <BrowserRouter>
                {/* link */}
                <MenuComponent></MenuComponent>
                {/* route render based on link */}
                <ContentComponent></ContentComponent>
        </BrowserRouter>
    );
}

export default RootComponent;