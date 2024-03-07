import React from 'react';
import './Photos.css';

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos true">
                <div className="row">
                    {props.photos.map(function (photo, index) {
                        return (
                            <div className="col-md-4" key={index}>
                                <a
                                    href={photo.src.original}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={photo.src.landscape}
                                        className="img-fluid"
                                        alt={photo.alt}
                                    />
                                </a>
                                <div className="text-center pb-2">
                                    <a
                                        href={photo.photographer_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i>
                                            Photographer: {photo.photographer}
                                        </i>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
