import { UncontrolledCarousel } from "reactstrap";

function CarouselStrap(){
    const items = [
        {
          src: 'k.jpg',
          altText: '꼬미',
          caption: '못생겼다',
          key: 1,
        },
        {
          src: 'kk.jpg',
          altText: '꼬미',
          caption: '귀엽다',
          key: 2,
        },
        {
          src: 'kkk.jpg',
          altText: '꼬미',
          caption: 'ㅋㅋ',
          key: 3,
        },
      ];
      

    return (
        <>
            
        <UncontrolledCarousel items={items} style={{width:"500px", height:"100%"}}/>
        </>
    );
};

export default CarouselStrap;