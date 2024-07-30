export const About = () => {
    return (
        <>
        <div className='d-none d-lg-block' id='about'>
            <div className='row g-0 mt-5'>
                <div className='col-sm-6 col-md-6'>
                    <div className='col-image-left'></div>
                </div>
                <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                    <div className='ml-2'>
                        <h1>About us</h1>
                        <p className='lead'>
                            In this blog, you will find interesting technology topics and contents.
                        </p>
                        <a className='btn main-color btn-lg text-white' href='#blogs'>Getting Started</a>
                    </div>
                </div>
            </div>
            </div>
            {/*Mobile*/}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                               In this blog, you will find interesting technology topics and contents.
                            </p>
                            <a className='btn main-color btn-lg text-white' href='#blogs'>Getting Started</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );

}