import React from 'react';
import './Main_page.css';


class Main_page extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div>
                <header>
                    <div class="hero-text-box">
                        <h1>Goodbye junk food.<br/> Hello super healthy meals.</h1>
                        <a class="btn btn-full" href="#">I’m hungry </a>
                        <a class="btn btn-ghost" href="#">Show me more  </a>
                    </div>
                </header>
                <section class="section-features">
                        <div class="row">
                            <h2>Get food fast &mdash; not fast food.</h2>
                            <p class="long-copy">
                                Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
                            </p>
                        </div>
                        
                        
                        <div class="row">
                            <div class="col span-1-of-4 box">
                                <i class="ion-ios-infinite-outline icon-big"></i>
                                <h3>Up to 365 days/year</h3>
                                <p>
                                    Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                                </p>
                            </div>
                            <div class="col span-1-of-4 box">
                                <i class="ion-ios-stopwatch-outline icon-big"></i>
                                <h3>Ready in 20 minutes</h3>
                                <p>
                                    You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.

                                </p>
                            </div>
                            <div class="col span-1-of-4 box">
                                <i class="ion-ios-nutrition-outline icon-big"></i>
                                <h3>100% organic</h3>
                                <p>
                                    All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                                </p>
                            </div>
                            <div class="col span-1-of-4 box">
                                <i class="ion-ios-cart-outline icon-big"></i>
                                <h3>Order anything</h3>
                                <p>
                                    We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    <section class="section-meals">
                        <ul class="meals-showcase clearfix">
                            <li>
                                <figure class="meal-photo">
                                    <img src="resources/img/1.jpg" alt="Korean bibimbap with egg and vegetables"/>
                                </figure>
                            </li>
                            <li>
                                <figure class="meal-photo">
                                    <img src="resources/img/2.jpg" alt="Simple italian pizza with cherry tomatoes"/>
                                </figure>
                            </li>
                            <li>
                                <figure class="meal-photo">
                                    <img src="resources/img/3.jpg" alt="Chicken breast steak with vegetables"/>
                                </figure>
                            </li>
                            <li>
                                <figure class="meal-photo">
                                    <img src="resources/img/4.jpg" alt="Autumn pumpkin soup"/>
                                </figure>
                            </li>
                        </ul>
                        
                        <ul class="meals-showcase clearfix">
                            <li>
                                <figure class="meal-photo">
                                    <img src="resources/img/5.jpg" alt="Paleo beef steak with vegetables"/>
                                </figure>
                            </li>
                            <li>
                                <figure class="meal-photo">
                                    <img src="resources/img/6.jpg" alt="Healthy baguette with egg and vegetables"/>
                                </figure>
                            </li>
                            <li>
                                <figure class="meal-photo">
                                    <img src="resources/img/7.jpg" alt="Burger with cheddar and bacon"/>
                                </figure>
                            </li>
                            <li>
                                <figure class="meal-photo">
                                    <img src="resources/img/8.jpg" alt="Granola with cherries and strawberries"/>
                                </figure>
                            </li>
                        </ul>
                        
                    </section>
                    
                    
                    <section class="section-steps">
                        <div class="row">
                            <h2>How it works &mdash; Simple as 1, 2, 3</h2>
                        </div>
                        <div class="row">
                            <div class="col span-1-of-2">
                                <img src="resources/img/app-iPhone.png" alt="Omni food on iPhone" class="app-screen"/>
                            </div>
                            <div class="col span-1-of-2">
                                <div class="works-step">
                                    <div>1</div>
                                    <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                                </div>
                                <div class="works-step">
                                    <div>2</div>
                                    <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                                </div>
                                <div class="works-step">
                                    <div>3</div>
                                    <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                                </div>
                                <div>
                                <a href="#" class="btn-app"><img src="resources/img/download-app.svg" alt="App Store Button"/></a>
                                <a href="#" class="btn-app"><img src="resources/img/download-app-android.png" alt="Play Store Button"/></a>
                                </div>
                            </div>
                        </div>
                    </section>
                            
                    <section class="section-cities">
                            <div class="row">
                                <h2>We're currently in these cities</h2>
                            </div>
                            <div class="row">
                                <div class="col span-1-of-4 box">
                                    <img src="resources/img/lisbon-3.jpg" alt="Lisbon"/>
                                    <h3>Lisbon</h3>
                                    <div class="city-feature">
                                        <i class="ion-ios-person"></i>
                                        1600+ happy eaters
                                    </div>
                                    <div class="city-feature">
                                        <i class="ion-ios-star"></i>
                                        60+ top chefs
                                    </div>
                                    <div class="city-feature">
                                        <i class="ion-social-twitter"></i>
                                        @omnifood_lx
                                    </div>
                                </div>
                                
                                <div class="col span-1-of-4 box">
                                    <img src="resources/img/lisbon-3.jpg" alt="Lisbon"/>
                                    <h3>San Francisco</h3>
                                    <div class="city-feature">
                                        <i class="ion-ios-person"></i>
                                        3700+ happy eaters
                                    </div>
                                    <div class="city-feature">
                                        <i class="ion-ios-star"></i>
                                        160+ top chefs
                                    </div>
                                    <div class="city-feature">
                                        <i class="ion-social-twitter"></i>
                                        @omnifood_sf
                                    </div>
                                </div>
                                <div class="col span-1-of-4 box">
                                    <img src="resources/img/lisbon-3.jpg" alt="Lisbon"/>
                                    <h3>Berlin</h3>
                                    <div class="city-feature">
                                        <i class="ion-ios-person"></i>
                                    2300+ happy eaters
                                    </div>
                                    <div class="city-feature">
                                        <i class="ion-ios-star"></i>
                                        110+ top chefs
                                    </div>
                                    <div class="city-feature">
                                        <i class="ion-social-twitter"></i>
                                        @omnifood_berlin
                                    </div>
                                </div>
                                <div class="col span-1-of-4 box">
                                    <img src="resources/img/lisbon-3.jpg" alt="Lisbon"/>
                                    <h3>London</h3>
                                    <div class="city-feature">
                                        <i class="ion-ios-person"></i>
                                        1200+ happy eaters
                                    </div>
                                    <div class="city-feature">
                                        <i class="ion-ios-star"></i>
                                        60+ top chefs
                                    </div>
                                    <div class="city-feature">
                                        <i class="ion-social-twitter"></i>
                                        @omnifood_lx
                                    </div>
                                </div>
                            </div>
                    </section>
            </div>
        )
    }
}
export default Main_page