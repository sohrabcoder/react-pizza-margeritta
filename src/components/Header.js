import React from 'react';
import Navbar from './Navbar';
const Header = () => {
    return (
        <div className='banner'>
            <Navbar />
            <div className='banner_content'>
                <div className='container'>
                    <div className='banner_text'>
                       
                        <h3>Pizza Delivery</h3>
                        <h1>
                            MAESTRO PIZINNI
                        </h1>

                        <p>lorem erdns skdjncskjn jnksj  jnksjn ksjnvkjs kjnskj
                            kjjks kjdjskdfn jnfksjnfksj kfnkjsnj fnksjfn kfjnvksjfnvk
                        </p>
                        <div className='banner__btn'>
                            <a href='' className='btn btn-smart'>Delivery Now</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

