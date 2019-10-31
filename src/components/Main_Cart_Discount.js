import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';


class MainCartDiscount extends Component {
    constructor(props){
        super(props);
        this.state = {
            discountCode: ''
        }
    }
    async onChange(event){
        let target = event.target;
        let name = target.name;
        let value = target.value;
        await this.setState({
            [name]: value
        }) 
    }
    render(){
        let{discount, discountOpen} = this.props;
    return (
        <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Phiếu giảm giá</div>
                <div className="p-4">
                    <p className="font-italic mb-4">Nếu bạn có phiếu giảm giá xin hãy điền vào đây</p>
                <div className="input-group mb-4 border rounded-pill p-2">
                    <input type="text" placeholder="Mã Giảm Giá" aria-describedby="button-addon3" className="form-control border-0" onChange={(event)=>this.onChange(event)} name="discountCode" value={this.state.discountCode}/>
                    <div className="input-group-append border-0">
                        <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill" onClick={()=>discountOpen(this.state)}><i className="fa fa-gift mr-2"></i>Apply</button>
                    </div>
                </div>
                {discount && <div className="alert alert-success">Thêm thành công</div>}
            </div>
        </div>
    );
    }
}
function mapStateToProps(state){
    return{
        discount: state.discount,
    }
}
function mapDispatchToProps(dispatch, props){
    return{
        discountOpen(discountCode){
            dispatch(actions.discountOpen(discountCode));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCartDiscount);
