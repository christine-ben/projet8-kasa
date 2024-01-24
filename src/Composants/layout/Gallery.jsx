import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = (props) => {
    const [slideId, setSlideId] = useState(0);

    const Next = () => setSlideId((slideId + 1) % props.img.length);

    const Prev = () => setSlideId((slideId - 1 + props.img.length) % props.img.length);

    

    return (
        <div className='slideshow'>
            <div className='slideshow_container' style={{transform: `translateX(-${slideId * 100}%)`}}>
                {props.img.map((picture, i) => 
                    <img className='slideshow_container_img' alt='banniere-page-logement' src={picture} key={i} />
                )}
            </div>
            
            {props.img.length > 1 && (
                <>
                    <div className='slideshow_controls'>
                        <i className='slideshow_chevron' onClick={Prev}><FontAwesomeIcon icon={faAngleLeft} /></i>
                        <i className='slideshow_chevron' onClick={Next}><FontAwesomeIcon icon={faAngleRight} /></i>
                    </div>
                    <div className='slideshow_id'>{slideId + 1} / {props.img.length}</div>
                </>
            )}
        </div>
    )
}

export default Gallery;
