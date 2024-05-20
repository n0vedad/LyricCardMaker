const defaultAlbumCover = 'https://dummyimage.com/100x100';

import React, { useState, useCallback } from 'react';
import './App.css';
import LyricCard from './components/LyricCard';
import { CompactPicker } from 'react-color';
import { Footer, FooterLink } from './components/StyledComponents';

function App() {
    const [bgColor, setBgColor] = useState("#FFFFFF");
    const [textColor, setTextColor] = useState("#000000");
    const [showLyricCardMakerLogo, setShowLyricCardMakerLogo] = useState('none');
    
    return (
        <div className="App-container">
            <div className="left-container">
                <h1 className="app-title">Lyric Card Maker</h1>
                
                <div className="picker-container">
                    <div className="picker-label">Hintergrundfarbe</div>
                    <CompactPicker color={bgColor} onChangeComplete={useCallback(color => setBgColor(color.hex), [setBgColor])} />
                </div>
                
                <div className="picker-container">
                    <div className="picker-label">Textfarbe</div>
                    <CompactPicker color={textColor} onChangeComplete={useCallback(color => setTextColor(color.hex), [setTextColor])} />
                </div>

            </div>
            
            <div className="card-container">
                <LyricCard bgColor={bgColor} textColor={textColor} defaultAlbumCover={defaultAlbumCover} showLyricCardMakerLogo={showLyricCardMakerLogo} />
            </div>
            
            <div className="right-container">
                <div className="logo-label">Show LyricCardMaker Logo</div>
                <select value={showLyricCardMakerLogo} onChange={useCallback((e) => setShowLyricCardMakerLogo(e.target.value), [setShowLyricCardMakerLogo])}>
                    <option value="none">No Logo</option>
                    <option value="./LyricCardMaker_mono.svg">Black LyricCardMaker Logo</option>
                    <option value="./LyricCardMaker_white.svg">White LyricCardMaker Logo</option>
                </select>
            </div>
            <Footer>
                Made with ❤️ by <FooterLink href="https://github.com/n0vedad">n0vedad</FooterLink>
            </Footer>
        </div>
    );
}

export default App;
