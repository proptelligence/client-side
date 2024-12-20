import React, { useState ,useEffect } from 'react';
import Navbar from '../Navbar';
import './index.css';

function PropValuation() { 

    const [cart, setCart] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        squareFeet: '',
        houseType: '2BHK'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://property-backend-1.onrender.com/house/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit data');
            }
    
            window.alert('Data submitted successfully!');
            // Optionally, you can reset the form after successful submission
            setFormData({
                name: '',
                email: '',
                mobile: '',
                squareFeet: '',
                houseType: '2BHK'
            });
        } catch (error) {
            window.alert('Error submitting data: ' + error.message);
        }
    }; 

    useEffect(() => {
        // Load cart from localStorage on mount
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
      }, []);
    
      useEffect(() => {
        // Save cart to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]); 

      const addToCart = (service) => {
        setCart([...cart, service]);
      };

    return (
        <>
            <Navbar /> 
            <div className='form-house-container'> 
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile Number:</label>
                        <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="squareFeet">Square Feet:</label>
                        <input type="number" id="squareFeet" name="squareFeet" value={formData.squareFeet} onChange={handleChange} required /> 
                        
                        <label htmlFor="Area">Locality</label>
                        <input type="number" id="Area" name="Area" value={formData.squareFeet} onChange={handleChange} required />
                        
                        <label htmlFor="Area">City</label>
                        <input type="number" id="Area" name="Area" value={formData.squareFeet} onChange={handleChange} required /> 

                        <label htmlFor="Area">State</label>
                        <input type="number" id="Area" name="Area" value={formData.squareFeet} onChange={handleChange} required />
                    </div> 
                    <div>
                        <label htmlFor="houseType">Type of Property:</label>
                        <select id="houseType" name="houseType" value={formData.houseType} onChange={handleChange} required>
                            <option value="agri">Agricultural Land</option>
                            <option value="flat">Flat like Apartment</option>
                            <option value="commerical">Commercial Properties</option>
                            <option value="project">Project Land</option>
                            <option value="house">Individual House</option>
                            <option value="sites">Sites/Plots/Villas</option>
                        </select>
                    </div>
                    <button onClick={() => addToCart({ name: 'Prop Valuation', price: 99 })}>Pay Now</button>
                </form>
            </div>
        </>
    );
}

export default PropValuation;
