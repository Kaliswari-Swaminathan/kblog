export  const Banner=()=>{
return (
    <div id='banner'>
       <div className="container-fluid px-4 py-5 my-5 text-center">
        <div className="lc-block mb-4">           
                <h2 className="display-2 fw-bold">Level up your <span className="text-primary">Skills!</span></h2>
            
        </div>
        <div className="lc-block col-lg-6 mx-auto mb-5">            
                <p className="lead">Latest post on Java technology Available here.</p>            
        </div> 
        </div>       
        <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center" >
            <img className="img-fluid mybanner" src={'https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/10/undraw_going_up_ttm5.svg'}
              />
        </div>
    
    </div>
);
}