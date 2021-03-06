import React from 'react';

class TopStories extends React.Component {
  render() {
    // creates a variable that stores each headline
    let storyList = this.props.topStories.map((story, i) => {
      return (
        <li className="list-group-item" key={i} onClick={ () => this.props.setStories(i) }>
          {story.topArticleTitle}
        </li>
      );
    });
    // renders each headline
    return (
      <div>
        <ul className="list-group">
          {storyList}
        </ul>
      </div>
    );
  }
}

export default TopStories;
