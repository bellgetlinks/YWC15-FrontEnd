import React from 'react';
import withRedux from 'next-redux-wrapper';

import createStore from './createStore';

export default (mapStateToProps, mapDispatchToProps) => (Comp) => {
  const PagesLayout = props => (
    <div>
      <h1>This Heading is come from connect.js</h1>
      <Comp {...props} />
    </div>
  );

  // PagesLayout.getInitialProps = async (data) => {
  //   const { store } = data;
  //   console.log(store);
  // };

  return withRedux(
    createStore,
    mapStateToProps,
    mapDispatchToProps
  )(PagesLayout);
};
