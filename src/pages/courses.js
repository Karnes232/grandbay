import React from 'react';
import DiveSlide  from '../components/DiveSlide';
import DiveCourses  from '../components/DiveCourses'
import Footer from '../components/Footer';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/courses.css'

function Courses() {
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/courses/" />
        </Helment>
        <Layout>
        <Seo title="Padi Course In Punta Cana | Scuba Classes | Scuba School Near Me | Scuba Certification Punta Cana | Padi Scuba Diving Punta Cana" description="We provide Scuba Classes in Punta Cana. Learn Certified Dive In Punta Cana. Come to us at Grand Bay of the Sea for Certified Dive In Punta Cana. "/>
            <div className="mx-5 mt-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-8 d-flex justify-content-center mb-1">
                        <div className="videoWrapper">
                            <iframe title="PADI Scuba Diving Punta Cana" className="responsive-iframe" src="https://www.youtube.com/embed/qEzf4MjmowA?playlist=qEzf4MjmowA&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 align-self-center">
                        <div className="well d-flex justify-content-center">
                        <h4 className='course-title'><strong>Learn how to dive at Grand Bay of the Sea in Punta Cana</strong></h4>
                        </div>
                        <div className="well d-flex justify-content-center text-center">
                        <p>You are not a certified diver yet? You have never tried diving and want to see what the hype about it all is? You’re in the right place. Our dive company in Punta Cana offers the best Scuba Classes in Punta Cana, with PADI, the world’s # 1 dive certifying agency. 
                        As you might know, in Punta Cana Scuba Diving is really at its best, and while you are here you don’t want to miss the chance to visit the best Diving Training Center in Punta Cana and get your diving experience or diving course.
                        The first step for non-certified divers here is the Padi Discover Scuba Diving: a quick program that works as an introduction to the underwater world but does not give you a certification. It is more of a dive experience, getting to know this new world. You will have a theory session, and one dive in open water to a maximum depth of 40 feet, in a small group so that your dive instructor can take great care of you. You will be able to take the time to get familiar and comfortable in the water with our experienced instructors before proceeding with your Padi Scuba Diving Punta Cana.</p>
                        </div>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-sm-12 text-center">
                        <div className="seo-tags">
                            <h1><strong>Scuba Diving in Punta Cana</strong></h1>
                        </div>
                        <h4 className='text-center course-title'><strong>Entry Level Dive certifications</strong></h4>
                        <p>After your Discover Scuba Diving, you might decide to get your Padi course in Punta Cana, as we expect you will be hooked on it! 
                        Whether you have done the Discover Scuba Diving class or not, as it is not a mandatory prerequisite, you can choose between two different entry level certifications for your Punta Cana Scuba Classes. The first one is the PADI Scuba Diver course, a two days course that includes three theory modules, three pool sessions and two dives in open water to a maximum depth of 40 feet, and gives you a lifetime certification upon its completion. If you want to have a full beginner level Scuba certification Punta Cana, the PADI Open Water is the most complete course: five theory sessions, five confined water sessions, and four dives, awarding you with a certification that takes you to the maximum depth of 60 feet.
                        In both cases, you will learn important notions and underwater skills that will allow you to use the dive equipment without harm, as well as have the best, safest and most fun experience during your underwater scuba dives. Knowledge reviews and quizzes will be part of the courses, testing your abilities and helping you focus on the most important tasks, and the time spent in confined water with your knowledgeable instructors will allow you to learn at your own pace all the necessary exercises for a wonderful dive experience.</p>
                    </div>
                </div>
                <DiveSlide/>
                <DiveCourses/>
                <div className="row py-2">
                    <div className="col-sm-12 text-center">
                        <h4 className='text-center course-title'><strong>What if I am already certified?</strong></h4>
                        <p>Scuba Classes in Punta Cana are also for those that are already certified as Padi Open Water Divers but want to advance in their career and learn more: our PADI Advanced Open Water course is the perfect choice for certified divers looking for exciting and complete Scuba Diving Packages while learning new techniques. During your Padi Advanced Open Water certification you will learn how to safely perform deep dives, navigation dives, wreck dives, night dives, drift dives and many more. The reefs and wrecks around our extremely beautiful area are the perfect training gym for all these types of advanced dives.
                        Last but not least, some further experiences and trainings are available upon request in our Dive Center in Punta Cana. For instance, if you are already an Advanced Open Water Diver, you can have access to your Emergency First Response and Rescue Diver course, or even complete your Divemaster training with us. Several PADI specialties are also available on request, as part of our Scuba Diving Packages in Punta Cana. You can contact us before your trip to arrange a personalized schedule that suits your needs and timings, without affecting the high standards of our training, and preparing you for a lifetime of underwater magic!</p>
                    </div>
                </div>
            </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Courses
