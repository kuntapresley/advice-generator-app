const API_link="https://api.adviceslip.com/advice";
const adviceNumberSpan=document.querySelector('.advice-generator_advice-number');
const adviceQuoteSlot=document.querySelector('.advice-generator_quote');
const fetchBtn=document.querySelector('button.advice-generator_btn');
const fetchNewAdvice = async() =>{
    const response= await fetch(API_link);
    const advice= await response.json()
    return advice
}
//promise= object
//states
//pending
//fulfiled
//rejected
const renderAdvice= (adviceObj) =>
{
    const {id,advice}=adviceObj;
    adviceNumberSpan.textContent=`ADVICE #${id}`;
    adviceQuoteSlot.textContent=advice;
};
const generateNewAdvice = async() =>{
  const data= await fetchNewAdvice()
     const advice= data.slip;
 renderAdvice(advice)
};
window.addEventListener('DOMContentLoaded',()=>{
    fetchBtn.addEventListener('click' , generateNewAdvice)
});