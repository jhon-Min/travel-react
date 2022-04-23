const Card = (props) => {
  return (
    <div className="mb-5">
      <div className="d-flex flex-column flex-md-row pb-3">
        <img
          src={`../image/${props.img}`}
          className="travel-img mb-4 mb-md-0"
        />

        <div className="ms-0 ms-md-5">
          <h5 className="fw-light">
            <i class="fa-solid fa-location-dot text-theme me-2"></i>
            {props.location}
          </h5>
          <p className="h1 mb-1">{props.title}</p>
          <p className="small text-black-50 mb-4">
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Card;
