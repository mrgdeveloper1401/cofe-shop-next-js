export default function ColorWithOption() {
    return (
        <div id="colorswitch-option">
            <button><i className="mdi mdi-settings"></i></button>
            <ul>
                <li className="active" data-path="/assets/css/colors/default.css">
                    <span style={{ backgroundColor: '#f7858d' }}></span>
                </li>
                <li data-path="./assets/css/colors/amber-color.css">
                    <span style={{ backgroundColor: '#ffab00' }}></span>
                </li>
                <li data-path="./assets/css/colors/blue-color.css">
                    <span style={{ backgroundColor: '#2979ff' }}></span>
                </li>
                <li data-path="./assets/css/colors/blue-grey-color.css">
                    <span style={{ backgroundColor: '#607d8b' }}></span>
                </li>
                <li data-path="./assets/css/colors/brown-color.css">
                    <span style={{ backgroundColor: '#795548' }}></span>
                </li>
                <li data-path="./assets/css/colors/cyan-color.css">
                    <span style={{ backgroundColor: '#00bcd4' }}></span>
                </li>
                <li data-path="./assets/css/colors/green-color.css">
                    <span style={{ backgroundColor: '#4caf50' }}></span>
                </li>
                <li data-path="./assets/css/colors/indigo-color.css">
                    <span style={{ backgroundColor: '#3f51b5' }}></span>
                </li>
                <li data-path="./assets/css/colors/lime-color.css">
                    <span style={{ backgroundColor: '#cddc39' }}></span>
                </li>
                <li data-path="./assets/css/colors/orange-color.css">
                    <span style={{ backgroundColor: '#ff9800' }}></span>
                </li>
                <li data-path="./assets/css/colors/red-color.css">
                    <span style={{ backgroundColor: '#f44336' }}></span>
                </li>
                <li data-path="./assets/css/colors/teal-color.css">
                    <span style={{ backgroundColor: '#009688' }}></span>
                </li>
                <li data-path="./assets/css/colors/purple-color.css">
                    <span style={{ backgroundColor: '#9c27b0' }}></span>
                </li>
            </ul>
        </div>
    );
}
