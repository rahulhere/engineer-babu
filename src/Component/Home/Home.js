import { useMediaQuery } from "react-responsive";
import Page from "../UI/Page/Page";
import Head from "./Head/Head";
import styles from "./Home.module.css";
import Item from "./Item/Item";
import ecomm from "./../../Assets/svgs/home-white-ecommerce.svg";
import food from "./../../Assets/svgs/home-white-food.svg";
import book from "./../../Assets/svgs/home-white-book.svg";
import health from "./../../Assets/svgs/home-white-health.svg";
import fintech from "./../../Assets/images/home-white-fintech.webp";
import travel from "./../../Assets/images/home-white-travel.webp";
import ProductCard from "./ProductCard/ProductCard";
import devOps from "./../../Assets/svgs/home-productType-b.svg";
import teamHiring from "./../../Assets/svgs/home-productType-brain.svg";
import appDev from "./../../Assets/svgs/home-productType-appDev.svg";
import webDev from "./../../Assets/svgs/home-productType-webDev.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../Slick/Slick.css";
import Slider from "react-slick";
import carBank from "./../../Assets/images/home-carousel-bankopen.webp";
import carMtjf from "./../../Assets/images/home-carousel-mtjf.webp";
import carFrank from "./../../Assets/images/home-carousel-frankgreen.webp";
import CarouselItem from "./CarouselItem/CarouselItem";
import ProjectCard from "./ProjectCard/ProjectCard";
import apple from "./../../Assets/images/home-projects-apple.webp";
import byjus from "./../../Assets/images/home-projects-byjus.webp";
import clutch from "./../../Assets/images/home-projects-clutch.webp";
import frankgreen from "./../../Assets/images/home-projects-frankgreen.webp";
import google from "./../../Assets/images/home-projects-google.webp";
import mit from "./../../Assets/svgs/home-projects-mit.svg";
import open from "./../../Assets/images/home-projects-open.webp";
import samsung from "./../../Assets/images/home-projects-samsung.webp";
import star from "./../../Assets/svgs/star.svg";
import Testimonial from "./Testimonial/Testimonial";
import mtjf from "./../../Assets/images/home-testimonial-mtjf.webp";
import teamImage from "./../../Assets/images/home-companyOverview-team.webp";

