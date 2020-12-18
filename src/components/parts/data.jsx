// クライアントサイドでは実行されないため'isomorphic-unfetch'は必要ない
import { connect } from 'react-redux'
import { changeFoo } from '../../store/actionCreaters/action'

function Parts(props) {
  return (
    <div>
      <span>{props.foo}</span>
      <button onClick={props.changeFoo}>change foo</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    foo: state.reducer.foo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFoo: () => dispatch(changeFoo())
}};

export default connect(mapStateToProps,mapDispatchToProps)(Parts);