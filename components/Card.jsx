const Card = ({ children, color }) => {
  return (
    <div className="row">
      <div className="col-xl-3 col-md-6">
        <div className={`card bg-${color} text-white mb-4`}>
          <div className="card-body">{children}</div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <a className="small text-white stretched-link" href="#">
              View Details
            </a>
            <div className="small text-white">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