const Home = () => {
  const isTabletMobile = useMediaQuery({ query: "(max-width: 990px)" });

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let testimonials = null;

  if (isTabletMobile) {
    testimonials = (
      <Slider {...settings}>
        <Testimonial
          img={open}
          imgAlt="Open Logo"
          user="Mabel Chacko"
          post="Founder"
        >
          We wanted to work with someone locally, but my co-founder insisted
          these guys are expert with startup and he was comfortable with
          EngineerBabu than a nearby company. Finally, we made a decision, these
          guys help us a lot in all phases of the product development.
        </Testimonial>
        <Testimonial
          img={mtjf}
          imgAlt="MTJF Logo"
          user="Sangram Kakad"
          post="Founder"
        >
          Lovely Team, Helped me in design, product planning, Patenting, Pitch
          deck, Marketing, and Whatnot. We were selected by Apple, MVP is nice.
          We acquired 45000 users. I felt like my own team, rather than
          outsourcing.
        </Testimonial>
        <Testimonial
          img={frankgreen}
          imgAlt="Frank Green Logo"
          user="Benjamin Young"
          post="Founder"
        >
          They focus on making sure these sites are both useful and easy to use.
          I love product-focused, mission-oriented dedicated team they were
          always very supportive. Working with Remote was really easy, quick,
          supportive, knowledgeable.
        </Testimonial>
      </Slider>
    );
  } else {
    testimonials = (
      <div className={styles.TestimonialContainer}>
        <Testimonial
          img={open}
          imgAlt="Open Logo"
          user="Mabel Chacko"
          post="Founder"
        >
          We wanted to work with someone locally, but my co-founder insisted
          these guys are expert with startup and he was comfortable with
          EngineerBabu than a nearby company. Finally, we made a decision, these
          guys help us a lot in all phases of the product development.
        </Testimonial>
        <Testimonial
          img={mtjf}
          imgAlt="MTJF Logo"
          user="Sangram Kakad"
          post="Founder"
        >
          Lovely Team, Helped me in design, product planning, Patenting, Pitch
          deck, Marketing, and Whatnot. We were selected by Apple, MVP is nice.
          We acquired 45000 users. I felt like my own team, rather than
          outsourcing.
        </Testimonial>
        <Testimonial
          img={frankgreen}
          imgAlt="Frank Green Logo"
          user="Benjamin Young"
          post="Founder"
        >
          They focus on making sure these sites are both useful and easy to use.
          I love product-focused, mission-oriented dedicated team they were
          always very supportive. Working with Remote was really easy, quick,
          supportive, knowledgeable.
        </Testimonial>
      </div>
    );
  }

  return (
    <div className={styles.Home}>
      <Page
        header={<Head />}
        footerText="We have helped multiple startups, digital agencies, enterprises (big or small) and software product development companies to streamline their outsourcing experience without any hassle."
        footerButtonText="talk to an expert"
      >
        <section className={styles.ClientTypes}>
          <h2>Serving the clients across multiple domains</h2>
          <p>
            EngineerBabu helps startups to craft ultimate products that are
            ready to go directly for VC funding. Once the investment is done, we
            assist startups to onboard a team and grow faster. Paytm, BankOpen
            and YourStory are some of the companies for whom we have built
            products.
          </p>
          <div className={styles.gridItems}>
            <Item
              img={ecomm}
              imgAlt="E-Commerce"
              heading="E-Commerce"
              subHeading="30+ e-commerce solutions, 12 fintech top-funded products."
            />
            <Item
              img={food}
              imgAlt="Food & Restaurant"
              heading="Food & Restaurant"
              subHeading="we have a team of experts who understands order management, android and iOS app development, delivery and more"
            />
            <Item
              img={health}
              imgAlt="Healthcare"
              heading="Healthcare"
              subHeading="we provide uttermost healthcare IT consulting, technology solutions like building medical apps and more"
            />
            <Item
              img={book}
              imgAlt="E-learning and education"
              heading="E-learning and education"
              subHeading="we provide e-learning solutions to boost growth and performance"
            />
            <Item
              img={travel}
              imgAlt="Travel"
              heading="Travel"
              subHeading="we provide innovative ideas and technologies for travel application development, review management and other"
            />
            <Item
              img={fintech}
              imgAlt="Fintech"
              heading="Fintech"
              subHeading="We have around 12 well-funded fintech products as per your requirement"
            />
          </div>
        </section>

        <section
          className={[styles.ProductTypes, styles.HomeSection].join(" ")}
        >
          <h2>
            Each of our products are carefully tailored to retrofit into your
            needs. Our skilled engineers will align with your company’s goals to
            provide expertise for perfect synergy.
          </h2>
          <p>Hire teams based on skillset. Have a look at our services</p>
          <div className={styles.productGrid}>
            <ProductCard
              img={devOps}
              imgAlt="DevOps"
              heading="Dev Ops"
              text="we focus on cluster management, terraform, CI/CD Pipeline and more"
            />
            <ProductCard
              img={teamHiring}
              imgAlt="Dedicated Team Hiring"
              heading="Dedicated Team Hiring"
              text="there are many services you can avail from your virtual assistants like customer support, onsite deployment, marketing, content writers and more
"
            />
            <ProductCard
              img={appDev}
              imgAlt="Application Development"
              heading="Application Development"
              text="our application developers build mobile applications for both android and iOS, keeping in mind your need"
            />
            <ProductCard
              img={webDev}
              imgAlt="Web Development"
              heading="Web Development"
              text="SAAS product development, web designing, machine learning and others"
            />
          </div>
        </section>
        <section
          className={[styles.CarouselSection, styles.HomeSection].join(" ")}
        >
          <h2>Product Journeys That Are Close to Our Heart</h2>
          <p>Samsung. Tata Steel. BYJU’s. It could be you next.</p>

          <div className={styles.Slider}>
            <Slider {...settings}>
              <CarouselItem
                heading="Bank Open"
                subHeading="Get the power of a modern digital payment account."
                img={carBank}
                imgAlt="Bank Open"
                colorStart="#ec2990"
                colorEnd="#674786"
              >
                <li>
                  Asia's first neo Bank, $37.4M Investment raised, Emerging
                  fintech startup.
                </li>
                <li>Back-end support to YES Bank &amp; ICICI Bank</li>
                <li>Funding Raised</li>
              </CarouselItem>
              <CarouselItem
                heading="MTJF"
                subHeading="More Than Just Friends Confess fearlessly & take your friendship to the next level"
                img={carMtjf}
                imgAlt="MTJF"
                colorStart="#FC3569"
                colorEnd="#FC3569"
              >
                <li>45,000 users in 35 days of launch</li>
                <li>Reached Top 10 Dating Apps on Product Hunt</li>
                <li>Featured by Apple India in top 10 apps</li>
                <li>Selected in Facebook Start, Apple</li>
              </CarouselItem>
              <CarouselItem
                heading="Frank Green"
                subHeading="AUS famous reusable product e-commerce"
                img={carFrank}
                imgAlt="Frank Green"
                colorStart="#00e457"
                colorEnd="#009539"
              >
                <li>E-commerce</li>
                <li>Winner of Good Design Award</li>
                <li>
                  Increased their sales from 10,000 to 90,000 orders per week
                </li>
                <li>Innovation awards winner in 2018</li>
              </CarouselItem>
            </Slider>
          </div>
        </section>
        <section className={[styles.Projects, styles.HomeSection].join(" ")}>
          <h2>A job well done! Check out our work.</h2>
          <p>
            We have worked very hard, day and night in order to provide
            outstanding services to our clients. Our experience and commitment
            to work allows us to deliver any assignment, without a delay. Have a
            closer look at our achievements.
          </p>
          <div className={styles.ProjectItems}>
            <ProjectCard img={google} imgAlt="Google Ventures">
              Our apps have been selected in 2018 & 2019 by Y-Combinator &
              <strong> Google Ventures</strong>
            </ProjectCard>

            <ProjectCard img={clutch} imgAlt="Clutch">
              Best ratings by our 200+ happy customers at
              <strong> Clutch</strong> (B2B Ratings & Reviews)
            </ProjectCard>

            <ProjectCard img={open} imgAlt="Open">
              We developed BankOpen Asia's first neo bank for SMEs, later
              received Investment with <strong> VC & ICICI Bank</strong>
            </ProjectCard>
            <ProjectCard img={mit} imgAlt="Harvard">
              Developed product for prestigious
              <strong> Harvard innovation lab & MIT delta v</strong>, Incubated
              Startups.
            </ProjectCard>
            <ProjectCard img={samsung} imgAlt="Samsung">
              We have to build Enterprise Apps for
              <strong> Samsung in the partnership with YourStory</strong>.
            </ProjectCard>
            <ProjectCard img={byjus} imgAlt="BYJU'S">
              We have to build Enterprise Apps for <strong>BYJU’S </strong>
              (Facebook Invested).
            </ProjectCard>
            <ProjectCard img={apple} imgAlt="Apple Company">
              MTJF Dating App acquired 25,000 customers in 45 days of launch.
              <strong> Featured by Apple in Top 10 Apps.</strong>
            </ProjectCard>
            <ProjectCard img={frankgreen} imgAlt="Frank Green">
              Frankgreen Australian e-commerce startup Wins
              <strong> Most innovative Premier Design Award</strong>
            </ProjectCard>
          </div>
        </section>

        <section className={[styles.Testimonial, styles.HomeSection].join(" ")}>
          <div className={styles.stars}>
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
            <img src={star} alt="Star" />
          </div>
          <h2>100+ testimonials from all over the globe</h2>
          <p>
            We believe in going the extra mile and thus, we tend to not only
            over-deliver, but exceed expectations!
          </p>
          <div className={styles.YT}>
            <div className={styles.videoWrapper}>
              <iframe
                title="Engineer Babu Video"
                src="https://www.youtube.com/embed/1DTBlIiunhQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {testimonials}
        </section>
        <section
          className={[styles.CompanyOverview, styles.HomeSection].join(" ")}
        >
          <h2>Company Overview</h2>
          <p>When it comes to our work, we take utmost pride.</p>
          <div className={styles.Overview}>
            <div className={styles.Text}>
              <h2>
                Our experience spans more than 9 years in the IT Industry - and
                we’re just starting!
              </h2>
              <h4>THE FIRST CHOICE, THE BEST CHOICE!</h4>
              <p>
                1st choice of professionals – 90% of our clients are fast movers
                and so we are. When it comes to delivering qualitative work, we
                excel! We are happy to say that in 2018 and 2019, EngineerBabu
                is the only service company whose products were nominated in
                Y-Combinator.
              </p>
              <h4>WE BELIEVE IN DELIVERING INTUITIVE PRODUCTS</h4>
              <p>
                It takes a lot of hard work and effort to build any application.
                But it’s extremely challenging to make any application intuitive
                and user-friendly. For us, smooth user experience is a must for
                designing applications and more.
              </p>
              <h4>DEDICATED AND CRAFTY TEAM</h4>
              <p>
                We have a team of crafty developers, strategists, designers and
                marketers who are highly skilled and professional. We are
                located in the cleanest city of India, Indore. We treat your
                work like our own and develop products that empowers giants like
                Google (Kubernetes, Angular).
              </p>
              <p>
                By taking initiative, we will also provide well-defined and
                researched feedback so that you can take the final call as we
                work as collaborators.
              </p>
              <h4>ON-TIME PROJECT DELIVERY, ZERO DOWNTIME!</h4>
              <p>
                All your requirements and maintenance procedures will be
                delivered seamlessly, without any delay. Our employees believe
                in delivering work before time and that too without any faults.
                We can handle any number of users and the technology has the
                potential to grow side-by-side with your company. No compromise
                on technology, no matter how rapid your growth is!
              </p>
            </div>
            <div className={styles.image}>
              <img src={teamImage} alt="EB Team" />
            </div>
          </div>
        </section>
      </Page>
    </div>
  );
};

export default Home;
