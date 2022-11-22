import ModalVideo from "../components/pageTemplates/modalVideo";
import "../css/userProfle.css"

const UserProfilePage = ({userInfo})=>{

    return (
        // <div className="userProfileWrapper">
        //     <div className="userAvatar">

        //     </div>
        //     <div className="userName">

        //     </div>

        //     <div className="userAdditionalInfo">

        //         <div className="additionalInfo__block">
        //             <button className="additionalInfo__block__button"></button>
        //         </div>
        //         <div className="additionalInfo__block">
        //             <button className="additionalInfo__block__button"></button>
        //         </div>
        //         <div className="additionalInfo__block">
        //             <button className="additionalInfo__block__button"></button>
        //         </div>

        //     </div>

        // </div>
        <div className="container py-3 mt-3">
  <div className="row">
    <div className="col-4 mx-auto">
      <div className="form-check form-switch ps-0">
        <input className="form-check-input ms-auto mt-1" type="checkbox" id="flexSwitchCheckDefault"></input>
        <label className="form-check-label ms-2" for="flexSwitchCheckDefault">Remember me</label>
      </div>
    </div>
  </div>
</div>
    );
}


export default UserProfilePage;