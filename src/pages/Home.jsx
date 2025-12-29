import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import AssociativeLife from "../components/blog/AssociativeLife";
import HappyClients from "../components/happyClients/InspirationTools";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div>
        <div>
          <Introduction />
          <Profile />
        </div>
      </div>
      <div>
        <WorkProcess />
      </div>
      <Portfolio />
      <div>
        <WorkTogether />
      </div>
      <div>
        <AssociativeLife />
      </div>
      
      <HappyClients />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
