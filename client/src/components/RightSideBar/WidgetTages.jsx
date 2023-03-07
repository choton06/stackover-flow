import React from 'react'

const WidgetTages = () => {
    const tags =['c','css', 'java','expres', 'firebase','javascript','python','react','angular','laravel','php' ,'html']
  return (
    <div className='widget-tags'>
        <h3>Watched tags</h3>
        <div className="widget-tags-div">
            {
                tags.map((tag) =>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTages