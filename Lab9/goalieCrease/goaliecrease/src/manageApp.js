import React, { Component } from 'react';

class ManageApp extends Component{
state= {showRinkForm: false, showEquipment: false, showBookForm: false, showContactForm: false, eng: true, fr: false}

showRinkFormENG = () => {
   return (
    <div> 
        <form className="forms">
            <label for="fname">First Name: </label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/> <br/>

            <label for="lname">Last Name: </label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/> <br/>

            <label for="email">Enter your email(example@example.com):</label>
            <input type="email" id="email" name="email" placeholder="Your email.."/> <br/>

            <label for="phone">Enter your phone number(xxx-xxx-xxxx):</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/> <br/>

            <label for="date">Date and time:</label>
            <input type="datetime-local" value="2020-07-03T13:45:00" id="date"/><br/>

            <p> Select Rink Size:</p>
            <input type="radio" name="rink" id="small" />
            <label for="small">Small:<br/> <img src={require('./images/small.png')} alt="small rink" width="200px" height="100px" /></label>
            <input type="radio" name="rink" id="medium" />
            <label for="medium">Medium:<br/> <img src={require('./images/medium.png')} alt="medium rink" width="200px" height="100px" /></label>
            <input type="radio" name="rink" id="large" />
            <label for="large">Large:<br/> <img src={require('./images/large.png')} alt="large rink" width="200px" height="100px" /></label> <br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
     );
 }

 showRinkFormFR = () => {
    return (
     <div> 
         <form className="forms">
                <label for="fname">Prénom: </label>
                <input type="text" id="fname" name="firstname" placeholder="Votre nom.."/> <br/>
    
                <label for="lname">Nom de famille: </label>
                <input type="text" id="lname" name="lastname" placeholder="Votre nom de famille.."/> <br/>
    
                <label for="email">Saisissez votre email (exemple@exemple.com):</label>
                <input type="email" id="email" name="email" placeholder="Votre email.."/> <br/>
    
                <label for="phone">Entrez votre numéro de téléphone(xxx-xxx-xxxx):</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/> <br/>
 
             <label for="date">Date et l'heure:</label>
             <input type="datetime-local" value="2020-07-03T13:45:00" id="date"/><br/>
 
             <p> Sélectionnez la taille de la patinoire:</p>
             <input type="radio" name="rink" id="small" />
             <label for="small">Petit:<br/> <img src={require('./images/small.png')} alt="small rink" width="200px" height="100px" /></label>
             <input type="radio" name="rink" id="medium" />
             <label for="medium">Moyen:<br/> <img src={require('./images/medium.png')} alt="medium rink" width="200px" height="100px" /></label>
             <input type="radio" name="rink" id="large" />
             <label for="large">Grand:<br/> <img src={require('./images/large.png')} alt="large rink" width="200px" height="100px" /></label> <br/>
             <input type="submit" value="Soumettre"/>
         </form>
     </div>
      );
  }

 showEquipmentENG = () => {
        return (
            <div className="forms"> 
                <div class="table">
                    <div class="row1">
                        <div class="cell1">Marc-Andre Fleury<br/><img src={require('./images/MAF.png')} alt="MAF" width="250px" height="130px" title="Marc-Andre Fleury wears CCM Equipment    GAA: 2.77 SV%:0.905" /></div>
                        <div class="cell2">Frederick Anderson<br/><img src={require('./images/FA.png')} alt="FA" width="250px" height="130px" title="Frederick Anderson wears Bauer Equipment      GAA: 2.85 SV%:0.909"/></div>
                        <div class="cell3">Carey Price<br/><img src={require('./images/CP.png')} alt="CP" width="250px" height="130px" title="Carey Price wears CCM Equipment                GAA: 2.79 SV%: 0.909"/></div>
                    </div>
                    <div class="row2">
                        <div class="cell1">Tuuka Rask<br/><img src={require('./images/TR.png')} alt="TR" width="250px" height="130px" /></div>
                        <div class="cell2">Jordan Binnington<br/><img src={require('./images/JB.png')} alt="JB" width="250px" height="130px" /></div>
                        <div class="cell3">Braden Holtby<br/><img src={require('./images/BH.png')} alt="BH" width="250px" height="130px" /></div>
                    </div>
                    <div class="row3">
                        <div class="cell1">Andrei Vasilevskiy<br/><img src={require('./images/AV.png')} alt="AV" width="250px" height="130px" /></div>
                        <div class="cell2">Pekka Rinne<br/><img src={require('./images/PR.png')} alt="PR" width="250px" height="130px" /></div>
                        <div class="cell3">Henrik Lundqvist<br/><img src={require('./images/HL.png')} alt="HL" width="250px" height="130px" /></div>
                    </div>
                </div>
            </div>
        );
  }

