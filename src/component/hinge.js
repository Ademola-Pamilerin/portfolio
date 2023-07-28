import "./ogac.css";
const Hinge = (props) => {
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
        <h2 className="project_title">Hinge Consulting Firm</h2>
        <div className="project_overview">
          <span className="overview">overview:</span>
          <p className="description">
            THe need of the firm is to get a platform which can redirect the
            response from their Frontend page, rearranges it and send it as a
            mail to the HR team (A mail Redirector)
          </p>
        </div>
      </div>
      <div className="project_role">
        <span className="overview">my role:</span>
        <ul className="role_container">
          <li className="role_list">
            Analysed and Identified the need of the company which is creating a
            mail redirect
          </li>
          <li className="role_list">
            Collaborated the company's frontend teams to gather the requirements
            and develop precise Software
          </li>
          <li className="role_list">
            Wrote supported code for the mail Redirector using Nodejs as Backend
          </li>
          <li className="role_list">
            Used Sendgrid(Twillo) mail transfer agent (MTA) to redirect the mail
            increasint the overall application speed by 30%
          </li>
          <li className="role_list">
            Implemented both unit and integrated test for the application to
            prevent application breakage.
          </li>
          <li className="role_list">
            Deployed the application to Heroku server
          </li>
        </ul>
      </div>
      <div className="project_skills">
        <span className="overview">skill used:</span>
        <ul className="skill_list">
          <li>Sendgrid,</li>
          <li>Node JS,</li>
          <li>Mongo Db,</li>
          <li>Express,</li>
          <li>Heroku,</li>
          <li>Github,</li>
        </ul>
      </div>
    </div>
  );
};
export default Hinge;
