import React from 'react'
import Footer from '../../Layouts/Footer';
import Navbar from "../../Layouts/Navbar";
import "./index.scss"
function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* business sec start */}
        <section className='business'>
          <div className='info'>
            <div>
              <h1>A Bootstrap 5 template for modern businesses</h1>
              <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
            </div>
            <div className='button_div'>
              <button className='getstarted'><a className="list-group-item list-group-item-action" href="#list-item-1">Get Started</a></button>
              <button className='learnmore'>Learn More</button>
            </div>
          </div>
          <div className='img_div'>
            <img src='https://dummyimage.com/600x400/343a40/6c757d'></img>
          </div>
        </section>
        {/* business sec end */}

        {/* building sec start */}
        <section className='building' data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"  >
          <div id="list-item-1">
            <div className='p_div'>
              <p>A better way to start building.</p>
            </div>
            <div className='card'>
              <div>

                <div>
                  <i class="fa-solid fa-hotel"></i>
                  <h3>Featured title</h3>
                  <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
                <div><i class="fa-solid fa-hotel"></i>
                  <h3>Featured title</h3>
                  <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
              </div>
              <div>

                <div><i class="fa-solid fa-hotel"></i>
                  <h3>Featured title</h3>
                  <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
                <div><i class="fa-solid fa-hotel"></i>
                  <h3>Featured title</h3>
                  <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* building sec end */}

        {/* Ceo sec start */}
        <section className='ceo_sect'>
          <p className='ceo_main'>"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</p>
          <div className='ceo_item'>
            <img src='https://dummyimage.com/40x40/ced4da/6c757d'></img>
            <p>Tom Ato </p>
            <p className='slash'>/</p>
            <p>CEO, Pomodoro</p>
          </div>

        </section>

        {/* Ceo sec end */}

        {/* card sec start */}
        <section className='card_sec'>
          <div className='card_sectitem'>
            <h2>From our blog</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
          </div>
          <div className='cards'>
            <div className="card" >
              <img src="https://dummyimage.com/600x350/ced4da/6c757d" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="!#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card" >
              <img src="https://dummyimage.com/600x350/ced4da/6c757d" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="!#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://dummyimage.com/600x350/ced4da/6c757d" class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="!#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </section>
        {/* card sec end */}


        {/* email sec start */}
        <section className='email_sec'>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">

              </input>
            <button type="submit" className="btn btn-primary">Submit</button>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home