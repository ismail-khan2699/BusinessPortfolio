import React from 'react';

interface CardProps {
    imgSrc: string;
    heading: string;
    paragraph: string;
    date: string;
    readMoreLink: string;
}

const InsightCard: React.FC<CardProps> = ({ imgSrc, heading, paragraph, date, readMoreLink }) => {
    return (
        <div style={{ width: '250px' }} className='Cradso'>
            <img src={imgSrc} alt="" className='bottom-0' />
            <h3 className='p-2 text-black font-semibold'>{heading}</h3>
            <h3 className='p-2 text-xs text-gray-600'>{paragraph}</h3>
            <div className="p-2 mb-2 flex w-full justify-between mt-3">
                <h2 className='text-xs'>{date}</h2>
                <a href={readMoreLink} className=' text-black gradiantText text-xs'>Read More</a>
            </div>
        </div>
    );
}

export default InsightCard;
