
import ChooseUs from '@/Component/Home/ChooseUs';
import SingleCarousel from '../Component/Home/SingleCarousel'
import ContactForm from '@/Component/ContactForm';
import Testimonial from '@/Component/Home/Testimonial';
export default function Home() {
  return (
    <main 
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    >
     <SingleCarousel></SingleCarousel>
           <div className="col-sm-12 row mt-3">
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
