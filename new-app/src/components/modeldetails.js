import React from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Plot from 'react-plotly.js';
import { Spinner, Jumbotron, Container } from 'react-bootstrap';
import moment from 'moment';



const ModelDetails = (props) => {
  
  const { model, auth } = props;
  if (!auth.uid) {
    return (
      <Redirect to="/" />
    )
  }
  if (model) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <Jumbotron>
            <Container>
              <h1>{model.name}</h1>
                <p>
                  {model.description}
                </p>
              </Container>
          </Jumbotron>
          <div>
            <Plot
              data={[
                {
                  x: model.x,
                  y: model.y,
                  type: 'scatter',
                  mode: 'lines'
                }
              ]}
              layout={
                {
                  title: 'Test accuracy',
                  xaxis: {
                    title: 'epoch',
                  },
                  yaxis: {
                    title: 'accuracy'
                  }
                }
                

              }
            />
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>last changes</div>
            <div>{moment(model.createdAt.toDate()).fromNow()}</div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div display='flex' justifycontent='center'>
      <div display='flex' justifycontent='center'>
        <Spinner animation="grow" variant="dark" />
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  
  const models = state.store.data.models;
  const model = models ? models[id] : null;
  return {
    model: model,
    auth: state.firebase.auth
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { 'collection': 'models' }
  ])
)(ModelDetails);