  showEquipmentFR = () => {
      return(
        <div className="forms"> 
                <div class="table">
                    <div class="row1">
                        <div class="cell1">Marc-Andre Fleury<br/><img src={require('./images/MAF.png')} alt="MAF" width="250px" height="130px" title="Marc-Andre Fleury porte un équipement CCM      GAA: 2,77% SV: 0,905" /></div>
                        <div class="cell2">Frederick Anderson<br/><img src={require('./images/FA.png')} alt="FA" width="250px" height="130px" title="Frederick Anderson porte l'équipement Bauer      GAA: 2,85 SV%: 0,909"/></div>
                        <div class="cell3">Carey Price<br/><img src={require('./images/CP.png')} alt="CP" width="250px" height="130px" title="Carey Price porte un équipement CCM          GAA: 2,79% SV: 0,909"/></div>
                    </div>
                    <div class="row2">
                        <div class="cell1">Tuuka Rask<br/><img src={require('./images/TR.png')} alt="TR" width="250px" height="130px" /></div>
                        <div class="cell2">Jordan Binnington<br/><img src={require('./images/JB.png')} alt="JB" width="250px" height="130px" /></div>
                        <div class="cell3">Braden Holtby<br/><img src={require('./images/BH.png')} alt="BH" width="250px" height="130px" /></div>
                    </div>
                    <div class="row3">
                        <div class="cell1">Andrei Vasilevskiy<br/><img src={require('./images/AV.png')} alt="AV" width="250px" height="130px" /></div>
                        <div class="cell2">Pekka Rinne<br/><img src={require('./images/PR.png')} alt="PR" width="250px" height="130px" /></div>
                        <div class="cell3">Henrik Lundqvist<br/><img src={require('./images/HL.png')} alt="HL" width="250px" height="130px" /></div>
                    </div>
                </div>
            </div>
      );
    }


  showBookFormENG = () => {
    return (
        
     <div>
        <form className="forms">
            <label for="fname">First Name: </label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/> <br/>

                <label for="lname">Last Name: </label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/> <br/>

                <label for="email">Enter your email(example@example.com):</label>
                <input type="email" id="email" name="email" placeholder="Your email.."/> <br/>

                <label for="phone">Enter your phone number(xxx-xxx-xxxx):</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/> <br/>

                <div class="card-columns">
                    <div class="card bg">
                        <img class="card-img-top" src={require('./images/bill.png')} alt="bill" width="200px" height="100px" />
                            <div class="card-body">
                                <h4 class="card-title">Bill</h4>
                                <p class="card-text">Years of Experience: 30</p>
                                    <p>Bill, the store owner, has been running the rink since his dad Greg passed it down to him in 2000. </p>
                                    <p> Hours: <br/> Mon-Fri 8am-6pm</p>
                            </div>
                    </div>
                    <div class="card bg">
                        <img class="card-img-top" src={require('./images/Jessie.png')} alt="jessie" width="200px" height="100px" />
                            <div class="card-body">
                                <h4 class="card-title">Jessie</h4>
                                <p class="card-text">Years of Experience: 4</p>
                                    <p>Jessie, the newest memeber of the team has worked alongside Bill as a trainee for 4 years</p>
                                    <p> Hours: <br/> Tue-Fri: 8am-6pm <br/> Sat: 9am-5pm</p>                                        
                            </div>
                    </div>
                    <div class="card bg">
                        <img class="card-img-top" src={require('./images/David.png')} alt="david" width="200px" height="100px" />
                            <div class="card-body">
                                <h4 class="card-title">David</h4>
                                <p class="card-text">Years of Experience: 26</p>
                                    <p>David has been training to be a goalie coach before he could even skate.</p>
                                    <p> Hours: <br/> Mon-Thr: 8am-6pm <br/> Sun: 10am-4pm</p>
                            </div>
                    </div>
                </div>

                <p> Select A Coach:</p>
                <input type="radio" name="coach" id="Bill" />
                <label for="Bill">Bill</label>
                <input type="radio" name="coach" id="Jessie" />
                <label for="Jessie">Jessie</label>
                <input type="radio" name="coach" id="David" />
                <label for="David">David</label><br/>

                <label for="date2">Date and time:</label>
                <input type="datetime-local" value="2020-07-03T13:45:00" id="date2"/><br/>
                
                <input type="submit" value="Submit"/>
            </form> 
     </div>
      );
  }

