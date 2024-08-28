import React from 'react';
// import { Form } from 'react-router-dom';
import Styes from 'styled-components';

const Wrapper  = Styes.section`
padding :5rem 0 5rem 0;

.container{
  margin-top: 6rem;
  text-align : center;

  .contact-form{
     max-width : 50rem;
     margin : auto;
  
     .contact-inputs{
       display : flex;
       flex-direction : column;
       gap : 4rem;
       input[type = "submit"]
       
       
       {
         cursar : pointer;
        //  transition : all 0.2s;
      
         
         &:hover{
           background-color : white;
           border: 2px solid   rgb(48, 48, 190);;
           color:   rgb(48, 48, 190);
          transform : scale(0.9);
          
         }
       }
     }
   }
 } 
   
`;

const Contact = ()=>{
  return <Wrapper >
      <h2 className="common-heading">feel free to contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14235.516573590521!2d75.73457394613447!3d26.875580616872487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4e44f18985d%3A0xae5b935e3f5778b9!2sMansarover%2C%20Mohan%20Nagar%2C%20Mohru%20Nagar%2C%20Mansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1721753538319!5m2!1sen!2sin" 
    width="100%"
    height="450" 
    Style={{border:0}}
    allowFullScreen={true}
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
   
   <div className='container'>
    <div className='contact-form'> 
      <form action="https://formspree.io/f/mvgpzqwa" method='POST'className='contact-inputs'>
        <input type="text" name='username'placeholder='username'autoComplete='off'required />
        <input type="email" name='Email'placeholder='Email'autoComplete='off'required />
        <textarea name="message"cols={30}rows={6} autoComplete='off'required></textarea>
        <input type ="submit" value="send"/>
      </form>
    </div>
   </div>
  </Wrapper>
   
}
export default Contact;