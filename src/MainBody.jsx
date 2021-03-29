import Upcomming from "./Upcomming";
import Live from "./Live";
import Categories from "./Categories";
const MainBody = () => {
  return (
    <>
      <div className="mainBody">
        <div className="events">
          <div>
            <Upcomming />
          </div>
          <div>
            <Live />
          </div>
        </div>
        <div className="categories">
          <Categories />
        </div>
      </div>
    </>
  );
};
export default MainBody;
