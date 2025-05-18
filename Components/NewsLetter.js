import React from 'react'

const NewsLetter = () => {
  return (
    <div id='Hero-6' className='bg-grey-900'>  

    <div id='Newsletter'>

        <div className="info1">
            <h1 className='headings'>Degree Dost</h1>
            A resource hub for degree students , affiliated with Osmania University.
        </div>

        <div className="info2">
            <h1 className='headings'>Resources</h1>
            <ul>
                <li><a href="">Notes</a></li>
                <li><a href="">Question Papers</a></li>
                <li><a href="">Results</a></li>
            </ul>            
        </div>

        <div className='lastsection'>
            <div className="info3">
            <h1 className='headings'>Quick Links</h1>
            <ul>
                <li><a href="">Notifications</a></li>
                <li><a href="">Notice Board</a></li>
                <li><a href="">Submit Content</a></li>
            </ul>             
            </div>

            <div className="info4">
                <h1 className='headings'>Connect</h1>
                <h1>Have questions or feedback?</h1>
                <a className='text-blue-700' href="">contact@degreedost.com</a>


            </div>
            
        </div>        



    </div>
        <div className="line"></div>

    <footer >© 2025 Degree Dost. All rights reserved.</footer>

          

      
    </div>
  )
}

export default NewsLetter
