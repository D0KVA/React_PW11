import React from 'react';

class Main extends React.Component {
  handleClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=ocRN6Hz3LrI';
  };

  render() {
    return (
      <div className="B">
        <div className="box1" style={{ marginTop: '-800px' }}>
        <pre className="large_text" style={{ whiteSpace: 'pre-line' }}>
        Manage
          your personal
          and all team task
        </pre>
          <pre className="subtext" style={{ whiteSpace: 'pre-line' }}>
            Monitoring your personal and all team task
            more easily with us.
          </pre>
        </div>
        <div className="text_field" style={{ marginLeft: '-1700px', marginTop: '15px'}}>
          <div className="email">Email</div>
        </div>
        <div className="frame">
          <img className="pngemail" src="img/email.png" alt="email" style={{ marginLeft: '-1815px'}}/>
        </div>
        <div className="C">
          <div>
            <img className="girl" src="img/girl.png" alt="girl" />
          </div>
          <div className="sunny1"></div>
          <div className="sunny2"></div>
        </div>
        <div className="button1" style={{ marginLeft: '-1300px', marginTop: '350px' }}  onClick={this.handleClick}>
          <p className="txt_button1">Send</p>
        </div>
      </div>
    );
  }
}

export default Main;
