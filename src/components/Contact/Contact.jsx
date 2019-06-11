import React from 'react';
import { withStyles } from '@material-ui/styles'
import colaborador1 from '../../assets/colaborador01.png'

const styles= {
    contactContainer:{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& p':{
            textAlign: 'center'
        }
    },
    imageContainer: {
        backgroundSize: 'cover',
        // backgroundImage: `url(${colaborador1})`,
        borderRadius: '50%',
        border: '2px solid black',
        height: '70px',
        width: '70px'
    }
}

const Contact = (props) => {
    const { classes, name, role, children } = props
    const work = role.toUpperCase()
    return (
        <div className={classes.contactContainer}>
            <div>
                {children}
            </div>
            <p>
                <strong>
                    {name}
                </strong>
            </p>
            <p>
                {work}
            </p>
        </div>
    );
};

export default withStyles(styles)(Contact);