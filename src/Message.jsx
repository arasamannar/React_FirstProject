function Message({value})
{
   return <>
   <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{value.planName}</h5>
            <h6 className="card-price text-center">${value.price}<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{value.userStrength}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{value.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{value.upup}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{value.community}</li>
              {
                value.specialuprp.map((input)=>{
                  return <li className= { input.enable === true ?"text-muted": ""}>
                            <span className="fa-li"><i className={input.enable === true ? "fas fa-times": "fas fa-check"}></i></span>
                            {input.name}
                          </li>
                })
              }
            </ul>
            <div className="d-grid">
              <a href="" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
</>
} 
export default Message;