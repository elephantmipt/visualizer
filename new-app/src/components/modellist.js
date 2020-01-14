import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { removeModel } from '../store/actions/modelactions';
import { connect } from 'react-redux';
class ModelList extends React.Component{

    onRemoveClick(e, model) {
        e.preventDefault();
        this.props.removeModel(model)
        //this.props.history.push('/user')
    }

    render () {
        const { list } = this.props;
        return (
            <ul className='list-group'>
                {
                    list && list.map(model => (
                        <Link to={'/model/' + model.id}>
                        <li className="list-group-item" style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                               <strong>{model.name}</strong>
                               <div className='grey-text'>
                               {moment(model.createdAt.toDate()).fromNow()}
                               </div>
                            </div>
                            <div>
                                
                                <button type="button"
                                        className="btn btn-warning"
                                        onClick={(e) => this.onRemoveClick(e, model)}
                                        href='/user'>
                                    Remove
                                </button>
                                
                            </div>
                        </li>
                        </Link>
                    ))
                }
            </ul>
        )
    }
    
}

const mapStateToProps = (state) => {
    
    return {
      
      listErr: state.listErr
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        removeModel: (model) => dispatch(removeModel(model))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelList);
