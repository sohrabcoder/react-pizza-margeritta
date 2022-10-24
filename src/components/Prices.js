import React from "react";
import ghj from "../assests/image/pizza1.png";
import qwe from "../assests/image/pizza2.png";
import asd from "../assests/image/pizza3.png";

const Prices = () => {
    return (
        <div className="Prices">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={ghj} alt="image" />
                            </div>

                            <h1 className="price__heading">Pizza Margeritta</h1>
                            <p className="price__text">Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price__rs"> $39 </p>
                        </div>

                    </div>


                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={qwe} alt="image" />
                            </div>

                            <h1 className="price__heading">Beer Pizza Crust</h1>
                            <p className="price__text">Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price__rs"> $25 </p>
                        </div>

                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={asd} alt="image" />
                            </div>

                            <h1 className="price__heading">Pizza Biscuit Bake</h1>
                            <p className="price__text">Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price__rs"> $49 </p>
                        </div>

                    </div>


                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={asd} alt="image" />
                            </div>

                            <h1 className="price__heading">Pizza Biscuit Bake</h1>
                            <p className="price__text">Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price__rs"> $29 </p>
                        </div>

                    </div>


                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={asd} alt="image" />
                            </div>

                            <h1 className="price__heading">Pizza Biscuit Bake</h1>
                            <p className="price__text">Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price__rs"> $54 </p>
                        </div>

                    </div>


                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={asd} alt="image" />
                            </div>

                            <h1 className="price__heading">Pizza Biscuit Bake</h1>
                            <p className="price__text">Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price__rs"> $34 </p>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    );
};
export default Prices;