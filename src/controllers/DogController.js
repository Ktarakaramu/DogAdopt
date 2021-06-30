import React from 'react';
import slideImg1 from '../images/bob.jpg';
import slideImg2 from '../images/eddy.jpg';
import slideImg3 from '../images/nyke.jpg';
import slideImg4 from '../images/leo.jpg';
import slideImg5 from '../images/rockey.jpg';
import slideImg6 from '../images/zoe.jpg';
import slideImg7 from '../images/tony.jpg';
import slideImg8 from '../images/poki.jpg';
import articleImg from '../images/article.jpg';
import groomingTipsImg from '../images/groomingTips.png';
import emotionsImg from "../images/emotions.jpg"


class DogController extends React.Component
{  
    getDogSliderData()
    {
        const arrDogSliderData = [
             {
                image: slideImg1,
                name : "Bob",
                age : "2 years",
                gender :"male",
                color: "brown&Black"
             },
             {
                image: slideImg2,
                name : "Eddy",
                age : "2 years",
                gender :"male",
                color: "brown&Black"
             },
             {
                image: slideImg3,
                name : "Nyke",
                age : 2,
                gender :"male",
                color: "brown And Black"
             },
             {
                image: slideImg4,
                name : "Leo",
                age : "2 years",
                gender :"male",
                color: "brown And Black"
             },
             {
                image: slideImg5,
                name : "Rockey",
                age : "1 year",
                gender :"male",
                color: "brown And Black"
             },
             {
                image: slideImg6,
                name : "Zoe",
                age : "6 months",
                gender :"female",
                color: "brown And Black"
             },
             {
                image: slideImg7,
                name : "Tony",
                age : "2 years",
                gender :"male",
                color: "brown And Black"
             },
             {
                image: slideImg8,
                name : "poki",
                age : "3 months",
                gender :"male",
                color: "brown And Black"
             },
        ]
        return arrDogSliderData;
    }

    getNormalSliderData()
    {
      const arrDogSliderData = [
         {
            image : articleImg,
            title : "Dog Articles"
         },
         {
            image : groomingTipsImg,
            title : "Grooming Tips"
         },
         {
            image : emotionsImg,
            title : "Emotions?"
         },
      ]
      return arrDogSliderData;
    }

    getDogListData()
    {
        const arrDogSliderData = [
             {
                image: slideImg1,
                name : "Bob",
                age : "2 years",
                gender :"male",
                color: "brown&Black"
             },
             {
                image: slideImg2,
                name : "Eddy",
                age : "2 years",
                gender :"male",
                color: "brown&Black"
             },
             {
                image: slideImg3,
                name : "Nyke",
                age : 2,
                gender :"male",
                color: "brown And Black"
             },
             {
                image: slideImg4,
                name : "Leo",
                age : "2 years",
                gender :"male",
                color: "brown And Black"
             },
             {
                image: slideImg5,
                name : "Rockey",
                age : "1 year",
                gender :"male",
                color: "brown And Black"
             },
             {
                image: slideImg6,
                name : "Zoe",
                age : "6 months",
                gender :"female",
                color: "brown And Black"
             },
             {
                image: slideImg7,
                name : "Tony",
                age : "2 years",
                gender :"male",
                color: "brown And Black"
             },
             {
                image: slideImg8,
                name : "poki",
                age : "3 months",
                gender :"male",
                color: "brown And Black"
             },
             {
               image: slideImg1,
               name : "Bob",
               age : "2 years",
               gender :"male",
               color: "brown&Black"
            },
            {
               image: slideImg2,
               name : "Eddy",
               age : "2 years",
               gender :"male",
               color: "brown&Black"
            },
            {
               image: slideImg3,
               name : "Nyke",
               age : 2,
               gender :"male",
               color: "brown And Black"
            },
            {
               image: slideImg4,
               name : "Leo",
               age : "2 years",
               gender :"male",
               color: "brown And Black"
            },
        ]
        return arrDogSliderData;
    }

    //for this slider we need to define url:"url"
    getSliderImages()
    {
      const images = [
         { image: slideImg2},
         { image: slideImg4},
         { image: slideImg7},
         { image: slideImg8},
         { image: slideImg7},
       ];
       return images;
    }
}

export default DogController;