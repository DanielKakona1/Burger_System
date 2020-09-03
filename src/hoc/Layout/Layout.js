import React,{Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../Aux/Aux';
import  './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
state ={
    showSideDrawer:false
}
SideDrawerClosedHandler=()=>{
this.setState({showSideDrawer:false});
}

SideDrawerToggleHandler=()=>{
    this.setState((prevSate)=>{
        return {showSideDrawer: !this.state.showSideDrawer};
    });
}

    render(){
        return (
            <Aux>
            <Toolbar 
            isAuth={this.props.isAuthenticated}
            drawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer 
            isAuth={this.props.isAuthenticated}
            open={this.state.showSideDrawer} closed ={this.SideDrawerClosedHandler}/>
            <main className="Content"> 
                {this.props.children}
            </main>
            </Aux>
        );
    }



}

const mapStateToProps = state =>{
    return{
       isAuthenticated: state.auth.token !== null 
    }
}

export default connect(mapStateToProps)(Layout);