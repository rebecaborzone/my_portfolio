import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Home from './Home';
import AV from './AV';
import Proyects from './Proyects';
import Tecnologies from './Tecnologies';
import Contact from './Contact';

const FullPageScroll = () => {

    const StyleFullpage ={
        // backgroundColor: '#FAF5E4',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const green={
        // backgroundColor:'#125B50',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const pink={
        backgroundColor: '#FAF5E4',
        // backgroundColor:'#f498ae',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <Fullpage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection style= {StyleFullpage}>
                    <Home/>
                </FullpageSection>
                <FullpageSection style= {green}>
                    <AV/>
                </FullpageSection>
                <FullpageSection style= {green}>
                    <Proyects/>
                </FullpageSection>
                <FullpageSection style= {StyleFullpage}>
                    <Tecnologies/>
                </FullpageSection>
                <FullpageSection style= {pink}>
                    <Contact/>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default FullPageScroll;