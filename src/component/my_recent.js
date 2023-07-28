import "./ogac.css";
const Recent = (props) => {
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
        <h2 className="project_title">Open Source Project</h2>
        <div className="project_overview">
          <span className="overview">overview:</span>
          <p className="description">
            This project is developed to show my knowledeg on deployment and
            creation of delivery pipelines
          </p>
        </div>
      </div>
      <div className="project_role">
        <span className="overview">my role:</span>
        <ul className="role_container">
          <li className="role_list">
            Wrote supported code using Reactjs and Nextjs on the frontend and
            Nodejs express on the backend
          </li>
          <li className="role_list">
            Implemented the techniques and architecture of DevOps by creating
            delivery pipelines using Github
          </li>
          <li className="role_list">
            Enables automatic build and deploy using Travis CI
          </li>
          <li className="role_list">
            IMplemeted load balancing and routes redirect using Nginx
          </li>
          <li className="role_list">
            Used Redis as in memory database and Mongodb as main database
          </li>

          <li className="role_list">
            Created a production build on AWS Elastic Container Services and
            Elastic BeanStalk
          </li>

          <li className="role_list">
            Created a production build database using AWS ElasticCache for Redis
            and Mongodb Atlas on AWS
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
          <li>Tailwind,</li>
          <li>Vanilla CSS,</li>
          <li>Express,</li>
          <li>AWS ECS,</li>
          <li>Redis,</li>
          <li>HTML, </li>
          <li>CSS</li>
          <li>Nginx</li>
        </ul>
      </div>
    </div>
  );
};
export default Recent;
