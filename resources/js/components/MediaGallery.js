import { useState } from 'react';
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import MyAlert from '../alert'

//MAIN LIGHTBOX
//Holds Medias Cards and Lightbox
//this is where all of our logic will live
const MediaGallery = ({sources,
                       preview,
                       deleteButton,
                       onClickMedia,
                       cardLayout,
                       onDelete,
                       loop = true,
                    }) => {

    const [mediaToShow, setMediaToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    const handleDelete = (deleted) => {
        MyAlert.confirm({
            confirmAction: () => {

                if (onDelete){
                    onDelete(deleted)
                }

            }
        })
    }
    const styles = {
        mediaCard: {
            width: '12.5vw',
            height: '12.5vw',
            objectFit: 'cover',
            cursor: 'pointer'
        },
        lightboxMedia: {
            height: '80vh',
            maxWidth: '90vw',
            objectFit: 'cover'
        },
        lightbox: {
            zIndex: 10000,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }

    }

    //function to show a specific media in the lightbox, amd make lightbox visible
    const showMedia = (media) => {
        setMediaToShow(media);
        setLightBoxDisplay(true);
    };

    const onDeleteFunction = (currentMedia => {
        handleDelete(currentMedia)
    })

    const onClickMediaFunction = ((event, currentMedia) => {
        event.stopPropagation()
        showMedia(currentMedia)
        if (onClickMedia){
            onClickMedia(currentMedia)
        }
    })

    const renderPreview = (currentMedia => {
        if (!preview){            
            if (currentMedia.type.indexOf('image/') == 0){
                return (
                    <img style={styles.mediaCard} onClick={event => onClickMediaFunction(event, currentMedia)} src={currentMedia.thumbnailSrc ?? currentMedia.originalSrc} />
                )
            }
            else if (currentMedia.type.indexOf('video/') == 0){
                return (
                    <img style={styles.mediaCard} onClick={event => onClickMediaFunction(event, currentMedia)} src={"images/video-thumbnail.jpg"} />
                )
            }
        }
        else {
            return preview(currentMedia, onClickMedia)
        }
    })

    const renderDelete = (currentMedia => {
        if (!deleteButton){
            return (
                <CButton type="button" onClick={event => {
                    event.stopPropagation()
                    onDeleteFunction(currentMedia)
                }} block className="btn-link text-danger" size="sm">Delete</CButton>
            )
        }
        else {
            return deleteButton(currentMedia, onDeleteFunction)
        }
    })

    //looping through our medias array to create img elements
    const mediaCards = sources.map((media, index) => (
        <div draggable className="d-inline-block p-2 m-2" key={'media-' + index}>
            {
                cardLayout ? (
                    cardLayout({preview: renderPreview(media), media: media, deleteButton: renderDelete(media)}, index)
                )
                : (
                    <>
                        {renderPreview(media)}
                        <div className="meta">
                            <div className="text-center mt-2">{(media.size/1024).toFixed(2)} KB</div>
                            {renderDelete(media)}
                        </div>
                    </>
                )
            }
        </div>
    ));

    //hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    //show next media in lightbox
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = sources.indexOf(mediaToShow);
        if (currentIndex >= sources.length - 1) {
            if (!loop){
                setLightBoxDisplay(false);
            }
            else {
                let nextMedia = sources[0];
                setMediaToShow(nextMedia);
            }
        } else {
            let nextMedia = sources[currentIndex + 1];
            setMediaToShow(nextMedia);
        }
    };

    //show previous media in lightbox
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = sources.indexOf(mediaToShow);
        if (currentIndex <= 0) {
            if (!loop){
                setLightBoxDisplay(false);
            }
            else {
                let nextMedia = sources[sources.length - 1];
                setMediaToShow(nextMedia);
            }
        }
        else {
            let nextMedia = sources[currentIndex - 1];
            setMediaToShow(nextMedia);
        }
    };

    return sources.length > 0 ? (
        <>

        <div className="mediaGallery">{mediaCards}</div>

        {
            lightboxDisplay ?
            <div style={styles.lightbox} onClick={hideLightBox}>
                <CButton style={{boxShadow: 'none'}} className={"ml-2"} shape="pill" color="light" variant="ghost" onClick={showPrev}>
                    <CIcon size={"xl"} name="cil-chevron-double-left" />
                </CButton>
                {mediaToShow.type.indexOf('image/') == 0 ? (
                    <img style={styles.lightboxMedia} src={mediaToShow.originalSrc}></img>
                )
                : (mediaToShow.type.indexOf('video/') == 0 ? (
                    <video style={styles.lightboxMedia} controls>
                        <source src={mediaToShow.originalSrc} type={mediaToShow.type} />
                    </video>
                ) : '')
                }
                <CButton style={{boxShadow: 'none'}} className={"mr-2"} shape="pill" color="light" variant="ghost" onClick={showNext}>
                    <CIcon size={"xl"} name="cil-chevron-double-right" />
                </CButton>
            </div>
        : ""
        }
        </>
    ) :
    (
        <div className="w-20">
            <img src="/images/noimage.png" />
        </div>
    )
}

export default MediaGallery
