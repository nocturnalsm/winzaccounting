import { useState } from 'react';
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import MyAlert from '../alert'
import { isEqual } from 'lodash';

//MAIN LIGHTBOX
//Holds Medias Cards and Lightbox
//this is where all of our logic will live
const MediaGallery = ({sources, onDelete}) => {

    const [mediaToShow, setMediaToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    const handleDelete = (deleted) => {
        MyAlert.confirm({
            confirmAction: () => {
                let filtered = sources.filter((item, index) => {                    
                    return !isEqual(item, deleted)
                })                                 
                onDelete(deleted, filtered)     
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

    //looping through our medias array to create img elements
    const mediaCards = sources.map((media, index) => (
        <div className="d-inline-block my-4" key={'media-' + index}>            
            <img style={styles.mediaCard} onClick={() => showMedia(media)} src={media.thumbnailSrc ?? media.originalSrc} />
            <div className="meta">
                <div className="text-center mt-2">{(media.size/1024).toFixed(2)} KB</div>
                <CButton type="button" onClick={event => {
                    event.stopPropagation()
                    handleDelete(media)
                }} block className="btn-link text-danger" size="sm">Delete</CButton>
            </div>
        </div>
    ));

    //function to show a specific media in the lightbox, amd make lightbox visible
    const showMedia = (media) => {        
        setMediaToShow(media);
        setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    //show next media in lightbox
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = sources.indexOf(mediaToShow);
        if (currentIndex >= sources.length - 1) {
            setLightBoxDisplay(false);
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
            setLightBoxDisplay(false);
        } 
        else {
            let nextMedia = sources[currentIndex - 1];
            setMediaToShow(nextMedia);
        }
    };
    
    
    return sources.length > 0 ? (
        <>
        
        <div>{mediaCards}</div>
        
        {
            lightboxDisplay ? 
            <div style={styles.lightbox} onClick={hideLightBox}>
                <CButton variant="ghost" onClick={showPrev}>
                    <CIcon size={"xl"} name="cil-chevron-double-left" />
                </CButton>
                <img style={styles.lightboxMedia} src={mediaToShow.originalSrc}></img>
                <CButton variant="ghost" onClick={showNext}>
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