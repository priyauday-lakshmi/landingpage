import Navbar from './components/Navbar'
import Masthead from './components/Masthead'
import Imageshowcase from './components/Imageshowcase'
import Iconsgrid from './components/Iconsgrid'
import Testtimonials from './components/Testtimonials'
import Footer from './components/Footer'
import img1 from "./images/testimonials-1.jpg"
import img2 from "./images/testimonials-2.jpg"
import img3 from "./images/testimonials-3.jpg"
import img4 from "./images/bg-showcase-1.jpg"
import img5 from "./images/bg-showcase-2.jpg"
import img6 from "./images/bg-showcase-3.jpg"
import img7 from "./images/bg-masthead.jpg"






function App() {

  let showCaseItems = [
    {
      h3:"Fully Responsive Design",
      p:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      imageUrl:img4,
    },
    {
      h3:"Bootstrap 5 Ready",
      p:"Featuring the latest build of the new Bootstrap 5 framework!",
      imageUrl:img5,

    },
    {
      h3:"Easy to Use",
      p:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      imageUrl:img6,
    }


  ];

  return (
    <>
    <Navbar/>
    <Masthead heading="Generate more leads with a professional landing page!" margin={4}  imageUrl={img7}/>
    <section className="features-icons bg-light text-center">
            <div className="container">
                < div className="row">
                    
                      <Iconsgrid name="Fully Responsive" description="This theme will look great on any device, no matter the size!"iconClass="bi-window m-auto text-primary"/>
                      <Iconsgrid name="Bootstrap 5 Ready" description="Featuring the latest build of the new Bootstrap 5 framework!"iconClass="bi-layers m-auto text-primary"/>
                      <Iconsgrid name="Easy to Use" description="Ready to use with your own content, or customize the source files!"iconClass="bi-terminal m-auto text-primary"/>
                    
                    </div>
                    </div>
                    </section>
    
    <section className="showcase">
            <div className="container-fluid p-0">       
    <Imageshowcase items = {showCaseItems}/>
    </div>     
    </section>
    <section className="testimonials text-center bg-light">
            <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                  <Testtimonials imageUrl={img1}h5="Margaret E." p="This is fantastic! Thanks so much guys!" />
                  <Testtimonials imageUrl={img2} h5="Fred S." p="Bootstrap is amazing. I've been using it to create lots of super nice landing pages." />
                  <Testtimonials imageUrl={img3} h5="Sarah W." p="Thanks so much for making these free resources available to us!" />
                </div>

            </div>
            </section>
            <Masthead heading="Ready to get started? Sign up now!" margin={5} isFooterSection={true} imageUrl={img7}/>
            <Footer/>
                
    
      
    </>
  )
}

export default App
