import './store.css';
import Navbar from './Navbar';
import ecoStoreImg from '../assets/ecostore.jpg';
import { useState } from 'react';
import Footer from './Footer';

const Store = () => {

    const [productsdata, setProductsdata] = useState(
        [
            {
                "id": 1,
                "productName": "Recycled Bells",
                "productDetails": "Made from fabric waste which would otherwise be thrown in landfills, here is the star product colourful bells to brighten up your space, that our team has handcrafted with a lot of love. ",
                "productImg": "https://saahaszerowaste.com/wp-content/uploads/2021/08/IMG_E4827-300x3001-1.webp",
                "productExchangeRequirement": "4pcs X-size Fabric clothes",
            },
            {
                "id": 2,
                "productName": "Eco Photo Frame",
                "productDetails": "These photoframes are made from eco-boards. Eco-boards are excellent alternatives to plywood and are made of recycled multi-layer single use plastics majorly used in packaging by the FMCG and pharma companies. Eco-boards are corrosion proof, fire proof, water proof and termite resistant.",
                "productImg": "https://saahaszerowaste.com/wp-content/uploads/2019/11/Photo_frame_side.jpg",
                "productExchangeRequirement": "0.3kg papers",
            },
            {
                "id": 3,
                "productName": "Hardbound Diary A5",
                "productDetails": "This recycled paper consumes only 25% of the electrical power and only 1/3rd of the thermal energy as compared to virgin paper.",
                "productImg": "https://saahaszerowaste.com/wp-content/uploads/2017/01/hardbound-diary-a5-350x350.jpg",
                "productExchangeRequirement": "5kg papers",
            },
            {
                "id": 4,
                "productName": "Eco Board Planter",
                "productDetails": "These planters are made from eco-boards. Eco-boards are excellent alternatives to plywood and are made of recycled multi-layer single use plastics majorly used in packaging by the FMCG and pharma companies. Eco-boards are corrosion proof, fire proof, water proof and termite resistant.",
                "productImg": "https://saahaszerowaste.com/wp-content/uploads/2022/11/ECO-BOARD-PLANTER2.jpg",
                "productExchangeRequirement": "2pcs Eco boards",
            },
            {
                "id": 5,
                "productName": "Recycled Napkins",
                "productDetails": " Our tissues are unbleached (hence the brown colour), thus saving a lot of water that would be required for the bleaching process. When buying tissues, choose tree-free, recycled paper!",
                "productImg": "https://saahaszerowaste.com/wp-content/uploads/2021/08/Napkin_1.jpeg",
                "productExchangeRequirement": "0.5kg papers",
            },
        ]
    );

    return (
        <>
            <Navbar isStore={true} />
            <div className='store-container'>
                <div className='store-description'>
                    <h1>Exchange your reusable products, with our recycled products</h1>
                    <img src={ecoStoreImg} alt="" className='store-description-img' />
                </div>
                <div className='store-products-container'>
                    {productsdata.map((data) => (
                        <div className='store-products-data' key={data.id}>
                            <img src={data.productImg} alt="" />
                            <div className='store-products-data-description-container'>
                                <div className='store-products-data-description'>
                                    <h2>{data.productName}</h2>
                                    <p>{data.productDetails}</p>
                                </div>
                                <h3>Exchange for : {data.productExchangeRequirement}</h3>
                            </div>
                            <div className='store-products-get-now-container'>
                                <button>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Store;