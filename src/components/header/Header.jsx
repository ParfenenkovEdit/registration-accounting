import { Button } from "@material-ui/core"
import { connect } from 'react-redux'
import { CHANGE_SIDEBAR_VISIBILITY } from '../../redux/actionTypes/sidebarActionTypes'
import './header.css'

const Header = ({ isOpen, dispatch }) => {

    const handleClick = () => {
        dispatch({ type: CHANGE_SIDEBAR_VISIBILITY });
    }

    return (
        <header className='header'>
                <Button  variant="contained" color="primary"
                onClick={handleClick} >
                    { isOpen? 'закрыть' : 'поиск' }
                </Button>
        </header>
    )
}

const mapStateToProps = (state) => ({
    isOpen: state.sidebar.isOpen
});

export default connect(mapStateToProps)(Header);