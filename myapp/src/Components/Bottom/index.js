import {Component} from 'react';
import './index.css'

class BottomSection extends Component{
    state={checkedBtn:false}

    onClickCancel=(event)=>{
        event.preventDefault();
        console.log('Clicked')
    }

     onProceedToPay=(event)=>{
        event.preventDefault();
        console.log('Clicked')
    }

    onChangePlan1=(event)=>{
        this.setState({checkedBtn:true});
    }



    render(){
        const {checkedBtn}=this.state;
        const selectedPlan=(checkedBtn)?'selectedPlan':'subscription-plan';

        return (
            <div className="bg-container">
               <div>
                <h1 className="heading1">
                   Access curated courses worth <br/>₹ <span className="amount">18,500</span> at just <span className="offer">₹ 99</span> per year!   
                </h1>
    
                <div className="reading-section">
                    <i className="fa-solid fa-book-open book"></i>
                    <p className="paragraph"><span className="offer1">100+</span> Job relevant courses</p>
                </div>
    
                <div className="reading-section">
                <i className="fa-regular fa-clock book"></i>
                    <p className="paragraph"><span className="offer1">20,000+</span> Hours of content</p>
                </div>
    
                <div className="reading-section">
                    <i className="fas fa-tv book"></i>
                    <p className="paragraph"><span className="offer1">Exclusive</span> webinar access</p>
                </div>
                <div className="reading-section">
                <i className="fa-solid fa-graduation-cap book"></i>
                    <p className="paragraph">Scholarship worth <span className="offer1">₹94,500</span></p>
                </div>
    
                <div className="reading-section">
                <i className="fa-solid fa-rectangle-ad book"></i>
                    <p className="paragraph"><span className="offer1">Ad Free</span> learning experience</p>
                </div>
    
               </div>
    
               <div>
                <form className="card">
                <div className="sign-up-section">
                    <div className="section2">
                        <button className="sign-up">1</button>
                        <p>Sign Up</p>
                    </div>
                    <div className="section2">
                        <button className="sign-up">2</button>
                        <p>Subscribe</p>
                    </div>
                </div>
                  <h1 className="plan-heading">Select your subcription plan</h1>
                
                <div className="subscription-plan">
                    <div className="section3">
                      <input type="radio" name="plan" className="radioBtn" id="8-per-month"/>
                      <label htmlFor="8-per-month">12 Months Subcription</label>
                    </div>
                    <div>
                        <p>Total ₹99</p>
                        <p>₹8 /mo</p>
                    </div>
                </div>
                <div className={selectedPlan}>
                    <div className="section3">
                      <input type="radio" name="plan" className="radioBtn" id="15-per-month"  onClick={this.onChangePlan1} />
                      <label htmlFor="15-per-month">12 Months Subcription</label>
                    </div>
                    <div>
                        <p>Total ₹179</p>
                        <p>₹15 /mo</p>
                    </div>
                </div>
                <div className="subscription-plan">
                    <div className="section3">
                      <input type="radio" name="plan" className="radioBtn" id="25-per-month"/>
                      <label htmlFor='25-per-month'>6 Months Subcription</label>
                    </div>
                    <div>
                        <p>Total ₹149</p>
                        <p>₹25 /mo</p>
                    </div>
                </div>
                <div className="subscription-plan">
                    <div className="section3">
                      <input type="radio" name="plan" className="radioBtn" id="33-per-month"/>
                      <label htmlFor="33-per-month">3 Months Subcription</label>
                    </div>
                    <div>
                        <p>Total ₹99</p>
                        <p>₹33 /mo</p>
                    </div>
                </div>
    
                <hr/>
    
                <div className="total-prize">
                    <p>Subscription Fee</p>
                    <p>₹ 18,500</p>
                </div>
    
                <div className="limted-offer">
                    <div>
                        <p className="limited-f">Limited time offer</p>
                        <div className="time-expire">
                            <i className="fa-regular fa-clock radioBtn"></i>
                            <p>Offer valid till 25th March 2023</p>
                        </div>
                    </div>
                    <div>
                        <p>-₹18,409</p>
                    </div>
    
                </div>
    
                <div className="total-prize">
                    <p>Total(Incl.of 18% GST)</p>
                    <p>₹ 149</p>
                </div>
    
                <div className="btn-section">
                    <button className="cancel-btn" type="submit" onClick={this.onClickCancel}>
                        CANCEL
                    </button>
                    <button className="pay-btn" type="submit" onClick={this.onProceedToPay}>
                        PROCEED TO PAY
                    </button>
                </div>
    
                </form>
               </div>
            </div>
        )
    }
}


export default BottomSection;