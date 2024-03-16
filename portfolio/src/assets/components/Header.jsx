import React from 'react';
//import img_logo from '../../assets/images/portfolio_logo.png'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={require(`../../assets/images/portfolio_logo.png`)} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" >Contact</a>
        </li>
      </ul>
    <button className='btn btn-danger hire_me'>Hire Me</button>

    </div>
  </div>
</nav>
    </>
  )
}

export default Header