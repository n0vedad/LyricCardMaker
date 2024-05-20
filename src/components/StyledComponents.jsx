import styled from 'styled-components';

export const CardContainer = styled.div`
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$bgColor};
    position: relative;
    flex-direction: column;
    display: flex;
    border-radius: 20px;
    width: 500px;
    padding: 15px;
    padding-bottom: 35px;
`;

export const AlbumInfoContainer = styled.div`
    margin: 10px 25px;
    display: flex;
    flex-direction: row;
`;

export const AlbumCover = styled.img`
    width: 100px;
    height: 100px;
`;

export const SongDetailsContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    margin-left: 40px;
`;

export const SongDetailsTextareaWrapper = styled.div`
    margin-top: 10px;
    display: inline-block;
    vertical-align: top;
`;

export const SongName = styled.textarea.attrs(({ $initialize, ...props }) => (props))`
    padding: 0;
    border: 0;
    margin-bottom: 0;
    font-family: 'CircularStd-Medium';
    font-size: 30px;
    background: transparent;
    width: 95%;
    &:focus {
        outline: 0px solid transparent;
    }
    color: ${props => props.$textColor};
    &::placeholder {
        color: ${props => props.$textColor};
    }
    resize: none;
`;

export const SongAuthor = styled.textarea.attrs(({ $initialize, ...props }) => (props))`
    padding: 0;
    border: 0;
    margin-top: 0;
    font-family: 'CircularStd-Book';
    font-size: 15px;
    width: 95%;
    background: transparent;
    &:focus {
        outline: 0px solid transparent;
    }
    color: ${props => props.$textColor};
    &::placeholder {
        color: ${props => props.$textColor};
    }
    resize: none;
`;

export const LyricsText = styled.textarea.attrs(({ $initialize, ...props }) => (props))`
    font-family: 'CircularStd-Medium';
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold !important;
    border: none;
    background: transparent;
    width: 480px;
    min-height: 100px;
    margin-bottom: 20px;
    &:focus {
        outline: 0px solid transparent;
    }
    color: ${props => props.$textColor};
    &::placeholder {
        color: ${props => props.$textColor};
    }
    resize: none;
`;

export const LyricCardMakerLogo = styled.img`
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
    margin-left: 10px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 20px;
`;

export const FileInput = styled.input`
    display: none;
`;

export const ActionButton = styled.button`
    background-color: #4A90E2;
    border: none;
    border-radius: .25rem;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 10px 0;
`;

export const FooterLink = styled.a`
    color: #3498db;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;