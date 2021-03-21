import './sidebar.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux'
import { CHANGE_SIDEBAR_VISIBILITY } from '../../redux/actionTypes/sidebarActionTypes'

const useStyles = makeStyles({
    root: {
        width: 30,
        height: 30,
        padding: 0,
        minWidth: 0,
        position: 'absolute',
        right: '5px',
        top: '50%',
        transform: 'translateY(-50%)'
    },

    button: {
        backgroundColor: '#00a2e8',
        color: 'white',
        marginTop: '20px',
    }
})

const Sidebar = ({ isOpen, dispatch }) => {

    const classes = useStyles();

    const handleClick = () => {
        dispatch({ type: CHANGE_SIDEBAR_VISIBILITY });
    }

    return (
        <div className={ isOpen ? 'sidebar sidebar-open' : 'sidebar' }>
            <header className='sidebar-header'>
                <h3>Регистрационный<br/>учет</h3>
                <Button classes={{ root: classes.root }} onClick={handleClick}>
                    <CloseIcon />
                </Button>
            </header>
            <form noValidate autoComplete='off' className='sidebar-form'>
                <label htmlFor='surname'>Фамилия</label>
                <input type='text' id='surname' placeholder='ВВЕДИТЕ ФАМИЛИЮ'/>
                <label htmlFor='name'>Имя</label>
                <input type='text' id='name' placeholder='ВВЕДИТЕ ИМЯ' />
                <label htmlFor='patronymic'>Отчество</label>
                <input type='text' id='patronymic' placeholder='ВВЕДИТЕ ОТЧЕСТВО'/>
                <label htmlFor='identif'>Идентификационный номер</label>
                <input type='text' id='identif' placeholder='ВВЕДИТЕ НОМЕР' />
                <div className='row-inputs'>
                    <div className='docs-series-input'>
                        <label htmlFor='doc_series'>Серия</label>
                        <input type='text' id='doc_series'/>
                    </div>
                    <div className='docs-num-input'>
                        <label htmlFor='doc_num'>№ паспорта</label>
                        <input type='text' id='doc_num'/>
                    </div>
                </div>
                <Button variant="contained" classes={{ root: classes.button }}>Поиск в локальной БД</Button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isOpen: state.sidebar.isOpen
})

export default connect(mapStateToProps)(Sidebar);