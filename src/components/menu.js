import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

const menu = [
	{
		path : '/',
		label : 'Home',
		exact : true
	},
	{
		path : '/products',
		label : 'Products',
		exact : false
	},
	{
		path : '/about',
		label : 'About',
		exact : false
	}
]

const MenuLink = ({index, path,exact,label}) => {
	return <Route 
						path={path}
						exact={exact}
						children={({ match }) => (
				      <li className={match ? "active" : ""}>
				        <Link to={path}>{label}</Link>
				      </li>
				    )}
					/>
}

class Menu extends Component {

  render() {
    return (
      <div className="navbar">
      	<div className="container-fluid">
      		<a className="navbar-brand" href="#">API CALL</a>
      		<ul className="nav navbar-nav">
      			{this.showMenu(menu)}
      		</ul>
      	</div>
      </div>
    );
  }

  showMenu = (item) => {
		if (item.length > 0) {
			item = item.map((value,index) => {
				return <MenuLink 
									key={index}
									path={value.path}
									label={value.label}
									exact={value.exact}
								/>
			})
		}
		return item;
  }

}

export default Menu;
