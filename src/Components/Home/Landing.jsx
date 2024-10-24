import React, { useEffect } from 'react';
import './Landing.css';

export default function Landing() {
    let images = [
        '/images/Landing/img1.jpg',
        '/images/Landing/img2.jpg',
        '/images/Landing/img3.jpg'
    ];

    function getActiveSpinnerIndex(spinners) {
        for (let index = 0; index < spinners.length; index++) {
            if (spinners[index].classList.contains('active')) {
                return index;
            }
        }
        return 0; 
    }

    function updateSpinnerState(spinners, currentIndex, nextIndex) {
        spinners[currentIndex].classList.remove('active');
        spinners[currentIndex].classList.add('bg-white');
        spinners[nextIndex].classList.add('active');
        spinners[nextIndex].classList.remove('bg-white');
    }

    function updateBackground(imgBack, images, index) {
        imgBack.style.backgroundImage = `url(${images[index]})`;
    }

    function changeBackGround() {
        let spinners = document.querySelectorAll('li');
        let imgBack = document.querySelector('.main');

        let currentIndex = getActiveSpinnerIndex(spinners);

        let nextIndex = (currentIndex !== 2) ? currentIndex + 1 : 0;

        updateBackground(imgBack, images, nextIndex);

        updateSpinnerState(spinners, currentIndex, nextIndex);
    }

    useEffect(() => {
        const interval = setInterval(changeBackGround, 2000);
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className='main' style={{ backgroundImage: `url(${images[0]})`, backgroundSize: 'cover' }}>
            <div className='container d-flex text-white h-100 flex-nowrap justify-content-center align-items-center'>
                <div className='content w-50 p-5 position-relative'>
                    <div className='quotes position-relative'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis odio quos temporibus fuga cumque perspiciatis libero? Saepe delectus doloribus a.
                        Laborum cupiditate alias molestiae recusandae dolores reiciendis. Ab, sapiente aspernatur!
                        <div className='author position-absolute end-0'>BRAZILY</div>
                    </div>
                </div>
                <ul className="d-flex justify-content-between position-absolute bottom-0 start-50 translate-middle-x p-0">
                    <li className="bg-white rounded-circle p-2 m-2" style={{ width: '10px', height: '10px' }}></li>
                    <li className="rounded-circle p-2 m-2 active" style={{ width: '10px', height: '10px' }}></li>
                    <li className="bg-white rounded-circle p-2 m-2" style={{ width: '10px', height: '10px' }}></li>
                </ul>
            </div>
        </div>
    );
}
