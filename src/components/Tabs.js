import React, { useState } from 'react';

import {
    Box,
    Button,
    makeStyles,
    IconButton
} from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { red } from '@material-ui/core/colors';
import { Delete as DeleteIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    tab: {
        padding: 5,
        marginRight: '10px',

        '&:last-child': {
            marginRight: '5px'
        }
    },
}));

const Tabs = ({ tabs = [], onRemoveTab, changeTab }) => {
    const classes = useStyles();
    return (
        <Box display="flex">
            {tabs.map(tab => (
                <Box display="flex" className={classes.tab}>
                    <ToggleButton
                        selected={tab.selected}
                        onClick={e => changeTab(tab.id)}
                    >
                        {tab.title}
                    </ToggleButton>
                    {tabs.length !== 1 &&
                        <IconButton
                            onClick={e => onRemoveTab(tab.id)}
                        >
                            <DeleteIcon fontSize="small" style={{ color: red[500] }} />
                        </IconButton>
                    }
                </Box>
            ))}
        </Box>
    )
};

export default Tabs;