import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="main_container">
        <div className="heading">
          <h1>Lost And Found</h1>
          <h4>Lost it .List it . Find it .</h4>
        </div>
        <div className="front_img">
          <img src="images\front.jpg" alt="" />
        </div>
      </div>
      <div className="lost">
        <div className="lost-img">
          <img src="images\lost-2.svg" alt="" width={600} />
        </div>
        <div className="headings">
          <h1>Lost Product</h1>
          <hr></hr>
          <h4>
            Creating a "Lost and Found Product" website involves setting up two
            main sections: Lost and Found. For the "Lost" page, you can design
            it to allow users to submit details about their lost items and
            search for them. Here's a detailed guide for structuring the Lost
            page:
          </h4>
          <Link to="/Found">
            <button type="button" class="btn btn-outline-info button">
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
      <div className="lost">
        <div className="headings">
          <h1>List items</h1>
          <hr></hr>
          <h4>
            To create a List Page for a Lost and Found Product website, you
            would design a front-end page displaying all the items reported as
            lost or found. Here's how you can structure and implement it:
          </h4>
          <Link to="/Mylist">
            <button type="button" class="btn btn-outline-info button">
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div className="lost-img">
          <img src="images\list-item.svg" alt="" width={600} />
        </div>
      </div>
    </>
  );
};

export default Home;
