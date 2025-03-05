import { Link } from "react-router-dom";


export default function TagsSection() {
    return (
        <div>
            <hr />
            <section className="tags my-4">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center  flex-wrap">
                        <div>
                            <h5 className="me-3">Tags</h5>
                        </div>

                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            {[
                                "Accessories",
                                "Dress",
                                "Fashion",
                                "Men",
                                "Spring",
                                "Winter",
                                "Women",
                            ].map((tag, index) => (
                                <div key={index} className="btn-group me-2" role="group" aria-label={`Group ${index + 1}`}>
                                    <Link
                                        to={`/blog/${tag.toLowerCase()}`}
                                        type="button"
                                        className="btn btn_tags bg-secondary-subtle text-black"
                                    >
                                        {tag}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="sharePost fs-5">Share This Post</h3>
                        <div className="links d-flex justify-content-end gap-3">
                            {[
                                { href: "https://www.facebook.com/", icon: "bi-facebook" },
                                { href: "https://x.com/", icon: "bi-twitter" },
                                { href: "https://www.youtube.com/", icon: "bi-youtube" },
                            ].map((social, index) => (
                                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                                    <i className={`bi ${social.icon} pe-4 text-dark`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="breakline" />
            </section>
            <hr />

        </div>
    )
}
