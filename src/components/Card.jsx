import "@theme-toggles/react/css/Around.css";
import pureNimble from '../assets/pureNimbleLogo.png';
const Card = ({ title, description, url }) => {


    return (

        <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
            <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" class="w-full h-64 object-cover" />
            <div class="p-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <p class="text-gray-700 leading-tight mb-4">
                    {description}
                </p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <img src={pureNimble} alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover" />
                        <span class="text-gray-800 font-semibold">PureNimble</span>
                    </div>
                    <span class="text-gray-600">2024/2025</span>
                </div>
            </div>
        </div>

    );
}

export default Card;