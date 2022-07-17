import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DeleteIcon from '@mui/icons-material/Delete';
import { FiEdit } from "react-icons/fi"
import { useNavigate } from 'react-router-dom';




export default function SongCard(props: any) {

    const theme = useTheme();
    const nav = useNavigate();


    return (
        <div >
            <Card sx={{ display: 'flex', width: 300, paddingRight: 10, margin: 2, marginLeft: 50 }}>
                <IconButton aria-label="delete" onClick={() => { props.del(props.song.id) }}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => { nav(`/songs/editSong/${props.song.id}`) }} >
                    <FiEdit />
                </IconButton>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {props.song.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {props.song.artist}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous" onClick={() => { alert("need to pay") }}>
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause" onClick={() => { alert("need to pay") }}>
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next" onClick={() => { alert("need to pay") }}>
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box>
                <label>Price:</label>
                <Box>
                    {props.song.price}
                </Box>

            </Card>
        </div>
    );
}