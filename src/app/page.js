
import ChooseUs from '@/Component/Home/ChooseUs';
import SingleCarousel from '../Component/Home/SingleCarousel'
import ContactForm from '@/Component/ContactForm';
import Testimonial from '@/Component/Home/Testimonial';
import OurServices from '@/Component/Home/OurServices';
export default function Home() {
  return (
    <main 
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    >
     <SingleCarousel></SingleCarousel>
     <OurServices/>
           <div className="col-sm-12 row  mx-auto max-w-7xl pb-40 px-6">
            <div className="col-sm-12 col-md-6 col-lg-6">offers5555</div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <ContactForm show={true}/>
            </div>
          </div>
          <ChooseUs/>
          <Testimonial/>
    </main>
  );
}
