import React from 'react';

class Header extends React.Component {
  handleClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };

  render() {
    return (
      <div>
        <header>
          <img className="logo" src="/img/logo.png" alt="logo" />
          <p className="text_style_logo" style={{ marginLeft: '-300px' }}>Sisyphus</p>
          <div className="container1" style={{ marginLeft: '1800px' }}>
            <p className="about">About</p>
            <p className="services">Services</p>
            <p className="product">Product</p>
            <div className="button" onClick={this.handleClick}>
              <p className="txt_button">Demo</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
