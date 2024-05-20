import domtoimage from 'dom-to-image';

export const handleCoverUpload = (e, setAlbumCoverSrc) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setAlbumCoverSrc(e.target.result);
        }
        reader.readAsDataURL(file);
    }
}

export const cleanFileName = (filename) => {
    const invalidChars = /[\\/\\\\:*?"<>|]/g;
    const cleanedName = filename.replace(invalidChars, "_");
    return cleanedName.replace(/_+/g, "_").replace(/^_|_$/g, "");
}

export const handleGeneratedLyricCardDownload = (cardRef, songNameRef) => {
    if (!cardRef.current) {
        return;
    }
    domtoimage.toPng(cardRef.current)
        .then(dataUrl => {
            const link = document.createElement('a');
            let songName = songNameRef.current.value.trim() === '' ? 'Unnamed' : `${cleanFileName(songNameRef.current.value)}`;

            link.download = cleanFileName(`${songName}.png`);
            link.href = dataUrl;
            link.click();
        })
}