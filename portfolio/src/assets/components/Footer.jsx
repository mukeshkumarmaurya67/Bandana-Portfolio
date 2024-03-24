import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>

                <div class="container">
                    <div className="row mt-5">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                        <img src={require(`../images/portfolio_logo.png`)} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <h3 className="text-white text-center">mail@example.com</h3>
                        </div>
                    </div>

                </div>

                <div class="text-white text-center mt-5">
                Copyright © 2024 Personal Portfolio
                </div>

            </footer>
        </>
    )
}

export default Footer