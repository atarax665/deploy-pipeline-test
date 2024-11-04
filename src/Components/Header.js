const Header = () => {
    return (
        <div className="flex justify-between py-4 bg-pink-200 shadow-lg">
                <img src="https://www.slido.com/static/slido-logo.a3d453e1.svg" alt="slido logo" className="w-56"/>
                <div className="flex items-center">
                    <ul className="flex  p-4">
                        <li className="p-4">Features</li>
                        <li className="p-4">Pricing</li>
                        <li className="p-4">Resources</li>
                    </ul>
                </div>
            </div>
    );
}

export default Header;