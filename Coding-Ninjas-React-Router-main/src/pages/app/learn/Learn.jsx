import React,{useState, useEffect} from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { useParams, useNavigate, Outlet, Link } from "react-router-dom";

function Learn() {
    const navigation = useNavigate();
    const params = useParams();
    const course = coursesData.find((c)=>c.id===params.courseId)
 //  console.log("params in learn page: ", params);


  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <h2 className={style.back} onClick={()=>navigation(-1)} >{"<<"}</h2>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{/*Task4: List of Chapters must be rendered here  */}
            {course.chapters.map((chap, id)=>(
                <div className={style.chapterId} key={id}>
                  <Link to={`chapter/${chap.chapter}`}> {chap.title}</Link>
                </div>
            ))}
          </ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}

        <Outlet context={course} />
      </div>
    </div>
</div>
  );
}

export default Learn;
