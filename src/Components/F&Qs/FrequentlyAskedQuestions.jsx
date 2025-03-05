import { Link } from 'react-router-dom'
import './style.css'

export default function FrequentlyAskedQuestions() {
  return (
    <>
      {/* <!-- **********************************Start Header Page Content************************** --> */}
      <section className="mt-1">
        <div className="bg-secondary-subtle">
          <div className="container">
            <div className="Title text-center py-3">
              <div className="main-title fs-3 fw-normal">Faq</div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item active fw-medium" aria-current="page">
                    <Link to={'/'}>
                      Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" className="text-decoration-none">Faq</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* **********************************End Header Page Content************************** */}
      {/* **********************************Start Main Content************************** */}
      <section>
        <div className="container">
          <div className="page-title text-center fs-3 fw-normal mt-5 mb-3">
            <p>FAQs</p>
          </div>
          <div className="accordion px-5 pb-5" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How to buy a product ?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first  accordion body.</strong> It is
                  shown by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes control
                  the overall appearance, as well as the showing and hiding via
                  CSS transitions. You can modify any of this with custom CSS or
                  overriding our default variables.  also worth noting that
                  just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How can I make refund from your website ?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second  accordion body.</strong> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables.  also worth
                  noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  I am a new answer .Have should I start?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third  accordion body.</strong> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables.  also worth
                  noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  I am a new answer .Have should I start?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third  accordion body.</strong> It is
                  hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables.  also worth
                  noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* **********************************End Main Content************************** */}
      {/* **********************************Start Contact Us Section************************** */}
      <section className="mb-5">
        <div className="container">
          <div className="for-contact text-center d-flex flex-column align-items-center">
            <h3 className="fw-semibold">
              For father more help, contact with our support team.
            </h3>
            <a href="about-us.html" className="btn btn-primary rounded-1 py-1 px-3 my-4">
              Contact Us
            </a>
            <p className="fw-medium fs-5">
              <span className="fa fa-phone"> </span> +0123-456-789
            </p>
          </div>
        </div>
      </section>
      {/* **********************************End Contact Us Section************************** */}
    </>
  )
}
