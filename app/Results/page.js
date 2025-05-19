import React from 'react'


const page = () => {
  return (
   <div>

    <div id="results">
      
     <div className="heading">Latest Examination Results</div>

     <div id="updateBox">
      <h1 className="updateHeading1 text-2xl">Result Updates</h1>
      <h1 className="updateHeading2">Results are typically published within 4-6 weeks after the completion of examinations. Revaluation applications must be submitted within 15 days of result declaration.</h1>
     </div>

     <div id="resultBoxes">

      <div className="first">
        {/* Box---1 */}
         <div className="resultBox border-l-[4px] border-purple-400">
          
          <div className="resultHeading">BSc 6th Semester Results May 2025</div>
          <div className="date">May 10, 2025</div>
          <div className="resultInfo">Results for BSc 6th semester final examinations held in April 2025</div>
          
         </div>

        {/* Box---2 */}
         <div className="resultBox border-l-[4px] border-orange-400">

          <div className="resultHeading">BBA 5th Semester Results April 2025</div>
          <div className="date">Apr 28, 2025</div>
          <div className="resultInfo">Results for BBA 5th semester examinations including practical marks</div>
          
         </div>

         <div className="resultBox border-l-[4px] border-purple-400">
        {/* Box---3 */}

          <div className="resultHeading">BSc 4th Semester Results April 2025</div>
          <div className="date">Apr 20, 2025</div>
          <div className="resultInfo">Results for BSc 4th semester examinations with grade cards</div>
          
         </div>

         <div className="resultBox border-l-[4px] border-orange-400">
        {/* Box---4 */}

          <div className="resultHeading">BBA 1st Semester Results April 2025</div>
          <div className="date">Apr 15, 2025</div>
          <div className="resultInfo">Results for BBA 1st semester examinations for all specializations</div>
          
         </div>


         

      </div>
      
      <div className="second">
        <div className="resultBox border-l-[4px] border-blue-400">
        {/* Box---5 */}

          <div className="resultHeading">BCom 4th Semester Results May 2025</div>
          <div className="date">May 8, 2025</div>
          <div className="resultInfo">Results for BCom 4th semester examinations with revaluation details</div>
          
         </div>

         <div className="resultBox border-l-[4px] border-purple-700">
        {/* Box---6 */}

          <div className="resultHeading">BCA 3rd Semester Results April 2025</div>
          <div className="date">Apr 25, 2025</div>
          <div className="resultInfo">Results for BCA 3rd semester regular and supplementary examinations</div>
          
         </div>

         <div className="resultBox border-l-[4px] border-blue-400">
        {/* Box---7 */}

          <div className="resultHeading">BCom 2nd Semester Results April 2025</div>
          <div className="date">Apr 18, 2025</div>
          <div className="resultInfo">Results for BCom 2nd semester regular examinations</div>
          
         </div>

         <div className="resultBox border-l-[4px] border-purple-400">
        {/* Box---8 */}


          <div className="resultHeading">BCA 5th Semester Results March 2025</div>
          <div className="date">Mar 30, 2025</div>
          <div className="resultInfo">Results for BCA 5th semester examinations with project evaluation marks BCA</div>
          
         </div>

         

      </div>

      
     </div>


    </div>
    
    </div>
  )
}

export default page
