import { useState } from 'react';
import './style.css';
function VideoSection() {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <section className="video-section py-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="video-bg position-relative">
                            <div className="main-play-btn">
                                <div
                                    className="play-btn d-flex justify-content-center align-items-center"
                                    onClick={toggleModal}
                                >
                                    <i className="fa fa-play fs-6"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close text-white" onClick={toggleModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-0">
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src="https://www.youtube.com/embed/7m16dFI1AF8"
                                        title="YouTube video"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default VideoSection;
