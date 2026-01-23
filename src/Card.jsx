import profilePic from './assets/logo.png';
function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="profile picture" />
            <h2 className="card-title">Bahoju</h2>
            <p className="card-text">I design websites and play video games</p>
        </div>
    );
}
export default Card