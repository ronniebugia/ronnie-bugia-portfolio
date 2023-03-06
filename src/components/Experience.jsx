import React from 'react';
import getImageByKey from '../images/images';

const Experience = (props) => {

    return (
        <div className='row bg-light experience-card'>
            <div className='col-md-6 experience-image-col'>
                <img 
                    className='experience-img'
                    src={getImageByKey(props.title)}
                    alt={props.title}
                />
            </div>
            <div className='col-md-6'>
                <p><b>{props.role}</b></p>
                <ul>
                    {props.description.map(bulletPoint => (
                        <li>{bulletPoint}</li>
                    ))}
                </ul>
                <p><b>{props.location}</b></p>
                <p><b>{props.startDate} - {props.endDate}</b></p>
            </div>
        </div>
    )

}

export default Experience;