  showBookFormFR = () => {
    return (
        
     <div>
        <form className="forms">
                <label for="fname">Prénom: </label>
                <input type="text" id="fname" name="firstname" placeholder="Votre nom.."/> <br/>
    
                <label for="lname">Nom de famille: </label>
                <input type="text" id="lname" name="lastname" placeholder="Votre nom de famille.."/> <br/>
    
                <label for="email">Saisissez votre email (exemple@exemple.com):</label>
                <input type="email" id="email" name="email" placeholder="Votre email.."/> <br/>
    
                <label for="phone">Entrez votre numéro de téléphone(xxx-xxx-xxxx):</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/> <br/>

                <div class="card-columns">
                    <div class="card bg">
                        <img class="card-img-top" src={require('./images/bill.png')} alt="bill" width="200px" height="100px" />
                            <div class="card-body">
                                <h4 class="card-title">Bill</h4>
                                <p class="card-text">Années d'expérience: 30</p>
                                    <p>Bill, le propriétaire du magasin, gère la patinoire depuis que son père, Greg, lui l'a transmise en 2000. </p>
                                    <p> Heures: <br/> Lun-Ven 8:00-18:00</p>
                            </div>
                    </div>
                    <div class="card bg">
                        <img class="card-img-top" src={require('./images/Jessie.png')} alt="jessie" width="200px" height="100px" />
                            <div class="card-body">
                                <h4 class="card-title">Jessie</h4>
                                <p class="card-text">Années d'expérience: 4</p>
                                    <p>Jessie, la nouvelle membre de l'équipe, travaille aux côtés de Bill en tant que stagiaire depuis 4 ans</p>
                                    <p> Heures: <br/> Mar-Ven: 8:00-18:00 <br/> Sam: 9:00-17:00</p>                                        
                            </div>
                    </div>
                    <div class="card bg">
                        <img class="card-img-top" src={require('./images/David.png')} alt="david" width="200px" height="100px" />
                            <div class="card-body">
                                <h4 class="card-title">David</h4>
                                <p class="card-text">Années d'expérience: 26</p>
                                    <p>David s'est entraîné pour devenir entraîneur de gardien de but avant même de pouvoir patiner</p>
                                    <p> Heures: <br/> Lun-Jeu: 8:00-18:00 <br/> Dim: 10:00-16:00</p>
                            </div>
                    </div>
                </div>

                <p> Sélectionnez un entraîneur:</p>
                <input type="radio" name="coach" id="Bill" />
                <label for="Bill">Bill</label>
                <input type="radio" name="coach" id="Jessie" />
                <label for="Jessie">Jessie</label>
                <input type="radio" name="coach" id="David" />
                <label for="David">David</label><br/>

                <label for="date2">Date et l'heure:</label>
                <input type="datetime-local" value="2020-07-03T13:45:00" id="date2"/><br/>
                
                <input type="submit" value="Soumettre"/>
            </form> 
     </div>
      );
  }

  showContactFormENG = () => {
    return (
     <div> 
         <div class="container">
            <div>
                <h2>Contact Us</h2>
            </div>
            <div class="row">
                <div class="column">
                    <img src={require('./images/logo.png')} alt="Site logo" width="400" height="200px"/> 
                </div>
                <div class="column">
                    <form>
                        <label for="fname">First Name:</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>
                        <label for="lname">Last Name:</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/>
                        <label for="country">Country:</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
      );
  }

  showContactFormFR = () => {
    return (
     <div> 
         <div class="container">
            <div>
                <h2>Nous contacter</h2>
            </div>
            <div class="row">
                <div class="column">
                    <img src={require('./images/logo.png')} alt="Site logo" width="400" height="200px"/> 
                </div>
                <div class="column">
                    <form>
                        <label for="fname">Prénom:</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>
                        <label for="lname">Nom de famille:</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/>
                        <label for="country">Pays:</label>
                        <select id="country" name="country">
                            <option value="australia">Australie</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <label for="subject">Matière</label>
                        <textarea id="subject" name="subject" placeholder="Écris quelque chose.."></textarea>
                        <input type="submit" value="Soumettre"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
      );
  }
  

    render(){
        return (
            <div className='manage-app'>
            <button className="buttons" onClick={() => this.setState({showRinkForm: true, showEquipment: false, showBookForm: false, showContactForm: false}) }><img src={require('./images/reserve.png')} alt="reserve" height="25px" width="25px" />Reserve Rink</button>
            <button className="buttons" onClick={() => this.setState({showEquipment: true, showRinkForm: false, showBookForm: false, showContactForm: false}) }><img src={require('./images/equipment.png')} alt="equip" height="25px" width="25px" />Explore Equipment</button>
            <button className="buttons" onClick={() => this.setState({showBookForm: true, showEquipment: false, showRinkForm: false, showContactForm: false}) }><img src={require('./images/coach.png')} alt="coach" height="25px" width="25px" />Book Lessons</button>
            <button className="buttons" onClick={() => this.setState({showRinkForm: false, showEquipment: false, showBookForm: false, showContactForm: true}) }><img src={require('./images/contact.png')} alt="contact" height="25px" width="25px" />Contact Us</button><br/>
            <button className="buttons" onClick={() => this.setState({eng: true, fr:false}) }>English</button>
            <button className="buttons" onClick={() => this.setState({eng: false, fr:true}) }>French</button>

            {
            (this.state.showEquipment) 
                ? (this.state.eng) 
                    ? this.showEquipmentENG() 
                    : (this.state.fr) 
                        ? this.showEquipmentFR()
                        : null
                : null
            }

            {
            (this.state.showRinkForm) 
                ? (this.state.eng) 
                    ? this.showRinkFormENG() 
                    : (this.state.fr) 
                        ? this.showRinkFormFR()
                        : null
                : null
            }

            {
            (this.state.showBookForm) 
                ? (this.state.eng) 
                    ? this.showBookFormENG() 
                    : (this.state.fr) 
                        ? this.showBookFormFR()
                        : null
                : null
            }

            {
            (this.state.showContactForm) 
                ? (this.state.eng) 
                    ? this.showContactFormENG() 
                    : (this.state.fr) 
                        ? this.showContactFormFR()
                        : null
                : null
            }
            </div>
        );
    }
}
export default ManageApp