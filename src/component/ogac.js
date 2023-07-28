import "./ogac.css";
const OgacSIteData = (props) => {
  
  //create modal
  //then wite eveything in the modal
  return (
    <div className="modal_container">
      <div className="cancel" onClick={() => props.clicked()}>
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            fill="none"
            d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
          ></path>
        </svg>
      </div>
      <div className="project_description">
        <h2 className="project_title">Onigege Ara School Project</h2>
        <div className="project_overview">
          <span className="overview">overview:</span>
          <p className="description">
            The need of the school was to create a platform to manage both the
            student and the staff, by creating an online based student dashboard
            and result generation platform to increase the efficiency of the
            school by 100%
          </p>
        </div>
      </div>
      <div className="project_role">
        <span className="overview">my role:</span>
        <ul className="role_container">
          <li className="role_list">
            Analysed the school need, which is creating A school management Web
            application to increase the efficiency of the school by 50%
          </li>
          <li className="role_list">
            Collaborated with the UI/UX designer to create a user friendly
            interface for the application using Figma and Adobe XD
          </li>
          <li className="role_list">
            Wrote supported code using Reactjs and Nextjs on the frontend and
            Nodejs express on the backend
          </li>
          <li className="role_list">
            Implemented both unit and integrated test for the application to
            prevent application breakageImplemented continuous integraton and
            delivery by creating delivery pipelines using Github and Travis cli
          </li>
          <li className="role_list">
            Deployed the application frontend on vercel then the backend on
            Render which led to 50% increase in uptime
          </li>
        </ul>
      </div>
      <div className="project_skills">
        <span className="overview">skill used:</span>
        <ul className="skill_list">
          <li>React JS,</li>
          <li>Node JS,</li>
          <li>Travis CI,</li>
          <li>Next JS,</li>
          <li>Mongo Db,</li>
          <li>Material UI,</li>
          <li>Vanilla CSS,</li>
          <li>Express,</li>
          <li>Heroku,</li>
          <li>Github,</li>
          <li>HTML, </li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  );
};
export default OgacSIteData;
