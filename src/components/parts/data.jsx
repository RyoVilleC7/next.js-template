// クライアントサイドでは実行されないため'isomorphic-unfetch'は必要ない
import { connect } from 'react-redux'
import { changeFoo } from '../../store/actionCreaters/action'

function Parts(props) {
  return (
    <div>
      <button>change foo</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
}};

export default connect(mapStateToProps,mapDispatchToProps)(Parts);