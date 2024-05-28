import'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
console.log(AlexaImage);
console.log(SiriImage);
function App(){
    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'> Personal Digital Assistants </p>

                </div>
            </section>
          
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                        <ProfileCard 
                        title = "Alexa" 
                        handle="@alexa99" 
                        image={AlexaImage}
                        description="Alexa was created by Amazon and helps you buy things"/>
                        </div>
                        <div className='column is-3'>
                        <ProfileCard 
                        title = "siri" 
                        handle="@siri"
                         image= {SiriImage}
                         description="Siri was created by Apple "/>
                        </div>
                        <div className='column is-3'>
                        <ProfileCard 
                        title = "cortana" 
                        handle="@cortana" 
                        image = {CortanaImage}
                        description="Cortana was created by Microsoft "/>
                        </div>
                    </div> 

                </section>

               

            </div>
             
            
             
            
        </div>
    );
}

export default App;