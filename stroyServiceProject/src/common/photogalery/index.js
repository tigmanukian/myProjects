import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useEffect } from 'react';

function PhotoGalery(props) {
    const baseUrl = process.env.PUBLIC_URL;

    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: `#pg_${props.galeryId}`,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, [props.galeryId]);

    return (
        <div className="pswp-gallery" id={`pg_${props.galeryId}`}>
            {props.images.map((image, index) => (
                <a
                    href={baseUrl + '/' + image.originalUrl}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={`${props.galeryId}_${index}`}
                    target="_blank"
                    rel="noreferrer">
                    <img src={baseUrl + '/' + image.thumbnailUrl} alt="" style={{ "margin": "3px" }} />
                </a>
            ))}
        </div>
    );
}

export default PhotoGalery;