import logo from '../image/logo.png';
import '../App.css';


export default function Header(){
	return(
		<div className="header">
          	<div className='logo'>
            	<img src={logo} alt="logo" height="32px" width="32px"/>
            	<h1>Chuck Norris</h1>
         	</div>
        </div>

	)
}
