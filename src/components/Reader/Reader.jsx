import { Component } from 'react';
import css from './Reader.module.css';

import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };
  //   onPrev = () => {
  //     this.setState(state => ({ index: state.index - 1 }));
  //   };
  //   onNext = () => {
  //     this.setState(state => ({ index: state.index + 1 }));
  //   };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }

    // const savedIndex = Number(localStorage.getItem(LS_KEY));
    // this.setState({ index: savedIndex });

    // const index = Number(localStorage.getItem(LS_KEY));
    // this.setState({ index });

    // this.setState({ Number(localStorage.getItem(LS_KEY)) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];
    return (
      <div>
        <Controls
          currentItem={index + 1}
          totalItems={totalItems}
          onChange={this.changeIndex}
        />
        {/* <section>
          <button
            type="button"
            disabled={index === 0}
            onClick={() => this.changeIndex(-1)}
          >
            Назад
          </button>
          <button
            type="button"
            disabled={index + 1 === totalItems}
            onClick={() => this.changeIndex(1)}
          >
            Вперед
          </button>
        </section> */}

        <Progress index={index + 1} totalItems={totalItems} />
        {/* <p>
          {index + 1}/{totalItems}
        </p> */}

        <Publication currentItem={currentItem} />
        {/* <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article> */}
      </div>
    );
  }
}
