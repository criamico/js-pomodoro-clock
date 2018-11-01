import React from 'react';

class Attribution extends React.Component {
  constructor(props) {
    Attribution.displayName = 'Attribution';
    super(props);
  }

  render() {
    return (
      <p className="author">
        <strong>
          Created by <a href="https://criamico.github.io/">criamico</a> - 2018
        </strong>
      </p>
    );
  }
}

export default Attribution;
