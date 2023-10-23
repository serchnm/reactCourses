import React from 'react';

function ProfileCard(props) {
  // const title = props.title;
  // const handle = props.handle;
  const { title, handle, img } = props;
  
  return (
    <div>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-1by1'>
            <img src={img} alt='alt img'/>
          </figure>
        </div>
        <div className='card-content'>
          <div className='media-content'>
            <div className='title is-4'>Title: {title}</div>
            <div className='subtitle is-6'>handle is {handle}</div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default ProfileCard;
