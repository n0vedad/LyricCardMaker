import React, { useState, useRef, useCallback } from 'react';
import { handleCoverUpload, handleGeneratedLyricCardDownload } from './FileOperations';
import {
    CardContainer,
    AlbumInfoContainer,
    AlbumCover,
    SongDetailsContainer,
    SongDetailsTextareaWrapper,
    SongName,
    SongAuthor,
    LyricsText,
    LyricCardMakerLogo,
    ButtonWrapper,
    FileInput,
    ActionButton
} from './StyledComponents';

const LyricCard = ({ bgColor, textColor, defaultAlbumCover, showLyricCardMakerLogo }) => {
    const cardRef = useRef(null);
    const songNameRef = useRef(null);
    const songAuthorRef = useRef(null);
    const lyricsTextRef = useRef(null);
    const uploadButtonRef = useRef(null);
    const fileInputRef = useRef(null);
    const [albumCoverSrc, setAlbumCoverSrc] = useState(defaultAlbumCover);

    const useDynamicPlaceholder = (initialPlaceholder) => {
        const [placeholder, setPlaceholder] = useState(initialPlaceholder);

        const handleFocus = useCallback(() => {
            setPlaceholder('');
        }, []);

        const handleBlur = useCallback((e) => {
            if (e.target.value === '') {
                setPlaceholder(initialPlaceholder);
            }
        }, [initialPlaceholder]);

        return { placeholder, onFocus: handleFocus, onBlur: handleBlur };
    };

    const { placeholder: songNamePlaceholder, ...songNameHandlers } = useDynamicPlaceholder('Insert Songname');
    const { placeholder: songAuthorPlaceholder, ...songAuthorHandlers } = useDynamicPlaceholder('Insert Author');
    const { placeholder: lyricsTextPlaceholder, ...lyricsTextHandlers } = useDynamicPlaceholder('Click to edit, press enter to insert new lines or just paste some text');

    const handleTextInput = useCallback((e) => {
        e.target.style.height = "auto";
        e.target.style.height = (e.target.scrollHeight) + "px"
    }, []);

    const handleUploadButtonClick = useCallback(() => {
        fileInputRef.current.click();
    }, []);

    const handleFileInputChange = useCallback((e) => {
        handleCoverUpload(e, setAlbumCoverSrc);
    }, []);

    const RenderLyricCardMakerLogo = () => {
        if (showLyricCardMakerLogo === 'none') {
            return null;
        }
        return <LyricCardMakerLogo src={showLyricCardMakerLogo} />;
    }

    return (
        <div>

            <CardContainer ref={cardRef} $bgColor={bgColor}>
                <AlbumInfoContainer>
                    <AlbumCover src={albumCoverSrc} alt="Album Cover" />
                    <SongDetailsTextareaWrapper>
                        <SongDetailsContainer>
                            <SongName
                                rows="1"
                                ref={songNameRef}
                                onInput={handleTextInput}
                                $textColor={textColor}
                                {...songNameHandlers}
                                placeholder={songNamePlaceholder} />
                            <SongAuthor
                                rows="1"
                                ref={songAuthorRef}
                                onInput={handleTextInput}
                                $textColor={textColor}
                                {...songAuthorHandlers}
                                placeholder={songAuthorPlaceholder} />
                        </SongDetailsContainer>
                    </SongDetailsTextareaWrapper>
                </AlbumInfoContainer>
                <LyricsText
                    ref={lyricsTextRef}
                    onInput={handleTextInput}
                    $textColor={textColor}
                    {...lyricsTextHandlers}
                    placeholder={lyricsTextPlaceholder} />
                <RenderLyricCardMakerLogo />
            </CardContainer>

            <ButtonWrapper>
                <ActionButton ref={uploadButtonRef} onClick={handleUploadButtonClick}>Upload Albumcover</ActionButton>
                <FileInput ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInputChange} />
                <ActionButton onClick={() => handleGeneratedLyricCardDownload(cardRef, songNameRef)}>Save as Image</ActionButton>
            </ButtonWrapper>
        </div>
    );
}

export default LyricCard;


