import {Button, UncontrolledCarousel} from 'reactstrap';

const Section7 = () => {
    const items = [
        {
          src: '/img/card-1.png', key: 1,
        },
        {
          src: '/img/card-2.png', key: 2,
        },
        {
          src: '/img/card-3.png', key: 3,
        },
        {
          src: '/img/card-4.png', key: 4,
        },
        {
          src: '/img/card-5.png', key: 5,
        },
      ];

    return (
        <div style={{width:"100%"}}>
            <div className='componentBox Hover'>
                <span className='L-text'>
                    프렌즈 체크카드,<br/>
                    내가 고르는 선택의 즐거움
                </span>
                <span className='S-text'>
                    프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과 기능을 선택할 수 있습니다.
                </span><br/>
                <Button color='light' size='md'>프렌즈 체크카드&gt;</Button>&nbsp;
                <UncontrolledCarousel items={items}/>
            </div>
        </div>
    );
};

export default Section7;