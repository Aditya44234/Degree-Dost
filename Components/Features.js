import React from 'react'

const page = () => {
  return (
    <div> 

      <div id="Hero-2">
         {/*Feature Heading */}
      <h1>Features</h1> 

      {/* Feature card */}
      <div className="featureCards">
        {/* Card-1 */}
        <div className="card">
          <div className="logo" ><img src="./images/notes.png" alt="" /></div>
          <div className="feature">Notes</div>
          <div className="featureInfo">Access course notes for all semesters and departments</div>
        </div>

        {/* Card-2 */}
        <div className="card">
          <div className="logo"><img src="./images/papers.png" alt="" /></div>
          <div className="feature">Questions</div>
          <div className="featureInfo">Find previous year question papers for your exams</div>
        </div>


        {/* Card-2 */}
        <div className="card">
          <div className="logo"><img src="./images/result.png" alt="" /></div>
          <div className="feature">Results</div>
          <div className="featureInfo">Check the latest results from Osmania University</div>
        </div>


        {/* Card-4 */}
        <div className="card">
          <div className="logo"><img src="./images/notification.png" alt="" /></div>
          <div className="feature">Notifications</div>
          <div className="featureInfo">Stay updated with the latest university announcements</div>
        </div>


        {/* Card-5 */}
        <div className="card">
          <div className="logo"><img src="./images/options.png" alt="" /></div>
          <div className="feature">Notice Board</div>
          <div className="featureInfo">Important notices and announcements for students</div>
        </div>


        {/* Card-6 */}
        <div className="card">
          <div className="logo"><img src="./images/upload.png" alt="" /></div>
          <div className="feature">Submit Content</div>
          <div className="featureInfo">Share your notes and question papers with others</div>
        </div>


      </div>






      </div>

     

    </div>
  )
}

export default page
