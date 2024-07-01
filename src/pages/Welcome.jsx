import welcomeImage from "../assets/images/welcome-image.png";
import background from "../assets/images/background.png";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div
            onTouchEnd={() => navigate('/recipes')}
            className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0.5)),url('./assets/images/background.png')] bg-cover bg-center h-screen flex flex-col place-content-center">
            <h3 className="text-white text-center text-4xl">Savory & Sweet</h3>
            <img src={welcomeImage} alt="Welcome Image" />
        </div>

    );
}