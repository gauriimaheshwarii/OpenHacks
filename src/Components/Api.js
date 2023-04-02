import './api.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';

const Api = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const [responseBody, setResponseBody] = useState([]);

    const postData = async () => {
        const url = 'http://localhost:8000/mail/' + inputValue;
        // const data = { email : "apneduniya.dontdisturb@gmail.com" };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(data),
                mode: "no-cors"
            });
            // const result = await response.json(); // Parse JSON data
            // console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8000/get_quote", {
                method: 'GET',
                // headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(data),
                // mode: "no-cors"
            });
            const data = await response.json();
            setResponseBody(data.data);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Navbar isStore={true} />
            <div className='api-container'>
                <h1>Want to send random quotes on environment like us?</h1>
                <div className='api-link-container'>
                    <span className='api-link-type'>POST</span>
                    <p>Request URL</p>
                    <span className='api-link'>https://localhost:8000/get_quote</span>
                    <p>Curl</p>
                    <div className='api-link-curl'>
                        <span>curl -X 'GET' \</span>
                        <br />
                        <span>'https://localhost:8000/get_quote' \</span>
                        <br />
                        <span>-H 'accept: application/json'</span>
                    </div>
                    <hr className='api-hr' />
                    <p className='api-server-response-text'>Server response</p>
                    <div className='api-response-container'>
                        <p>Code: 200</p>
                        <div className='api-child-response-container'>
                            <p>Response body</p>
                            <span className='api-response-body'>
                                {responseBody[0]} <br/><br/> By {responseBody[1]}
                            </span>
                        </div>
                    </div>
                    <div className='api-child-email-container'>
                        <p>Email: </p>
                        <input type="text" id='api-email' value={inputValue} onChange={handleInputChange}/>
                        <button onClick={()=>{postData()}}>Send</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Api;